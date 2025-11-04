import React from 'react'
import f2 from '../assets/images/f2.png'
import logo from '../assets/images/logo.png'
const SecondHomeHeroConOne = () => {
  return (
    <div className='grid lg:grid-cols-2 justify-between'>
      <img src={f2} alt="" className=' hidden lg:block relative top-10'/>
        <p className='text-center mx-auto relative'>
            <img src={logo} alt="" className='mx-auto' />
            <h2 className='text-4xl py-8'>JOIN US TODAY</h2>
            <p className='lg:text-2xl'>To Unlock <span className='text-[#FF4500]'>Exclusive Benefits</span> & to have access to <span className='text-[#FF4500]'>premium content</span> and <span className='text-[#FF4500]'>special offers</span></p>
        </p>
    </div>
  )
}

export default SecondHomeHeroConOne
