const items = [
  'No Preservatives',
  'Cold-Pressed Mustard Oil',
  'Sun-Cured for 21 Days',
  'Hand-Cut in Small Batches',
  'Free Shipping over ₹999',
  'Grandmother’s Recipes',
]

export function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-mustard py-5 text-forest">
      <p className="sr-only">{items.join(', ')}</p>
      <div aria-hidden="true" className="flex w-max animate-marquee">
        {row.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap font-serif text-2xl italic md:text-3xl">
            <span className="px-8">{item}</span>
            <span className="text-pink">✺</span>
          </span>
        ))}
      </div>
    </div>
  )
}
