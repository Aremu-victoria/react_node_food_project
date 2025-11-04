import React from 'react'
import DeliveryStatus from './DeliveryStatus'
import Review from './Review'
import Notification from './Notification'

const RiderDownReview = () => {
  return (
    <div>
        <div className="grid grid-cols-12 gap-4 mb-4">
        <div className='col-span-6 space-y-2 block md:hidden mt-5'>
        <Review />
        <DeliveryStatus />
        </div>
         <div className= "col-span-6 block md:hidden">
             <Notification />
         </div>
      </div>
    </div>
  )
}

export default RiderDownReview