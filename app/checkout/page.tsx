'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useCart } from '@/components/cart-context'
import { formatPrice } from '@/lib/pickles'
import { cn } from '@/lib/utils'

type FormState = {
  name: string
  phone: string
  email: string
  address: string
  city: string
  state: string
  pincode: string
}

type Errors = Partial<Record<keyof FormState, string>>

export default function CheckoutPage() {
  const { items, subtotal, count, clear } = useCart()
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [orderId, setOrderId] = useState('')

  const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 79
  const total = subtotal + shipping

  const validate = (): boolean => {
    const e: Errors = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!/^[6-9]\d{9}$/.test(form.phone))
      e.phone = 'Enter a valid 10-digit mobile number'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = 'Enter a valid email'
    if (form.address.trim().length < 10)
      e.address = 'Enter your full address'
    if (!form.city.trim()) e.city = 'Required'
    if (!form.state.trim()) e.state = 'Required'
    if (!/^\d{6}$/.test(form.pincode)) e.pincode = '6-digit PIN required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    if (items.length === 0) return

    const id = 'JOP' + Date.now().toString().slice(-8)
    setOrderId(id)

    // Log order — will be sent to Razorpay here later
    console.log('Order placed:', { orderId: id, form, items, subtotal, shipping, total })

    setSubmitted(true)
    clear()
  }

  const input = (
    name: keyof FormState,
    label: string,
    type: string = 'text',
    placeholder: string = ''
  ) => (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block text-xs font-bold uppercase tracking-wider text-ink"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        value={form[name]}
        placeholder={placeholder}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        className={cn(
          'w-full rounded-2xl border-2 bg-white px-4 py-3 text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-pink',
          errors[name] ? 'border-pink' : 'border-ink'
        )}
      />
      {errors[name] && (
        <p className="mt-1 text-xs font-bold text-pink">{errors[name]}</p>
      )}
    </div>
  )

  // ---------- Empty cart ----------
  if (items.length === 0 && !submitted) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 py-20 text-center">
        <div className="flex size-24 items-center justify-center rounded-full border-2 border-ink bg-marigold">
          <span className="text-4xl">🫙</span>
        </div>
        <h1 className="mt-6 font-display text-3xl font-bold text-ink">
          Your cart is empty
        </h1>
        <p className="mt-2 text-ink/70">
          Add a jar or two before checking out.
        </p>
        <Link
          href="/#shop"
          className="mt-8 inline-flex h-12 items-center rounded-full border-2 border-ink bg-pink px-6 text-sm font-bold uppercase tracking-wider text-white shadow-pop-sm transition-transform hover:-translate-y-0.5"
        >
          Shop the pickles
        </Link>
      </main>
    )
  }

  // ---------- Order confirmed ----------
  if (submitted) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 py-20 text-center">
        <div className="flex size-24 items-center justify-center rounded-full border-2 border-ink bg-emerald text-4xl">
          🎉
        </div>
        <h1 className="mt-6 font-display text-4xl font-bold text-ink">
          Thank you!
        </h1>
        <p className="mt-3 max-w-md text-ink/70">
          Your order is being packed with love in Punjab. We'll contact you
          shortly at <strong>{form.phone}</strong>.
        </p>
        <div className="mt-8 rounded-3xl border-2 border-ink bg-white px-6 py-4 shadow-pop-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-ink/60">
            Order ID
          </p>
          <p className="font-display text-2xl font-bold text-ink">{orderId}</p>
        </div>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center rounded-full border-2 border-ink bg-marigold px-6 text-sm font-bold uppercase tracking-wider text-ink shadow-pop-sm transition-transform hover:-translate-y-0.5"
        >
          Back to home
        </Link>
      </main>
    )
  }

  // ---------- Checkout form ----------
  return (
    <main className="min-h-screen bg-cream px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-ink/70 hover:text-pink"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to shop
        </Link>

        <h1 className="font-display text-4xl font-bold text-ink md:text-5xl">
          Checkout
        </h1>
        <p className="mt-2 text-ink/70">
          {count} {count === 1 ? 'jar' : 'jars'} in your cart
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-8 md:grid-cols-3"
        >
          {/* Left: form */}
          <div className="space-y-8 md:col-span-2">
            {/* Contact */}
            <section className="rounded-3xl border-2 border-ink bg-white p-6 shadow-pop-sm">
              <h2 className="mb-5 font-display text-2xl font-bold text-ink">
                Contact
              </h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {input('name', 'Full name')}
                {input('phone', 'Phone (10 digits)')}
                <div className="sm:col-span-2">
                  {input('email', 'Email (optional)', 'email')}
                </div>
              </div>
            </section>

            {/* Delivery */}
            <section className="rounded-3xl border-2 border-ink bg-white p-6 shadow-pop-sm">
              <h2 className="mb-5 font-display text-2xl font-bold text-ink">
                Delivery address
              </h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  {input('address', 'Address', 'text', 'House no., street, area')}
                </div>
                {input('city', 'City')}
                {input('state', 'State')}
                {input('pincode', 'PIN code')}
              </div>
            </section>

            {/* Payment placeholder */}
            <section className="rounded-3xl border-2 border-dashed border-ink/40 bg-white/60 p-6">
              <h2 className="mb-2 font-display text-2xl font-bold text-ink">
                Payment
              </h2>
              <p className="text-sm text-ink/60">
                Cash on Delivery available. Online payment (UPI / Card) coming
                soon via Razorpay.
              </p>
            </section>
          </div>

          {/* Right: summary */}
          <aside className="md:col-span-1">
            <div className="sticky top-6 rounded-3xl border-2 border-ink bg-white p-6 shadow-pop-sm">
              <h2 className="mb-5 font-display text-2xl font-bold text-ink">
                Order summary
              </h2>

              <ul className="space-y-3 border-b-2 border-ink/10 pb-4">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start justify-between gap-3 text-sm"
                  >
                    <span className="min-w-0 text-ink">
                      {item.product.name}{' '}
                      <span className="text-ink/50"> ({item.variant.size}) × {item.qty}</span>
                    </span>
                    <span className="flex-shrink-0 font-bold text-ink">
                      {formatPrice(item.variant.price * item.qty)}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-ink/70">Subtotal</span>
                  <span className="font-bold text-ink">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink/70">Shipping</span>
                  <span className="font-bold text-ink">
                    {shipping === 0 ? 'Free' : formatPrice(shipping)}
                  </span>
                </div>
                <div className="mt-3 flex justify-between border-t-2 border-ink/10 pt-3 font-display text-xl font-bold text-ink">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex h-14 w-full items-center justify-center rounded-full border-2 border-ink bg-pink text-base font-bold uppercase tracking-wider text-white shadow-pop transition-transform hover:-translate-y-0.5"
              >
                Place order
              </button>
              <p className="mt-3 text-center text-xs text-ink/50">
                By placing this order you agree to our terms.
              </p>
            </div>
          </aside>
        </form>
      </div>
    </main>
  )
}