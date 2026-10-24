'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Bell, Sparkles } from 'lucide-react'
import { FaLeaf, FaPepperHot, FaStar } from 'react-icons/fa'
import { GiCookingPot } from 'react-icons/gi'
import { motion } from 'motion/react'

export const dynamic = 'force-dynamic'

const BRAND = {
  cream: "#FDF8EC",
  pink: "#FF1F8B",
  yellow: "#FFC107",
  ink: "#111111",
}

const preview = [
  { emoji: '🥝', name: 'Kiwi Jam', note: 'Tart & green', bg: '#E8F5E9' },
  { emoji: '🍓', name: 'Strawberry Jam', note: 'The classic', bg: '#FFEBEE' },
  { emoji: '🍍', name: 'Pineapple Jam', note: 'Bright & sunny', bg: '#FFF9C4' },
  { emoji: '🌶️', name: 'Red Chilli', note: 'Deep heat', bg: '#FFCDD2' },
  { emoji: '🟡', name: 'Turmeric', note: 'Golden root', bg: '#FFF3E0' },
  { emoji: '🌿', name: 'Fennel', note: 'Sweet finish', bg: '#E8F5E9' },
]

export default function ComingSoonPage() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <main className="relative min-h-screen overflow-hidden font-sans" style={{ backgroundColor: BRAND.cream, color: BRAND.ink }}>
      
      {/* Floating Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden mix-blend-multiply opacity-20">
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[10%] top-[15%] text-7xl text-[#FF1F8B]">
          <FaPepperHot />
        </motion.div>
        <motion.div animate={{ y: [0, -25, 0], rotate: [0, -8, 8, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute right-[15%] top-[30%] text-8xl text-[#FFC107]">
          <FaStar />
        </motion.div>
        <motion.div animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[20%] left-[5%] text-7xl text-[#2D5A27]">
          <FaLeaf />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pt-24 pb-24 md:px-8 md:py-25 z-10">
        
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-ink/70 transition-colors hover:text-[#FF1F8B]"
        >
          <ArrowLeft className="size-4" strokeWidth={3} aria-hidden="true" />
          Back to home
        </Link>

        {/* Hero */}
        <div className="mt-12 max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border-[3px] border-black bg-[#FFC107] px-5 py-2 text-xs font-black uppercase tracking-widest text-black shadow-[4px_4px_0px_0px_#000]"
          >
            <Bell className="size-4" strokeWidth={3} aria-hidden="true" />
            Coming soon
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-5xl font-black leading-[0.95] tracking-tight text-black md:text-8xl"
          >
            <span style={{ color: BRAND.pink }}>Jams & Spices.</span>
            <br />
            <span className="text-black">Worth the wait.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-[#444] md:text-xl"
          >
            We&apos;re putting the final touches on our handmade jams and
            stone-ground spice powders — small-batch, made in Mohali, no
            shortcuts.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/shop?category=pickle"
              className="group inline-flex h-14 items-center gap-2 rounded-full border-[3px] border-black bg-[#FF1F8B] px-8 text-sm font-black uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_#000] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              <Sparkles className="size-5 transition-transform group-hover:scale-110" strokeWidth={3} aria-hidden="true" />
              Shop the pickles
            </Link>
            <Link
              href="/"
              className="inline-flex h-14 items-center rounded-full border-[3px] border-black bg-white px-8 text-sm font-black uppercase tracking-wider text-black shadow-[4px_4px_0px_0px_#000] transition-all hover:-translate-y-1 hover:bg-[#FFC107] hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              Back to home
            </Link>
          </motion.div>
        </div>

        {/* Preview grid */}
        <div className="mt-24">
          <div className="mb-8 inline-block rounded-full border-[2px] border-black bg-white px-4 py-1.5 shadow-[2px_2px_0px_0px_#000]">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-black">
              A sneak peek
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:gap-8">
            {preview.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-center gap-3 rounded-[2rem] border-[4px] border-black bg-white p-8 text-center shadow-[6px_6px_0px_0px_#000] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#000]"
              >
                <div 
                  className="mb-2 flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-black shadow-[2px_2px_0px_0px_#000] transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: item.bg }}
                >
                  <span className="text-5xl leading-none">{item.emoji}</span>
                </div>
                <span className="text-xl font-black text-black">
                  {item.name}
                </span>
                <span className="rounded-full border-2 border-black bg-[#FFC107] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black">
                  {item.note}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Signup strip */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[2rem] border-[4px] border-black bg-white p-8 shadow-[8px_8px_0px_0px_#000] md:py-12 md:px-10"
        >
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 md:items-center">
            <div>
              <h2 className="text-3xl font-black leading-tight text-black md:text-4xl">
                Be the <span style={{ color: BRAND.pink }}>first</span> to know.
              </h2>
              <p className="mt-3 text-sm font-medium leading-relaxed text-[#444]">
                Drop your email and we&apos;ll tell you the day jams and spices
                go live. No spam, we promise.
              </p>
            </div>
            
            {done ? (
              <div className="rounded-xl border-[3px] border-black bg-[#FFC107] px-6 py-5 text-sm font-black text-black shadow-[4px_4px_0px_0px_#000]">
                Shukriya! We&apos;ll be in touch.
              </div>
            ) : (
              <form
                className="flex flex-col gap-4 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault()
                  if (!email) return
                  setDone(true)
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  aria-label="Email address"
                  className="w-full rounded-full border-[3px] border-black bg-[#FDF8EC] px-6 py-4 text-sm font-bold text-black placeholder:text-black/40 focus:outline-none focus:ring-4 focus:ring-[#FF1F8B]/30"
                />
                <button
                  type="submit"
                  className="inline-flex whitespace-nowrap h-14 items-center justify-center rounded-full border-[3px] border-black bg-[#FF1F8B] px-6 text-sm font-black uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_#000] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  Notify me
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  )
}