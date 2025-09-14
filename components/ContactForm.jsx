import React from 'react'
import { useForm,ValidationError } from '@formspree/react'

const ContactForm = () => {

    const [state,handleSubmit]=useForm('xnnbreay')

    if(state.succeeded){
        return  <p className=''>Thank you for contacting!</p>
    }

    
  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-start gap-y-5 text-sm'>
        <label className='text-white font-normal' htmlFor="name">Name</label>
        <input placeholder='Name' className='bg-white rounded-md px-5 py-3 text-gray-800 outline-none w-80 max-lg:w-70 max-md:w-60 ' type="text" name="name" id="name" />
        <label className='text-white font-normal' htmlFor="email">Email</label>
        <input placeholder='Email' className='bg-white rounded-md px-5 py-3 text-gray-800 outline-none w-80 max-lg:w-70 max-md:w-60 ' type="email" name="email" id="email" />
        <ValidationError prefix='Email' field='email' errors={state.errors}></ValidationError>
        <label className='text-white font-normal' htmlFor="phone-number">Phone Number</label>
        <input placeholder='Phone Number (Optional)' className='bg-white rounded-md px-5 py-3 text-gray-800 outline-none w-80 max-lg:w-70 max-md:w-60 ' name="phone-number" id="phone-number" />
        <label className='text-white font-normal' htmlFor="message">Your Message</label>
        <textarea className='bg-white rounded-md px-5 py-3 text-gray-800 outline-none resize-none h-70 w-80 max-lg:w-70 max-md:w-60' placeholder='message' name="message" id="message"></textarea>
        <ValidationError prefix='Message' field='message' errors={state.errors}></ValidationError>

        <button type='submit' disabled={state.submitting} className='bg-blue-400 w-fit text-white px-4 py-2 rounded-full self-center cursor-pointer'>Send</button>

    </form>
  )
}

export default ContactForm
