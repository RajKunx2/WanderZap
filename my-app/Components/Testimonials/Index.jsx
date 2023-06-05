"use client"
import React from 'react'
import Image from "next/image"
import Stars from "../../public/stars.png";

export default function Index() {

    return (
        <>
            <div className="my-4">
                <h1 className='lg:text-4xl text-3xl font-BodoniModa font-semibold md:px-14 px-8'>Testimonials</h1>
                <div className='flex flex-col md:flex-row-reverse'>
                    <div className='flex basis-1/2 w-full h-auto align-middle text-center'>
                        <Image src={Stars} height={480} width={480} alt='' className='mx-auto mb-6' />
                    </div>
                    <div className='flex basis-1/2 w-full h-auto flex-col flex-start justify-center md:px-14 px-8 mt-3'>
                        <Image src={Stars} height={30} width={100} alt='' className='' />
                        <div className='my-3 text-lg md:text-xl font-sans'>“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</div>
                        <div className="mt-3 font-semibold">Edward Newgate</div>
                        <div className="">Founder Circle</div>
                    </div>
                </div>
            </div>
        </>
    )
}
