import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function ClosingCta() {
  return (
    <section className="bg-cream pt-20 md:pt-32">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-pink">Ghar di yaad, har jar vich</p>
        <h2 className="mt-6 text-balance font-serif text-5xl font-medium leading-[1.02] tracking-tight text-forest md:text-7xl">
          Bring a little <em className="italic text-pink">Punjab</em> home.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink/70">
          Try the Tasting Trio — three 150g jars of our most-loved achaar. Free shipping across India.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#shop"
            className="group inline-flex h-14 items-center gap-3 rounded-full bg-pink px-8 text-sm font-semibold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5"
          >
            Get the Tasting Trio
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="#flavours"
            className="inline-flex h-14 items-center rounded-full border border-forest px-8 text-sm font-semibold uppercase tracking-wider text-forest transition-colors hover:bg-forest hover:text-cream"
          >
            Explore flavours
          </a>
        </div>
      </div>
      <div className="relative mx-auto mt-16 aspect-[21/9] max-w-7xl overflow-hidden md:mt-20 md:rounded-t-2xl">
        <Image
          src="/images/lineup.png"
          alt="Six jars of Jar Of Punjab pickles lined up on a wooden shelf"
          fill
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  )
}
