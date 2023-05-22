import React from 'react'
import logo from "../assets/logo.png";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='font-poppins py-10 flex justify-between items-center text-white text-[18px]  gap-6 px-8 md:flex-row flex-col bg-black-100'>
      <img src={logo} alt="logo" className="object-contain w-24 md:h-20 h-12 cursor-pointer hidden md:block" />
      <small>Copyright Ⓒ FH2 Business. All Rights Reserved</small>
      <div className="flex gap-8 items-center">
        <BsTwitter size={25} className='cursor-pointer' />
        <BsLinkedin size={25} className='cursor-pointer' />
        <BsInstagram size={25} className='cursor-pointer' />
        <BsFacebook size={25} className='cursor-pointer' />
      </div>
    </div>
  )
}

export default Footer