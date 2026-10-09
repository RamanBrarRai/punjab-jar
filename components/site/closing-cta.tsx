import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function ClosingCta() {
  return (
    <section className="bg-cream px-3 py-16 md:px-6 md:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border-2 border-ink bg-pink shadow-pop-lg">
        <div className="phulkari absolute inset-0" aria-hidden="true" />
        <div className="relative grid items-center gap-10 p-8 md:p-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="inline-block rotate-[-3deg] rounded-full border-2 border-ink bg-marigold px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-ink">
              Your thali is waiting
            </p>
            <h2 className="mt-6 text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.9] tracking-tight text-white">
              Balle balle,
              <br />
              <span className="text-ink">bring it home.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/90">
              Build your own box of three and get 15% off. Because one jar never lasts the week.
            </p>
            <a
              href="#shop"
              className="group mt-9 inline-flex h-14 items-center gap-3 rounded-full border-2 border-ink bg-marigold px-8 font-bold text-ink shadow-pop transition-all hover:-translate-y-0.5 hover:shadow-pop-lg"
            >
              Build my box
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="absolute inset-0 rotate-6 rounded-full border-2 border-ink bg-marigold" aria-hidden="true" />
            <div className="relative size-full overflow-hidden rounded-full border-2 border-ink">
              <Image
                src="/images/lineup.png"
                alt="A lineup of Jar Of Punjab achaar jars"
                fill
                sizes="(min-width: 1024px) 384px, 80vw"
                className="object-cover"
              />
            </div>
            <span className="absolute -left-2 top-6 flex size-24 -rotate-12 animate-wiggle flex-col items-center justify-center rounded-full border-2 border-ink bg-emerald text-center font-display font-extrabold leading-none text-cream">
              <span className="text-3xl">15%</span>
              <span className="text-xs uppercase tracking-wider">off</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
