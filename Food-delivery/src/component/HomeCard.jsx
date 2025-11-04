import React from 'react'
import CardCom from './CardCom'
import image13 from '../assets/images/image 13.png'
import image12 from '../assets/images/image 12.png'
import image14 from '../assets/images/image 14.png'
const HomeCard = () => {
  return (
    <div className='relative'>
        <div className="flex overflow-x-auto overflow-hidden px-2 snap-x snap-mandatory max-w-[85%] mx-auto md:justify-center">
  <div className="snap-start shrink-0 w-full max-w-xs p-4">
    <CardCom 
      shearButton="Download Now" 
      cardTitle="Try The App" 
      cardSubTitle="Discover the best restaurants and vendors near you in one place" 
      Cardimg={image13}
      style={{backgroundColor:'#fff',borderRadius: '16px'}}
    />
  </div>
  <div className="snap-start shrink-0 w-full max-w-xs p-4">
    <CardCom 
      shearButton="Register Now" 
      cardTitle="Become A Merchant" 
      cardSubTitle="Grow your business and increase profit by creating an online ordering page" 
      style={{backgroundColor:'#ffdfb9',borderRadius: '16px'}}
      Cardimg={image12}
    />
  </div>
  <div className="snap-start shrink-0 w-full max-w-xs p-4">
    <CardCom 
      shearButton="Register Now" 
      cardTitle="Become A Rider" 
      cardSubTitle="Drive, deliver and earn. Make more money when you become a rider on The Kitchen" 
      Cardimg={image14}
      style={{backgroundColor:'#d1c3ff',borderRadius: '16px'}}
    />
  </div>
</div>
      <div className="bg-[#d3d4e8] hidden md:block rounded-t-3xl pt-20 max-w-[85%] mx-auto pb-52 -mt-64">
        <p className="text-center text-sm mx-6 relative top-48">
          Join us today and unlock exclusive benefits and gain access to premium content and special offers.
        </p>
        </div>
      <div className="bg-[#d3d4e8] block md:hidden p-5 max-w-[85%] mx-auto">
        <p className="text-center text-sm mx-6">
        Join us today and unlock exclusive benefits and gain access to premium content and special offers.
        </p>
        </div>

    </div>
  )
}

export default HomeCard