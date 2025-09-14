import React from 'react'
import ContactForm from './ContactForm'

const HireMe = () => {
  return (
    <div className='flex flex-col items-center self-center gap-y-8'>
      <p className='heading text-3xl max-lg:text-xl '>
          H<span className='text-blue-400'>I</span>R<span className='text-blue-400'>E</span> M<span className='text-blue-400'>E</span>
      </p>

      <ContactForm></ContactForm>

      </div>
  )
}

export default HireMe
