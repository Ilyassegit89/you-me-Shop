

function wrapedBanner2(props) {
    const {image, txt1, txt2} = props;
  return (
    <div className='relative w-full  h-[40vh]'>

        <img src={image} alt='/' className='w-full h-full object-cover' />
            <div className='absolute inset-0 backdrop-brightness-50  text-white p-4 flex flex-col justify-center items-start'>
                <h1 className='font-bold text-sm md:text-3xl uppercase'>{txt1}</h1>
                <p className='py-4 text-xs md:text-2xl text-red-500 font-semibold'>{txt2}</p>
            </div>
    </div>
  )
}

export default wrapedBanner2
