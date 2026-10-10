'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { Pickle, Variant } from '@/lib/pickles'

export type CartItem = {
  id: string          // unique per (productId + size) combo
  product: Pickle
  variant: Variant
  qty: number
}

type CartContextValue = {
  items: CartItem[]
  count: number
  subtotal: number
  isOpen: boolean
  add: (product: Pickle, variant: Variant, qty?: number) => void
  remove: (id: string) => void
  updateQty: (id: string, qty: number) => void
  clear: () => void
  open: () => void
  close: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = 'jop-cart-v2'   // bumped version — old carts will be cleared

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed)) setItems(parsed)
      }
    } catch {
      // ignore
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore
    }
  }, [items, hydrated])

  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [isOpen])

  const add = useCallback(
    (product: Pickle, variant: Variant, qty: number = 1) => {
      const key = `${product.id}__${variant.size}`
      setItems((prev) => {
        const existing = prev.find((i) => i.id === key)
        if (existing) {
          return prev.map((i) =>
            i.id === key ? { ...i, qty: i.qty + qty } : i
          )
        }
        return [...prev, { id: key, product, variant, qty }]
      })
      setIsOpen(true)
    },
    []
  )

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const updateQty = useCallback((id: string, qty: number) => {
    if (qty < 1) {
      setItems((prev) => prev.filter((i) => i.id !== id))
      return
    }
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)))
  }, [])

  const clear = useCallback(() => setItems([]), [])
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.qty, 0),
    [items]
  )

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.variant.price * i.qty, 0),
    [items]
  )

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      isOpen,
      add,
      remove,
      updateQty,
      clear,
      open,
      close,
    }),
    [items, count, subtotal, isOpen, add, remove, updateQty, clear, open, close]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}