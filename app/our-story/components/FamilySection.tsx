"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { BRAND, family } from "../constants";
import { fadeUp } from "../animations";
// Import the star icon
import { FaStar } from "react-icons/fa";

export default function FamilySection() {
  return (
    <section 
      className="relative overflow-hidden px-4 py-20 md:py-28" 
      style={{ 
        backgroundColor: BRAND.cream,
        backgroundImage: `
          radial-gradient(circle at 0% 0%, ${BRAND.pink}15 0%, transparent 40%),
          radial-gradient(circle at 100% 100%, ${BRAND.yellow}25 0%, transparent 40%)
        `
      }}
    >
      <div className="relative mx-auto max-w-6xl z-10 flex flex-col items-center">
        
        <div className="flex flex-col items-center text-center relative">
          {/* REPLACED: Arrows are now soft floating sparkles */}
          <div className="absolute -left-12 top-2 hidden md:block text-[#FFC107]">
            <FaStar className="text-2xl animate-pulse" />
          </div>
          <div className="absolute -right-12 top-2 hidden md:block text-[#FFC107]">
            <FaStar className="text-2xl animate-pulse" />
          </div>
          
          <div className="mb-4 inline-block rounded-full border-[2px] border-black bg-[#FFC107] px-4 py-1.5 shadow-[2px_2px_0px_0px_#000]">
            <p className="text-xs font-black uppercase tracking-widest text-black">Behind the Flavour</p>
          </div>
          <h2 className="text-4xl font-black leading-tight tracking-tight text-black md:text-5xl">Meet the Family</h2>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-base font-medium leading-relaxed text-[#444]">
          A family-led journey built on shared ideas, encouragement and a love for flavours that bring people together.
        </p>

        <div className="mt-16 grid w-full gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {family.map((member, index) => (
            <motion.div key={member.name} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={fadeUp} custom={index} className="flex flex-col items-center text-center group">
              <div className="relative mb-6 h-52 w-52">
                <div className="absolute inset-0 opacity-60 mix-blend-multiply transition-transform duration-500 group-hover:scale-105" style={{ backgroundColor: member.blobColor, borderRadius: "60% 40% 50% 50% / 40% 60% 50% 50%" }} />
                <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: "60% 40% 50% 50% / 40% 60% 50% 50%" }}>
                  <Image src={member.image} alt={member.name} fill sizes="208px" className="object-cover" />
                </div>
              </div>
              <h3 className="text-xl font-semibold leading-snug">{member.name}</h3>
              <p className="mt-1 text-sm font-bold uppercase tracking-wider text-[#dd9e0c]">{member.role}</p>
              <p className="mt-3 text-sm font-medium leading-relaxed mx-auto">{member.blurb}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center w-full">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative inline-block px-8 py-4">
            <svg className="absolute inset-0 w-full h-full text-[#FDE68A] -z-10" preserveAspectRatio="none" viewBox="0 0 200 50" fill="currentColor">
              <path d="M5,25 C10,10 30,5 50,10 C80,0 120,15 150,5 C180,-5 195,15 195,25 C195,40 170,45 150,40 C120,55 80,40 50,45 C20,50 5,40 5,25 Z" />
            </svg>
            <p className="text-lg italic font-semibold text-black">
              Four hearts. One family vision. A whole lot of Punjabi flavour. <span className="text-red-500 not-italic">❤️</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}