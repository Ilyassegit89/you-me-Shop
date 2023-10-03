import React from 'react'
import MainContImg from '../assets/MainContent.png'

function MainContent() {
  return (
    <div className='bg-[#eee] h-screen text-black w-full mt-[-99px] pt-[5.2rem] overflow-hidden'>
        <div className='max-w-[1200px] mx-auto flex h-[100vh]'>
            <div className='pl-4 flex flex-col justify-center md:items-start items-center flex-1'>
                <p className='font-semibold md:text-2xl text-xl'>Trade-in-offer</p>
                <h1 className='font-semibold md:text-6xl text-xl'>Super value deals</h1>
                <h1 className='font-semibold md:text-5xl text-2xl text-[#272643]'>On all products</h1>
                <p className='text-gray-500 text-xl py-5'>Save more with coupons & up to 70% off</p>
                <button type='button' className='bg-[#ef6027] text-white px-4 py-2 font-semibold rounded-full'>Shop Now</button>
            </div>
            <div className='flex-1 hidden md:block'>
            <img src={MainContImg} className='h-full w-full' alt="#" />
            </div>
        </div>
        
    </div>
  )
}

export default MainContent
