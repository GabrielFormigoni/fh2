import { motion } from 'framer-motion'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'

const TestimonialCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-[16px] font-medium text-white'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>
        <img src={image} alt={name} className='w-10 h-10 rounded-full object-contain' />
      </div>
    </div>

  </motion.div>
)
const Testimonials = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div
          variants={textVariant}
        >
          <p className={styles.sectionSubText}>O que os outros dizem</p>
          <h2 className={styles.sectionHeadText}>Testemunhas.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap justify-center gap-7`}>
        {testimonials.map((item, idx) => (
          <TestimonialCard key={item.name} index={idx} {...item} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Testimonials, '')