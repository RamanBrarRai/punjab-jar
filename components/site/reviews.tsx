import { Star } from 'lucide-react'
import { SectionHeading } from './section-heading'

const reviews = [
  {
    quote:
      'I opened the mango jar and was instantly back in my nani’s kitchen in Jalandhar. I didn’t think anyone still made achaar like this.',
    name: 'Harpreet K.',
    place: 'Toronto',
    jar: 'Mango Achaar',
  },
  {
    quote:
      'The green chilli is properly fiery but there’s so much flavour behind the heat. We go through a jar every two weeks.',
    name: 'Arjun M.',
    place: 'Bengaluru',
    jar: 'Chilli Achaar',
  },
  {
    quote:
      'You can taste the mustard oil and the sun in every bite. Gifted the mixed jar to my in-laws — they asked for the recipe.',
    name: 'Simran S.',
    place: 'London',
    jar: 'Mixed Achaar',
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="bg-forest py-20 text-cream md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            inverted
            eyebrow="Kind Words"
            title={
              <>
                From <em className="italic text-mustard">our</em> table to yours.
              </>
            }
          />
          <div className="flex items-center gap-4">
            <span className="font-serif text-6xl text-mustard">4.9</span>
            <div>
              <div className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-mustard text-mustard" />
                ))}
              </div>
              <p className="mt-1 text-sm text-cream/65">from 3,200+ reviews</p>
            </div>
          </div>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-cream/15 bg-cream/[0.04] p-8">
                <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-pink text-pink" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-6 flex-1 font-serif text-xl leading-relaxed text-cream">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-between border-t border-cream/15 pt-6">
                  <span>
                    <span className="block font-medium">{r.name}</span>
                    <span className="text-sm text-cream/60">{r.place}</span>
                  </span>
                  <span className="rounded-full bg-mustard px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-forest">
                    {r.jar}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
