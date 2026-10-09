import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-forest text-cream md:min-h-[calc(100svh-5rem)]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-12 md:gap-8 md:px-8 md:py-24">
        <div className="md:col-span-6 lg:col-span-6">
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-mustard">
            <span aria-hidden="true" className="h-px w-10 bg-mustard" />
            Small-batch · Since 1987 · Amritsar
          </p>
          <h1 className="text-balance font-serif text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            Punjab, Packed in <em className="font-normal italic text-mustard">Every</em> Jar.
          </h1>
          <p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-cream/75">
            Sun-cured, hand-cut achaar made the way our nanis taught us — slow-matured in cold-pressed
            mustard oil, with no vinegar, no preservatives and no shortcuts.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#shop"
              className="group inline-flex h-14 items-center gap-3 rounded-full bg-pink px-8 text-sm font-semibold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5"
            >
              Shop the Jars
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#story"
              className="inline-flex h-14 items-center px-2 text-sm font-medium text-cream underline decoration-mustard decoration-2 underline-offset-8 hover:text-mustard"
            >
              Read our story
            </a>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-cream/15 pt-8">
            {[
              ['21', 'days sun-cured'],
              ['0', 'preservatives'],
              ['40k+', 'happy homes'],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-serif text-3xl text-mustard">{value}</dd>
                <dd className="mt-1 text-xs uppercase tracking-wider text-cream/60">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative md:col-span-6 lg:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-full">
            <Image
              src="/images/hero-jars.png"
              alt="Three jars of homemade Punjabi mango, lemon and mixed pickle surrounded by whole spices"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-2 flex size-32 rotate-[-12deg] flex-col items-center justify-center rounded-full bg-mustard text-center text-forest shadow-xl md:-left-8 md:size-36">
            <span className="font-serif text-3xl italic leading-none">100%</span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em]">Handmade</span>
          </div>
        </div>
      </div>
    </section>
  )
}
