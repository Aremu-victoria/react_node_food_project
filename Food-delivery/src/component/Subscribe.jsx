import { Button } from 'flowbite-react'
import React from 'react'

const Subscribe = () => {
  return (
    <>
        <div className='bg-[#ff4500] p-6 text-center max-w-[80%] justify-center mx-auto m-5 rounded-2xl'>
            <h1 className='text-white text-3xl'>Subscribe to get the latest offer</h1>
            <p className='text-gray-100'>Stay up to date with our latest update and product</p>
            <div className='mx-auto justify-center gap-3 grid md:flex pt-8'>
            <input type="search" name="" placeholder='Enter your email' className='bg-white border-0 rounded-sm'/>
             <button className=' py-2 px-4 rounded-md bg-black text-white'>Subscribe</button>
            </div>
        </div>
    </>
  )
}

export default Subscribe