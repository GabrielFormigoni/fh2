import React from 'react'

const Navbar = () => {
  return (
    <div className='px-14 py-6 flex justify-between items-center'>
      <img src="" alt="logo" className='' />

      <div className='flex gap-5 items-center text-lg text-neutral-700'>
        <p className='hover:underline hover:text-black cursor-pointer'><a href="#about">About</a></p>
        <p className='hover:underline hover:text-black cursor-pointer'><a href="#services">Services</a></p>
        <p className='hover:underline hover:text-black cursor-pointer'><a href="#team">Team</a></p>
        <p className='hover:underline hover:text-black cursor-pointer'><a href="#contact">Contact</a></p>
      </div>
    </div>
  )
}

export default Navbar