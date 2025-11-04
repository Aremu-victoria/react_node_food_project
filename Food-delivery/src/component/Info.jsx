import React from 'react'

const Info = ({location,property,price}) => {
  return (
    <div>
        <div className='lg:flex justify-between lg:space-x-10'>
            <p className='flex justify-between space-x-4'>
                <p className='space-y-1'>
                <p>{location}</p>
                <p className='font-semibold'>
                {/* <button id="dropdown-button" data-dropdown-toggle="dropdown" class="z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2dark:hover:text-white">Mockups</button>
            </li>
            <li>
            <button type="button" class="inline-flex w-full px-4 py-2dark:hover:text-white">Mockups</button>
            </li>
            <li>
            <button type="button" class="inline-flex w-full px-4 py-2dark:hover:text-white">Mockups</button>
            </li>
            </ul> */}
        {/* </div> */}Nigeria, Lagos
                </p>
                </p>
                <div className='h-14 w-1 bg-gray-300 lg:block hidden'></div>
            </p>
            <p className='flex justify-between space-x-4'>
                <p className='space-y-2'>
                <p>{property}</p>
                <p className='font-semibold'>Nigeria, Lagos</p>
                </p>
                <div className='h-14 w-1 bg-gray-300 lg:block hidden'></div>
            </p>
            <p className='flex justify-between space-x-4'>
                <p className='space-y-2'>
                <p>{price}</p>
                <p className='font-semibold'>Nigeria, Lagos</p>
                </p>
                <div className='h-14 w-1 bg-gray-300 lg:block hidden '></div>
            </p>
        </div>
    </div>
  )
}

export default Info


