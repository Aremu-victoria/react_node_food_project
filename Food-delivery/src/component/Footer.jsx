import React from 'react'
import FooterCon from './FooterCon'
import FooterLink from './FooterLink'
import FooterContact from './FooterContact'
import FooterDownload from './FooterDownload'

const Footer = () => {
  return (
    <>
        <div className='bg-[#f9bc4b] grid md:grid-cols-4 sm:grid-cols-2 py-4 px-14 mt-10'>
                <FooterCon />
                <FooterLink />
                <FooterContact />
                <FooterDownload />
        </div>
    </>
  )
}

export default Footer