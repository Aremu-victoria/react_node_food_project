import React from 'react'
import Button from '../Botton'
const PaymentMethods = () => {
  return (
    <>
     <form action="">
            <div className='bg-white shadow-lg rounded-lg p-5 max-w-xs md:w-full w-[90%] mx-auto mt-11 mb-5'>
                <div className='flex justify-between font-bold pb-4'>
                    <p>Customer & delivery details</p>
                    <p>Edit</p>
                </div>
                <p className='text-sm'>
                    <p>Movic Unique</p>
                    <p>movicunique01@gmail.com</p>
                    <p>31b, Matanmi Street Osogbo, Osun 94123, Nigeria</p>
                    <p>+2349016504151</p>
                </p>
                <p className='font-bold py-5'>Payment</p>

                    <div className='flex gap-4 align-baseline border border-b-2 border-black p-4 rounded-lg shadow-md outline-2 my-3'>
                        <input type="radio" name='payment' className='form-control h-6 w-6' />
                        <p className='relative'>Credit/Debit Cards</p>
                    </div>
                    <div className='flex gap-4 align-baseline border border-b-2 border-black p-4 rounded-xl shadow-md outline-2 my-3'>
                        <input type="radio" name='payment' className='form-control h-6 w-6' />
                        <p className='relative'>Others payment methods</p>
                    </div>
                    <div className='flex gap-4 align-baseline border border-b-2 border-black p-4 rounded-xl shadow-md outline-2 my-3'>
                        <input type="radio" name='payment' className='form-control h-6 w-6' />
                        <p className='relative'>Bank Transfer</p>
                    </div>
                
            </div>
                   <div className='max-w-xs justify-center mx-auto'>
                     <Button generalButton='Confirm'/>
                   </div>
            </form>
    </>
  )
}

export default PaymentMethods