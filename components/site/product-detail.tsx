'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Bell, Check, Minus, Plus, ShoppingBag, Utensils } from 'lucide-react'
import { useCart } from '@/components/cart-context'
import { formatPrice, toneFor, toneStyles, type Pickle } from '@/lib/pickles'
import { cn } from '@/lib/utils'
import { HeatMeter } from './heat-meter'

export function ProductDetail({ product }: { product: Pickle }) {
  const { add } = useCart()
  const defaultVariant =
    product.variants.find((v) => v.size === product.defaultSize) ??
    product.variants[0]

  const [selectedSize, setSelectedSize] = useState(defaultVariant.size)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const variant =
    product.variants.find((v) => v.size === selectedSize) ?? product.variants[0]
  const lineTotal = variant.price * qty
  const tone = toneStyles[toneFor(product.id)]
  const isPreview = product.comingSoon === true
  const isImagePath = product.image.startsWith('/')

  const handleAdd = () => {
    if (isPreview) return
    add(product, variant, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <main className="min-h-screen bg-cream pt-24 pb-24 md:pt-32 md:pb-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Back link */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm font-bold text-ink/70 transition-colors hover:text-pink"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to shop
        </Link>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-14 items-start">
          {/* IMAGE */}
          <div className="relative">
            <div
              className={cn(
                'absolute inset-0 rotate-3 rounded-[2rem] border-2 border-ink',
                tone.bg
              )}
              aria-hidden="true"
            />
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border-2 border-ink bg-white">
              {isImagePath ? (
                <Image
                  src={product.image}
                  alt={`A jar of ${product.name}`}
                  fill
                  priority
                  sizes="(min-width: 768px) 500px, 90vw"
                  className="object-cover"
                />
              ) : (
                <div
                  className={cn(
                    'flex h-full w-full items-center justify-center text-[10rem]',
                    tone.soft
                  )}
                >
                  {product.image}
                </div>
              )}
            </div>
            {product.badge && !isPreview && (
              <span className="absolute -right-2 -top-3 rotate-6 rounded-full border-2 border-ink bg-marigold px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-ink shadow-pop-sm">
                {product.badge}
              </span>
            )}
            {isPreview && (
              <span className="absolute -right-2 -top-3 rotate-6 rounded-full border-2 border-ink bg-ink px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-cream shadow-pop-sm">
                Coming soon
              </span>
            )}
          </div>

          {/* DETAILS */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink">
              {product.punjabi}
            </p>
            <h1 className="mt-2 font-display text-4xl font-extrabold leading-none tracking-tight text-ink md:text-6xl">
              {product.name}
            </h1>
            <p className="mt-4 font-display text-xl font-semibold text-ink/80 md:text-2xl">
              {product.tagline}
            </p>
            <p className="mt-5 leading-relaxed text-ink/75">
              {product.description}
            </p>

            {/* Heat + notes */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {product.heat !== undefined && (
                <HeatMeter
                  heat={product.heat}
                  className="rounded-full border-2 border-ink px-3 py-1.5"
                />
              )}
              {product.notes.map((note) => (
                <span
                  key={note}
                  className={cn(
                    'rounded-full border-2 border-ink px-3 py-1.5 text-sm font-semibold',
                    tone.soft
                  )}
                >
                  {note}
                </span>
              ))}
            </div>

            {/* Best with */}
            {product.pairing && (
              <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-ink">
                <Utensils className="size-4 text-pink" aria-hidden="true" />
                Best with:{' '}
                <span className="font-normal text-ink/75">
                  {product.pairing}
                </span>
              </p>
            )}

            {/* Size pills */}
            <div className="mt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-ink/60">
                Size
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => {
                  const active = v.size === selectedSize
                  return (
                    <button
                      key={v.size}
                      type="button"
                      onClick={() => !isPreview && setSelectedSize(v.size)}
                      disabled={isPreview}
                      aria-pressed={active}
                      className={cn(
                        'rounded-full border-2 border-ink px-5 py-2.5 font-display text-base font-bold transition-all',
                        isPreview
                          ? 'cursor-not-allowed bg-cream text-ink/40'
                          : active
                            ? 'bg-ink text-cream -translate-y-1 shadow-[4px_4px_0_0_var(--color-ink)]'
                            : 'bg-cream text-ink hover:bg-marigold'
                      )}
                    >
                      {v.size}
                      {!isPreview && (
                        <span
                          className={cn(
                            'ml-2 text-xs font-semibold',
                            active ? 'text-cream/70' : 'text-ink/60'
                          )}
                        >
                          {formatPrice(v.price)}
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Qty + Price */}
            {!isPreview && (
              <div className="mt-8 border-t-2 border-dashed border-ink/25 pt-7">
                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-ink/60">
                      Quantity
                    </p>
                    <div className="inline-flex items-center rounded-full border-2 border-ink bg-white">
                      <button
                        type="button"
                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                        aria-label="Decrease quantity"
                        className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-marigold"
                      >
                        <Minus className="size-4" aria-hidden="true" />
                      </button>
                      <span className="w-10 text-center font-display text-lg font-bold text-ink">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQty((q) => q + 1)}
                        aria-label="Increase quantity"
                        className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-marigold"
                      >
                        <Plus className="size-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div className="ml-auto text-right">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-ink/60">
                      Total
                    </p>
                    <p className="font-display text-4xl font-extrabold leading-none text-ink">
                      {formatPrice(lineTotal)}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-ink/50">
                      {variant.size} × {qty}
                    </p>
                  </div>
                </div>

                {/* Add to cart */}
                <button
                  type="button"
                  onClick={handleAdd}
                  className={cn(
                    'mt-7 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border-2 border-ink text-sm font-bold uppercase tracking-wider shadow-pop-sm transition-all hover:-translate-y-0.5 hover:shadow-pop',
                    added ? 'bg-emerald text-cream' : 'bg-pink text-white'
                  )}
                >
                  {added ? (
                    <Check className="size-5" aria-hidden="true" />
                  ) : (
                    <ShoppingBag className="size-5" aria-hidden="true" />
                  )}
                  <span aria-live="polite">
                    {added ? 'Added!' : `Add to cart · ${formatPrice(lineTotal)}`}
                  </span>
                </button>
              </div>
            )}

            {isPreview && (
              <Link
                href="/coming-soon"
                className="mt-8 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border-2 border-ink bg-marigold text-sm font-bold uppercase tracking-wider text-ink shadow-pop-sm transition-all hover:-translate-y-0.5"
              >
                <Bell className="size-5" aria-hidden="true" />
                Notify me when available
              </Link>
            )}

            {/* Trust lines */}
            <ul className="mt-8 space-y-3 border-t-2 border-dashed border-ink/25 pt-6 text-sm text-ink/70">
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald" aria-hidden="true" />
                Free shipping over ₹999
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald" aria-hidden="true" />
                Ships in 2–3 business days
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald" aria-hidden="true" />
                Made in small batches in Mohali, Punjab
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}