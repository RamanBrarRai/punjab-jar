'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Minus, Plus, ShoppingBag, Check } from 'lucide-react'
import { useCart } from '@/components/cart-context'
import { formatPrice, toneFor, toneStyles, type Pickle } from '@/lib/pickles'
import { cn } from '@/lib/utils'

export function ProductCard({ product }: { product: Pickle }) {
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

  const handleAdd = () => {
    add(product, variant, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-ink bg-white shadow-pop-sm transition-transform hover:-translate-y-0.5">
      {/* Image */}
      <Link
        href={`/product/${product.id}`}
        className="relative block aspect-[4/3] overflow-hidden border-b-2 border-ink"
      >
        {product.image.startsWith('/') ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={cn('flex h-full w-full items-center justify-center text-6xl', tone.soft)}>
            {product.image}
          </div>
        )}
        {product.badge && (
          <span className="absolute left-3 top-3 rotate-[-4deg] rounded-full border-2 border-ink bg-marigold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink shadow-pop-sm">
            {product.badge}
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-pink line-clamp-1">
          {product.punjabi}
        </p>
        <Link href={`/product/${product.id}`}>
          <h3 className="mt-1 font-display text-xl font-extrabold leading-tight text-ink md:text-2xl line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-ink/65 line-clamp-2 leading-snug">
          {product.tagline}
        </p>

        {/* Size pills */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.variants.map((v) => {
            const active = v.size === selectedSize
            return (
              <button
                key={v.size}
                type="button"
                onClick={() => setSelectedSize(v.size)}
                aria-pressed={active}
                className={cn(
                  'rounded-full border-2 border-ink px-3 py-1 text-[11px] font-bold transition-colors',
                  active
                    ? 'bg-ink text-cream'
                    : 'bg-cream text-ink hover:bg-marigold'
                )}
              >
                {v.size}
              </button>
            )
          })}
        </div>

        {/* Price + qty row */}
        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="font-display text-xl font-extrabold leading-none text-ink">
              {formatPrice(lineTotal)}
            </span>
            <span className="text-[10px] font-semibold text-ink/50">
              {variant.size} · {qty} {qty === 1 ? 'jar' : 'jars'}
            </span>
          </div>

          {/* Qty selector */}
          <div className="inline-flex items-center rounded-full border-2 border-ink bg-white">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
              className="inline-flex size-7 items-center justify-center rounded-full text-ink transition-colors hover:bg-marigold"
            >
              <Minus className="size-3" aria-hidden="true" />
            </button>
            <span className="w-6 text-center text-xs font-bold text-ink">{qty}</span>
            <button
              type="button"
              onClick={() => setQty((q) => q + 1)}
              aria-label="Increase quantity"
              className="inline-flex size-7 items-center justify-center rounded-full text-ink transition-colors hover:bg-marigold"
            >
              <Plus className="size-3" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Add to cart */}
        <button
          type="button"
          onClick={handleAdd}
          className={cn(
            'mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border-2 border-ink text-xs font-bold uppercase tracking-wider shadow-pop-sm transition-all hover:-translate-y-0.5 hover:shadow-pop active:translate-y-0 active:shadow-none',
            added ? 'bg-emerald text-cream' : 'bg-pink text-white'
          )}
        >
          {added ? (
            <Check className="size-4" aria-hidden="true" />
          ) : (
            <ShoppingBag className="size-4" aria-hidden="true" />
          )}
          <span aria-live="polite">
            {added ? 'Added!' : `Add · ${formatPrice(lineTotal)}`}
          </span>
        </button>
      </div>
    </article>
  )
}