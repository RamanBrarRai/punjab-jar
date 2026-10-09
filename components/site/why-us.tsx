import { Droplets, HandHeart, Leaf, Sun } from 'lucide-react'
import { SectionHeading } from './section-heading'

const benefits = [
  {
    icon: Sun,
    title: 'Sun-cured, never rushed',
    body: 'Every batch sits on our Amritsar rooftop for up to 21 days. The sun does the work — not chemicals.',
  },
  {
    icon: Droplets,
    title: 'Kachi ghani mustard oil',
    body: 'Cold-pressed, pungent and golden. It preserves, it flavours, and it’s the soul of real Punjabi achaar.',
  },
  {
    icon: Leaf,
    title: 'Nothing artificial',
    body: 'No vinegar, no preservatives, no colours. Just produce, salt, spice and oil — the way it’s always been.',
  },
  {
    icon: HandHeart,
    title: 'Made by hand, by women',
    body: 'Our kitchen employs 24 women from nearby villages, each a keeper of her own family recipes.',
  },
]

export function WhyUs() {
  return (
    <section id="why" className="bg-forest py-20 text-cream md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          inverted
          eyebrow="Why Jar Of Punjab?"
          title={
            <>
              Made slowly, the <em className="italic text-mustard">old</em> way.
            </>
          }
        />

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-cream/15 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, body }, i) => (
            <li key={title} className="flex flex-col bg-forest p-8 md:p-10">
              <div className="flex items-center justify-between">
                <span className="flex size-14 items-center justify-center rounded-full bg-mustard text-forest">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <span className="font-serif text-sm italic text-cream/40">0{i + 1}</span>
              </div>
              <h3 className="mt-10 font-serif text-2xl leading-snug">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/70">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
