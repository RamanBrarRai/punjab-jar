import Image from 'next/image'
import { formatPrice, pickles, toneFor, toneStyles } from '@/lib/pickles'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'
import { HeatMeter } from './heat-meter'
import { AddToCartButton } from './add-to-cart-button'

export function ProductGrid() {
  return (
    <section id="shop" className="scroll-mt-24 bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="The collection"
            title={
              <>
                Stock up the <span className="text-pink">pantry.</span>
              </>
            }
            description="Every jar is cut, cured and packed by hand — in batches small enough to taste each one."
          />
          <p className="shrink-0 rotate-2 self-start rounded-2xl border-2 border-ink bg-emerald px-5 py-3 font-display text-lg font-bold text-cream shadow-pop-sm md:self-end">
            Free shipping over ₹999
          </p>
        </div>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pickles.map((p) => {
            const tone = toneStyles[toneFor(p.id)]
            return (
              <li
                key={p.id}
                className="group flex flex-col overflow-hidden rounded-[2rem] border-2 border-ink bg-white shadow-pop transition-all duration-300 hover:-translate-y-1.5 hover:shadow-pop-lg"
              >
                <div className={cn('relative border-b-2 border-ink p-5', tone.bg)}>
                  <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border-2 border-ink">
                    <Image
                      src={p.image}
                      alt={`A jar of ${p.name.toLowerCase()} achaar`}
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {p.badge && (
                    <span className="absolute left-3 top-3 -rotate-6 rounded-full border-2 border-ink bg-cream px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
                      {p.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-pink">{p.punjabi}</p>
                      <h3 className="mt-1 text-3xl font-extrabold tracking-tight text-ink">{p.name}</h3>
                    </div>
                    <p className="text-right">
                      <span className="block font-display text-2xl font-extrabold text-ink">{formatPrice(p.price)}</span>
                      <span className="text-xs font-semibold text-ink/60">{p.weight}</span>
                    </p>
                  </div>
                  <p className="mt-3 flex-1 leading-relaxed text-ink/70">{p.tagline}</p>
                  <HeatMeter heat={p.heat} className="mt-4 text-ink" />
                  <AddToCartButton pickle={p} />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
