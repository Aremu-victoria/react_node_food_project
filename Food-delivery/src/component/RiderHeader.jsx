import React from 'react'

const RiderHeader = ({headling,style}) => {
  return (
    <div>
        <div className={`bg-[#D3D5E9] w-full rounded-t-md p-3 ${style}`}>
            <span className='font-semibold text-2xl'>{headling}</span>
        </div>
    </div>
  )
}

export default RiderHeader