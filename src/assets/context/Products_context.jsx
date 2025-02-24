import React, { useContext, useReducer, createContext, useEffect } from "react";
//import reducer from "../../reducers/products_reducer";
import axios from "axios";

// Create a context
export const DataContext = createContext();

export const useProductDataContext = () => useContext(DataContext);


// Define initial state
const initialState = {
  loading: true,
  data: null,
  error: null,
  filteredData: null, 
  selectedCategory: "",
  activeButton: ""
};

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        filteredData: [...action.payload], 
        data: action.payload,
        error: null,
        
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        filteredData: null, 
        data: null,
        error: action.payload,
      };
    case "FILTER_PRODUCTS" :
          return{
            ... state, 
            filteredData: state.filteredData.filter((product) =>
              product.title.toLowerCase().includes(action.payload.toLowerCase())
            )
          }
    case "UPDATE_CATEGORY":
          return {...state , selectedCategory : action.payload, activeButton: action.valueActive ,
            filteredData: [...state.data].filter((product) => {
              const matchesCategorie = action.valueActive == 0 ? product : product.category.toLowerCase().startsWith(action.payload)
      
              return matchesCategorie;
            }) 
          }
    default:
      return state;
  }
};

export const DataProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://my-store-api-blush.vercel.app/api/products");
        console.log("API Response:", response.data); // Log the API response
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      } catch (error) {
        console.error("API Error:", error); // Log any errors
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );

}
