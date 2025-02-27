import React, { useEffect, useState, useReducer } from 'react';
import axios from "axios"

import {PiStarFourFill} from "react-icons/pi";
import UniqueCategories from '../functions/UniqueCategories.js';
import Products from '../components/ShoppingPage/Products.jsx'

function Shop() {
  
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [all, setAll] = useState(false);
  const uniqueCategories = UniqueCategories(products);

  const min = Math.min(...products.map(product => product.price));
  const max = 1000;
  const middle = (min + max) / 2; 

  const [value, setValue] = useState(middle);

  const handleChange = (e) => {
    setValue(parseFloat(e.target.value));
  };

  const reducer = (state, action) => {
    switch(action.type){
        case "UPDATE_CATEGORY":
            return {...state , selectedCategory : action.payload, activeButton: action.valueActive}
        default:
          return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {selectedCategory : "", activeButton: ""});

    const filterProducts = products.filter((product) => {
    const matchesSearch =  product.title.toLowerCase().includes(searchQuery);
    const matchesCategorie = state.selectedCategory === "All"  ?  product : product.category.startsWith(state.selectedCategory);
    
    const matchRange =  value ? product.price <= value : false;
    
    return  matchesCategorie && matchRange && matchesSearch;

  })
  

useEffect(() => { 
  
  axios.get("https://my-store-api-blush.vercel.app/api/products").then(response => {
    
    setProducts(response.data);
    console.log(response.data);
  }).catch(error => {
    setError("Failed To Load Products")
  }).finally(() => {
    setLoading(false);
  })
}, [])

  return (
    <>

        <div className="max-w-[1200px] mx-auto ">
          <div className="grid md:grid-cols-[1fr_3fr] py-4">
              <div className="pl-4">
                    <form onSubmit={(e) => e.preventDefault()}>
                    {/* search input */}
                    <div className="py-4 form-control">
                        <input
                            type="text"
                            name="text"
                            placeholder="search"
                            className="border-2 border-[#ef6027] p-2 rounded"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
              </div>
              {/* end search input */}
              {/* categories */}
              <div className="py-4 form-control">
                <h5>Category</h5>
                <div>
                
                    {uniqueCategories.map((catego, index) => (
                    <button
                      key={index}
                      name="category"
                      type="button"
                      id={index}
                      className=
                      { 
                        state.activeButton == index ? " underline text-gray-700 font-semibold px-2" : 
                        "text-gray-400 px-2"} 

                      onClick={(e) => {
                        const value = e.target.textContent;
                        const valueId = e.target.id;
                        dispatch({type: 'UPDATE_CATEGORY', payload: value, valueActive: valueId})

                
                      }} 
                      
                    >
                      {catego}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="py-4 form-control ">
                <h5>price</h5>
                <div>
                      <input
                        type="range"
                        min={min}
                        max={max}
                        step={0.1}
                        value={value}
                        onChange={handleChange}
                      />
                      <div>
                        <span>Min: ${min.toFixed(2)}</span>
                        <span style={{ marginLeft: '20px' }}>Max: ${value.toFixed(2)}</span>
                      </div>
                    </div>
              </div>
              
            </form>
            
            <button type='button' className='bg-[#ef6027] text-white px-4 py-2 font-semibold rounded-full '>clear filters</button>

            </div>
            {/*CardsProduc */}
            <div className='bg-[#eee] min-h-screen  '>
              <div className=' py-[3rem] '>
                    <h1 className='text-2xl md:text-4xl font-bold text-center'>Featured Products</h1>
                    <div className="flex justify-center items-center space-x-2">
                    <p className='text-gray-400 text-center py-3 font-semibold'>New Modern Design</p>
                    <PiStarFourFill size={20} className="text-[#fcff3c]"/>
                   </div>
                   {error && <div>{error}</div>}
                   {loading ? (<div className="text-black text-center py-3 font-semibold">Loading ... </div> ): (
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-[2rem] px-[2rem]'>
                        {filterProducts.map((card) => (
                                <Products product={card} key={card.id}  image={card.image} title={card.title} price={card.price} category={card.category.split(' ')[0]} />
                        )
                        )}
                    </div>
                   )}
                    
              </div>
        </div>
          </div>
      
        </div>
      
      <NewsLetter />
      
    </>
  );


}

export default  Shop;
