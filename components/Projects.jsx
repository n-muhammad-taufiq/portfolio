import React from 'react'

const Projects = () => {
  return (
    <div className='flex flex-col items-center w-full px-10 gap-y-20'>

      <div className='text-4xl max-lg:text-2xl border-b-2 border-b-cyan-600 pb-2 decoration-cyan-600'>Projects</div>
      
      <div className='flex flex-col items-start gap-y-5'>
        <p className='text-2xl max-lg:text-xl font-bold '>Cerfira - a Social Media Platform</p>
        <a href="https://www.cerfira.com" target='_blank' rel='noopener noreferrer' className='bg-blue-400 text-white px-4 py-2 rounded-full font-bold text-sm'>View Project</a>
        <div className='rounded-md w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5'>
            <img className='rounded-md  border-2 border-cyan-600 object-cover  h-full w-full col-span-full' src="/project-images/cerfira/Screenshot-1.png" alt="" />
            <img className='rounded-md  border-2 border-cyan-600 object-cover h-full w-full ' src="/project-images/cerfira/Screenshot-2.png" alt="" />
            <img className='rounded-md  border-2 border-cyan-600 object-cover h-full w-full' src="/project-images/cerfira/Screenshot-3.png" alt="" />
            <img className='rounded-md border-2 border-cyan-600 object-cover h-full w-full' src="/project-images/cerfira/Screenshot-4.png" alt="" />
            <img className='rounded-md border-2 border-cyan-600 object-cover h-full w-full' src="/project-images/cerfira/Screenshot-6.png" alt="" />
            <img className='rounded-md  border-2 border-cyan-600 object-cover h-full w-full' src="/project-images/cerfira/Screenshot-7.png" alt="" />
            <img className='rounded-md  border-2 border-cyan-600 object-cover h-full w-full' src="/project-images/cerfira/Screenshot-8.png" alt="" />
            <img className='rounded-md  border-2 border-cyan-600 object-cover h-full w-full' src="/project-images/cerfira/Screenshot-9.png" alt="" />
            <img className='rounded-md  border-2 border-cyan-600 object-cover h-full w-full' src="/project-images/cerfira/Screenshot-10.png" alt="" />
            <img className='rounded-md border-2 border-cyan-600 object-cover h-full w-full' src="/project-images/cerfira/Screenshot-11.png" alt="" />
            <img className='rounded-md  border-2 border-cyan-600 object-cover h-full w-full' src="/project-images/cerfira/Screenshot-12.png" alt="" />
            <img className='rounded-md  border-2 border-cyan-600 object-cover h-full w-full' src="/project-images/cerfira/Screenshot-13.png" alt="" />
            <img className='rounded-md  border-2 border-cyan-600 object-cover h-full w-full' src="/project-images/cerfira/Screenshot-14.png" alt="" />
            <img className='rounded-md  border-2 border-cyan-600 object-cover h-full w-full' src="/project-images/cerfira/Screenshot-15.png" alt="" />
            <img className='rounded-md  border-2 border-cyan-600 object-cover h-full w-full' src="/project-images/cerfira/Screenshot-16.png" alt="" />
            <img className='rounded-md  border-2 border-cyan-600 object-cover h-full w-full' src="/project-images/cerfira/Screenshot-17.png" alt="" />
            <img className='rounded-md  border-2 border-cyan-600 object-cover h-full w-full ' src="/project-images/cerfira/Screenshot-18.png" alt="" />
        </div>
      </div>

      
    </div>
  )
}

export default Projects