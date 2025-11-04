import React from 'react'
import Button from '../component/Botton'
const CompanyCard = ({com,comCon,btn,oneImg,style}) => {
  return (
    <div>
        <div className='text-center grid md:grid-cols-2 justify-between p-2 bg-[#d3d4e8] rounded-xl text-black max-w-[85%] mx-auto mt-10 '>
         <div><img src={oneImg} alt="" className='' /></div>
         <div className='space-y-5 mt-6  max-w-[70%] mx-auto'>
        <h2 className='text-3xl'>{com}</h2>
         <p className=''>{comCon}</p>
        <Button generalButton = {btn} style={style} />
         </div>
        </div>
    </div>
  )
}

export default CompanyCard