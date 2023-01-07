import {FiSun} from 'react-icons/fi'
import {FiMoon} from 'react-icons/fi'
import { useState } from 'react'

function Header() {
  const [mode, setMode] = useState(false)

  return (
    <nav className='h-12 m-4 md:m-16 flex justify-between items-center gap-4 mb-12 md:mb-20'>
      <h1 className='text-2xl font-nanum md:text-4xl font-medium'>RTDummy</h1>
      <ul className='flex justify-center items-center gap-4'>
        <li className='flex gap-2 md:gap-4 items-center h-9 bg-indigo-800 relative border-indigo-500 border-2 rounded-xl'>
          <span className='h-9 w-1/2 md:w-1/2 rounded-xl bg-indigo-500 opacity-40 absolute right-0'></span>
          <FiSun className='h-4 w-4 mx-2 my-1 md:h-5 md:w-5 cursor-pointer' onClick={() => setMode(!mode)} />
          <FiMoon className='h-4 w-4 mx-2 my-1 md:h-5 md:w-5 cursor-pointer' /> 
        </li>
        <li className='h-8 px-2 bg-indigo-800 border-indigo-500 border-2 rounded-lg flex md:hover:bg-indigo-900 transition'><a href="#" className='text-green-400 font-normal text-xs self-center'>Reasume</a></li>
      </ul>
    </nav>
  )
}

export default Header