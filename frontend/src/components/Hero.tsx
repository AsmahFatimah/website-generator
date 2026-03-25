import React from 'react'
import { useSiteDetails } from '../context/SiteContext'
import { Link } from 'react-router-dom'
interface Props{
  customScroll: () => void;
}
const Hero = ({ customScroll } :Props) => {
    const { Business: business, imgs } = useSiteDetails() || {}
  return (
    <>
     <header className=" inset-x-0 h-20">
        <nav aria-label="Global" className="flex items-start justify-start p-6 lg:px-8">
          {
            imgs?.logo ?  (<img
                alt={business?.Name}
                src={imgs.logo}
                className="w-auto h-10"
              />) : (<h1>{business?.Name}</h1>)
          }
       
            </nav>
            </header>
       <div className="flex justify-center items-center flex-col min-h-[60vh] ">
            
      <h1 className='text-(--primary-color) uppercase font-bold text-3xl'>
        {business?.Tagline ||business?.Name} 
      </h1>
      <h2 className="text-(--secondary-color) capitalize font-semibold p-2">
        {business?.Description}
      </h2>
      <button className='btn p-3 rounded-md' onClick={customScroll}>Reach out to us.</button>
      </div>
    </>
  )
  
}

export default Hero
