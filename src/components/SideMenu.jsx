import { NavLink } from 'react-router-dom'
import Img from '../assets/logo.png'


const SideMenu = () => {
  return (
    <>
        <img src={Img} alt="logo" className='w-[100px] h-[100px]' />

        <ul className=' flex flex-col items-center space-y-7 my-16'>
            <li className='font-semibold px-4 hover:text-[#2c698d] text-xl'>
                <NavLink  to="/">Home</NavLink>
            </li>
            <li className='font-semibold px-4 hover:text-[#2c698d] text-xl'>
                <NavLink to="/Shop">Shop</NavLink>
            </li>
            <li className='font-semibold px-4 hover:text-[#2c698d] text-xl' >
                <NavLink to="/Blog">Blog</NavLink>
            </li>
            <li className='font-semibold px-4 hover:text-[#2c698d] text-xl'>
                <NavLink to="/About">About</NavLink>
            </li>
            <li className='font-semibold px-4 hover:text-[#2c698d] text-xl'>
                <NavLink to="/Contact">Contact</NavLink>

            </li>
        </ul>
    </>
  )
}

export default SideMenu
