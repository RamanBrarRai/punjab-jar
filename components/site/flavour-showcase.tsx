'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Utensils } from 'lucide-react'
import { formatPrice, pickles, toneFor, toneStyles, productsByCategory } from '@/lib/pickles'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'
import { HeatMeter } from './heat-meter'
import { AddToCartButton } from './add-to-cart-button'

export function FlavourShowcase() {
  const pickleItems = productsByCategory('pickle')
  const [activeId, setActiveId] = useState(pickleItems[0].id)
  const active = pickleItems.find((p) => p.id === activeId) ?? pickleItems[0]
  const tone = toneStyles[toneFor(active.id)]

  return (
    <section id="flavours" className="phulkari relative scroll-mt-24 bg-ink py-24 text-cream md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          tone="light"
          eyebrow="Pick your vibe"
          title={
            <>
              Six jars. <span className="text-marigold">One Punjabi soul.</span>
            </>
          }
          description="Tangy, fiery, sweet-sour or all of the above. Tap a flavour to meet it properly."
        />

        <div role="tablist" aria-label="Flavours" className="mt-12 flex flex-wrap gap-3">
          {pickleItems.map((p) => {
            const selected = p.id === activeId
            const t = toneStyles[toneFor(p.id)]
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                id={`tab-${p.id}`}
                aria-selected={selected}
                aria-controls="flavour-panel"
                onClick={() => setActiveId(p.id)}
                className={cn(
                  'rounded-full border-2 px-5 py-2.5 font-display text-lg font-bold transition-all',
                  selected
                    ? cn(t.bg, t.text, 'border-cream -translate-y-1 shadow-[4px_4px_0_0_var(--color-cream)]')
                    : 'border-cream/30 text-cream hover:border-cream',
                )}
              >
                {p.name}
              </button>
            )
          })}
        </div>

        <div
          id="flavour-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="mt-10 grid items-center gap-10 rounded-[2.5rem] border-2 border-cream bg-cream p-5 text-ink md:p-8 lg:grid-cols-2 lg:gap-14 lg:p-12"
        >
          <div className="relative">
            <div className={cn('absolute inset-0 rotate-3 rounded-[2rem] border-2 border-ink', tone.bg)} aria-hidden="true" />
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border-2 border-ink">
              <Image
                key={active.id}
                src={active.image}
                alt={`A jar of ${active.name.toLowerCase()} achaar`}
                fill
                sizes="(min-width: 1024px) 520px, 90vw"
                className="animate-in fade-in zoom-in-95 object-cover duration-500"
              />
            </div>
            {active.badge && (
              <span className="absolute -right-2 -top-3 rotate-6 rounded-full border-2 border-ink bg-marigold px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-ink shadow-pop-sm">
                {active.badge}
              </span>
            )}
          </div>

          <div key={active.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink">{active.punjabi}</p>
            <h3 className="mt-2 text-5xl font-extrabold leading-none tracking-tight md:text-6xl">
              {active.name} Achaar
            </h3>
            <p className="mt-4 font-display text-2xl font-semibold text-ink/80">{active.tagline}</p>
            <p className="mt-5 leading-relaxed text-ink/75">{active.description}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <HeatMeter heat={active.heat} className="rounded-full border-2 border-ink px-3 py-1.5" />
              {active.notes.map((note) => (
                <span key={note} className={cn('rounded-full border-2 border-ink px-3 py-1.5 text-sm font-semibold', tone.soft)}>
                  {note}
                </span>
              ))}
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm font-semibold">
              <Utensils className="size-4 text-pink" aria-hidden="true" />
              Best with: <span className="font-normal text-ink/75">{active.pairing}</span>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5 border-t-2 border-dashed border-ink/25 pt-7">
              <p>
                <span className="font-display text-4xl font-extrabold">
                  {formatPrice(
                    (active.variants.find((v) => v.size === active.defaultSize) ?? active.variants[0]).price
                  )}
                </span>
                <span className="ml-2 text-sm font-semibold text-ink/60">
                  / {(active.variants.find((v) => v.size === active.defaultSize) ?? active.variants[0]).size}
                </span>
              </p>
              <AddToCartButton
                pickle={active}
                variant={
                  active.variants.find((v) => v.size === active.defaultSize) ??
                  active.variants[0]
                }
                className="mt-0 flex-1 sm:flex-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
