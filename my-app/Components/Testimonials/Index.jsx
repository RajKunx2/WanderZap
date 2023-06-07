"use client"
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image"
import Stars from "../../public/stars.png";
import Test from "../../public/test.jpg";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
export default function Index() {
    return (
        <>
            <div className="my-4">
                <h1 className='lg:text-4xl text-3xl font-BodoniModa font-semibold md:px-14 px-8'>Testimonials</h1>

                <Swiper
                    loop={true}
                    loopFillGroupWithBlank={true}
                    spaceBetween={30}
                    effect={"fade"}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='flex flex-col md:flex-row-reverse'>
                            <div className='flex basis-1/2 w-full h-auto align-middle text-center'>
                                <Image src={Test} height={450} width={360} alt='' className='mx-auto mb-6' />
                            </div>
                            <div className='flex basis-1/2 w-full h-auto flex-col flex-start justify-center md:px-14 px-8 mt-3'>
                                <Image src={Stars} height={30} width={100} alt='' className='' />
                                <div className='my-3 text-lg md:text-xl font-sans'>“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</div>
                                <div className="mt-3 font-semibold">Edward Newgate</div>
                                <div className="">Founder Circle</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col md:flex-row-reverse'>
                            <div className='flex basis-1/2 w-full h-auto align-middle text-center'>
                                <Image src={Test} height={450} width={360} alt='' className='mx-auto mb-6' />
                            </div>
                            <div className='flex basis-1/2 w-full h-auto flex-col flex-start justify-center md:px-14 px-8 mt-3'>
                                <Image src={Stars} height={30} width={100} alt='' className='' />
                                <div className='my-3 text-lg md:text-xl font-sans'>“Quisque in lacus a urna fermeasdsdasdntum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</div>
                                <div className="mt-3 font-semibold">Edward Newgate</div>asd
                                <div className="">Founder Circle</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col md:flex-row-reverse'>
                            <div className='flex basis-1/2 w-full h-auto align-middle text-center'>
                                <Image src={Test} height={450} width={360} alt='' className='mx-auto mb-6' />
                            </div>
                            <div className='flex basis-1/2 w-full h-auto flex-col flex-start justify-center md:px-14 px-8 mt-3'>
                                <Image src={Stars} height={30} width={100} alt='' className='' />
                                <div className='my-3 text-lg md:text-xl font-sans'>“Quisque in lacus a urna feasdasdasdrmentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</div>
                                <div className="mt-3 font-semibold">Edward Newgate</div>
                                <div className="">Founder Circle</div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper >

                {/* <div className='flex flex-col md:flex-row-reverse'>
                    <div className='flex basis-1/2 w-full h-auto align-middle text-center'>
                        <Image src={Test} height={450} width={360} alt='' className='mx-auto mb-6' />
                    </div>
                    <div className='flex basis-1/2 w-full h-auto flex-col flex-start justify-center md:px-14 px-8 mt-3'>
                        <Image src={Stars} height={30} width={100} alt='' className='' />
                        <div className='my-3 text-lg md:text-xl font-sans'>“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</div>
                        <div className="mt-3 font-semibold">Edward Newgate</div>
                        <div className="">Founder Circle</div>
                    </div>
                </div> */}
            </div>
        </>
    )
}
