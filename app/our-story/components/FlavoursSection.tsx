
"use client";

import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { BRAND, regions } from "../constants";
import { fadeUp } from "../animations";

export default function FlavoursSection() {
  return (
    <section
      className="relative overflow-hidden px-4 py-20 md:py-28"
      style={{ backgroundColor: BRAND.paper }}
    >
      {/* Subtle decorative accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: BRAND.yellow }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading eyebrow="A journey of flavour">
          Many Regions. Many Traditions.
          <br />
          <span style={{ color: BRAND.green }}>
            One Jar of Punjab.
          </span>
        </SectionHeading>

        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-[#5A5A5A] md:text-lg">
          Every place has its own taste, every recipe its own story.
          Discover the homemade flavours and traditions that inspire us.
        </p>

        {/* Journey indicator */}
        <div className="mt-10 hidden items-center justify-center gap-3 md:flex">
          {regions.map((region, index) => (
            <div key={region.title} className="flex items-center gap-3">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold"
                style={{
                  backgroundColor: index === 2 ? BRAND.green : BRAND.yellow,
                  color: index === 2 ? BRAND.white : BRAND.ink,
                }}
              >
                0{index + 1}
              </span>

              <span className="text-xs font-bold uppercase tracking-wider text-[#5A5A5A]">
                {region.title}
              </span>

              {index < regions.length - 1 && (
                <span
                  aria-hidden="true"
                  className="mx-2 h-px w-8 lg:w-14"
                  style={{ backgroundColor: BRAND.yellow }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Flavour cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-7">
          {regions.map((region, index) => {
            const Icon = region.icon;

            return (
              <motion.article
                key={region.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={index}
                whileHover={{ y: -7 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#E9DFC9] bg-white transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(45,45,20,0.12)]"
              >
                {/* Coloured image-like header */}
                <div
                  className="relative flex h-36 items-center justify-center overflow-hidden sm:h-40"
                  style={{
                    backgroundColor: region.color,
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-8 -top-12 h-36 w-36 rounded-full border border-white/30"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-16 -left-6 h-40 w-40 rounded-full border border-white/30"
                  />

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/50 bg-white/25 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                    <Icon
                      size={34}
                      color={
                        region.color === BRAND.yellow
                          ? BRAND.ink
                          : BRAND.white
                      }
                      strokeWidth={1.6}
                    />
                  </div>

                  <span className="absolute right-5 top-4 text-xs font-bold tracking-widest text-black/60">
                    0{index + 1}
                  </span>
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <h3 className="text-2xl font-black leading-tight text-black">
                    {region.title}
                  </h3>

                  <div
                    className="mb-4 mt-4 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-16"
                    style={{ backgroundColor: BRAND.yellow }}
                  />

                  <p className="flex-1 text-[15px] font-medium leading-7 text-[#5A5A5A]">
                    {region.copy}
                  </p>

                  <div
                    aria-hidden="true"
                    className="mt-6 border-t border-[#EEE7D9] pt-4 text-xs font-bold uppercase tracking-[0.15em]"
                    style={{ color: BRAND.green }}
                  >
                    A taste of tradition
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
