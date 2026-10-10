import { Hero } from '@/components/site/hero'
import { Marquee } from '@/components/site/marquee'
import { FlavourShowcase } from '@/components/site/flavour-showcase'
import { ProductGrid } from '@/components/site/product-grid'
import { WhyUs } from '@/components/site/why-us'
import { Story } from '@/components/site/story'
import { Reviews } from '@/components/site/reviews'
import { ClosingCta } from '@/components/site/closing-cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FlavourShowcase />
      <ProductGrid />
      <WhyUs />
      <Story />
      <Reviews />
      <ClosingCta />
    </>
  )
}