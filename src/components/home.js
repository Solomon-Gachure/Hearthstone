import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-screen'>
      {/**hero section with the different wordings */}
      <div className='w-full '>
        <img  
        className='object-cover w-full h-[500px] '
        src="https://img.freepik.com/free-photo/modern-styled-entryway_23-2150695877.jpg?uid=R114683630&ga=GA1.1.134876288.1693412887&semt=ais_ai_generated"
         alt="hero section" />
         <div className='flex flex-col justify-center items-center  absolute inset-0'>
          <h1 className='text-2xl md:text-6xl font-bold text-lime-400'>HEARTHSTONE APARTMENTS</h1>
          <p className='text-xl md:text-4xl font-bold text-white'>Welcome to our prestigious apartments</p>
          <p className='text-xl md:text-3xl font-bold text-white'>Where safe is home & home is safe!</p>
         </div>
      </div>
      
    </div>
  )
}

export default Home