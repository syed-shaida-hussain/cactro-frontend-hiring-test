import Image from 'next/image'
import React from 'react'
import { FaThumbsUp } from "react-icons/fa";


const HeroSection = () => {
  return (
<section className="flex flex-col xl:flex-row items-center justify-around gap-8 py-6 px-6 md:px-10">
  <main className="text-center">
    <h1 className="text-4xl md:text-5xl font-bold">Slack is where the future works</h1>
    <p className="text-md md:text-lg mt-4">
      Transform the way you work with one place for everyone and everything you need to get stuff done.
    </p>
    <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
      <button className="bg-[#611F69] text-white px-6 py-3 w-fit">Try for Free</button>

      <div className="flex items-center gap-2 border-2 border-blue-500 pl-3 w-fit">
        <Image width={30} height={30} src="/google-svgrepo-com.svg" alt="google-logo" />
        <button className="bg-blue-500 text-white px-6 py-3">Sign up with Google</button>
      </div>
    </div>
  </main>

  <section className="relative w-[80%] md:w-[50%] aspect-video">
    <Image className="w-full h-full object-cover rounded-lg" src="/slack-ui.jpg" fill alt="slack-ui" />
    <span className='absolute -top-5 left-[20%] bg-white p-2 rounded-full'>
    <FaThumbsUp className=' text-yellow-300' />
    </span>
    <span className='absolute -bottom-5 left-[30%] bg-white p-2 rounded-full'>
    <FaThumbsUp className=' text-yellow-300' />
    </span>    <span className='absolute top-[50%] left-[95%] bg-white p-2 rounded-full'>
    <FaThumbsUp className=' text-yellow-300' />
    </span>
  </section>
</section>


  )
}

export default HeroSection