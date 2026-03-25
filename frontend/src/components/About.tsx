import React from 'react'
import { useSiteDetails } from '../context/SiteContext'
import { forwardRef } from 'react'
import Section from '../section/Section'
const About =() => {
    const { business } = useSiteDetails() || {}
  return (
    <Section id='about' title='About Us' subTitle={`We are a dedicated team committed to providing top-quality services to our clients. Since ${business?.established || 'our beginning'}, our goal is to deliver exceptional results and ensure your satisfaction every step of the way.`} className='bg-[#792C2F] text-[#f7cec1]'>
    </Section>
//    <section className="flex flex-col md:flex-row justify-center items-center p-4 lg:px-36 gap-6 bg-[#6666]">
  
//   <div className="flex flex-col justify-center text-center md:text-left max-w-lg">
//     <h3 className="font-bold text-2xl mb-2">About Us</h3>
//     <p className="font-medium text-lg">
//       We are a dedicated team committed to providing top-quality services to our clients. Since {business?.established || 'our beginning'}, our goal is to deliver exceptional results and ensure your satisfaction every step of the way.
//     </p>
//   </div>


// </section>
    
  )
}

export default About
