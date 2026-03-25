import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { SiteContext } from '../context/SiteContext'
import { useRef } from 'react'
import Hero from '../components/Hero'
import type { Site } from '../types/Site'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import '../index.css'

const WebsitePreview = () => {
    const contactRef = useRef(null)
    const { id } = useParams()
    const [siteDetails, setSiteDetails] = useState<Site | null>(null);
    const [error, setError] = useState('')
    const [loading, setLoading]= useState(false)

    const scrollToAbout =(ref :any) =>{
        console.log('working...')
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }
   
   const fetchData = () => {
    setLoading(true)
    axios.get(`http://localhost:5000/mySites/${id}`)
    .then((res) => {setLoading(false)
        setSiteDetails(res.data)})
    .catch((err) =>{setLoading(false)
        if(err.response?.status === 404){
            setError("website doesn't exist on this url")
        } 
        else{
         setError('server error, try again later')

        }
   })
}


useEffect(() => {
    fetchData()
    console.log(contactRef.current);
}, [id])

// {loading && (<div className='flex justify-center items-center min-h-screen text-black text-2xl flex-col font-medium'>
//         <div className='w-10 h-10 animate-spin border-5 rounded-full border-black border-t-amber-700 lg:w-12 lg:h-12'></div>
//        <p>Building your website...</p> 
//     </div>)}

// {error && (<div>{error}</div>)}
if (loading) {
  return (
    <div className='flex justify-center items-center min-h-screen text-black text-2xl flex-col font-medium'>
      <div className='w-10 h-10 animate-spin border-[5px] rounded-full border-[#792C2F] border-t-(--tertiary-color) lg:w-12 lg:h-12'></div>
      <p>Building your website...</p> 
    </div>
  )
}

if (error) {
  return (
    <div className="flex justify-center items-center min-h-screen text-red-500">
      {error}
    </div>
  )
}
// if(error) return <div>{error}</div> 
if(!siteDetails) return null

return(
    <SiteContext.Provider value={siteDetails}>
        <Hero customScroll={() => scrollToAbout(contactRef)}></Hero>
        <About></About>
        <Contact ref={contactRef}></Contact>
        <Footer></Footer>
    </SiteContext.Provider>
)
}

export default WebsitePreview
