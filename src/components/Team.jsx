import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { team } from '../constants'

const Team = () => {
  return (
    <div id='team' className='bg-black-100 w-full flex flex-col md:px-20 px-6 py-20'>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Qual é a nossa equipe?</p>
        <h2 className={styles.sectionHeadText}>Time.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[14px] md:text-[17px] max-w-3xl leading-[30px]'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat reprehenderit, dolorum cumque aliquam quaerat similique repellendus laborum assumenda maiores enim odit quisquam, mollitia obcaecati voluptate eos ipsam voluptatibus non adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsum doloremque vel corrupti magnam quaerat earum.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-7'>
        {team.map((item) => (
          <div className='bg-primary max-w-[300px] rounded-md'>
            <img src={item.image} alt="image" className='w-[300px] h-fit object-contain rounded-t-md' />
            <div className='px-8 pb-10 pt-6'>
              <p className='text-white text-[30px] font-semibold'>{item.name}</p>
              <p className='text-secondary mt-6'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team