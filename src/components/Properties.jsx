import React from 'react'
import {MdLocalShipping, MdPayment} from 'react-icons/md'
import {FaHandHoldingHeart} from 'react-icons/fa'
import {TiMessages} from 'react-icons/ti'
import {BsFillPersonVcardFill} from 'react-icons/bs'

function Properties() {
  return (
    <div className='bg-[#ef6027] min-h-[30vh] p-[36px] flex items-center'>
      <div className='bg-white max-w-[1200px] mx-auto flex flex-wrap p-5'>

            <div className='flex items-center gap-4  lg:w-1/5 md:w-1/4 w-1/2 my-5 px-2 border-r-2 border-r-gray-400'>
            <MdLocalShipping  size={40} className="text-[#1948a0]" />
                <div>
                    <p className='font-semibold text-xs sm:text-sm  '>FREE DELIVERY</p>
                    <p className='text-gray-500 text-sm'>For all orders over 120$</p>
                </div>
            </div>

            <div className='flex items-center gap-4  lg:w-1/5 md:w-1/4 w-1/2 my-5 px-2 border-r-2 border-r-gray-400'>
            <MdPayment  size={40} className="text-[#1948a0]" />
                <div>
                    <p className='font-semibold text-xs sm:text-sm'>SAFE PAYMENT</p>
                    <p className='text-gray-500 text-sm'>100% secure payment</p>
                </div>
            </div>

            <div className='flex items-center gap-4 lg:w-1/5 md:w-1/4 w-1/2 my-5 px-2 border-r-2 border-r-gray-400'>
            <FaHandHoldingHeart  size={40} className="text-[#1948a0] " />
                <div>
                    <p className='font-semibold text-xs sm:text-sm'>SHOP WITH CONFIDENCE</p>
                    <p className='text-gray-500 text-sm'>it goods have problems</p>
                </div>
            </div>

            <div className='flex items-center gap-4 lg:w-1/5 md:w-1/4 w-1/2 my-5 px-2 border-r-2 border-r-gray-400'>
            <TiMessages  size={40} className="text-[#1948a0]" />
                <div>
                    <p className='font-semibold text-xs sm:text-sm'>24/7 HELP CENTER</p>
                    <p className='text-gray-500 text-sm'>Dedicated 24/7 support</p>
                </div>
            </div>

            <div className='flex items-center gap-4  lg:w-1/5 mx-auto w-1/2 my-5 p-2 '>
            <BsFillPersonVcardFill  size={40} className="text-[#1948a0] " />
                <div>
                    <p className='font-semibold text-xs sm:text-sm'>FRIENDLY SERVICES</p>
                    <p className='text-gray-500 text-sm'>30 day satisfaction guarante</p>
                </div>
            </div>

      </div>
    </div>
  )
}

export default Properties;
