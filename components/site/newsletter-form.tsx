'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <p role="status" className="mt-8 inline-block rounded-full bg-marigold px-5 py-3 font-display font-bold text-ink">
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
      className="mt-8 flex max-w-md items-center gap-2 rounded-full border-2 border-cream bg-cream p-1.5 focus-within:border-marigold"
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
        className="h-11 min-w-0 flex-1 bg-transparent px-4 text-ink placeholder:text-ink/40 focus:outline-none"
      />
      <button
        type="submit"
        className="inline-flex h-11 items-center gap-2 rounded-full bg-pink px-5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
      >
        Join
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </form>
  )
}
