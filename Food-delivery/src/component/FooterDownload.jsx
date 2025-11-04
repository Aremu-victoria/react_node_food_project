import React from 'react'
import appStore from '../assets/images/App store.png'
import playStore from '../assets/images/Play store.png'
import chat from '../assets/images/chat.png'
import whatsapp from '../assets/images/whatsapp.png'
import instagram from '../assets/images/instagram.png'
import facebook from '../assets/images/facebook.png'
import twitter from '../assets/images/facebook.png'
const FooterDownload = () => {
  return (
    <div className='mt-5'>
        <h2 className='text-xl text-center'>Download & connect with us</h2>
        <div className='flex mx-auto justify-between space-x-2 mt-4'>
            <p><img src={appStore} alt="" /></p>
            <p><img src={playStore} alt="" /></p>
        </div>
        <p><img src={chat} alt="" className='my-2 justify-center mx-auto'/></p>
        <p className='text-center font-semibold py-2'>Contact us</p>
        <div className='flex gap-3 mx-auto justify-center'>
             <p><img src={whatsapp} alt="" /></p>
             <p><img src={instagram} alt="" /></p>
             <p><img src={facebook} alt="" /></p>
             <p><img src={twitter} alt="" /></p>
        </div>
    </div>
  )
}

export default FooterDownload
