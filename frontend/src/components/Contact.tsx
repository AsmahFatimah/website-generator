import React from 'react'
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useSiteDetails } from '../context/SiteContext';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import Section from '../section/Section';

const Contact = forwardRef((props, ref) => {
    const { Contact: contact, Address: address } = useSiteDetails() || {}
  return (
    // <section className="flex flex-col justify-center items-center text-center " ref={ref}>

    // <h3 className="font-bold text-2xl mb-2 capitalize">Reach out to Us</h3>
    // <h4 className='text-center max-w-lg'>Have questions or need more information? Our team is here to help. Reach out to us anytime and we’ll be happy to assist you</h4>
    // <div className='flex justify-center flex-col gap-1.5 text-start mt-2'>
    <Section title='Reach out to Us' subTitle='Have questions or need more information? Our team is here to help. Reach out to us anytime and we’ll be happy to assist you' id='contact'>
      <div className="p-4">
{
        contact?.phoneNumber && (<div className='flex items-center flex-row gap-1 py-1'><IoIosCall /><a href={`tel:${contact.phoneNumber}`}>{contact.phoneNumber}</a></div>)
    }
     {
        contact?.emailAddress && (<div className='flex items-center flex-row gap-1 py-1'><MdOutlineMailOutline /><a href={`mailto:${contact.emailAddress}`}>{contact.emailAddress}</a></div>)
    }
    {
        address && (<div className='flex items-baseline flex-row gap-1 max-w-lg shrink-0 py-1'><FaLocationDot /><a href={`https://www.google.com/maps/search/?api=1&query=${address}`} target='_blank' rel='noopener noreferrer' className='wrap-break-word'>{address}</a></div>)
    }
      </div>
 
    </Section>
//  {
//         contact.phoneNumber && (<div className='flex items-center flex-row gap-1'><IoIosCall /><a href={`tel:${Contact.phoneNumber}`}>{Contact.phoneNumber}</a></div>)
//     }
//      {
//         Contact.emailAddress && (<div className='flex items-center flex-row gap-1'><MdOutlineMailOutline /><a href={`mailto:${Contact.emailAddress}`}>{Contact.emailAddress}</a></div>)
//     }
//     {
//         Address && (<div className='flex items-baseline flex-row gap-1 max-w-lg shrink-0'><FaLocationDot /><a href={`https://www.google.com/maps/search/?api=1&query=${Address}`} target='_blank' rel='noopener noreferrer' className='wrap-break-word'>{Address}</a></div>)
//     }
    // </div>
    
   
    // </section>

  )
})

export default Contact