import React from 'react'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <div id='about' className='sm:px-16 px-6 sm:py-16 py-10 mt-8 bg-tertiary rounded-2xl flex flex-col md:flex-row gap-3'>
      <div className='flex-1'>
        <h1 className='text-white font-black md:text-[35px] text-[30px]'>O que é a FH2 Business?</h1>
        <div className='h-1 w-20 bg-white rounded-md my-2' />
        <p className='sm:text-[18px] text-[14px] text-secondary tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eveniet, corrupti nam fugit, libero illum nobis nesciunt iure sint officia nihil laborum corporis dicta quidem doloribus ullam pariatur impedit eos.</p>
      </div>
      <div className='flex-1'>
        <h1 className='text-white font-black md:text-[35px] text-[30px]'>O que nós fazemos ?</h1>
        <div className='h-1 w-20 bg-white rounded-md my-2' />
        <p className='sm:text-[18px] text-[14px] text-secondary tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eveniet, corrupti nam fugit, libero illum nobis nesciunt iure sint officia nihil laborum corporis dicta quidem doloribus ullam pariatur impedit eos.</p>
      </div>
    </div>
  )
}

export default SectionWrapper(About, '')