import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

const reviews = [
  {
    quote: 'Opened the mango jar and my mom asked who made it. Tastes exactly like the one from her pind.',
    name: 'Harleen K.',
    city: 'Toronto',
    className: 'bg-white -rotate-2',
  },
  {
    quote: 'The chilli one is dangerous. I finished a whole jar with two parathas. No regrets.',
    name: 'Arjun M.',
    city: 'Bengaluru',
    className: 'bg-pink text-white rotate-1',
  },
  {
    quote: 'Finally an achaar that tastes like mustard oil should. The gajar is crunchy even after weeks.',
    name: 'Simran S.',
    city: 'Ludhiana',
    className: 'bg-emerald text-cream -rotate-1',
  },
  {
    quote: 'Gifted the mixed jar to my in-laws. I am now the favourite. Thank you, Jar Of Punjab.',
    name: 'Rohan D.',
    city: 'Mumbai',
    className: 'bg-white rotate-2',
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 border-y-2 border-ink bg-marigold py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Love letters"
            title={
              <>
                Approved by <span className="text-pink">every</span> Bibi-ji.
              </>
            }
          />
          <div className="flex items-center gap-3 self-start rounded-full border-2 border-ink bg-cream px-5 py-3 shadow-pop-sm md:self-end">
            <span className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-pink text-pink" />
              ))}
            </span>
            <span className="font-display font-bold text-ink">4.9 from 2,400+ reviews</span>
          </div>
        </div>

        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <li
              key={r.name}
              className={cn(
                'flex flex-col rounded-[2rem] border-2 border-ink p-7 text-ink shadow-pop transition-transform duration-300 hover:rotate-0',
                r.className,
              )}
            >
              <span aria-hidden="true" className="font-display text-7xl font-extrabold leading-[0.6] opacity-40">
                &ldquo;
              </span>
              <blockquote className="mt-4 flex-1 font-display text-xl font-semibold leading-snug">{r.quote}</blockquote>
              <p className="mt-6 border-t-2 border-dashed border-current/30 pt-4 text-sm">
                <span className="font-bold">{r.name}</span>
                <span className="opacity-70"> — {r.city}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
