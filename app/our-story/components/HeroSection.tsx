"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { FaLeaf, FaPepperHot, FaStar } from "react-icons/fa";
import { GiMasonJar } from "react-icons/gi";
import { BRAND } from "../constants";
import { float, floatSlow } from "../animations";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering animations after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative px-4 pb-16 pt-32 md:pb-24 md:pt-36 lg:pt-44" suppressHydrationWarning>
      <div className="pointer-events-none absolute inset-0 overflow-hidden mix-blend-multiply opacity-40">
        {mounted && (
          <>
            <motion.div animate={shouldReduceMotion ? {} : floatSlow} className="absolute left-[5%] top-[15%] rotate-12 text-6xl text-[#FF1F8B]"><FaPepperHot /></motion.div>
            <motion.div animate={shouldReduceMotion ? {} : float} className="absolute left-[15%] top-[50%] -rotate-12 text-7xl text-[#FFC107]"><FaStar /></motion.div>
            <motion.div animate={shouldReduceMotion ? {} : floatSlow} className="absolute right-[40%] top-[10%] rotate-45 text-5xl text-[#2D5A27]"><FaLeaf /></motion.div>
            <motion.div animate={shouldReduceMotion ? {} : floatSlow} className="absolute right-[0] top-[25%] -rotate-6 text-[#111111] opacity-15"><GiMasonJar size={72} /></motion.div>
          </>
        )}
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        <div className="flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
            
            <div className="left-side w-full lg:w-1/2">
              <div className="mb-5 flex items-center gap-3">
                <GiMasonJar size={28} color={BRAND.ink} />
                <span className="text-sm font-black uppercase tracking-widest" style={{ color: BRAND.pink }}>Our Story</span>
              </div>
              <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-black sm:text-5xl md:text-5xl lg:text-[4.5rem]" suppressHydrationWarning>
                India&apos;s Flavors. Punjab&apos;s Heart. <span style={{ color: BRAND.pink }}>Made with Pyaar.</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg font-medium leading-relaxed text-[#444]" suppressHydrationWarning>
                A collection of homemade flavors discovered across Punjab, brought together with a love for good food, regional traditions and the people who make them special.
              </p>
            </div>

            <div className="relative aspect-square w-full max-w-[280px] sm:max-w-md md:max-w-lg lg:ml-auto lg:w-1/2 mx-auto mt-8 lg:mt-0">
              <Image src="/images/hero-jar.png" alt="Jar of Mango Pickle" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-contain mix-blend-multiply drop-shadow-2xl" />
              
              <div className="absolute top-2 -left-2 md:top-5 md:-left-20 z-10 -rotate-6 rounded-xl border-2 border-dashed p-3 md:p-5 shadow-xl flex flex-col justify-center bg-[#FFFDF5]" style={{ borderColor: BRAND.red }}>
                <p className="text-[13px] md:text-[15px] font-bold italic leading-6 md:leading-7 tracking-wide" style={{ color: BRAND.red }}>
                  Real People.<br />Real Recipes.<br />Real Flavours. <span className="text-lg">♥</span>
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}