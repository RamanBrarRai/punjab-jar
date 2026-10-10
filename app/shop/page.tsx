'use client'

import { Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { pickles, productsByCategory, type Category } from '@/lib/pickles'
import { cn } from '@/lib/utils'
import { ProductCard } from '@/components/site/product-card'

type Filter = 'all' | Category

const filters: { slug: Filter; label: string }[] = [
  { slug: 'all', label: 'All' },
  { slug: 'pickle', label: 'Pickle' },
  // TODO: Uncomment when jams + spices go live
  // { slug: 'jam', label: 'Jam' },
  // { slug: 'spices', label: 'Spices Powder' },
]

function ShopContent() {
  const router = useRouter()
  const params = useSearchParams()
  const initial = (params.get('category') as Filter) || 'all'
  const [active, setActive] = useState<Filter>(
    filters.some((f) => f.slug === initial) ? initial : 'all'
  )

  useEffect(() => {
    const cat = params.get('category') as Filter
    if (cat && filters.some((f) => f.slug === cat)) {
      setActive(cat)
    } else {
      setActive('all')
    }
  }, [params])

  const handleFilter = (slug: Filter) => {
    setActive(slug)
    const url = slug === 'all' ? '/shop' : `/shop?category=${slug}`
    router.push(url, { scroll: false })
  }

  // TODO: When jams/spices go live, change back to: active === 'all' ? pickles : ...
    const available = productsByCategory('pickle')
    const items = active === 'all' ? available : productsByCategory(active)

  return (
    <main className="min-h-screen bg-cream pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border-2 border-ink bg-marigold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink shadow-pop-sm">
            The full pantry
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-ink md:text-7xl">
            Everything <span className="text-pink">from our kitchen.</span>
          </h1>
          <p className="mt-6 max-w-xxl text-lg text-ink/70">
            Pickles, jams and spice powders — all made in small batches in Mohali.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          role="tablist"
          aria-label="Product categories"
          className="mt-12 flex flex-wrap gap-3"
        >
          {filters.map((f) => {
            const selected = f.slug === active
            const count =
              f.slug === 'all' ? pickles.length : productsByCategory(f.slug).length
            return (
              <button
                key={f.slug}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => handleFilter(f.slug)}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full border-2 border-ink px-5 py-2.5 font-display text-lg font-bold transition-all',
                  selected
                    ? 'bg-pink text-white -translate-y-1 shadow-[4px_4px_0_0_var(--color-ink)]'
                    : 'bg-cream text-ink hover:bg-marigold'
                )}
              >
                {f.label}
                <span
                  className={cn(
                    'flex size-6 items-center justify-center rounded-full text-xs font-bold',
                    selected ? 'bg-marigold text-ink' : 'bg-ink text-cream'
                  )}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Product grid — same layout as homepage */}
        <div className="mt-12">
          {items.length > 0 ? (
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {items.map((p) => (
                <li key={p.id}>
                  <ProductCard product={p} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="py-20 text-center text-ink/60">Nothing here yet.</p>
          )}
        </div>
      </div>
    </main>
  )
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream" />}>
      <ShopContent />
    </Suspense>
  )
}