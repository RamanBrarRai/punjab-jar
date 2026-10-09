'use client'

import { useState } from 'react'
import { Check, Plus } from 'lucide-react'
import { useCart } from '@/components/cart-context'

export function AddToCartButton({ name }: { name: string }) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  return (
    <button
      type="button"
      onClick={() => {
        add()
        setAdded(true)
        setTimeout(() => setAdded(false), 1500)
      }}
      className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-forest text-sm font-semibold uppercase tracking-wider text-forest transition-colors hover:bg-forest hover:text-cream"
    >
      {added ? <Check className="size-4" aria-hidden="true" /> : <Plus className="size-4" aria-hidden="true" />}
      {added ? 'Added' : 'Add to cart'}
      <span className="sr-only"> {name} achaar</span>
    </button>
  )
}
