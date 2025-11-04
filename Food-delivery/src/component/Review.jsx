import { Rating } from 'flowbite-react'
import React from 'react'

const Review = () => {
  return (
    <div className='bg-white p-2 space-y-3 w-full'>
        <p>
    <Rating>
      <Rating.Star className='text-[#FF4500]'/>
      <Rating.Star className='text-[#FF4500]'/>
      <Rating.Star className='text-[#FF4500]'/>
      <Rating.Star className='text-[#FF4500]'/>
      <Rating.Star className='text-[#FF4500]'/>
      <p className="ml-6 text-sm font-medium text-gray-500 dark:text-gray-400">12 people</p>
    </Rating>
        </p>
        <p>
    <Rating>
      <Rating.Star className='text-[#FF4500]'/>
      <Rating.Star className='text-[#FF4500]'/>
      <Rating.Star className='text-[#FF4500]'/>
      <Rating.Star className='text-[#FF4500]'/>
      <Rating.Star filled={false} />
      <p className="ml-6 text-sm font-medium text-gray-500 dark:text-gray-400">8 people</p>
    </Rating>
        </p>
        <p>
    <Rating>
      <Rating.Star className='text-[#FF4500]'/>
      <Rating.Star className='text-[#FF4500]'/>
      <Rating.Star className='text-[#FF4500]'/>
      <Rating.Star filled={false}/>
      <Rating.Star filled={false}/>
      <p className="ml-6 text-sm font-medium text-gray-500 dark:text-gray-400">15 people</p>
    </Rating>
        </p>
        <p>
    <Rating>
      <Rating.Star className='text-[#FF4500]'/>
      <Rating.Star className='text-[#FF4500]'/>
      <Rating.Star filled={false}/>
      <Rating.Star filled={false}/>
      <Rating.Star filled={false} />
      <p className="ml-6 text-sm font-medium text-gray-500 dark:text-gray-400">4 people</p>
    </Rating>
        </p>
        <p>
    <Rating>
      <Rating.Star className='text-[#FF4500]'/>
      <Rating.Star filled={false}/>
      <Rating.Star filled={false}/>
      <Rating.Star filled={false}/>
      <Rating.Star filled={false} />
      <p className="ml-6 text-sm font-medium text-gray-500 dark:text-gray-400">2 people</p>
    </Rating>
        </p>
    </div>
  )
}

export default Review