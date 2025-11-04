import React from 'react'
import RiderHeader from './RiderHeader'

const Notification = () => {
  return (
    <div>
        <div>
            <RiderHeader headling='Notifications' style='mt-5 mb-2'/>
            <div className='space-y-2 text-sm'>
            <div className='bg-white p-2'>
                <p className='text-red-500'>New shipment added</p>
                <p className='font-semibold'>Shipment (#3435355) has been added by ALATA RESTAURANT</p>
                <p className='flex justify-between text-small font-thin text-gray-300'>
                    <span>15 June 2024</span>
                    <span>07:45pm</span>
                </p>
            </div>
            <div className='bg-white p-2'>
                <p className='text-red-500'>New shipment added</p>
                <p className='font-semibold'>Shipment (#3435355) has been added by ALATA RESTAURANT</p>
                <p className='flex justify-between text-small font-thin text-gray-300'>
                    <span>15 June 2024</span>
                    <span>07:45pm</span>
                </p>
            </div>
            <div className='bg-white p-2'>
                <p className='text-red-500'>New shipment added</p>
                <p className='font-semibold'>Shipment (#3435355) has been added by ALATA RESTAURANT</p>
                <p className='flex justify-between text-small font-thin text-gray-300'>
                    <span>15 June 2024</span>
                    <span>07:45pm</span>
                </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Notification