import React from 'react'
import FeauturedWrrapers from '../FeaturedProdSect/FeauturedWrrapers'

import FeaturedProdData from '../../Data/FeaturedProdData'
import {PiStarFourFill} from "react-icons/pi"



export default function FeaturedProd() {
    const cards = FeaturedProdData.map(
        card => {
            return <FeauturedWrrapers product={card} key={card.id} image={card.image} title={card.title} price={card.price}/>
        }
    )
    
  return (
    <div className='bg-[#eee] min-h-screen w-full'>
      <div className='max-w-[1200px] mx-auto  py-[3rem] '>
            <h1 className='text-2xl md:text-4xl font-bold text-center'>Featured Products</h1>
            <div className="flex justify-center items-center space-x-2">
            <p className='text-gray-400 text-center py-3 font-semibold'>New Modern Design</p>
            <PiStarFourFill size={20} className="text-[#fcff3c]"/>
           </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-[2rem] px-[2rem]'>

                {cards}

            </div>
      </div>
    </div>
  )
}
