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
          <div className="relative aspect-[4/5] rotate-2 overflow-hidden rounded-[2.5rem] border-2 border-ink">
            <Image
              src="/images/story.png"
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
            eyebrow="Saadi kahani"
            title={
              <>
                It started with <span className="text-pink">Nani&apos;s</span> rooftop.
              </>
            }
          />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/75">
            <p>
              Every summer, our Nani lined the terrace in Mohali with jars of mango, lemon and chilli, turning them
              each morning to catch the sun. The whole mohalla knew when her achaar was ready.
            </p>
            <p>
              We still use her hand-written recipes, her stone-ground masalas and her stubborn refusal to rush things.
              We just made the volume louder — and the jars easier to ship.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border-2 border-ink bg-white p-4 text-center shadow-pop-sm">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-4xl font-extrabold text-pink md:text-5xl">{s.value}</span>
                  <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-ink/70">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
