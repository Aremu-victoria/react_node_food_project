
import chif from '../assets/images/chf.png'
import DiscountFood from './DiscountFood'
import component2 from '../assets/images/amala.png'
import component1 from '../assets/images/amala.png'
import component3 from '../assets/images/jollof.png'
const Discount = () => {
  return (
    <>
    <div className='md:bg-[#d3d4e8] justify-center max-w-[80%] mx-auto rounded-3xl py-5 mt-5'>
            <div className='text-center py-2'>
            <h2 className='font-bold text-2xl'>Enjoy 20% discount</h2>
            <p className='text-lg'>on all the below food</p>
        </div>
    <div className='flex'>
        <img src={chif} alt="" className='w-60 hidden md:block pt-9 relative top-12'/>
        <div className='md:flex grid md:grid-cols-5 sm:grid-cols-3 md:relative md:top-16 md:right-16 md:h-auto h-80 overflow-y-auto gap-5 md:gap-8 mx-auto justify-center'>
            <DiscountFood disImg={component2} foodName='Snail' foodCon='sold by item7go' price='₦5,600' Before='Before' naira='₦7000'/>
            <DiscountFood disImg={component1} foodName='Amala' foodCon='sold by Alata' price='₦4,000' Before='Before' naira='₦5000'/>
            <DiscountFood disImg={component3} foodName='Jollof Rice' foodCon='sold by item7go' price='₦48000' Before='Before' naira='₦6000'/>
            <DiscountFood disImg={component2} foodName='Semo' foodCon='sold by Alata' price='₦4000' Before='Before' naira='₦5000'/>
            <DiscountFood disImg={component2} foodName='Isi Ewu' foodCon='sold by item7go' price='₦7200' Before='Before' naira='₦9000'/>
        </div>
    </div>
        <p className='text-2xl font-bold me-10 relative top-5 text-center md:text-right italic'>it's not just food it's an <span className='text-[#ff4500]'> Experience </span></p>
    </div>
    </>
  )
}

export default Discount