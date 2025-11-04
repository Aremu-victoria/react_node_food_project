import React from 'react'
import Button from '../Botton'
import lock from  '../../assets/images/lock.png'
import { Link } from 'react-router'
const PasswordReset = () => {
  return (
    <>
        <div className='bg-white shadow-lg p-4  max-w-sm md:w-full w-[90%] mx-auto mt-16 mb-10 text-center'>
            <p><img src={lock} alt="" className='justify-center mx-auto'/></p>
            <h2 className='my-3 font-bold text-3xl text-center '>Password Reset successsful</h2>
            <p>You have successfully reset your password please use your new password when login</p>
            <form action="">
           <Link to='/login'><Button generalButton = 'Log In' style={{marginTop: '14px'}} /></Link>
            </form>
        </div>
    </>
  )
}

export default PasswordReset