'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'

type CartContextValue = {
  count: number
  add: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)
  const add = useCallback(() => setCount((c) => c + 1), [])
  const value = useMemo(() => ({ count, add }), [count, add])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
