import React from 'react'
import { IoLogoSlack } from "react-icons/io";


const Logos = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-6 gap-6 justify-items-center py-10 px-6 md:px-10">
    <div className='flex items-center gap-2'><IoLogoSlack className='w-8 h-8'/>Fox</div>
    <div className='flex items-center gap-2'><IoLogoSlack className='w-8 h-8'/>Lonely planet</div>
    <div className='flex items-center gap-2'><IoLogoSlack className='w-8 h-8'/>intuit</div>
    <div className='flex items-center gap-2'><IoLogoSlack className='w-8 h-8'/>kiwa</div>
    <div className='flex items-center gap-2'><IoLogoSlack className='w-8 h-8'/>dewa</div>
    <div className='flex items-center gap-2'><IoLogoSlack className='w-8 h-8'/>logo</div>
  </section>
  )
}

export default Logos