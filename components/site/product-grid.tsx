import Image from 'next/image'
import { pickles, formatPrice } from '@/lib/pickles'
import { SectionHeading } from './section-heading'
import { AddToCartButton } from './add-to-cart-button'

export function ProductGrid() {
  return (
    <section id="shop" className="border-t border-ink/10 bg-cream py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="The Pantry"
            title={
              <>
                Shop the <em className="italic text-pink">collection</em>
              </>
            }
          />
          <p className="max-w-xs text-sm leading-relaxed text-ink/65">
            Packed in reusable glass, sealed by hand, shipped within 48 hours of bottling.
          </p>
        </div>

        <ul className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {pickles.map((p, i) => (
            <li key={p.id}>
              <article className="group flex h-full flex-col">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={p.image}
                    alt={`Jar of ${p.name.toLowerCase()} pickle`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {p.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-mustard px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-forest">
                      {p.badge}
                    </span>
                  )}
                  <span className="absolute right-4 top-4 font-serif text-sm italic text-ink/70">
                    No. 0{i + 1}
                  </span>
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-4 border-b border-ink/10 pb-4">
                  <h3 className="font-serif text-2xl text-forest">{p.name} Achaar</h3>
                  <p className="font-serif text-xl text-ink">{formatPrice(p.price)}</p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  {p.punjabi} · {p.weight}
                </p>
                <p className="mt-2 flex-1 font-serif text-lg italic text-ink/80">{p.tagline}</p>
                <AddToCartButton name={p.name} />
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
