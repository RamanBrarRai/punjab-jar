"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { FaLeaf, FaPepperHot, FaStar } from "react-icons/fa";
import { GiMasonJar } from "react-icons/gi";
import { BRAND } from "../constants";
import { float, floatSlow } from "../animations";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative px-4 pb-16 pt-24 md:pb-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden mix-blend-multiply opacity-40">
        <motion.div animate={shouldReduceMotion ? {} : floatSlow} className="absolute left-[5%] top-[15%] rotate-12 text-6xl text-[#FF1F8B]"><FaPepperHot /></motion.div>
        <motion.div animate={shouldReduceMotion ? {} : float} className="absolute left-[15%] top-[50%] -rotate-12 text-7xl text-[#FFC107]"><FaStar /></motion.div>
        <motion.div animate={shouldReduceMotion ? {} : floatSlow} className="absolute right-[40%] top-[10%] rotate-45 text-5xl text-[#2D5A27]"><FaLeaf /></motion.div>
        <motion.div animate={shouldReduceMotion ? {} : floatSlow} className="absolute right-[0] top-[25%] -rotate-6 text-[#111111] opacity-15"><GiMasonJar size={72} /></motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        <div className="flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-wrap md:flex-nowrap gap-12 items-center">
            <div className="left-side">
              <div className="mb-5 flex items-center gap-3">
                <GiMasonJar size={28} color={BRAND.ink} />
                <span className="text-sm font-black uppercase tracking-widest" style={{ color: BRAND.pink }}>Our Story</span>
              </div>
              <h1 className="font-sans text-4xl font-black leading-[1.1] tracking-tight text-black md:text-5xl lg:text-[4.5rem]">
                India’s Flavours. Punjab’s Heart. <span style={{ color: BRAND.pink }}>One Jar at a Time.</span>
              </h1>
              <p className="mt-6 text-lg font-medium leading-relaxed text-[#444]">
                Jar of Punjab began with an idea close to Our’s heart — to bring the comforting flavours of homemade food to more families. Inspired by treasured family recipes and India’s extraordinary culinary diversity, we are creating a collection that celebrates the taste of home, one jar at a time.
              </p>
            </div>

            <div className="relative aspect-square w-full max-w-md md:max-w-lg lg:ml-auto">
              <Image src="/images/hero-jar.png" alt="Jar of Mango Pickle" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-contain mix-blend-multiply drop-shadow-2xl" />
              <div className="absolute top-5 -left-20 z-10 -rotate-6 rounded-xl border-2 border-dashed p-5 shadow-xl flex flex-col justify-center bg-[#FFFDF5]" style={{ borderColor: BRAND.red }}>
                <p className="font-sans text-[15px] font-bold italic leading-7 tracking-wide" style={{ color: BRAND.red }}>
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