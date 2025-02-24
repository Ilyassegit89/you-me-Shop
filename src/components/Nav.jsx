import React, { useState, useEffect } from 'react'
import Img from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import './reset.css'
import {AiOutlineShopping, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import SideMenu from './SideMenu';

function Nav() {
    const [nav, setNav] = useState(false);
    const [scrolledNav , setScrollNav] = useState(false);
    
    function scrolled(){
            if(window.scrollY >= 20){
                setScrollNav(true)
            }
            if(window.scrollY <= 20){
                setScrollNav(false)
            }
    }

    useEffect(
    () => {
        window.addEventListener('scroll', scrolled);
    },[]
    )

    const handleChange = () => {
        setNav(!nav);
    }
  return (
        <div className={scrolledNav ? 'bg-[#eee] shadow-md sticky top-0 right-0 px-4 expanded  z-50 ': 'sticky top-0 right-0 left-0  px-4  bg-[#eee] w-full h-13 '}>
        <div className= {scrolledNav ? 'max-w-[1200px] mx-auto flex items-center justify-between  ' : 'max-w-[1200px]  mx-auto flex items-center justify-between '} >
        <img src={Img} alt="logo" className='w-[100px] h-full' />
        <div className='flex items-center'>
        <ul className='md:flex hidden'>
            <li className='font-semibold px-4 hover:text-[#2c698d]'>
                <NavLink  to="/">Home</NavLink>
            </li>
            <li className='font-semibold px-4 hover:text-[#2c698d]'>
                <NavLink to="/Shop">Shop</NavLink>
            </li>
            <li className='font-semibold px-4 hover:text-[#2c698d]'>
                <NavLink to="/Blog">Blog</NavLink>
            </li>
            <li className='font-semibold px-4 hover:text-[#2c698d]'>
                <NavLink to="/About">About</NavLink>
            </li>
            <li className='font-semibold px-4 hover:text-[#2c698d]'>
                <NavLink to="/Contact">Contact</NavLink>

            </li>
        </ul>
        <div className='flex gap-4'>
        <NavLink to="/Cart"><AiOutlineShopping className='cursor-pointer hover:text-[#2c698d]' size={30}/>
        </NavLink>

            <div onClick={handleChange} className='block md:hidden'>
                {nav ? <AiOutlineClose className='cursor-pointer hover:text-red-600' size={30} />  : <AiOutlineMenu className='cursor-pointer hover:text-[#2c698d]' size={30} />
}
            </div>
        
        </div>
        </div>

        <div className={nav ? 'bg-white fixed left-0 top-0 h-full w-[60%] text-gray-400 px-4 transition duration-300 border-r-2 border-r-gray-500 z-50'  : 'bg-black fixed right-0 top-0 h-full w-[-100%]  p-4 hidden'}>
            <SideMenu />
        </div>

        
        </div>
        </div>
  )
}

export default Nav
