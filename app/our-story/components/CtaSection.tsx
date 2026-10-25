"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp } from "../animations";

export default function CtaSection() {
  return (
    <section className="bg-cream px-3 py-16 md:px-6 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border-2 border-ink bg-pink shadow-pop-lg"
      >
        {/* Phulkari Background Pattern */}
        <div className="phulkari absolute inset-0" aria-hidden="true" />
        
        <div className="relative grid items-center gap-10 p-8 md:p-14 lg:grid-cols-[1.5fr_1fr]">
          
          {/* Left Column: Text Content */}
          <div>
            <p className="inline-block rotate-[-3deg] rounded-full border-2 border-ink bg-marigold px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-ink">
              From Our Family to Your Table.
            </p>
            
            <h2 className="mt-6 text-[clamp(2.1rem,8vw,4.9rem)] font-extrabold leading-[0.9] tracking-tight text-white">
              Good food carries
              <br />
              <span className="text-ink">memories & love.</span>
            </h2>
            
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
              Every Jar of Punjab product is part of our journey to celebrate the flavours we cherish and share something special with your family.
            </p>
            
            <Link
              href="/shop"
              className="group mt-9 inline-flex h-14 items-center gap-3 rounded-full border-2 border-ink bg-marigold px-8 font-bold text-ink shadow-pop transition-all hover:-translate-y-0.5 hover:shadow-pop-lg"
            >
              Build My Box.
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          {/* Right Column: Image & Badge */}
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            {/* Decorative offset circle */}
            <div className="absolute inset-0 rotate-6 rounded-full border-2 border-ink bg-marigold" aria-hidden="true" />
            
            {/* Main Image Circle */}
            <div className="relative size-full overflow-hidden rounded-full border-2 border-ink img-hover-zoom" data-reveal="zoom">
              <Image
                src="/images/hero-jar.png" // Using the Hero jar image for consistency
                alt="A lineup of Jar Of Punjab achaar jars"
                fill
                sizes="(min-width: 1024px) 384px, 80vw"
                className="object-cover img-zoom"
              />
            </div>
            
            {/* 15% OFF Badge */}
            <span className="absolute -left-2 top-6 flex size-24 -rotate-12 animate-wiggle flex-col items-center justify-center rounded-full border-2 border-ink bg-emerald text-center font-display font-extrabold leading-none text-cream">
              <span className="text-3xl">15%</span>
              <span className="text-xs uppercase tracking-wider">off</span>
            </span>
          </div>

        </div>
      </motion.div>
    </section>
  );
}