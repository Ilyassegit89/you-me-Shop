
import WrapedBannerSec from '../bannerSection/WrapedBannerSec';
import WrapedBanner2 from '../bannerSection/WrapedBanner2'; 
import Object from '../../Data/BannerSectData'; 
import Object1 from '../../Data/bannerSectData2';

const  BannersSect = ()  => {

  return (
    <div className="bg-white min-h-[100vh] max-w-[1200px] mx-auto py-7">
            <div className='flex flex-col md:flex-row px-4 gap-4 '>  
                {Object.map((obj) => <WrapedBannerSec key={obj.id} image={obj.img} txt1={obj.firstP} txt2={obj.secondHead} txt3={obj.secondP} txt4={obj.lasts}  />)}
            </div>
           
            <div className='flex justify-between gap-4 my-4 px-4 '>  
                {Object1.map((obj) => <WrapedBanner2  key={obj.id} image={obj.img} txt1={obj.firstHead} txt2={obj.firstP} />)}
            </div>
       
    </div>
  )
}

export default BannersSect
