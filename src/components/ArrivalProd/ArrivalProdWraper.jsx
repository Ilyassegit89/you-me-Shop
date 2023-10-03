
import {AiOutlineShoppingCart} from 'react-icons/ai'


export default function ArrivalProdWraper(props) {
  return (
    <div className='bg-white p-2 rounded-md '>
                    <img src={props.img} alt='/' className=' rounded-md max-h-[300px] w-full'/>
                    <div className='pt-5'>
                        <p className='text-gray-400 '>Shein</p>
                        <h3 className='font-semibold'>SweatShirt</h3>
                        <div className='flex justify-between items-center'>
                            <span className='text-[#272643] font-semibold'>$70</span>
                            <AiOutlineShoppingCart size={30} className='cursor-pointer text-[#272643] p-[5px] rounded-full bg-[#bebdf1] text-center' />
                        </div>
                    </div>
    </div>
  )
}


