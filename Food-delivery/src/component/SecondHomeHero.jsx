import MarchartRider from './MarchartRider'
import React from 'react'
import SecondHomeHeroConOne from './SecondHomeHeroConOne'
import  f7 from '../assets/images/f7.png'
import  f8 from '../assets/images/f8.png'
const SecondHomeHero = () => {
  return (
    <>
        <div className='grid grid-cols-2 mx-auto justify-center bg-[#d3d4e8] w-[85%] mt-10 overflow-x-auto overflow-y-hidden rounded-t-xl gap-10 py-5 mb-10'>
            <SecondHomeHeroConOne />
            <div className='flex space-x-7'>
            <MarchartRider ride='Become a Merchart' rideImage={f8} rideCon='Grow your business and increase profit by creating an online ordering page on the kichen' genButton='Register Now'/>
            <MarchartRider ride='Become a Rider' rideImage={f7} rideCon='Grow your business and increase profit by creating an online ordering page on the kichen' genButton='Register Now'/>
            </div>
        </div>
    </>
  )
}

export default SecondHomeHero
