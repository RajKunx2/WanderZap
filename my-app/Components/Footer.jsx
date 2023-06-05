import React from 'react';
import Image from 'next/image';
import Logo from '../public/logo.png';

function Footer() {
    return (
        <footer className="bg-slate-100 h-fit">
            <div className="flex flex-col md:flex-row px-3 py-4 justify-between">
                <div className="text-[#848484] mx-6 md:mx-16 mt-3">
                    <Image src={Logo} alt="Footer Logo" width={120} height={96} className="-mx-1 pb-5" />
                    <p className="max-w-xs">Plan and book your perfect trip with expert advice, travel tips destination information from us</p>
                    <p className="py-5 md:py-10 text-xs">©2020 Thousand Sunny. All rights reserved</p>
                </div>
                <div className="text-[#848484] mx-6 md:mx-16 my-3">
                    <h4 className="font-bold text-black">Destinations</h4>
                    <ul className="list-none list-inside">
                        <li className="py-1">Africa</li>
                        <li className="py-1">Antarctica</li>
                        <li className="py-1">Asia</li>
                        <li className="py-1">Europe</li>
                        <li className="py-1">America</li>
                    </ul>
                </div>
                <div className="text-[#848484] mx-6 md:mx-16 my-3">
                    <h4 className="font-bold text-black">Shop</h4>
                    <ul className="list-none list-inside">
                        <li className="py-1">Destination Guides</li>
                        <li className="py-1">Pictorial &amp; Gifts</li>
                        <li className="py-1">Special Offers</li>
                        <li className="py-1">Delivery Times</li>
                        <li className="py-1">FAQs</li>
                    </ul>
                </div>
                <div className="text-[#848484] mx-6 md:mx-16 mt-3">
                    <h4 className="font-bold text-black">Interests</h4>
                    <ul className="list-none list-inside">
                        <li className="py-1">Adventure Travel</li>
                        <li className="py-1">Art And Culture</li>
                        <li className="py-1">Wildlife And Nature</li>
                        <li className="py-1">Family Holidays</li>
                        <li className="py-1">Food And Drink</li>
                    </ul>
                </div>
            </div>
            <hr className="mx-6 md:mx-16 my-2" />
            <div className='text-center text-2xl font-BodoniModa font-semibold text-green-600'>DEVELOPED BY: <span className="mx-4">RAJSHEKHAR</span><span className="mx-4">MRIGANK</span> <span className="mx-4">DIVYANG </span><span className="mx-4">HARSH</span></div>
        </footer>
    );
}

export default Footer;
