import React from 'react'

const RiderSale = ({image,number,total,date}) => {
  return (
    <div>
        <div className='text-center mx-auto justify-center p-2 bg-white rounded-md shadow-gray-300 shadow-lg'>
            <img src={image} alt="" className='mx-auto' />
            <p className='text-2xl font-bold text-black py-2'>{number}</p>
            <p className='text-gray-400 text-md'>{total}</p>
            <p className='text-gray-200 text-sm'>{date}</p>
        </div>
    </div>
  )
}

export default RiderSale
