import { Logo } from './logo'
import { NewsletterForm } from './newsletter-form'

const columns = [
  { title: 'Shop', links: ['All Pickles', 'Tasting Trio', 'Gift Boxes', 'Subscriptions'] },
  { title: 'Company', links: ['Our Story', 'The Kitchen', 'Journal', 'Wholesale'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'FAQ', 'Contact'] },
]

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo inverted />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/65">
              Homemade Punjabi achaar from our rooftop in Amritsar. Letters from the kitchen, once a month.
            </p>
            <NewsletterForm />
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-mustard">{col.title}</h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#top" className="text-sm text-cream/75 transition-colors hover:text-pink">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <p
          aria-hidden="true"
          className="mt-20 select-none font-serif text-[18vw] font-medium leading-none tracking-tighter text-cream/[0.06] md:text-[12rem]"
        >
          Jar Of Punjab
        </p>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/55 md:flex-row">
          <p>© {new Date().getFullYear()} Jar Of Punjab. Made with love in Amritsar.</p>
          <ul className="flex gap-6">
            <li>
              <a href="#top" className="hover:text-cream">Instagram</a>
            </li>
            <li>
              <a href="#top" className="hover:text-cream">Privacy</a>
            </li>
            <li>
              <a href="#top" className="hover:text-cream">Terms</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
