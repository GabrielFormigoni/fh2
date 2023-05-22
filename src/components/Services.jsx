import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { textVariant, fadeIn, staggerContainer } from '../utils/motion'
import { projects } from '../constants'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
        </div>

        {/* Description */}
        <div className='mt-5'>
          <h3 className='font-bold text-[22px] text-white'>{name}</h3>
          <p className='text-secondary mt-2 text-[14px]'>{description}</p>
        </div>

        {/* Technologies used */}
        <div className='mt-4 flex flex-wrap gap-4'>
          {tags.map((item, idx) => (
            <p key={idx} className={`text-[14px] ${item.color}`}>
              #{item.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Services = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className='bg-black-100 w-full flex flex-col md:px-20 px-6 py-20 bg-opacity-80'>

      <span className='hash-span' id="services" >
          &nbsp;
      </span>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>O que nós fazemos?</p>
        <h2 className={styles.sectionHeadText}>Serviços.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[14px] md:text-[17px] max-w-3xl leading-[30px]'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat reprehenderit, dolorum cumque aliquam quaerat similique repellendus laborum assumenda maiores enim odit quisquam, mollitia obcaecati voluptate eos ipsam voluptatibus non adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsum doloremque vel corrupti magnam quaerat earum.
        </motion.p>
      </div>

      {/* Project Cards */}
      <div className='mt-20 flex flex-wrap gap-7 w-full justify-center'>
        {projects.map((item, idx) => (
          <ProjectCard key={idx} index={idx} {...item} />
        ))}
      </div>

    </motion.section>
  )
}

export default Services