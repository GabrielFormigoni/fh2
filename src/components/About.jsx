import React from 'react'

const About = () => {
  return (
    <div id='about' className='sm:p-6 p-3 mt-8 sm:mx-12 mx-2 bg-green-900 rounded-md flex flex-col md:flex-row gap-3'>
      <div className='flex-1'>
        <h1 className='text-white font-bold sm:text-2xl text-lg'>O que é a FH2 Business?</h1>
        <div className='h-1 w-20 bg-white rounded-md mt-2' />
        <p className='text-white sm:text-lg text-sm mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eveniet, corrupti nam fugit, libero illum nobis nesciunt iure sint officia nihil laborum corporis dicta quidem doloribus ullam pariatur impedit eos.</p>
      </div>
      <div className='flex-1'>
        <h1 className='text-white font-bold sm:text-2xl text-lg'>O que nós fazemos ?</h1>
        <div className='h-1 w-20 bg-white rounded-md mt-2' />
        <p className='text-white sm:text-lg text-sm mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eveniet, corrupti nam fugit, libero illum nobis nesciunt iure sint officia nihil laborum corporis dicta quidem doloribus ullam pariatur impedit eos.</p>
      </div>
    </div>
  )
}

export default About