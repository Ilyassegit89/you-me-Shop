

import ArrivalProdWraper from "./ArrivalProdWraper"
import ArrivalProdData from "../../Data/ArrivalProdData"
import {GiThermometerCold} from "react-icons/gi"
import {PiStarFourFill} from "react-icons/pi"

const ArrivalProd = () => {
    const card = ArrivalProdData.map(
        (card) => {
            return <ArrivalProdWraper img= {card.img} key={card.id} />
        }
    )
  return (
    <div className='bg-[#eee] min-h-screen w-full'>
      <div className='max-w-[1200px] mx-auto  py-[3rem]'>
        <div className="flex justify-center items-start">     
        <h1 className='text-2xl md:text-4xl  font-bold '>Arrival Products for Winter </h1>
        <GiThermometerCold size={30} className="text-[#58b3fd]" />

        </div>
           <div className="flex justify-center items-center space-x-2">
            <p className='text-gray-400 text-center py-3 font-semibold'>New Modern Design</p>
            <PiStarFourFill size={20} className="text-[#fcff3c]"/>
           </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-[2rem] px-[2rem]'>

            {card}

            </div>
      </div>
    </div>
  )
}

export default ArrivalProd
