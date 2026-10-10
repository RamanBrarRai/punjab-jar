import Link from 'next/link'
import { MapPin, Mail, AtSign } from 'lucide-react'
import { Logo } from './logo'
import { NewsletterForm } from './newsletter-form'

const shopLinks = [
  { href: '/shop?category=pickle', label: 'All jars' },
  { href: '/#flavours', label: 'Flavours' },
  { href: '/shop', label: 'Gift boxes' },
]

const aboutLinks = [
  { href: '/#story', label: 'Our story' },
  { href: '/#why', label: 'How we make it' },
  { href: '/#reviews', label: 'Reviews' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-ink bg-ink text-cream">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-12 md:px-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Brand + newsletter */}
          <div className="md:col-span-6">
            <Link href="/" aria-label="Jar Of Punjab home" className="inline-block">
              <Logo />
            </Link>
            <h3 className="mt-6 max-w-md font-display text-3xl font-extrabold leading-tight text-cream md:text-4xl">
              Get first dibs on{' '}
              <span className="text-marigold">seasonal drops.</span>
            </h3>
            <p className="mt-3 max-w-sm text-sm text-cream/70">
              Gajar in winter, kairi in summer. Join the list and never miss a batch.
            </p>
            <div className="mt-5 max-w-md">
              <NewsletterForm />
            </div>
          </div>

          {/* Shop links */}
          <nav aria-label="Shop" className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-pink">
              Shop
            </h4>
            <ul className="mt-5 space-y-3">
              {shopLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-cream/80 transition-colors hover:text-marigold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* About links */}
          <nav aria-label="About" className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-pink">
              About
            </h4>
            <ul className="mt-5 space-y-3">
              {aboutLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-cream/80 transition-colors hover:text-marigold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact row */}
        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-8 text-sm text-cream/70 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-6">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-marigold" aria-hidden="true" />
              Mohali, Punjab
            </span>
            <a
              href="mailto:hello@jarofpunjab.com"
              className="inline-flex items-center gap-2 hover:text-marigold"
            >
              <Mail className="size-4 text-marigold" aria-hidden="true" />
              hello@jarofpunjab.com
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-marigold"
            >
              <AtSign className="size-4 text-marigold" aria-hidden="true" />
              @jarofpunjab
            </a>
          </div>
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Jar Of Punjab. Made with pyaar.
          </p>
        </div>
      </div>

      {/* Giant animated marquee */}
      <div className="relative border-t-2 border-cream/10">
        <div className="marquee-giant">
          <span className="marquee-giant__text">Jar of Punjab</span>
          <span className="marquee-giant__dot" aria-hidden="true">·</span>
          <span className="marquee-giant__text">Jar of Punjab</span>
          <span className="marquee-giant__dot" aria-hidden="true">·</span>
          <span className="marquee-giant__text">Jar of Punjab</span>
          <span className="marquee-giant__dot" aria-hidden="true">·</span>
          <span className="marquee-giant__text">Jar of Punjab</span>
          <span className="marquee-giant__dot" aria-hidden="true">·</span>
        </div>
      </div>
    </footer>
  )
}