
import Image from '../assets/Bg.jpg'

export default function CallToAction(){
    return(
            <div className="w-full h-[30vh] flex items-center " style={{
                
                backgroundSize : 'cover',
                backgroundImage: `url(${Image})`
            }}>
                <div className='text-white max-w-[900px] mx-auto flex flex-col justify-center items-center'>
                    <h3 className='font-bold text-xl'>Repair Services</h3>
                    <h1 className='font-bold text-2xl md:text-4xl p-4 text-center'>Up to <span className='text-red-500'>70% Off</span> - All t-Shirts & Accessories </h1>
                    <button className='text-[#2c698d] rounded-md bg-white px-4 py-2 font-bold'>Explore More</button>
                </div>
            </div>  
        )
}