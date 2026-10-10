'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/components/cart-context'
import { Logo } from './logo'

const links = [
  { href: '/shop?category=pickle', label: 'Pickle', key: 'pickle' },
  { href: '/coming-soon', label: 'Jam', key: 'jam' },
  { href: '/coming-soon', label: 'Spices', key: 'spices' },
  { href: '/#story', label: 'Our Story', key: 'story' },
  { href: '/#reviews', label: 'Reviews', key: 'reviews' },
]

export function Navbar() {
  const { count, open: openCart } = useCart()
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const category = searchParams?.get('category') ?? null

  // Highlight logic — matches current URL to a nav link
  const isActive = (key: string) => {
    if (key === 'pickle' && pathname === '/shop' && (category === 'pickle' || !category)) return true
    if (key === 'jam' && (pathname === '/coming-soon')) return true
    if (key === 'spices' && (pathname === '/coming-soon')) return true
    return false
  }

  return (
    <header className="sticky top-0 z-30 px-3 pt-3 md:px-6 md:pt-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border-2 border-ink bg-cream/95 pl-4 pr-2 shadow-pop-sm backdrop-blur-md md:h-[4.5rem] md:pl-6"
      >
        <Link href="/" aria-label="Jar Of Punjab home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = isActive(link.key)
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={
                    'rounded-full px-4 py-2 text-sm font-semibold transition-colors ' +
                    (active
                      ? 'bg-ink text-cream'
                      : 'text-ink hover:bg-marigold')
                  }
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCart}
            aria-label={`Open cart, ${count} ${count === 1 ? 'item' : 'items'}`}
            className="inline-flex h-11 items-center gap-2 rounded-full border-2 border-ink bg-pink px-4 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 md:h-12 md:px-5"
          >
            <ShoppingBag className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Cart</span>
            <span
              aria-hidden="true"
              className="flex size-6 items-center justify-center rounded-full bg-marigold text-xs font-bold text-ink"
            >
              {count}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex size-11 items-center justify-center rounded-full border-2 border-ink bg-marigold text-ink lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
            <span className="sr-only">
              {open ? 'Close menu' : 'Open menu'}
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <ul
          id="mobile-nav"
          className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border-2 border-ink bg-cream shadow-pop lg:hidden"
        >
          {links.map((link) => {
            const active = isActive(link.key)
            return (
              <li
                key={link.label}
                className="border-b-2 border-ink last:border-b-0"
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={
                    'block px-6 py-4 font-display text-2xl font-bold transition-colors ' +
                    (active ? 'bg-pink text-white' : 'text-ink hover:bg-marigold')
                  }
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </header>
  )
}