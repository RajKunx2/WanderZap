"use client"
import React, { useClient } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import Data from "./Data";

const Index = () => {
  const [navbar, setNavbar] = useState(false);
  return (
      <div>
        <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-white">
          <div className="justify-between px-4 mx-auto width-screen lg:items-center lg:flex">
            <div>
              <div className="flex items-center justify-between py-3 lg:block">
                <h1 className='text-[#0B9B7A] font-BodoniModa text-3xl font-bold'>WanderZap</h1>
                <div className="lg:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-lg outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    <Hamburger toggled={navbar} toggle={setNavbar} />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-centers pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                  }`}
              >
                <ul className="h-screen lg:h-auto items-center justify-center py-2 lg:flex lg:flex-row mt-3 lg:mt-0 align-middle">
                  <div className='flex lg:flex-row flex-col align-middle justify-center'>
                    {Data.map((Part, i) => (
                      <div key={i}>
                        <li className="lg:text-base text-base text-black mx-6 text-center lg:mt-4 my-3 hover:cursor-pointer hover:underline decoration-[#FB8F1D] underline-offset-8 lg:hover:text-[#FB8F1D] transition-all duration-400 lg:hover:bg-transparent">
                          <Link href="/" onClick={() => setNavbar(!navbar)}>
                            {Part}
                          </Link>
                        </li>
                      </div>
                    ))}
                  </div>
                  <li className="lg:text-base text-base text-[#FB8F1D] hover:text-white lg:mx-4 mb-4 mt-2 lg:mb-0 text-center hover:bg-[#FB8F1D] decoration-[#FB8F1D] hover:cursor-pointer transition-all duration-400 rounded-lg border-[1px] px-8 py-2 border-[#FB8F1D]">
                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                      Login
                    </Link>
                  </li>
                  <li className="lg:text-base bg-[#FB8F1D] mb-4 my-2 lg:mb-0 hover:bg-[#e88011] rounded-lg text-white py-2 px-8 text-center font-base hover:cursor-pointer decoration-[#FB8F1D] transition-all duration-400">
                    <Link href="/RegisterNow" onClick={() => setNavbar(!navbar)}>
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default Index;
