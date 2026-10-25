import Image from 'next/image'
import { SectionHeading } from './section-heading'
import { SpinSticker } from './spin-sticker'

const stats = [
  { value: '3', label: 'Generations' },
  { value: '21', label: 'Days in the sun' },
  { value: '0', label: 'Preservatives' },
]

export function Story() {
  return (
    <section id="story" className="relative scroll-mt-24 overflow-hidden bg-cream py-24 md:py-32">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-10 select-none font-display text-[8rem] font-extrabold uppercase leading-none tracking-tighter text-marigold/30 md:text-[14rem]"
      >
        Pind
      </p>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="absolute inset-0 -rotate-3 rounded-[2.5rem] border-2 border-ink bg-emerald" aria-hidden="true" />
          <div className="relative aspect-[4/5] rotate-2 overflow-hidden rounded-[2.5rem] border-2 border-ink img-hover-zoom" data-reveal="left">
            <Image
              src="/images/story.jpg"
              alt="Hands preparing achaar in a Punjabi home kitchen"
              fill
              sizes="(min-width: 1024px) 448px, 90vw"
              className="object-cover"
            />
          </div>
          <SpinSticker
            text="Since 1987 • ♥ • Nani's recipe • ♥ • "
            center="♥"
            className="absolute -bottom-8 -right-4 bg-marigold text-ink md:-right-10"
          />
          
        </div>

        <div>
          <SectionHeading
            eyebrow="Saadi kahani — Our Story"
            title={
              <>
                The Flavours 
                <span className="text-pink"> We Grew Up With.</span>
              </>
            }
          />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/75">
            <p>
              Jar of Punjab began with a love for the homemade flavours that remind
              us of home. Across Punjab, we discovered wonderful recipes, cherished
              traditions, and special flavours made in the kitchens of our Mom,
              Nani, Dadi, and neighbourhood aunties.
            </p>
            <p>
              Inspired by their love for homemade food, Raman and Prabh dreamed of
              bringing these flavours together in one place — so every family could
              enjoy a little taste of home, made with pyaar.
            </p>
          </div>
          
          <dl className="mt-10 grid grid-cols-3 gap-2 md:gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex min-w-0 flex-col items-center justify-center rounded-xl border border-ink/10 bg-white/80 p-3 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 md:rounded-2xl md:p-4"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="flex w-full flex-col items-center">
                  <span className="block font-display text-3xl font-extrabold text-pink md:text-5xl">
                    {s.value}
                  </span>
                  <span className="mt-1 block w-full break-words text-[9px] font-semibold uppercase tracking-wider text-ink/65 sm:text-[10px] md:text-xs">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

        </div>
      </div>
    </section>
  )
}
