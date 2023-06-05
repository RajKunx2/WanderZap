import React from 'react'
import HeroPic from "../../public/hero.png"
import Image from "next/image"
import Marquee from "react-fast-marquee";

export default function Hero() {
    return (
        <>
            <div className='flex flex-col-reverse md:flex-row w-screen h-fit mt-24'>
                <div className='flex basis-1/2 flex-col md:mx-14 mx-4'>
                    <div className='lg:text-5xl text-4xl mt-12 mb-8 font-BodoniModa font-semibold md:mx-4 mx-2'>Explore And Travel</div>
                    <div className='lg:text-3xl text-2xl my-4 font-BodoniModa md:mx-4 mx-2 text-slate-600'>Holiday Finder</div>
                    <div className='flex flex-col justisfy-start'>
                        <div className='flex flex-row'>
                            <div className='basis-1/2 md:mx-4 mx-2 mt-8'>
                                <select className='w-full rounded-lg h-10 bg-slate-100 px-2'>
                                    <option value="fruit">Location</option>
                                    <option value="vegetable">India</option>
                                    <option value="meat">Nepal</option>
                                    <option value="meat">Sri Lanka</option>
                                </select>
                            </div>
                            <div className='basis-1/2 md:mx-4 mx-2 mt-8'>
                                <select className='w-full rounded-lg h-10 bg-slate-100 px-2'>
                                    <option value="fruit">Activity</option>
                                    <option value="vegetable">Riding</option>
                                    <option value="meat">Mountains</option>
                                    <option value="meat">Sightseeing</option>
                                </select>
                            </div>
                            <div></div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='basis-1/2 md:mx-4 mx-2 mt-8'>
                                <select className='w-full rounded-lg h-10 bg-slate-100 px-2'>
                                    <option value="fruit">Grade</option>
                                    <option value="vegetable">High</option>
                                    <option value="meat">Mid</option>
                                    <option value="meat">Low</option>
                                </select>
                            </div>
                            <div className='basis-1/2 md:mx-4 mx-2 mt-8'>
                                <select className='w-full rounded-lg h-10 bg-slate-100 px-2'>
                                    <option value="fruit">Date</option>
                                    <option value="vegetable">Jan - April</option>
                                    <option value="meat">May - Aug</option>
                                    <option value="meat">Sep - Dec</option>
                                </select>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <button className="bg-[#FB8F1D] hover:bg-[#d87912] text-white rounded-lg px-8 py-2 my-8 mx-4">Explore</button>
                    </div>
                </div>
                <div className='flex basis-1/2 w-full items-center align-middle'>
                    <Image src={HeroPic} height={420} width={420} alt='' className='mx-auto' />
                </div>

            </div>
            {/* <div className='bg-[#27c787] h-fit md:mt-16 mt-8 py-2'>
                <Marquee gradient={false} speed={120}>
                    <h1 className="text-black text-2xl mx-6 font-YatraOne">Escape the Ordinary: Let&apos;s Travel Together!</h1>
                    <h1 className="text-black text-2xl mx-6 font-YatraOne">Escape the Ordinary: Let&apos;s Travel Together!</h1>
                    <h1 className="text-black text-2xl mx-6 font-YatraOne">Escape the Ordinary: Let&apos;s Travel Together!</h1>
                    <h1 className="text-black text-2xl mx-6 font-YatraOne">Escape the Ordinary: Let&apos;s Travel Together!</h1>
                </Marquee>
            </div> */}

        </>
    )
}
