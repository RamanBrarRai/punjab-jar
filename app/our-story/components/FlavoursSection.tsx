"use client";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { BRAND, regions } from "../constants";
import { fadeUp } from "../animations";

export default function FlavoursSection() {
  return (
    <section className="px-4 py-16 md:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading eyebrow="A journey of flavour">
          Many Regions. Many Traditions.<br />
          <span style={{ color: BRAND.pink }}>One Jar of Punjab.</span>
        </SectionHeading>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {regions.map((region, index) => {
            const Icon = region.icon;
            return (
              <motion.article key={region.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} custom={index} whileHover={{ y: -5, boxShadow: "8px 8px 0px 0px #000000" }} className="flex flex-col items-center rounded-[2rem] border-[4px] border-black bg-white p-8 md:p-10 text-center shadow-[6px_6px_0px_0px_#000] transition-all duration-300">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-black shadow-[2px_2px_0px_0px_#000]" style={{ backgroundColor: region.color }}>
                  <Icon size={36} color={region.color === BRAND.yellow ? BRAND.ink : BRAND.white} />
                </div>
                <h3 className="mb-3 text-2xl font-black text-black md:text-3xl">{region.title}</h3>
                <p className="text-[15px] font-medium leading-relaxed text-[#333]">{region.copy}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}