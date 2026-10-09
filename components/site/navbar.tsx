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
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8"
      >
        <a href="#top" aria-label="Jar Of Punjab home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide text-ink/80 transition-colors hover:text-pink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#shop"
            className="relative inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5"
          >
            <ShoppingBag className="size-5" aria-hidden="true" />
            <span className="sr-only">Cart, {count} items</span>
            <span
              aria-hidden="true"
              className="absolute right-1 top-1 flex size-5 items-center justify-center rounded-full bg-pink text-[10px] font-semibold text-white"
            >
              {count}
            </span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex size-11 items-center justify-center rounded-full text-ink hover:bg-ink/5 md:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-nav" className="border-t border-ink/10 px-5 pb-6 pt-2 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-ink/10 py-4 font-serif text-2xl text-ink"
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
