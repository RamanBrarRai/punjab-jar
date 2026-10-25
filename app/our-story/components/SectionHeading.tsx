"use client";
import { motion } from "motion/react";
import { fadeUp } from "../animations";

export default function SectionHeading({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode; }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="flex flex-col items-center text-center">
      {eyebrow && (
        <div className="mb-4 inline-block rounded-full border-[2px] border-black bg-[#FFC107] px-4 py-1.5 shadow-[2px_2px_0px_0px_#000]">
          <p className="text-xs font-black uppercase tracking-widest text-black">{eyebrow}</p>
        </div>
      )}
      <h2 className="text-4xl font-black leading-tight tracking-tight text-black md:text-5xl">
        {children}
      </h2>
    </motion.div>
  );
}