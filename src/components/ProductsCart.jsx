import {useEffect, useState} from "react";
import {useProductContext} from "../assets/context/ProductContext.jsx";

export default function ProductsCart({title, price, image, product, increment, decrement, quantity, category}){
    const {removeFromCarts} = useProductContext();
    const totalPrice = (product.price * quantity).toFixed(2);
    
    const handleClick = () => {
        removeFromCarts(product.id)
    }

    return(       
             <>
                     <div className="h-[150px] w-[150px]">
                        <img src={image} className="w-full h-full rounded-lg" alt={title}/>
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                        <div className="flex flex-col">
                            <h1 className="text-3xl font-medium">{title}</h1>
                            <span className="font-medium text-2xl text-gray-300">{category}</span>

                        </div>
                        <div className="flex items-end space-x-4">
                            {/* Decrement Button */}
                                <button
                            //onClick={decrement}
                            className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200"
                                    //onClick={decrement}
                                    >
                                <span className="text-xl font-bold" onClick={decrement}>-</span>
                                </button>

                            {/* Quantity Display */}
                                <span className="text-xl font-semibold">{quantity}</span>

                            {/* Increment Button */}
                            <button
                        //onClick={increment}
                        className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200"
                            >
                            <span className="text-xl font-bold" onClick={increment}>+</span>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="font-medium text-2xl" >{totalPrice}$</span>

                        <button className="text-red-500 underline"
                        onClick={handleClick}
                         >Remove item</button>
                        
                    </div>     
                    
                
            </>   
    )
}