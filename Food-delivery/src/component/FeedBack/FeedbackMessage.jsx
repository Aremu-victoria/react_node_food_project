import React from 'react'
import Button from '../Botton'
import feed from '../../assets/images/feed.png'
import { Link } from 'react-router'
const FeedbackMessage = () => {
  return (
    <>
         <div className='bg-white shadow-lg rounded-lg py-5 text-center  max-w-xs md:w-full w-[90%] mx-auto mt-11'>
            <img src={feed} alt="" className='justify-center mx-auto pb-10'/>
            <p className='text-4xl py-2'>Thanks for the Feedback</p>
            <p>Your responds have been submited</p>
            <div className='mt-16 relative top-5'>
                <Link to='/'><Button generalButton='Back to home'/></Link>
            </div>
         </div>
    </>
  )
}

export default FeedbackMessage