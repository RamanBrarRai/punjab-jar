'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Bell, Sparkles } from 'lucide-react'

export const dynamic = 'force-dynamic'

const preview = [
  { emoji: '🥝', name: 'Kiwi Jam', note: 'Tart & green' },
  { emoji: '🍓', name: 'Strawberry Jam', note: 'The classic' },
  { emoji: '🍍', name: 'Pineapple Jam', note: 'Bright & sunny' },
  { emoji: '🌶️', name: 'Red Chilli', note: 'Deep heat' },
  { emoji: '🟡', name: 'Turmeric', note: 'Golden root' },
  { emoji: '🌿', name: 'Fennel', note: 'Sweet finish' },
]

export default function ComingSoonPage() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <main className="relative min-h-screen overflow-hidden bg-cream text-ink">
      {/* Soft warm glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 10%, rgba(255,45,135,0.10), transparent 45%), radial-gradient(circle at 85% 90%, rgba(214,166,46,0.14), transparent 50%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5 pt-24 pb-24 md:px-8 md:pt-32 md:pb-32">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-ink/70 transition-colors hover:text-pink"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to home
        </Link>

        {/* Hero */}
        <div className="mt-12 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-marigold px-5 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-pop-sm">
            <Bell className="size-4" aria-hidden="true" />
            Coming soon
          </span>

          <h1 className="mt-8 font-display text-5xl font-extrabold leading-[0.92] tracking-tight text-ink md:text-8xl">
            <span className="text-pink">Jams & Spices.</span>
            <br />
            <span className="text-ink">Worth the wait.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/75 md:text-xl">
            We&apos;re putting the final touches on our handmade jams and
            stone-ground spice powders — small-batch, made in Mohali, no
            shortcuts.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/shop?category=pickle"
              className="inline-flex h-14 items-center gap-2 rounded-full border-2 border-ink bg-pink px-7 text-sm font-bold uppercase tracking-wider text-white shadow-pop-sm transition-transform hover:-translate-y-0.5"
            >
              <Sparkles className="size-4" aria-hidden="true" />
              Shop the pickles
            </Link>
            <Link
              href="/"
              className="inline-flex h-14 items-center rounded-full border-2 border-ink bg-cream px-7 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-marigold"
            >
              Back to home
            </Link>
          </div>
        </div>

        {/* Preview grid */}
        <div className="mt-24">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-pink">
            A sneak peek
          </p>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {preview.map((item) => (
              <div
                key={item.name}
                className="group flex flex-col items-center gap-3 rounded-3xl border-2 border-ink bg-white p-8 shadow-pop-sm transition-transform hover:-translate-y-1"
              >
                <span className="text-6xl leading-none transition-transform duration-500 group-hover:scale-110">
                  {item.emoji}
                </span>
                <span className="font-display text-lg font-extrabold text-ink">
                  {item.name}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-pink">
                  {item.note}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Signup strip */}
        <div className="mt-24 rounded-3xl border-2 border-ink bg-white p-8 shadow-pop-sm md:p-12">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 md:items-center">
            <div>
              <h2 className="font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
                Be the <span className="text-pink">first</span> to know.
              </h2>
              <p className="mt-3 text-sm text-ink/70">
                Drop your email and we&apos;ll tell you the day jams and spices
                go live. No spam, we promise.
              </p>
            </div>
            {done ? (
              <p className="rounded-2xl border-2 border-ink bg-marigold px-5 py-4 text-sm font-bold text-ink">
                Shukriya! We&apos;ll be in touch.
              </p>
            ) : (
              <form
                className="flex flex-col gap-3 sm:flex-row"
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
                  className="w-full rounded-full border-2 border-ink bg-cream px-5 py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-pink"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-full border-2 border-ink bg-pink px-6 text-xs font-bold uppercase tracking-wider text-white shadow-pop-sm transition-transform hover:-translate-y-0.5"
                >
                  Notify me
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}