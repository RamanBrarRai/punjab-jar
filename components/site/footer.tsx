"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useMotionTemplate, useSpring, useReducedMotion } from "motion/react";
import { MapPin, Mail, ArrowRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  // Magic Spotlight Effect state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const background = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(255, 31, 139, 0.15), transparent 80%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current || shouldReduceMotion) return;
    const { left, top } = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  return (
    <footer 
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-[#111111] pt-20 text-white"
    >
      {/* MAGIC EFFECT 1: Mouse Tracking Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background }}
      />

      {/* MAGIC EFFECT 2: Floating Sparkles */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <motion.div 
          animate={shouldReduceMotion ? {} : { y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-[#FF1F8B] blur-[1px]" 
        />
        <motion.div 
          animate={shouldReduceMotion ? {} : { y: [0, -30, 0], opacity: [0.5, 1, 0.5] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-[20%] top-[30%] h-3 w-3 rounded-full bg-[#FFC107] blur-[2px]" 
        />
        <motion.div 
          animate={shouldReduceMotion ? {} : { y: [0, -15, 0], opacity: [0.1, 0.6, 0.1] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute left-[40%] bottom-[30%] h-1.5 w-1.5 rounded-full bg-white blur-[1px]" 
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/images/logo.png" 
                alt="Jar of Punjab" 
                width={140} 
                height={50} 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <h2 className="mb-4 text-3xl font-black leading-tight text-white md:text-4xl">
              A Little Taste of Punjab <br />
              {/* RESTORED YELLOW COLOR */}
              <span className="text-[#FFC107]">Straight to Your Inbox.</span> 
            </h2>
            <p className="mb-6 max-w-sm text-sm text-gray-400">
              Be the first to hear about new flavours, seasonal achar, homemade jam launches and little stories from our kitchen.
            </p>
            
            <form className="relative flex max-w-sm items-center overflow-hidden rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm transition-colors focus-within:border-[#FF1F8B]">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder-gray-500 focus:outline-none"
              />
              <button 
                type="button"
                className="mr-1 flex items-center gap-2 rounded-full bg-[#FF1F8B] px-5 py-2 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95"
              >
                Join <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Links */}
          <div>
            {/* RESTORED PINK COLOR */}
            <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-[#FF1F8B]">Shop</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/shop" className="hover:text-white transition-colors">All jars</Link></li>
              <li><Link href="/shop?category=pickle" className="hover:text-white transition-colors">Pickles</Link></li>
              <li><Link href="/coming-soon" className="hover:text-white transition-colors">Jams & Spices</Link></li>
              <li><Link href="/gift-boxes" className="hover:text-white transition-colors">Gift boxes</Link></li>
            </ul>
          </div>

          <div>
            {/* RESTORED PINK COLOR */}
            <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-[#FF1F8B]">About</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/our-story" className="hover:text-white transition-colors">Our story</Link></li>
              <li><Link href="/how-we-make-it" className="hover:text-white transition-colors">How we make it</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 text-sm text-gray-300 md:flex-row">
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            {/* Location */}
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#FFC107]" /> 
              <span>Mohali, Punjab</span>
            </span>
            
            {/* Email */}
            <a href="mailto:hello@jarofpunjab.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="h-4 w-4 text-[#FFC107]" /> 
              <span>hello@jarofpunjab.com</span>
            </a>
            
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <FaInstagram className="h-4 w-4 text-[#FFC107]" /> 
              <span>@jarofpunjab</span>
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-gray-400">
            © {new Date().getFullYear()} Jar Of Punjab. Made with pyaar.
          </p>
        </div>
      </div>

      {/* MAGIC EFFECT 3: Infinite Scrolling Marquee */}
      <div className="relative mt-8 w-full overflow-hidden pb-4">
        <motion.div
          animate={shouldReduceMotion ? {} : { x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, // Elegant speed
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap w-max"
        >
          {/* RESTORED EXACT COLORS: Solid Pink Text, Solid Yellow Dots */}
          <div className="flex items-center text-[15vw] font-display font-black leading-none tracking-tighter select-none">
            <span className="text-[#FF1F8B]">Jar of Punjab</span>
            <span className="text-[#FFC107] px-2 md:px-8">·</span>
            <span className="text-[#FF1F8B]">Jar of Punjab</span>
            <span className="text-[#FFC107] px-2 md:px-8">·</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center text-[15vw] font-display font-black leading-none tracking-tighter select-none">
            <span className="text-[#FF1F8B]">Jar of Punjab</span>
            <span className="text-[#FFC107] px-2 md:px-8">·</span>
            <span className="text-[#FF1F8B]">Jar of Punjab</span>
            <span className="text-[#FFC107] px-2 md:px-8">·</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}