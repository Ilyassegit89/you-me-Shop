
const  WrapedBannerSec = (props) => {
    const {image, txt1, txt2, txt3, txt4} = props;
  return (
    <div className='w-full relative h-[40vh]'>
                    <img src={image} alt='/' className='w-full h-full object-cover' />
                    <div className='absolute inset-0 backdrop-brightness-90 backdrop-hue-rotate-[330deg] text-white p-4 flex flex-col justify-center items-start'>
                        <p>{txt1}</p>
                        <h1 className='font-bold text-2xl md:text-3xl'>{txt2}</h1>
                        <p className='py-4 text-xs md:text-sm'>{txt3}</p>
                        <button className='px-4 py-2 border-2 border-white'>{txt4}</button>
                    </div>
    </div>
  )
}

export default WrapedBannerSec
