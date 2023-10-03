
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineTwitter, AiOutlineInstagram, AiFillGithub} from 'react-icons/ai'
import {PiCopyrightThin} from 'react-icons/pi'
import logo from '../assets/logo.png'
import png1 from '../assets/Footer Pngs/1.png'
import png2 from '../assets/Footer Pngs/2.png'
import png3 from '../assets/Footer Pngs/3.png'
import png4 from '../assets/Footer Pngs/4.png'
import png5 from '../assets/Footer Pngs/5.png'


function Footer() {
  return (
    <div className='w-full py-16 bg-white'>
      <div className='max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-6 px-4 gap-4'>
            <div className='col-span-2'>
                <img src={logo} alt="/" className='w-[80px] h-[80px] ' />
                <h2 className='text-gray-600 font-semibold py-4'>Contact</h2>
                <p className='text-gray-600'><span className='text-gray-600 font-semibold' >Address</span> : Casablanca, Bernousi</p>
                <p className='text-gray-600'><span className='text-gray-600 font-semibold'>Phone</span> : +212 688605515</p>
                <p className='text-gray-600'><span className='text-gray-600 font-semibold'>Hours</span> : 9:00 - 22:00 GMT</p>
                <div className='py-3'>
                    <p className='text-gray-600 font-semibold'>Follow us</p>
                    <div className='flex pt-3 justify-between px-4'>
                        <BiLogoFacebook className='text-gray-600'  size={25}/>
                        <AiOutlineTwitter className='text-gray-600'  size={25}/>
                        <AiOutlineInstagram className='text-gray-600' size={25}/>
                        <AiFillGithub className='text-gray-600' size={25}/>
                    </div>
                </div>
                <p className='text-gray-600 flex'><PiCopyrightThin size={20}/>2023 Ilyas etc-React Ecommerce Template</p>
            </div>
            <div className='col-span-1'>
                <h1 className='text-gray-600 font-semibold'>About</h1>
                <p className='text-gray-600'>About us </p>
                <p className='text-gray-600'>Delivery Information </p>
                <p className='text-gray-600'>Privacy Policy</p>
                <p className='text-gray-600'>Terms & Conditions</p>
                <p className='text-gray-600'>Contact us</p>
            </div>
            <div className='col-span-1'>
                <h1 className='text-gray-600 font-semibold'>My Account</h1>
                <p className='text-gray-600'>Sign in </p>
                <p className='text-gray-600'>View cart</p>
                <p className='text-gray-600'>My Wallet</p>
                <p className='text-gray-600'>Track my order</p>
                <p className='text-gray-600'>Help</p>
            </div>
            <div className='col-span-2'>
                <h1 className='text-gray-600 font-semibold'>Install App</h1>
                <p className='text-gray-600 '>From App Store or Google Play </p>
                <div className='h-[60px] flex items-center'>
                      <img alt='/' src={png4}  className='h-full' />
                      <img  alt='/' src={png5} className='h-full' />
                </div>
                <p className='text-gray-600 '>Secured Payment Gateways</p>
                <div className='h-[40px] flex space-x-4'>
                      <img src={png1} className='h-full'  alt='/ '/>
                      <img src={png2} className='h-full'  alt='/ '/>
                      <img src={png3} className='h-full'  alt='/ '/>

                </div>
            </div>
      </div>
    </div>
  )
}

export default Footer
