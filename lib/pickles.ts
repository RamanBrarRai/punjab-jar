export type Tone = 'pink' | 'marigold' | 'emerald'

export const toneStyles: Record<Tone, { bg: string; text: string; soft: string }> = {
  pink: { bg: 'bg-pink', text: 'text-white', soft: 'bg-pink/15' },
  marigold: { bg: 'bg-marigold', text: 'text-ink', soft: 'bg-marigold/20' },
  emerald: { bg: 'bg-emerald', text: 'text-cream', soft: 'bg-emerald/15' },
}

const toneById: Record<string, Tone> = {
  mango: 'marigold',
  lemon: 'emerald',
  mixed: 'pink',
  chilli: 'emerald',
  amla: 'pink',
  carrot: 'marigold',
}

export function toneFor(id: string): Tone {
  return toneById[id] ?? 'pink'
}

export type Pickle = {
  id: string
  name: string
  punjabi: string
  tagline: string
  description: string
  heat: 1 | 2 | 3
  notes: string[]
  pairing: string
  weight: string
  price: number
  image: string
  badge?: string
}

export const pickles: Pickle[] = [
  {
    id: 'mango',
    name: 'Mango',
    punjabi: 'Aam da Achaar',
    tagline: 'The one Nani guarded with her life.',
    description:
      'Raw summer mangoes from Mohali, hand-cut with the stone in, sun-cured for 21 days and slow-matured in cold-pressed kachi ghani mustard oil.',
    heat: 2,
    notes: ['Fennel', 'Nigella', 'Fenugreek'],
    pairing: 'Aloo paratha & white butter',
    weight: '400g',
    price: 449,
    image: '/images/mango.png',
    badge: 'Bestseller',
  },
  {
    id: 'lemon',
    name: 'Lemon',
    punjabi: 'Nimbu da Achaar',
    tagline: 'Bright, tangy, quietly addictive.',
    description:
      'Thin-skinned desi lemons quartered and left to soften under the sun with rock salt and ajwain until the rind turns jammy and golden.',
    heat: 1,
    notes: ['Ajwain', 'Rock salt', 'Black pepper'],
    pairing: 'Khichdi & dahi',
    weight: '400g',
    price: 399,
    image: '/images/lemon.png',
  },
  {
    id: 'mixed',
    name: 'Mixed',
    punjabi: 'Mix Achaar',
    tagline: 'A whole kitchen garden in one jar.',
    description:
      'Mango, carrot, lemon, cauliflower and green chilli tossed together in our house masala — the jar every Punjabi dining table is incomplete without.',
    heat: 2,
    notes: ['Mustard', 'Kalonji', 'Red chilli'],
    pairing: 'Dal, rice & everything else',
    weight: '500g',
    price: 499,
    image: '/images/mixed.png',
    badge: 'Family size',
  },
  {
    id: 'chilli',
    name: 'Chilli',
    punjabi: 'Hari Mirch da Achaar',
    tagline: 'For those who like it loud.',
    description:
      'Fat green chillies slit and stuffed with roasted mustard, fennel and amchur, then rested in oil until the heat mellows into something deep.',
    heat: 3,
    notes: ['Amchur', 'Roasted mustard', 'Hing'],
    pairing: 'Makki di roti & saag',
    weight: '300g',
    price: 379,
    image: '/images/chilli.png',
  },
  {
    id: 'amla',
    name: 'Amla',
    punjabi: 'Aonla da Achaar',
    tagline: 'Sour, warming, and good for you.',
    description:
      'Whole Indian gooseberries steamed, then cured with turmeric and jaggery for a gently sweet-sour pickle packed with vitamin C.',
    heat: 1,
    notes: ['Turmeric', 'Jaggery', 'Dry ginger'],
    pairing: 'Moong dal chilla',
    weight: '400g',
    price: 429,
    image: '/images/amla.png',
    badge: 'New',
  },
  {
    id: 'carrot',
    name: 'Carrot',
    punjabi: 'Gajar da Achaar',
    tagline: 'A winter classic, crunchy to the end.',
    description:
      'Sweet red Delhi carrots batoned and tossed in crushed mustard seed, so they stay crisp — made only in the cold months, while the carrots are best.',
    heat: 2,
    notes: ['Crushed rai', 'Red chilli', 'Salt'],
    pairing: 'Rajma chawal',
    weight: '400g',
    price: 399,
    image: '/images/carrot.png',
  },
]

export function formatPrice(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}
