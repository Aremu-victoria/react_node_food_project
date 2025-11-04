import React from 'react'

const DiscountFood = ({disImg,foodName,foodCon,price,Before,naira}) => {
  return (
    <div>
        <div>
            <img src={disImg} alt="" className='relative top-7'/>
             <div className='bg-white rounded-3xl p-6'>
                <h4 className='font-bold text-2xl'>{foodName}</h4>
                <p className='text-xs'>{foodCon}</p>
                <p>****</p>
                <p className='text-xl text-[#ff4500] font-semibold'>{price}</p>
                <p className='flex justify-between text-xs mt-3'>
                    <p className='font-semibold line-through'>{Before}</p>
                    <p className='text-gray-300 line-through'>{naira}</p>
                </p>
             </div>
        </div>
    </div>
  )
}

export default DiscountFood