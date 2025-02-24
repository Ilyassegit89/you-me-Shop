import {createContext, useState, useContext, useEffect} from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({children}) => {
    const [carts, setToCarts] = useState(() => {
        const localValue = localStorage.getItem("Carts");
        if(localValue === null){
            return "";
        };
        return JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.setItem("Carts", JSON.stringify(carts))
    }, [carts]);
    
    const removeAllProd = () => {
        setToCarts([])
    }

    const addToCart = (product) => {
        setToCarts(prev => [...prev, product]);
        
    }
    const removeFromCarts = (productId) => {
        setToCarts(prev => prev.filter(prod => prod.id !== productId))
    }
    const isAdded = (productId) => {
        if(carts){
            return carts.some(cart => cart.id === productId);
        }
    }
    const value = {
        removeAllProd,
        carts,
        addToCart,
        isAdded,
        removeFromCarts
    }

    return <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>
}

