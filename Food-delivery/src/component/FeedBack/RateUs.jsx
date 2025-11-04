import { Rating} from 'flowbite-react'
import React from 'react'
import Button from '../Botton'
import { Link } from 'react-router'
const RateUs = () => {
  return (
    <>
        <div className='bg-[#d3d4e8] rounded-t-md w-[85%] justify-center mx-auto mt-10'>
            <p className='p-5 font-semibold'>Your Opinion matters to us!</p>
        </div>
        <form action="" className="flex flex-col items-center">
        <div className='lg:flex gap-32 justify-center items-center mt-5 flex-wrap'>
            <div>
                <p className='font-semibold text-xl py-2'>Rata the Application</p>
                <p className='mb-10'>
                    <Rating className='space-x-9'>
                          <Rating.Star className='text-[#FF4500] h-6 w-6'/>
                          <Rating.Star className='text-[#FF4500] h-6 w-6'/>
                          <Rating.Star className='text-[#FF4500] h-6 w-6' />
                          <Rating.Star className='h-6 w-6' filled={false}/>
                          <Rating.Star className='h-6 w-6' filled={false} />
                    </Rating>
                </p>
                <textarea name="" placeholder='Leave a message if you want' id="" cols='30' rows='4' className='border-none'></textarea>
            </div>
            <div>
                <p className='font-semibold text-xl py-2'>Rate the kitchen</p>
                <p className='mb-10'>
                <Rating className='space-x-9'>
                          <Rating.Star className='text-[#FF4500] h-6 w-6'/>
                          <Rating.Star className='text-[#FF4500] h-6 w-6'/>
                          <Rating.Star className='text-[#FF4500] h-6 w-6' />
                          <Rating.Star className='h-6 w-6' filled={false}/>
                          <Rating.Star className='h-6 w-6' filled={false} />
                    </Rating>
                </p>
                <textarea name="" placeholder='Leave a message if you want' id="" cols='30' rows='4' className='border-none'></textarea>
            </div>
        </div>
        <div className='lg:flex gap-32  justify-center mx-auto items-center mt-5'>
            <div>
                <p className='font-semibold text-xl py-2'>Rata the Delivery</p>
                <p className='mb-10'>
                <Rating className='space-x-9'>
                          <Rating.Star className='text-[#FF4500] h-6 w-6'/>
                          <Rating.Star className='text-[#FF4500] h-6 w-6'/>
                          <Rating.Star className='text-[#FF4500] h-6 w-6' />
                          <Rating.Star className='h-6 w-6' filled={false}/>
                          <Rating.Star className='h-6 w-6' filled={false} />
                    </Rating>
                </p>
                <textarea name="" placeholder='Leave a message if you want' id="" cols='30' rows='4' className='border-none'></textarea>
            </div>
            <div>
                <p className='font-semibold text-xl py-2'>Rate the Food</p>
                <p className='mb-10'>
                    <Rating className='space-x-9'>
                          <Rating.Star className='text-[#FF4500] h-6 w-6'/>
                          <Rating.Star className='text-[#FF4500] h-6 w-6'/>
                          <Rating.Star className='text-[#FF4500] h-6 w-6' />
                          <Rating.Star className='h-6 w-6' filled={false}/>
                          <Rating.Star className='h-6 w-6' filled={false} />
                    </Rating>
                </p>
                <textarea name="" placeholder='Leave a message if you want' id="" cols='30' rows='4' className='border-none'></textarea>
            </div>
        </div>
            <div className='w-[50%] justify-center mx-auto my-10'>
          <Link to ='/feeds'><Button generalButton='Rate now' /></Link>
            </div>
        </form>
    </>
  )
}

export default RateUs