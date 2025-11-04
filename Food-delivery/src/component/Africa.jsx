import React from 'react'
import AfricaCard from './AfricaCard'
import friedChi from '../assets/images/fried.png'
import Pizza from '../assets/images/Ellipse 28.png'
import hamburger from '../assets/images/pizzer1.png'
import rice from '../assets/images/Ellipse 30.png'
const Africa = () => {
  return (
    <>
    <div className='relative'>
    <div className='bg-[#d3d4e8] justify-center max-w-[85%] mx-auto rounded-t-3xl'>
        <p className='p-6 font-semibold'>African Cuisune</p>
    </div>
     <div className='flex mx-auto justify-between gap-5 overflow-x-auto max-w-[80%] lg:-mt-4 mt-3'>
        <AfricaCard AfricaDash={friedChi}  nameDash='Fried Chicken' africaPrice='₦10,000'/>
        <AfricaCard AfricaDash={Pizza}   nameDash='Pizza' africaPrice='₦9,000'/>
        <AfricaCard AfricaDash={hamburger}   nameDash='Hamburger' africaPrice='₦3,000'/>
        <AfricaCard AfricaDash={rice}  nameDash='Fried Rice' africaPrice='₦4,500'/>
     </div>
    <div className="bg-[#d3d4e8] hidden lg:block  rounded-b-3xl pt-20 max-w-[85%] mx-auto py-60 -mt-64">
        <p className="text-center text-md mx-6 relative top-56">
        We bring you best seller and  highly rated Africam Cuisine of the week for you to explore  in different categories
        </p>
        </div>
    </div>
    <div className='relative mt-10'>
    <div className='bg-[#d3d4e8] justify-center max-w-[85%] mx-auto rounded-t-3xl'>
        <p className='p-6 font-semibold'>African Cuisune</p>
    </div>
     <div className='flex mx-auto justify-between gap-5 overflow-x-auto max-w-[80%] lg:-mt-4 mt-3'>
        <AfricaCard AfricaDash={friedChi}  nameDash='Fried Chicken' africaPrice='₦10,000'/>
        <AfricaCard AfricaDash={Pizza}   nameDash='Pizza' africaPrice='₦9,000'/>
        <AfricaCard AfricaDash={hamburger}   nameDash='Hamburger' africaPrice='₦3,000'/>
        <AfricaCard AfricaDash={rice}  nameDash='Fried Rice' africaPrice='₦4,500'/>
     </div>
    <div className="bg-[#d3d4e8] hidden lg:block  rounded-b-3xl pt-20 max-w-[85%] mx-auto py-60 -mt-64">
        <p className="text-center text-md mx-6 relative top-56">
        We bring you best seller and  highly rated Africam Cuisine of the week for you to explore  in different categories
        </p>
        </div>
    </div>
    </>
  )
}

export default Africa