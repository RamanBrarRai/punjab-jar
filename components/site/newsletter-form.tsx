'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <p role="status" className="mt-8 font-serif text-lg italic text-mustard">
        Shukriya! Check your inbox soon.
      </p>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="mt-8 flex max-w-sm items-center gap-2 border-b border-cream/30 pb-2 focus-within:border-mustard"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        autoComplete="email"
        placeholder="your@email.com"
        className="h-10 flex-1 bg-transparent text-sm text-cream placeholder:text-cream/40 focus:outline-none"
      />
      <button
        type="submit"
        className="inline-flex size-10 items-center justify-center rounded-full bg-pink text-white transition-transform hover:translate-x-0.5"
      >
        <ArrowRight className="size-4" aria-hidden="true" />
        <span className="sr-only">Subscribe</span>
      </button>
    </form>
  )
}
