import React, { useEffect } from 'react'

const Loading = () => {
    useEffect(()=>{
        document.body.style.overflow='hidden';

        return ()=>{
            document.body.style.overflow='auto';
        }
    },[])
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black/90 '>
      <div className='h-24 w-24 flex items-center justify-center font-bold rounded-full border-dotted border-4 border-blue-400 animate-spin'>
        <div className='h-20 w-20 bg-white rounded-full flex items-center justify-center text-xs text-gray-800 font-bold animate-pulse'>
        </div>
        
      </div>
    </div>
  )
}

export default Loading
