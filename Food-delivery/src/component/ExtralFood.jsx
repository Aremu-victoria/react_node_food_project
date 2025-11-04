import React from 'react'
import AfricaCard from './AfricaCard'
import Footer from '../component/Footer'
import f6 from '../assets/images/f6.png'
import g2 from '../assets/images/g2.png'
import f5 from '../assets/images/f5.png'
import f4 from '../assets/images/f4.png'
import e1 from '../assets/images/Ellipse 28.png'
import f3 from '../assets/images/f4.png'
import bug from '../assets/images/image 69.png'
import g5 from '../assets/images/g5.png'
import g6 from '../assets/images/g6.png'
import g7 from '../assets/images/g7.png'
import g8 from '../assets/images/g8.png'
import g9 from '../assets/images/g9.png'
import g01 from '../assets/images/g01.png'
import g02 from '../assets/images/g02.png'
import g03 from '../assets/images/g03.png'
import g10 from '../assets/images/g10.png'
import g04 from '../assets/images/g04.png'
import g05 from '../assets/images/g05.png'
import g06 from '../assets/images/g06.png'
import g07 from '../assets/images/g07.png'

const ExtralFood = () => {
  return (
    <>
        {/* First */}
        <div className='bg-[#d3d4e8] justify-center max-w-[85%] mx-auto mt-10'>
        <p className='p-4 font-semibold text-sm justify-between flex'><p>Igbadun Extra</p><p>Swip for more</p></p>
        </div>
         <div className='flex mx-auto justify-between gap-5 overflow-x-auto max-w-[80%] mt-3'>
                <AfricaCard nameDash='Snail' AfricaDash={f6} africaPrice='₦10,000' sold='sold by Alata' btn='order now' style={{borderRadius:'0'}}/>
                <AfricaCard nameDash='Suya' AfricaDash={g2} africaPrice='₦10,000' sold='sold by item7' btn='order now' style={{borderRadius:'0'}}/>
                <AfricaCard nameDash='ponmo' AfricaDash={f5} africaPrice='₦10,000' sold='sold by brent' btn='order now' style={{borderRadius:'0'}}/>
                <AfricaCard nameDash='Cat Fish' AfricaDash={f4} africaPrice='₦10,000' sold='sold by alata' btn='order now' style={{borderRadius:'0'}}/>
         </div>
        <div className="bg-[#d3d4e8] hidden lg:block  rounded-b-3xl pt-20 max-w-[85%] mx-auto py-28 -mt-36">
        <p className="text-center text-md mx-6 relative top-56">
        </p>
        </div>
        {/* second */}
        <div className='bg-[#d3d4e8] justify-center max-w-[85%] mx-auto my-10'>
        <p className='p-4 font-semibold text-sm justify-between flex'><p>Igbadun Extra</p><p>Swip for more</p></p>
        </div>
         <div className='flex mx-auto justify-between gap-5 overflow-x-auto max-w-[80%] mt-3'>
                <AfricaCard nameDash='Fried Chicken' AfricaDash={e1} africaPrice='₦10,000' sold='sold by alata' btn='order now' style={{borderRadius:'0'}}/>
                <AfricaCard nameDash='Pizza' AfricaDash={f3} africaPrice='₦10,000' sold='sold by brent' btn='order now' style={{borderRadius:'0'}}/>
                <AfricaCard nameDash='Buger' AfricaDash={bug} africaPrice='₦10,000' sold='sold by brent' btn='order now' style={{borderRadius:'0'}}/>
                <AfricaCard nameDash='Sawama' AfricaDash={g5} africaPrice='₦10,000' sold='sold by alata' btn='order now' style={{borderRadius:'0'}}/>
         </div>
        <div className="bg-[#d3d4e8] hidden lg:block  rounded-b-3xl pt-20 max-w-[85%] mx-auto py-28 -mt-36">
        <p className="text-center text-md mx-6 relative top-56">
        </p>
        </div>
        {/* third */}
        <div className='bg-[#d3d4e8] justify-center max-w-[85%] mx-auto my-10'>
        <p className='p-4 font-semibold text-sm justify-between flex'><p>Swallows</p><p>Swip for more</p></p>
        </div>
         <div className='flex mx-auto justify-between gap-5 overflow-x-auto max-w-[80%] mt-3'>
                <AfricaCard nameDash='Iyan' AfricaDash={g6} africaPrice='₦10,000' sold='sold by Brent' btn='order now' style={{borderRadius:'0'}}/>
                <AfricaCard nameDash='Eba' AfricaDash={g7} africaPrice='₦10,000' sold='sold by Brent' btn='order now' style={{borderRadius:'0'}}/>
                <AfricaCard nameDash='Amala' AfricaDash={g8} africaPrice='₦10,000' sold='sold by alata' btn='order now' style={{borderRadius:'0'}}/>
                <AfricaCard nameDash='Semo' AfricaDash={g9} africaPrice='₦10,000' sold='sold by item7' btn='order now' style={{borderRadius:'0'}}/>
         </div>
        <div className="bg-[#d3d4e8] hidden lg:block  rounded-b-3xl pt-20 max-w-[85%] mx-auto py-28 -mt-36">
        <p className="text-center text-md mx-6 relative top-56">
        </p>
        </div>
        {/* Forth */}
        <div className='bg-[#d3d4e8] justify-center max-w-[85%] mx-auto my-10'>
        <p className='p-4 font-semibold text-sm justify-between flex'><p>Rice</p><p>Swip for more</p></p>
        </div>
         <div className='flex mx-auto justify-between gap-5 overflow-x-auto max-w-[80%] mt-3'>
                <AfricaCard nameDash='Fried rice' AfricaDash={g10} africaPrice='₦10,000' sold='sold by brent' btn='order now' style={{borderRadius:'0'}}/>
                <AfricaCard nameDash='white rice' AfricaDash={g01} africaPrice='₦10,000' sold='sold by item7' btn='order now' style={{borderRadius:'0'}}/>
                <AfricaCard nameDash='Jollof rice' AfricaDash={g02} africaPrice='₦10,000' sold='sold by alata' btn='order now' style={{borderRadius:'0'}}/>
                <AfricaCard nameDash='Ofada rice' AfricaDash={g03} africaPrice='₦10,000' sold='sold by Brent ' btn='order now' style={{borderRadius:'0'}}/>
         </div>
        <div className="bg-[#d3d4e8] hidden lg:block  rounded-b-3xl pt-20 max-w-[85%] mx-auto py-28 -mt-36">
        <p className="text-center text-md mx-6 relative top-56">
        </p>
        </div>
        {/* Fifty */}
        <div className='bg-[#d3d4e8] justify-center max-w-[85%] mx-auto my-10'>
        <p className='p-4 font-semibold text-sm justify-between flex'><p>Drink</p><p>Swip for more</p></p>
        </div>
         <div className='flex mx-auto justify-between gap-5 overflow-x-auto max-w-[80%] mt-3'>
                <AfricaCard nameDash='Bevarages' AfricaDash={g04} africaPrice='₦10,000' sold='sold by item7' btn='order now' style={{borderRadius:'0'}}/>
                <AfricaCard nameDash='5Alive' AfricaDash={g05} africaPrice='₦10,000' sold='sold by by alata' btn='order now' style={{borderRadius:'0'}}/>
                <AfricaCard nameDash='Hollandia' AfricaDash={g06} africaPrice='₦10,000' sold='sold by alata' btn='order now' style={{borderRadius:'0'}}/>
                <AfricaCard nameDash='Water' AfricaDash={g07} africaPrice='₦10,000' sold='sold by item7' btn='order now' style={{borderRadius:'0'}}/>
         </div>
        <div className="bg-[#d3d4e8] hidden lg:block  rounded-b-3xl pt-20 max-w-[85%] mx-auto py-28 -mt-36">
        </div>
        <Footer />
    </>
  )
}

export default ExtralFood