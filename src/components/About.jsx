import React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'

const About = () => {
  return (
    <motion.div
      variants={fadeIn("", "", 0.1, 1)}
      className='sm:px-16 px-6 sm:py-16 py-10 mt-8 bg-tertiary rounded-2xl flex flex-col md:gap-12 gap-6 mb-[100px]'
    >
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Conheça a nossa história</p>
        <h2 className={styles.sectionHeadText}>Sobre nós.</h2>
      </motion.div>
      <div>
        <h1 className='text-white font-black md:text-[35px] text-[30px]'>O que é a FH2 Business?</h1>
        <div className='h-1 w-20 bg-white rounded-md mb-4' />
        <p className='sm:text-[18px] text-[14px] text-secondary tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eveniet, corrupti nam fugit, libero illum nobis nesciunt iure sint officia nihil laborum corporis dicta quidem doloribus ullam pariatur impedit eos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt placeat fugiat omnis, nulla beatae modi ipsam? Provident assumenda odio quas asperiores ex neque quis maxime aperiam magnam deserunt! Quia, accusamus!</p>
      </div>
      <div className='flex gap-6 flex-col md:flex-row'>
        <div className='flex-1'>
          <h1 className='text-white font-black md:text-[35px] text-[30px]'>Como nós trabalhamos?</h1>
          <div className='h-1 w-20 bg-white rounded-md mb-4' />
          <p className='sm:text-[18px] text-[14px] text-secondary tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eveniet, corrupti nam fugit, libero illum nobis nesciunt iure sint officia nihil laborum corporis dicta quidem doloribus ullam pariatur impedit eos.</p>
        </div>
        <div className='flex-1'>
          <h1 className='text-white font-black md:text-[35px] text-[30px]'>O que nós fazemos?</h1>
          <div className='h-1 w-20 bg-white rounded-md mb-4' />
          <p className='sm:text-[18px] text-[14px] text-secondary tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eveniet, corrupti nam fugit, libero illum nobis nesciunt iure sint officia nihil laborum corporis dicta quidem doloribus ullam pariatur impedit eos.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default SectionWrapper(About, 'about')