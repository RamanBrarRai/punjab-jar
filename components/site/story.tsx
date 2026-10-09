import Image from 'next/image'

export function Story() {
  return (
    <section id="story" className="bg-cream py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-8">
        <figure className="md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <Image
              src="/images/story.png"
              alt="Hands mixing sliced raw mangoes with spices in a brass bowl in a sunlit courtyard"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-4 font-serif text-sm italic text-ink/60">
            Biji at work in the courtyard, Amritsar, summer 1994.
          </figcaption>
        </figure>

        <div className="md:col-span-6">
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-pink">
            <span aria-hidden="true" className="h-px w-10 bg-pink" />
            Our Story
          </p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-medium leading-[1.05] tracking-tight text-forest md:text-6xl">
            It started with Biji&apos;s <em className="italic text-pink">brass bowl</em>.
          </h2>
          <div className="mt-8 space-y-5 text-pretty text-lg leading-relaxed text-ink/75">
            <p>
              Every May, our grandmother would climb to the rooftop with a basket of raw mangoes, a sack of
              spices and the same dented brass bowl she brought with her as a bride. By June, the whole
              mohalla knew whose house the achaar was coming from.
            </p>
            <p>
              Jar Of Punjab is our way of keeping that rooftop alive. Same recipes, same oil, same patience
              — just a few more jars, so her achaar can reach your table too.
            </p>
          </div>
          <blockquote className="mt-10 border-l-2 border-mustard pl-6">
            <p className="font-serif text-2xl italic leading-snug text-forest">
              &ldquo;Achaar is not made, puttar. It is waited for.&rdquo;
            </p>
            <footer className="mt-3 text-sm uppercase tracking-[0.2em] text-ink/55">— Biji, 1932–2019</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
