import React from 'react'
import Card from './Card'
import design from '../assets/design.png'
import code from '../assets/code.png'
import consult from '../assets/consult.png'
import cardBg1 from '../assets/cardbg.png'
import cardBg2 from '../assets/cardbg2.png'

function Services() {

  const designText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  const codeText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  const consultText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";


  return (
    <section className='mt-16 p-4 sm:p-14'>
      <h1 className='text-2xl md:text-3xl text-indigo-300 font-semibold text-center mb-8 underline underline-offset-8'>Services</h1>
      <p className='text-base text-left md:text-center mb-8'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. <mark className='bg-transparent text-fuchsia-700'>Distinctio</mark> laborum explicabo non hic placeat modi qui <mark className='bg-transparent text-fuchsia-700'>necessitatibus</mark> quas amet cupiditate!
      </p>
      <p className='text-right md:text-center'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, repellat.
      </p>
      <div className='px-10 md:px-16 py-12 flex flex-col sm:flex-row sm:gap-16'>
        <Card 
          img={design}
          heading={"Design"}
          bg={cardBg1}
          para={designText} 
        />
        <Card 
          img={code}
          heading={"Code"}
          bg={cardBg2}
          para={codeText} 
        />
        <Card 
          img={consult}
          heading={"Consult"}
          bg={cardBg1}
          para={consultText} 
        />
      </div>
    </section>
  )
}

export default Services