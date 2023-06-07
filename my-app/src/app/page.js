"use client";
import Navbar from "../../Components/Navbar/index";
import Hero from "../../Components/Hero/Hero";
import Explore from "../../Components/Hero/Explore";
import Testimonials from "../../Components/Testimonials/Index";
import Guide from "../../Components/Hero/Guide";
import React, { useState, useEffect } from "react";
import Loading from "../../public/loading.gif";
import Image from "next/image";
import Footer from "../../Components/Footer";
import { motion } from "framer-motion";
export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center align-middle items-center w-screen h-screen">
          <Image src={Loading} alt="" height={150} width={150} />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{ position: "relative" }}
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-120%" }}
            transition={{ duration: 1.5 }}
            className="0 w-screen h-screen bg-green-500 absolute top-0 left-0"
          ></motion.div>
          <Navbar />
          <Hero />
          <Explore />
          <Guide />
          <Testimonials />
          <Footer />
        </motion.div>
      )}
    </>
  );
}
