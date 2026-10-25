"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BRAND } from "../constants";
import { fadeUp } from "../animations";
import SectionHeading from "./SectionHeading";

export default function OriginStorySection() {
  return (
    <section
      className="relative isolate overflow-hidden px-4 py-20 md:py-28"
      style={{ 
        backgroundColor: BRAND.cream,
        backgroundImage: `
          radial-gradient(circle at 100% 0%, ${BRAND.yellow}30 0%, transparent 50%),
          radial-gradient(circle at 0% 100%, ${BRAND.green}10 0%, transparent 50%)
        `
      }}
    >
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-12 mx-auto max-w-4xl md:mb-16"
        >
          <SectionHeading eyebrow="Our Story">
            Where It All{" "}
            <span style={{ color: BRAND.green }}>Began.</span>
          </SectionHeading>
          <p className="mt-4 text-base leading-7 text-[#5A5A5A] md:text-lg text-center">
            Every flavour has a story. Ours began with the people and
            homemade traditions we discovered across Punjab.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 md:grid-cols-[0.95fr_1.05fr] md:gap-16 lg:gap-20">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={fadeUp}
            className="relative mx-auto w-full max-w-lg md:mx-0"
          >
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-2 border-t-2 md:-left-5 md:-top-5 md:h-32 md:w-32" style={{ borderColor: BRAND.yellow }} />
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-[0_18px_55px_rgba(45,45,20,0.13)]">
              <Image src="/images/raman-kitchen.jpg" alt="Ingredients and traditions behind Jar of Punjab" fill priority={false} sizes="(max-width: 768px) 100vw, 45vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 pb-12 pt-6 px-6 md:pb-8 md:px-8 md:pt-8">
                <span className="mb-3 block text-xs font-bold uppercase tracking-[0.18em] text-[#FFE49A]">Made with pyaar</span>
                <p className="max-w-xs text-2xl font-bold leading-snug text-white md:text-3xl">A little taste of home, wherever you are.</p>
              </div>
            </div>
            <div className="absolute -bottom-7 md:-bottom-5 -right-3 rounded-xl px-5 py-4 shadow-lg md:-right-6 md:px-6" style={{ backgroundColor: BRAND.green, color: "#FFFDF5" }}>
              <p className="text-xs font-bold uppercase tracking-widest">Rooted in Punjab</p>
              <p className="mt-1 text-sm">Shared with love ♥</p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={fadeUp} custom={1} className="pt-3 md:pt-0">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: BRAND.yellow }} />
              <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: BRAND.green }}>A story of flavours & togetherness</p>
            </div>
            <h3 className="max-w-xl text-2xl font-black leading-snug text-black md:text-3xl">It started with a simple idea — and a love for homemade flavours.</h3>
            <div className="mt-6 space-y-5 text-base leading-7 text-[#4F4B43] md:leading-8">
              <p>Jar of Punjab began with a simple love for the homemade flavours that connect us to our roots. While living in different parts of Punjab, we met wonderful people who made achar, jam and other homemade favourites in their own special ways.</p>
              <p>Every home had its own taste, every recipe had a story, and every flavour reminded us how food brings people together. When Raman shared her idea with Prabh, they both felt it was something worth bringing to life.</p>
              <p>Together, they dreamed of bringing these beloved flavours from different kitchens into one place, so more families could enjoy them around their own tables. And that dream became Jar of Punjab — a little taste of home, made with pyaar.</p>
            </div>
            <blockquote className="relative mt-9 overflow-hidden rounded-2xl p-6 md:p-7" style={{ backgroundColor: BRAND.green }}>
              <span aria-hidden="true" className="absolute -right-2 -top-10 text-9xl font-serif leading-none opacity-10" style={{ color: "#FFFDF5" }}>“</span>
              <div className="relative mb-4 h-1 w-12 rounded-full" style={{ backgroundColor: BRAND.yellow }} />
              <p className="relative max-w-md text-lg font-bold italic leading-relaxed text-[#FFFDF5] md:text-xl">Different kitchens, different flavours, one shared love for good food.</p>
              <p className="relative mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#F4D98A]">The heart of Jar of Punjab</p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}