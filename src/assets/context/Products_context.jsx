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
  activeButton: "",
  sort: "",
};

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        filteredData: [...action.payload].sort((a, b) => a.price - b.price),
        sort: "price-lowest",
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
    case "FILTER_PRODUCTS":
      if (action.payload === "") {
        return {
          ...state,
          filteredData: [...state.data]
            .filter((product) =>
              product.category.toLowerCase().startsWith(state.selectedCategory)
            )
            .sort((a, b) =>
              state.sort === "price-lowest"
                ? a.price - b.price
                : b.price - a.price
            ),
        };
      } else {
        return {
          ...state,
          filteredData: state.filteredData.filter((product) =>
            product.title.toLowerCase().includes(action.payload.toLowerCase())
          ),
        };
      }

    case "UPDATE_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
        activeButton: action.valueActive,
        filteredData: [...state.data]
          .filter((product) => {
            const matchesCategorie =
              action.valueActive == 0
                ? product
                : product.category.toLowerCase().startsWith(action.payload);

            return matchesCategorie;
          })
          .sort((a, b) =>
            state.sort === "price-lowest"
              ? a.price - b.price
              : b.price - a.price
          ),
      };
    case "UPDATE SORT":
      //if (action.sorting == "price-lowest") {
      return {
        ...state,
        sort: action.sorting,
        filteredData: [...state.data]
          .filter((product) =>
            state.selectedCategory.startsWith("All")
              ? product
              : product.category
                  .toLowerCase()
                  .startsWith(state.selectedCategory)
          )
          .sort((a, b) => {
            if (action.sorting == "price-lowest") return a.price - b.price;
            if (action.sorting == "price-highest") return b.price - a.price;
            if (action.sorting == "name-a")
              return a.title.localeCompare(b.title);
            if (action.sorting === "name-z")
              return b.title.localeCompare(a.title);
          }),
      };

    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://my-store-api-blush.vercel.app/api/products"
        );
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
};
