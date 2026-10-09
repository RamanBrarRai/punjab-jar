import { AtSign as Instagram, Mail, MapPin } from 'lucide-react'
import { Logo } from './logo'
import { NewsletterForm } from './newsletter-form'

const columns = [
  {
    title: 'Shop',
    links: [
      { href: '#shop', label: 'All jars' },
      { href: '#flavours', label: 'Flavours' },
      { href: '#shop', label: 'Gift boxes' },
    ],
  },
  {
    title: 'About',
    links: [
      { href: '#story', label: 'Our story' },
      { href: '#why', label: 'How we make it' },
      { href: '#reviews', label: 'Reviews' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div aria-hidden="true" className="zigzag h-6 border-b-2 border-ink" />
      <div className="mx-auto max-w-7xl px-5 pt-20 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="min-w-0">
            <Logo imageClassName="h-20 md:h-24" />
            <h2 className="mt-8 text-3xl font-extrabold leading-tight md:text-4xl">
              Get first dibs on <span className="text-marigold">seasonal drops.</span>
            </h2>
            <p className="mt-3 max-w-sm text-cream/70">
              Gajar in winter, kairi in summer. Join the list and never miss a batch.
            </p>
            <NewsletterForm />
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-pink">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-lg font-semibold text-cream/85 transition-colors hover:text-marigold">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/15 py-6 text-sm text-cream/60 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-marigold" aria-hidden="true" /> Hoshiarpur, Punjab
            </li>
            <li>
              <a href="mailto:hello@jarofpunjab.com" className="flex items-center gap-2 hover:text-cream">
                <Mail className="size-4 text-marigold" aria-hidden="true" /> hello@jarofpunjab.com
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="flex items-center gap-2 hover:text-cream">
                <Instagram className="size-4 text-marigold" aria-hidden="true" /> @jarofpunjab
              </a>
            </li>
          </ul>
          <p>© {new Date().getFullYear()} Jar Of Punjab. Made with pyaar.</p>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="select-none overflow-hidden whitespace-nowrap text-center font-display text-[17vw] font-extrabold leading-[0.8] tracking-tighter text-pink"
      >
        Jar of Punjab
      </p>
    </footer>
  )
}
