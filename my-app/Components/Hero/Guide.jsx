import React from 'react'
import GuidePic from "../../public/guide.png"
import Image from "next/image"

export default function Guide() {
    return (
        <div className='flex flex-col md:flex-row-reverse mt-16'>
            <div className='flex basis-1/2 w-full h-auto align-middle text-center'>
                <Image src={GuidePic} height={480} width={480} alt='' className='mx-auto mb-6' />
            </div>
            <div className='flex basis-1/2 w-full h-auto flex-col flex-start justify-center md:px-14 px-8'>
                <div className='my-3 lg:text-4xl text-3xl font-BodoniModa font-semibold'>Guides by Thousand
                    Sunny</div>
                <div className='my-3 text-lg md:text-xl font-sans text-slate-500'>Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.</div>
                <div className='my-3 text-sm md:text-lg bg-[#f79b39] w-fit px-6 py-2 hover:bg-[#d8770f] hover:cursor-pointer rounded-lg text-white'>Download</div>
            </div>
        </div>
    )
}