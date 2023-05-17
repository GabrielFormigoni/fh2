import React from 'react'

const Hero = () => {
  return (
    <section className={`w-full mt-auto md:h-[800px] h-[400px] bg-cover bg-center bg-no-repeat bg-[url('./assets/img1.jpg')] opacity-95 flex items-center`}>
      <div className='sm:px-16 px-6 pt-28 flex flex-col items-start gap-5 text-black opacity-100'>
        <h1 className='md:text-9xl text-xl font-bold mt-10 md:mt-0'>FH2 Business</h1>
        <p className='md:text-3xl text-md max-w-[700px] md:mt-12 font-semibold'>A melhor empresa de consultoria do Centro-Oeste, com atendimento personalizado e que visa entender de fato o ponto de vista do cliente.</p>
      </div>
    </section>
  )
}

export default Hero