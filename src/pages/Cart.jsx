
import { useState } from "react";
import {useProductContext} from "../assets/context/ProductContext";
//import Products from "../components/ShoppingPage/Products.jsx"
import ProductsCart from "../components/ProductsCart.jsx";
//import {useAddToCartCont} from "../assets/context/AddtoCartCont.jsx";

export default function Cart(){
    const {carts, removeAllProd} = useProductContext();
    const [quantities, setQuantities] = useState(
        carts.reduce((acc, item) => {
            acc[item.id] = 1;
            return acc;
        }, {})
    );
    console.log(carts)
    

    const increment = (id) => {
        setQuantities((prev) => (
            {...prev, [id]: prev[id] + 1}
        ));
    }
    const decrement = (id) => {
        setQuantities((prev) => ({...prev, [id]: prev[id] > 1 ? prev[id] - 1 : 1}))
    }

    function handleClick(){
        removeAllProd();
    }
    const total = carts.reduce((sum, item) => sum + item.price * quantities[item.id], 0).toFixed(2);

    return(
        <div className="max-w-[1200px] mx-auto my-5 bg-white rounded-lg shadow-lg p-6">
                    <div className=" h-full w-full rounded-lg ">
                        <div className="flex justify-between p-5">
                            <span className="font-medium">Shopping Cart</span>
                            <button className="text-red-500 underline font-medium" onClick={handleClick}>Remove all</button>
                        </div>
                            {carts.length === 0 ? (<div className="h-[50%] text-black flex justify-center items-center font-medium text-4xl">Your cart is empty. Add items to get started!</div>) 
                            : (
                                
                                <>
                                <div className="grid grid-cols-3 gap-4 p-5 bg-white">
                                    {carts.map((card) => <ProductsCart product={card} key={card.id} title={card.title} price={card.price} category={card.category} image={card.image} quantity={quantities[card.id]} increment={() => increment(card.id)} decrement={() => decrement(card.id)}/>)}         
                                </div>
                                            <hr></hr>
                                            <div className="flex flex-col w-full items-end">
                                            <div className="flex justify-between w-[500px] py-2">
                                                <div>
                                                    <h3 className="text-xl font-medium">Sub-Total</h3>
                                                    
                                                    {carts.map((product) => (
                                                        <h3 className="text-xl font-medium text-gray-400">
                                                            {product.title}(x{quantities[product.id]}),
                                                        </h3>
                                                    ))}
     
                                                </div>
                                                <div>
                                                    <span className="text-xl font-medium">{total}$</span>
                                                </div>
                                            </div>
                                            <button type='button' className='bg-[#ef6027] text-white px-4 py-2 font-semibold rounded-full '>Check Out</button>
                                            </div>
                                </>
                            ) }
                        

                    </div>

        
        </div>
    )
}