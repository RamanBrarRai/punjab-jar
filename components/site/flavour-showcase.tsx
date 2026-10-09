'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Flame } from 'lucide-react'
import { pickles, formatPrice } from '@/lib/pickles'
import { useCart } from '@/components/cart-context'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

export function FlavourShowcase() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const { add } = useCart()
  const pickle = pickles[active]

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    let next = active
    if (e.key === 'ArrowRight') next = (active + 1) % pickles.length
    else if (e.key === 'ArrowLeft') next = (active - 1 + pickles.length) % pickles.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = pickles.length - 1
    else return
    e.preventDefault()
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="flavours" className="bg-cream py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="The Flavour Library"
          title={
            <>
              Six jars. Six <em className="italic text-pink">stories</em>.
            </>
          }
          description="Every recipe comes from a different kitchen in our family. Pick one and taste where it came from."
        />

        <div
          role="tablist"
          aria-label="Pickle flavours"
          onKeyDown={onKeyDown}
          className="-mx-5 mt-12 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0"
        >
          {pickles.map((p, i) => (
            <button
              key={p.id}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              role="tab"
              id={`tab-${p.id}`}
              aria-selected={i === active}
              aria-controls={`panel-${p.id}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                'shrink-0 rounded-full border px-6 py-3 font-serif text-lg transition-colors',
                i === active
                  ? 'border-forest bg-forest text-cream'
                  : 'border-ink/15 text-ink hover:border-forest hover:text-forest',
              )}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div
          key={pickle.id}
          role="tabpanel"
          id={`panel-${pickle.id}`}
          aria-labelledby={`tab-${pickle.id}`}
          className="mt-10 grid animate-in fade-in items-center gap-10 duration-500 md:grid-cols-2 md:gap-16"
        >
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
            <Image
              src={pickle.image}
              alt={`Jar of ${pickle.name.toLowerCase()} pickle`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <span className="absolute left-5 top-5 rounded-full bg-cream px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-forest">
              No. 0{active + 1}
            </span>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-pink">{pickle.punjabi}</p>
            <h3 className="mt-4 text-balance font-serif text-4xl leading-tight text-forest md:text-6xl">
              {pickle.tagline}
            </h3>
            <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-ink/75">{pickle.description}</p>

            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-ink/10 pt-8">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-ink/55">Heat</dt>
                <dd className="mt-2 flex gap-1" aria-label={`${pickle.heat} out of 3`}>
                  {[1, 2, 3].map((n) => (
                    <Flame
                      key={n}
                      aria-hidden="true"
                      className={cn('size-5', n <= pickle.heat ? 'fill-pink text-pink' : 'text-ink/20')}
                    />
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-ink/55">Best with</dt>
                <dd className="mt-2 font-serif text-lg text-ink">{pickle.pairing}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-xs uppercase tracking-[0.2em] text-ink/55">Tasting notes</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {pickle.notes.map((note) => (
                    <span key={note} className="rounded-full bg-mustard/30 px-4 py-1.5 text-sm font-medium text-forest">
                      {note}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={add}
                className="inline-flex h-14 items-center rounded-full bg-pink px-8 text-sm font-semibold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5"
              >
                Add to cart · {formatPrice(pickle.price)}
              </button>
              <span className="text-sm text-ink/60">{pickle.weight} glass jar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
