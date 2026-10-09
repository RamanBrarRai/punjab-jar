'use client'

import { useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/components/cart-context'
import { Logo } from './logo'

const links = [
  { href: '#flavours', label: 'Flavours' },
  { href: '#shop', label: 'Shop' },
  { href: '#why', label: 'Why Us' },
  { href: '#story', label: 'Our Story' },
  { href: '#reviews', label: 'Reviews' },
]

export function Navbar() {
  const { count } = useCart()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border-2 border-ink bg-cream/95 pl-4 pr-2 shadow-pop-sm backdrop-blur-md md:h-[4.5rem] md:pl-6"
      >
        <a href="#top" aria-label="Jar Of Punjab home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-marigold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#shop"
            className="inline-flex h-11 items-center gap-2 rounded-full border-2 border-ink bg-pink px-4 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 md:h-12 md:px-5"
          >
            <ShoppingBag className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Cart</span>
            <span className="sr-only">, {count} items</span>
            <span
              aria-hidden="true"
              className="flex size-6 items-center justify-center rounded-full bg-marigold text-xs font-bold text-ink"
            >
              {count}
            </span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex size-11 items-center justify-center rounded-full border-2 border-ink bg-marigold text-ink lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </nav>

      {open && (
        <ul
          id="mobile-nav"
          className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border-2 border-ink bg-cream shadow-pop lg:hidden"
        >
          {links.map((link) => (
            <li key={link.href} className="border-b-2 border-ink last:border-b-0">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 font-display text-2xl font-bold text-ink hover:bg-marigold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
