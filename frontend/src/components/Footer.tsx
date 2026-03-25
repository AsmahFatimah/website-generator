import React from 'react'
import { useSiteDetails } from '../context/SiteContext'
import { Link, useParams } from 'react-router-dom';

const Footer = () => {
    const { Business: business, imgs } = useSiteDetails() || {}
    const date = new Date().getFullYear();
    const scrollToTop = (event:any) =>{
        event.preventDefault()
        window.scrollTo({top: 0, behavior:'smooth'})
    }
  return (
    <>
<footer className="bg-black text-[#d1dfdbef] rounded-base shadow-xs  border-defaul ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href='' onClick={scrollToTop} className="flex items-center mb-4 sm:mb-0">
                {
                    imgs?.logo ? (
                <><img src={imgs?.logo} className="h-7" alt={`${business?.Name}'s logo`} /><span className="text-heading self-center text-2xl font-medium whitespace-nowrap ml-1 capitalize">{business?.Name}</span></>

                    ) : (
                <span className="text-heading self-center text-2xl font-medium whitespace-nowrap ml-1 capitalize">{business?.Name}</span>

                    )
                }
            </a>
        </div>
        <hr className="my-6 border-default sm:mx-auto lg:my-8" />
        <span className="block text-sm text-body sm:text-center">© {date} {business?.Name}™. All Rights Reserved.</span>
    </div>
</footer>


    </>
  )
}

export default Footer
