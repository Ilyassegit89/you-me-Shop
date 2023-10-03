import { AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';

import img1 from '../../assets/ProductsLists/1.jpg'
import img2 from '../../assets/ProductsLists/2.jpg'
import img3 from '../../assets/ProductsLists/3.jpg'
import img4 from '../../assets/ProductsLists/4.jpg'

const ViewPopUpModal = ({isOpen, OnClose}) => {

    
    const [selectedImage, setSelectedImage]= useState(img1);
    const images = [
        img1,
        img2,
        img3,
        img4,
    ];
    const handleClickChange = (image) => {
        setSelectedImage(image);
    }

  return (
    <div className={`fixed top-0 left-0  w-full h-full text-white flex items-center justify-center px-2   ${isOpen ? 'block ' : 'hidden'}`}>
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div className="bg-white rounded-md shadow-lg relative text-black md:p-7 px-7 py-4 max-h-[950px] md:min-h-[400px] max-w-[900px] mx-auto mt-[1em] ">
            <div className='grid grid-cols-2 gap-4'>

                    <div className='col-span-1 bg-gray-500  h-full'>
                            <div className='grid grid-cols-4 '>
                                    <div className=' bg-[#eee] col-span-2   selectedImage'>
                                    {selectedImage && <img src={selectedImage} alt='/' className='h-full w-[400px]'/>}
                                </div>
                                    <div className='col-span-2  imagelist'> 
                                    <div className='flex flex-wrap'>
                                    {images.map((image, index) => (<img alt='/' src={`${image}`}key={index} onClick={() => handleClickChange(image)} className='w-1/2 h-full cursor-pointer hover:scale-50 transition duration-200'/>))}

                            </div>
                            </div>
                        </div>

                        
                    </div>

                

                <div className='col-span-1 text-sm'>

                <h1 className='font-semibold'>Man's Fashion Sweatshirt </h1>
                <div className='md:py-5 py-2 space-y-2'>
                    <p className='font-semibold text-xl'>$140.00</p>
                    <select className='rounded-md border-2 border-gray-500' name="cars" id="cars">
                        <option value='Select Size'>Select Size</option>
                        <option value='xxl'>xxl</option>
                        <option value='m'>m</option>
                        <option value='s'>s</option>
                    </select>
                    <div className='flex space-x-2'>
                        <form>
                            <label  for="quantiy" >Quantity : <input className='rounded-md p-2 border-2 border-gray-500' type='number'  name='quantity' min="1" max="5" />
                            </label>
                        </form>
                        <button className='bg-[#ef6027] text-white font-semibold px-4 py-2 rounded-md'>Add to Cart</button>
                    </div>
                </div>

                </div>

            </div>

            <div>
                    <h1 className='font-semibold py-2'>Product Details</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati blanditiis, corrupti iste magnam hic dolores sed enim cumque labore delectus voluptate ratione magni ullam ut autem, cum quia temporibus et accusamus itaque soluta impedit, cupiditate tenetur. Consectetur voluptate tenetur praesentium?</p>
            </div>

        <AiOutlineClose className='absolute top-0 right-0 cursor-pointer hover:text-red-600' onClick={OnClose}  size={30} />
      </div>

    </div>
  )
}

export default ViewPopUpModal
