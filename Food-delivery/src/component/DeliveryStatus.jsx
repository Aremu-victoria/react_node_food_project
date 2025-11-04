import React from 'react'
import ImageRide from '../assets/images/Ride.png'
const DeliveryStatus = () => {
  return (
    <div className='bg-white p-2 '>
        <h1 className='text-xl font-semibold'>Delivery Status</h1>
        <div className='flex justify-between'>
            <p>
                <p className='text-gray-200 text-sm'>with the time limit</p>
                <p className=' text-sm'>24 times</p>
                <p className=' text-sm text-gray-200'>Out of time limit</p>
                <p className=' text-sm'>7 times</p>
            </p>
            <p>
            <p className='text-gray-300 text-sm'><img src={ImageRide} alt="" /></p>
            </p>
        </div>
    </div>
  )
}

export default DeliveryStatus