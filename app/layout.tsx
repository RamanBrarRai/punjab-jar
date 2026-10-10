import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import { CartProvider } from '@/components/cart-context'
import { CartDrawer } from '@/components/site/cart-drawer'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jar Of Punjab — Loud, Proud Punjabi Achaar, Jams & Spices',
  description:
    'Small-batch Punjabi achaar, handmade jams and stone-ground spices. Sun-cured, hand-cut and slow-matured in cold-pressed mustard oil. Shipped across India.',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FF2D87',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${bricolage.variable} ${inter.variable} bg-background`}>
      <body className="antialiased">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}