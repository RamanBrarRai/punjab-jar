"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { BRAND } from "../constants";
import { fadeUp } from "../animations";

export default function OriginStorySection() {
  return (
    <section className="relative px-4 py-16 md:py-24 overflow-hidden" style={{ backgroundColor: BRAND.section, backgroundImage: "radial-gradient(#FFC107 1px, transparent 1px)", backgroundSize: "24px 24px", backgroundBlendMode: "multiply" }}>
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="relative pb-5 pr-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border-[10px] border-white bg-white shadow-[8px_8px_0px_0px_#FFC107]">
            <Image src="/images/raman-kitchen.jpg" alt="Raman preparing homemade recipes" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="absolute -top-3 left-1/2 h-8 w-24 -translate-x-1/2 rotate-2 bg-white/60 shadow-sm backdrop-blur-sm" />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={1}>
          <div className="mb-4 inline-block rounded-full border-[2px] border-black bg-white px-4 py-1.5 shadow-[2px_2px_0px_0px_#000]">
            <p className="text-xs font-black uppercase tracking-widest text-black">Made with memories</p>
          </div>
          <h2 className="font-sans text-3xl font-black leading-snug text-black md:text-4xl">Where It All Began</h2>
          <div className="mt-6 space-y-4 text-base font-medium leading-8 text-[#444]">
            <p>The first jars were born from a simple wish: to bring the comforting taste of homemade achar back into everyday life. What started as small batches shared with friends and family grew into a labour of love.</p>
            <p>Guided by recipes passed down from Raman’s mother, nani and dadi, each recipe was tested, tasted and refined. The process brought back memories of sun-cured ingredients, hand-prepared masalas and the unmistakable aroma of mustard oil.</p>
          </div>
          <blockquote className="mt-8 rounded-xl border-[3px] border-black bg-white p-6 shadow-[4px_4px_0px_0px_#000]">
            <p className="text-xl font-black italic text-black">“If it doesn’t taste like home, it isn’t Jar of Punjab.”</p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}