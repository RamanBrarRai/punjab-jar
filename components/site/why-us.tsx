import { Droplets, HandHeart, Sun, Sprout } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

const reasons = [
  {
    icon: Sun,
    title: 'Sun-cured, not rushed',
    body: '21 days on the rooftop under the Punjabi sun. No shortcuts, no vinegar hacks.',
    className: 'bg-marigold text-ink',
  },
  {
    icon: Droplets,
    title: 'Kachi ghani mustard oil',
    body: 'Cold-pressed, pungent and golden — the backbone of every proper achaar.',
    className: 'bg-pink text-white',
  },
  {
    icon: Sprout,
    title: 'Farm-fresh produce',
    body: 'Mangoes from Hoshiarpur, carrots from Delhi mandis, picked at their peak.',
    className: 'bg-cream text-ink',
  },
  {
    icon: HandHeart,
    title: 'Hand-cut, small batch',
    body: 'Made by a team of six aunties who have been doing this longer than we have been alive.',
    className: 'bg-marigold text-ink',
  },
]

export function WhyUs() {
  return (
    <section id="why" className="phulkari scroll-mt-24 border-y-2 border-ink bg-emerald py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          tone="light"
          align="center"
          eyebrow="Why Jar Of Punjab"
          title={
            <>
              No shortcuts. <span className="text-marigold">Just chakh.</span>
            </>
          }
          description="Real achaar takes patience. Here's what goes into every single jar."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, body, className }, i) => (
            <li
              key={title}
              className={cn(
                'rounded-[2rem] border-2 border-ink p-7 shadow-pop transition-transform duration-300 hover:rotate-0',
                i % 2 === 0 ? '-rotate-1' : 'rotate-1',
                className,
              )}
            >
              <div className="flex items-center justify-between">
                <span className="flex size-14 items-center justify-center rounded-2xl border-2 border-ink bg-white text-ink">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <span className="font-display text-5xl font-extrabold opacity-30">0{i + 1}</span>
              </div>
              <h3 className="mt-8 text-2xl font-extrabold leading-tight">{title}</h3>
              <p className="mt-3 leading-relaxed opacity-80">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
