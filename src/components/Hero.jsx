import React from 'react'

const Hero = () => {
  return (
    <section className={`w-full mt-24 sm:h-[800px] h-[400px] bg-cover bg-center bg-no-repeat bg-[url('./assets/img1.jpg')] flex items-center`}>
      <div className='sm:px-16 px-6 pt-28 flex flex-col items-start gap-5 text-black'>
        <h1 className='sm:text-9xl text-5xl font-bold'>FH2 Business</h1>
        <p className='sm:text-3xl text-xl max-w-[700px] sm:mt-12 font-semibold'>A melhor empresa de consultoria do Centro-Oeste, com atendimento personalizado e que visa entender de fato o seu ponto de vista.</p>
      </div>
    </section>
  )
}

export default Hero