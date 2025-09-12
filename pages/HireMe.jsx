import React from 'react'

const HireMe = () => {
  return (
    <div className='flex flex-col gap-y-4 w-full items-center'>

      <div className='text-4xl text-cyan-700 font-bold'>
        Hire Me
      </div>
      
      <div className='flex flex-col gap-x-4 text-2xl items-center gap-y-4'>
          <p>Phone : +917010833917</p>
          <p>Email : mohammed.taufiq.n@gmail.com</p>
      </div>

      <div className='flex gap-x-5'>
        
        <a href="tel:7010833917" className='bg-cyan-600 px-4 py-2 rounded-full text-white'>
          Call Now
        </a>

        <a href="mailto:mohammed.taufiq.n@gmail.com" className='bg-cyan-600 px-4 py-2 rounded-full text-white'>Send Mail </a>
      </div>

    </div>
  )
}

export default HireMe
