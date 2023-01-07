import React from 'react'

function Card(props) {


  return (
    <div className='text-center py-10 px-6 my-6 rounded-xl bg-cover bg-center sm:opacity-70 sm:hover:opacity-100 sm:hover:scale-110 transition-all' style={{backgroundImage: `url(${props.bg})`}}>
      <img src={props.img} alt="icon" className='h-24 w-24 md:h-32 md:w-32 m-auto mb-4 md:mb-8' />
      <h3 className='uppercase text-2xl text-fuchsia-700 font-bold mb-10'>{props.heading}</h3>
      <p>{props.para}</p>
    </div>

  )
}

export default Card