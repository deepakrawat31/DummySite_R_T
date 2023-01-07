import React from 'react'
import footImg1 from '../assets/footimg1.jpg'
import footImg2 from '../assets/footimg2.jpg'
import footImg3 from '../assets/footimg3.jpg'
import footImg4 from '../assets/footimg4.jpg'
import footerBg from '../assets/footerbg.png'
import {BiCopyright} from 'react-icons/bi'

function Footer() {
  return (
    <div>
      <h1 className='text-xl md:text-2xl text-indigo-300 font-semibold text-center mb-8 underline underline-offset-8'>Things I Have Worked On</h1>
      <div className='p-4 sm:p-14 mt-12 sm:mt-28 grid place-items-center sm:grid-rows-3 sm:grid-cols-2 gap-4 sm:gap-6'>
        <img src={footImg1} alt="unsplash" className='rounded-xl sm:opacity-70 sm:hover:opacity-100 sm:row-span-2 sm:hover:scale-105 transition-all h-full' />
        <img src={footImg2} alt="unsplash" className='rounded-xl sm:opacity-70 sm:hover:opacity-100 sm:hover:scale-105 transition-all' />
        <img src={footImg3} alt="unsplash" className='rounded-xl sm:opacity-70 sm:hover:opacity-100 sm:hover:scale-105 transition-all' />
        <img src={footImg4} alt="unsplash" className='rounded-xl sm:opacity-70 sm:hover:opacity-100 sm:hover:scale-105 transition-all' />
      </div>
      <footer className='h-16 sm:h-28 flex items-center justify-center bg-cover bg-top' style={{backgroundImage: `url(${footerBg})`}}>
        <p className='text-emerald-300 text-sm sm:text-lg'>Designed by ****** <BiCopyright className='inline text-lg' /></p>
      </footer>
    </div>
  )
}

export default Footer