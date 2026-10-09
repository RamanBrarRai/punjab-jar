import Image from 'next/image'
import { ArrowDownRight, Flame, Leaf, Star, Truck } from 'lucide-react'
import { SpinSticker } from './spin-sticker'

const perks = [
  { icon: Leaf, label: 'Zero preservatives' },
  { icon: Flame, label: 'Sun-cured 21 days' },
  { icon: Truck, label: 'Ships all-India' },
]

export function Hero() {
  return (
    <section id="top" className="relative -mt-24 overflow-hidden bg-marigold pt-28 md:-mt-28 md:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 md:px-8 md:pb-24 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="inline-flex -rotate-2 items-center gap-2 rounded-full border-2 border-ink bg-cream px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-ink shadow-pop-sm">
            <span className="size-2 rounded-full bg-pink" aria-hidden="true" />
            Handmade in Hoshiarpur
          </p>

          <h1 className="mt-7 text-[clamp(3.25rem,9vw,7.5rem)] font-extrabold leading-[0.88] tracking-tight text-ink">
            Achaar
            <br />
            with full
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-pink">volume.</span>
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 right-0 h-4 -rotate-1 rounded-full bg-cream md:h-6"
              />
            </span>
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/80 text-pretty">
            Nani&apos;s recipes, turned all the way up. Sun-cured, hand-cut and slow-matured in cold-pressed
            mustard oil — loud, proud and Punjabi to the core.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#shop"
              className="group inline-flex h-14 items-center gap-3 rounded-full border-2 border-ink bg-pink px-7 font-bold text-white shadow-pop transition-all hover:-translate-y-0.5 hover:shadow-pop-lg"
            >
              Shop the jars
              <ArrowDownRight
                className="size-5 transition-transform group-hover:rotate-[-45deg]"
                aria-hidden="true"
              />
            </a>
            <a
              href="#flavours"
              className="inline-flex h-14 items-center rounded-full border-2 border-ink bg-cream px-7 font-bold text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              Find your flavour
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {perks.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Icon className="size-4 text-pink" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full rounded-b-[2.5rem] border-2 border-ink bg-pink"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2.5rem] border-2 border-ink bg-cream">
            <Image
              src="/images/hero-vibrant.png"
              alt="Three jars of Punjabi achaar on a hot pink phulkari cloth with marigolds and red chillies"
              fill
              priority
              sizes="(min-width: 1024px) 512px, 90vw"
              className="object-cover"
            />
          </div>

          <SpinSticker
            text="Small batch • No preservatives • Pure mustard oil • "
            center={<Flame className="size-9 fill-marigold md:size-11" />}
            className="absolute -left-4 top-10 md:-left-10"
          />

          <div className="absolute -bottom-5 right-2 rotate-3 rounded-2xl border-2 border-ink bg-emerald px-5 py-3 text-cream shadow-pop-sm md:-right-6">
            <p className="flex items-center gap-1 font-display text-3xl font-extrabold leading-none">
              4.9
              <Star className="size-6 fill-marigold text-marigold" aria-label="stars" />
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cream/80">12k+ happy jars</p>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="zigzag h-6 border-y-2 border-ink" />
    </section>
  )
}
