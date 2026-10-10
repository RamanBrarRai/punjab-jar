import { notFound } from 'next/navigation'
import { pickles } from '@/lib/pickles'
import { ProductDetail } from '@/components/site/product-detail'

// Render this page on-demand (dynamic) instead of at build time
export const dynamic = 'force-dynamic'

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = pickles.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}