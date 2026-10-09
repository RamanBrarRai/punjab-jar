import { Sparkle } from 'lucide-react'

const items = [
  'Balle Balle Flavour',
  'Small Batch',
  'Cold-Pressed Mustard Oil',
  'Sun-Cured',
  'No Preservatives',
  'Free Shipping Over ₹999',
  'Made With Pyaar',
]

export function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="relative z-10 -my-3 overflow-hidden py-6">
      <div className="-rotate-2 border-y-2 border-ink bg-ink py-4 text-cream">
        <div className="flex w-max animate-marquee items-center" aria-hidden="true">
          {row.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-6 px-6 font-display text-2xl font-extrabold uppercase tracking-tight md:text-4xl"
            >
              <span className={i % 2 === 0 ? 'text-cream' : 'text-marigold'}>{item}</span>
              <Sparkle className="size-6 fill-pink text-pink md:size-8" />
            </span>
          ))}
        </div>
        <p className="sr-only">{items.join(', ')}</p>
      </div>
    </div>
  )
}
