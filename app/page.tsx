import { CartProvider } from '@/components/cart-context'
import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Marquee } from '@/components/site/marquee'
import { FlavourShowcase } from '@/components/site/flavour-showcase'
import { ProductGrid } from '@/components/site/product-grid'
import { WhyUs } from '@/components/site/why-us'
import { Story } from '@/components/site/story'
import { Reviews } from '@/components/site/reviews'
import { ClosingCta } from '@/components/site/closing-cta'
import { Footer } from '@/components/site/footer'

export default function Home() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <FlavourShowcase />
        <ProductGrid />
        <WhyUs />
        <Story />
        <Reviews />
        <ClosingCta />
      </main>
      <Footer />
    </CartProvider>
  )
}
