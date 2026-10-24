"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { FiHeart } from "react-icons/fi";
import { BRAND } from "../constants";
import { fadeUp } from "../animations";

export default function CtaSection() {
  return (
    <section className="relative px-4 py-20 text-center md:py-28 overflow-hidden" style={{ backgroundColor: BRAND.cream }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="mx-auto flex max-w-3xl flex-col items-center relative z-10">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-black bg-[#FFC107] shadow-[4px_4px_0px_0px_#000]">
          <FiHeart size={32} color={BRAND.pink} fill={BRAND.pink} />
        </div>
        <h2 className="text-4xl font-black leading-tight tracking-tight text-black md:text-5xl">From Our Family to Your Table.</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg font-medium leading-relaxed text-[#444]">
          Good food carries memories, traditions and love. Every Jar of Punjab product is part of our journey to celebrate the flavours we cherish and share something special with your family.
        </p>
        <div className="mt-10">
          <Link href="/products" className="group inline-flex items-center justify-center gap-3 rounded-full border-[4px] border-black bg-[#FFC107] px-10 py-5 text-xl font-black text-black shadow-[6px_6px_0px_0px_#000000] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000000] active:translate-x-1 active:translate-y-1 active:shadow-none">
            Build My Box.
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-7 w-7 transition-transform group-hover:translate-x-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
        <p className="mt-16 text-3xl font-black tracking-wide text-black">
          A Little Taste of <span style={{ color: BRAND.pink }}>Nani's</span> Kitchen.
        </p>
      </motion.div>
    </section>
  );
}