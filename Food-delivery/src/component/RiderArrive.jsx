import React from 'react'

const RiderArrive = ({total,totalMin,button}) => {
  return (
    <div>
         <p className='md:flex justify-between bg-white  p-2'>
            <p>
                <p className='text-gray-200'>{total}</p>
                <p className='font-semibold'>{totalMin}</p>
            </p>
            <button className='bg-[#FE4501] text-white rounded-md p-1 px-3'>{button}</button>
        </p>
    </div>
  )
}

export default RiderArrive