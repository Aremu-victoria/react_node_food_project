import React from 'react'
import mark from '../../assets/images/mark.png'
const OrderCard = () => {
  return (
    <>
        <div className='mt-24'>
            <img src={mark} alt="" className='mx-auto py-2'/>
            <h2 className='text-[#1da52c] text-3xl font-bold text-center '>Order Successful</h2>
            <p className='text-center text-sm'>Thank you for your paymebnt</p>
            <div className='border-green-400 border max-w-xl justify-center mx-auto mt-7'>
            </div>
        </div>
    </>
  )
}

export default OrderCard