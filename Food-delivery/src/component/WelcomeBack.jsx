import React from 'react'

const WelcomeBack = ({welcome,date, code}) => {
  return (
    <div className='flex justify-between text-black'>
      <p>
        <p className='text-xl font-semibold'>{welcome}</p>
        <span className='text-thin hiddem'>{code}</span>
      </p>

        <p className='font-semibold'>{date}</p>
    </div>
  )
}

export default WelcomeBack