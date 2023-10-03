import { useState } from 'react'
import img1 from '../../assets/ProductsLists/1.jpg'
import img2 from '../../assets/ProductsLists/2.jpg'
import img3 from '../../assets/ProductsLists/3.jpg'
import img4 from '../../assets/ProductsLists/4.jpg'

export default function AddToCart(){
    const [selectedImage, setSelectedImage]= useState(img1);
    const images = [
        img1,
        img2,
        img3,
        img4,
    ];
    const handleClickChange = (image) =>{
        setSelectedImage(image);
    }
    return(
        <div className="max-w-[1200px] mx-auto min-h-screen flex flex-col md:flex-row items-start  gap-6 px-7 mt-[48px]">
                <div className='bg-gray-500 flex-1 '>

                    <div className=' bg-[#eee] h-[400px] flex items-center justify-center selectedImage'>
                            {selectedImage && <img 
                            src={selectedImage}
                            alt='/'
                            className='w-[300px] h-[350px]'
                            />}
                    </div>
                    
                        <div className='flex  max-h-[200px]  overflow-hidden imagelist'>
                            {images.map((image, index) => (
                                <img alt='/'
                                 src={`${image}`}
                                  key={index}
                                   onClick={() => handleClickChange(image)} 
                                   className='w-1/4 h-full cursor-pointer hover:scale-50 transition duration-200'
                                   />
                            ))}
                        </div>
                </div>
                <div className='py-7 flex-1'>
                    <h1 className='font-semibold'>Man's Fashion Sweatshirt </h1>
                    <div className='py-5 space-y-2'>
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
                    <h1 className='font-semibold py-2'>Product Details</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati blanditiis, corrupti iste magnam hic dolores sed enim cumque labore delectus voluptate ratione magni ullam ut autem, cum quia temporibus et accusamus itaque soluta impedit, cupiditate tenetur. Consectetur voluptate tenetur praesentium?</p>
                </div>
        </div>
    )
}