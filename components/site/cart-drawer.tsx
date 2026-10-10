'use client'

import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/components/cart-context'
import { formatPrice } from '@/lib/pickles'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function CartDrawer() {
  const { items, isOpen, close, updateQty, remove, subtotal, count } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={close}
        className={cn(
          'fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={cn(
          'fixed inset-y-0 right-0 z-[60] flex w-full max-w-md flex-col border-l-2 border-ink bg-cream shadow-pop transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <header className="flex items-center justify-between border-b-2 border-ink px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="size-5 text-ink" aria-hidden="true" />
            <h2 className="font-display text-2xl font-bold text-ink">
              Your Cart
            </h2>
            <span className="rounded-full bg-marigold px-2 py-0.5 text-xs font-bold text-ink">
              {count}
            </span>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close cart"
            className="inline-flex size-10 items-center justify-center rounded-full border-2 border-ink bg-cream text-ink transition-colors hover:bg-marigold"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </header>

        {/* Body */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="flex size-20 items-center justify-center rounded-full border-2 border-ink bg-marigold">
              <ShoppingBag className="size-8 text-ink" aria-hidden="true" />
            </div>
            <p className="font-display text-xl font-bold text-ink">
              Your cart is empty
            </p>
            <p className="text-sm text-ink/70">
              Add a jar or two — trust us, you'll want more.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-2 inline-flex h-11 items-center rounded-full border-2 border-ink bg-pink px-6 text-sm font-bold uppercase tracking-wider text-white shadow-pop-sm transition-transform hover:-translate-y-0.5"
            >
              Keep shopping
            </button>
          </div>
        ) : (
          <ul className="flex-1 overflow-y-auto px-6 py-5">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex gap-4 border-b-2 border-ink/10 py-4 last:border-b-0"
              >
                {/* Image */}
                <div className="flex size-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-ink bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.pickle.image}
                    alt={item.pickle.name}
                    className="size-full object-contain p-1"
                  />
                </div>

                {/* Info */}
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="truncate font-display text-lg font-bold leading-tight text-ink">
                        {item.pickle.name}
                      </p>
                      <p className="truncate text-xs text-ink/60">
                        {item.pickle.punjabi} · {item.pickle.weight}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(item.id)}
                      aria-label={`Remove ${item.pickle.name}`}
                      className="flex-shrink-0 rounded-full p-1 text-ink/50 transition-colors hover:bg-pink/10 hover:text-pink"
                    >
                      <Trash2 className="size-4" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    {/* Qty controls */}
                    <div className="inline-flex items-center rounded-full border-2 border-ink bg-white">
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        aria-label="Decrease quantity"
                        className="inline-flex size-8 items-center justify-center rounded-full text-ink transition-colors hover:bg-marigold"
                      >
                        <Minus className="size-3.5" aria-hidden="true" />
                      </button>
                      <span className="w-6 text-center text-sm font-bold text-ink">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        aria-label="Increase quantity"
                        className="inline-flex size-8 items-center justify-center rounded-full text-ink transition-colors hover:bg-marigold"
                      >
                        <Plus className="size-3.5" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Line price */}
                    <p className="font-display text-lg font-bold text-ink">
                      {formatPrice(item.pickle.price * item.qty)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <footer className="border-t-2 border-ink px-6 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display text-lg font-bold text-ink">
                Subtotal
              </span>
              <span className="font-display text-2xl font-bold text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mb-4 text-xs text-ink/60">
              Shipping calculated at checkout. Free shipping over ₹999.
            </p>
            <Link
                href="/checkout"
                onClick={close}
                className="inline-flex h-14 w-full items-center justify-center rounded-full border-2 border-ink bg-pink text-base font-bold uppercase tracking-wider text-white shadow-pop transition-transform hover:-translate-y-0.5"
            >
                Proceed to checkout
            </Link>
          </footer>
        )}
      </aside>
    </>
  )
}