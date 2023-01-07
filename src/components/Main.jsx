import {AiFillGithub, AiFillLinkedin, AiFillCodepenCircle} from 'react-icons/ai';
import deep from '../assets/avatar.png';

function Main() {
  return (
    <main className="p-4 sm:p-14 my-8 text-center">
      <h1 className="text-4xl text-indigo-600 md:text-6xl uppercase mb-2 md:mb-4">john marko</h1>
      <h3 className='text-xs text-indigo-300 md:text-base mb-10 md:mb-16'>Lorem ipsum dolor sit amet.</h3>
      <p className='text-base text-right mb-10 max-w-xl m-auto md:text-lg md:text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique odio culpa, quibusdam velit commodi.
      </p>
      <div className='flex gap-16 text-indigo-500 items-center justify-center text-3xl md:mb-16'>
        <AiFillGithub className='md:hover:scale-125 transition-all' />
        <AiFillLinkedin className='md:hover:scale-125 transition-all' />
        <AiFillCodepenCircle className='md:hover:scale-125 transition-all' />
      </div>
      <div className='h-60 w-60 flex items-start justify-center overflow-hidden mx-auto my-8 md:my-20 bg-gradient-to-b from-indigo-900 to-indigo-300 rounded-full'>
        <img src={deep} alt="me" className='h-64 w-64' />
      </div>
    </main>
  )
}

export default Main