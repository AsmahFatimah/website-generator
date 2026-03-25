import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center min-h-screen text-black text-2xl flex-col font-medium'>
        <div className='w-10 h-10 animate-spin border-5 rounded-full border-[#792C2F] border-t-(--tertiary-color) lg:w-12 lg:h-12'></div>
       <p>Building your website...</p> 
    </div>
    
  )
}

export default Loader
