import React from 'react'
import ExplorePic from "../../public/explore.png"
import Image from "next/image"

export default function Explore() {
  return (
    <div className='flex flex-col md:flex-row mt-16'>
      <div className='flex basis-1/2 w-full h-auto align-middle text-center'>
        <Image src={ExplorePic} height={480} width={480} alt='' className='mx-auto mb-6' />
      </div>
      <div className='flex basis-1/2 w-full h-auto flex-col flex-start justify-center md:px-14 px-8'>
        <div className='my-3 lg:text-4xl text-3xl font-BodoniModa font-semibold'>A new way to explore the world</div>
        <div className='my-3 text-lg md:text-xl font-sans text-slate-500'>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect
          trip, but now, they can also let Lonely Planet Experiences lead the way</div>
        <div className='my-3 text-sm md:text-lg bg-[#f79b39] w-fit px-6 py-2 hover:bg-[#d8770f] hover:cursor-pointer rounded-lg text-white'>Learn More</div>
      </div>
    </div>
  )
}
