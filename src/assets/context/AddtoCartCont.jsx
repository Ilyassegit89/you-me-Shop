import React, { useContext, createContext, useEffect, useState } from "react";
//import reducer from "../../reducers/products_reducer";

// Create a context
export const AddToCartCont = createContext();

export const useAddToCartCont = () => useContext(AddToCartCont);


export const AddToCartContProv = ({children}) => {

    const [quantity, setQuantity] = useState(1);
    //const [pricePro, setprice] = useState(0); 
    const [TotalProduct,  setTotalProduct] = useState(0);
    
    const decrement = () => {
        setQuantity((prevQuantity) => prevQuantity > 1 ? prevQuantity - 1  : 1);
    }
    
        const increment = () => {
            setQuantity((prevQuantity) => prevQuantity + 1);
        }
        const setprice = (price) => {
            setTotalProduct(price);
        }
        const sett = (price) =>{
            setTotalProduct(price)
        }
        /* useEffect(() => {
            setTotalProduct( price * quantity );
        }, [quantity]);  */

    return (
        <AddToCartCont.Provider value={{
            increment,
            decrement,
            quantity, 
            setprice,
            TotalProduct,
            sett

        }}>
          {children}
        </AddToCartCont.Provider>
      );
}