import React, { useEffect, useState } from 'react'
import RiderArrive from './RiderArrive'

 const RiderTracker = ({orders,discription,price,shipment,serial,item,time,deliveryStatus,Ongoing,from,dispFrom,image,to,dispTo,totalPro,totalMinPro,buttonPro}) => {
  return (
    <div className=''>
    <div className='space-y-2 lg:mt-2'>
        <div className='bg-white p-2 font-semibold'>{orders}</div>
        <div className='bg-white p-2'>
            <p className='font-semibold'>{shipment}</p>
            <p className='text-gray-200 text-sm'>{serial}</p>
            <p className='font-bold'>{item}</p>
        </div>
        <div className='bg-white p-2 text-sm'>
            <p>{discription}</p>
            <p>{price}</p>
            <p className='text-gray-200'>{time}</p>
        </div>
        <div className='flex justify-between bg-white  p-2'>
            <p className='font-semibold'>{deliveryStatus}</p>
            <p className='bg-[#333] text-white rounded-full px-3 py-2'>{Ongoing}</p>
        </div>
        <div className='md:flex justify-between bg-white p-2'>
            <p>
                <p className='font-semibold'>{from}</p>
                <p className='text-gray-200'>{dispFrom}</p>
            </p>
            <p>{image}</p>
            <p>
                <p className='font-semibold'>{to}</p>
                <p className='text-gray-200'>{dispTo}</p>
            </p>
        </div>  
        <RiderArrive total={totalPro} totalMin={totalMinPro} button={buttonPro} /> 
    </div>
    </div>
  )
}

export default RiderTracker