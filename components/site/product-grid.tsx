'use client'

import { productsByCategory } from '@/lib/pickles'
import { SectionHeading } from './section-heading'
import { ProductCard } from './product-card'

export function ProductGrid() {
  const items = productsByCategory('pickle')

  return (
    <section id="shop" className="scroll-mt-24 bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="The collection"
          title={
            <>
              Stock up the <span className="text-pink">pantry.</span>
            </>
          }
          description="From the tangy taste of mango achar to the flavours that bring back family meals, every jar is inspired by the homemade food we grew up loving. Explore your favourites and bring a little Home nostalgia to your table."
        />

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {items.map((p) => (
            <li key={p.id}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}