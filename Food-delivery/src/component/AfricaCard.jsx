import { Rating } from 'flowbite-react'
import React from 'react'
import Button from '../component/Botton'
const AfricaCard = ({AfricaDash,nameDash,africaPrice,sold,btn,style}) => {
  return (
    <div className=''>
      <div className="bg-white border-0 shadow-none p-5 font-semibold w-[15rem] h-full"      
     >   
    <img src={AfricaDash} alt="" className='w-sm'/>
      <div className=''>
      <div className='justify-between flex'>
    <p>{nameDash}</p>
    <p className='text-[#FF4500]'>{africaPrice}</p>
    </div>
    <p>{sold}</p>
    <p>
      <Rating>
        <Rating.Star className='text-[#FF4500]'/>
        <Rating.Star className='text-[#FF4500]'/>
        <Rating.Star className='text-[#FF4500]'/>
        <Rating.Star className='text-[#FF4500]'/>
        <Rating.Star filled={false}/>
      </Rating>
    </p>
    <Button generalButton={btn} style={style}/>
      </div>
    </div>
    </div>
  )
}

export default AfricaCard
