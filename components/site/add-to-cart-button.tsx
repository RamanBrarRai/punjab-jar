'use client'

import { useState } from 'react'
import { Check, Plus } from 'lucide-react'
import { useCart } from '@/components/cart-context'
import type { Pickle, Variant } from '@/lib/pickles'
import { cn } from '@/lib/utils'

export function AddToCartButton({
  pickle,
  variant,
  className,
}: {
  pickle: Pickle
  variant: Variant
  className?: string
}) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  return (
    <button
      type="button"
      onClick={() => {
        add(pickle, variant)
        setAdded(true)
        setTimeout(() => setAdded(false), 1500)
      }}
      className={cn(
        'inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-ink px-5 text-sm font-bold uppercase tracking-wider shadow-pop-sm transition-all hover:-translate-y-0.5 hover:shadow-pop active:translate-y-0 active:shadow-none',
        added ? 'bg-emerald text-cream' : 'bg-pink text-white',
        className,
      )}
      aria-label={`Add ${pickle.name} ${variant.size} to cart`}
    >
      {added ? (
        <Check className="size-4" aria-hidden="true" />
      ) : (
        <Plus className="size-4" aria-hidden="true" />
      )}
      <span aria-live="polite">{added ? 'Added!' : 'Add to cart'}</span>
    </button>
  )
}