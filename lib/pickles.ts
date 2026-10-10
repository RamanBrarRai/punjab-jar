export type Tone = 'pink' | 'marigold' | 'emerald'
export type Category = 'pickle' | 'jam' | 'spices'

export type Variant = {
  size: string
  price: number
}

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
  'kiwi-jam': 'emerald',
  'strawberry-jam': 'pink',
  'mix-jam': 'marigold',
  'amla-beetroot-jam': 'pink',
  'pineapple-jam': 'marigold',
  'black-pepper': 'emerald',
  'red-chilli': 'pink',
  coriander: 'emerald',
  turmeric: 'marigold',
  cumin: 'marigold',
  'dry-ginger': 'emerald',
  hing: 'pink',
  fennel: 'marigold',
}

export function toneFor(id: string): Tone {
  return toneById[id] ?? 'pink'
}

export type Pickle = {
  id: string
  category: Category
  name: string
  punjabi: string
  tagline: string
  description: string
  heat?: 1 | 2 | 3
  notes: string[]
  pairing?: string
  variants: Variant[]
  image: string
  badge?: string
  defaultSize: string
  comingSoon?: boolean
}

export const pickles: Pickle[] = [
  // ─────────────── PICKLES ───────────────
  {
    id: 'mango',
    category: 'pickle',
    name: 'Mango',
    punjabi: 'Aam da Achaar',
    tagline: 'The one Nani guarded with her life.',
    description:
      'Raw summer mangoes from Hoshiarpur, hand-cut with the stone in, sun-cured for 21 days and slow-matured in cold-pressed kachi ghani mustard oil.',
    heat: 2,
    notes: ['Fennel', 'Nigella', 'Fenugreek'],
    pairing: 'Aloo paratha & white butter',
    variants: [
      { size: '100g', price: 149 },
      { size: '250g', price: 299 },
      { size: '500g', price: 549 },
    ],
    defaultSize: '250g',
    image: '/images/mango.png',
    badge: 'Bestseller',
  },
  {
    id: 'lemon',
    category: 'pickle',
    name: 'Lemon',
    punjabi: 'Nimbu da Achaar',
    tagline: 'Bright, tangy, quietly addictive.',
    description:
      'Thin-skinned desi lemons quartered and left to soften under the sun with rock salt and ajwain until the rind turns jammy and golden.',
    heat: 1,
    notes: ['Ajwain', 'Rock salt', 'Black pepper'],
    pairing: 'Khichdi & dahi',
    variants: [
      { size: '100g', price: 139 },
      { size: '250g', price: 279 },
      { size: '500g', price: 499 },
    ],
    defaultSize: '250g',
    image: '/images/lemon.png',
  },
  {
    id: 'mixed',
    category: 'pickle',
    name: 'Mixed',
    punjabi: 'Mix Achaar',
    tagline: 'A whole kitchen garden in one jar.',
    description:
      'Mango, carrot, lemon, cauliflower and green chilli tossed together in our house masala — the jar every Punjabi dining table is incomplete without.',
    heat: 2,
    notes: ['Mustard', 'Kalonji', 'Red chilli'],
    pairing: 'Dal, rice & everything else',
    variants: [
      { size: '100g', price: 159 },
      { size: '250g', price: 329 },
      { size: '500g', price: 599 },
    ],
    defaultSize: '250g',
    image: '/images/mixed.png',
    badge: 'Family size',
  },
  {
    id: 'chilli',
    category: 'pickle',
    name: 'Chilli',
    punjabi: 'Hari Mirch da Achaar',
    tagline: 'For those who like it loud.',
    description:
      'Fat green chillies slit and stuffed with roasted mustard, fennel and amchur, then rested in oil until the heat mellows into something deep.',
    heat: 3,
    notes: ['Amchur', 'Roasted mustard', 'Hing'],
    pairing: 'Makki di roti & saag',
    variants: [
      { size: '100g', price: 129 },
      { size: '250g', price: 259 },
      { size: '500g', price: 479 },
    ],
    defaultSize: '250g',
    image: '/images/chilli.png',
  },
  {
    id: 'amla',
    category: 'pickle',
    name: 'Amla',
    punjabi: 'Aonla da Achaar',
    tagline: 'Sour, warming, and good for you.',
    description:
      'Whole Indian gooseberries steamed, then cured with turmeric and jaggery for a gently sweet-sour pickle packed with vitamin C.',
    heat: 1,
    notes: ['Turmeric', 'Jaggery', 'Dry ginger'],
    pairing: 'Moong dal chilla',
    variants: [
      { size: '100g', price: 149 },
      { size: '250g', price: 299 },
      { size: '500g', price: 549 },
    ],
    defaultSize: '250g',
    image: '/images/amla.png',
    badge: 'New',
  },
  {
    id: 'carrot',
    category: 'pickle',
    name: 'Carrot',
    punjabi: 'Gajar da Achaar',
    tagline: 'A winter classic, crunchy to the end.',
    description:
      'Sweet red Delhi carrots batoned and tossed in crushed mustard seed, so they stay crisp — made only in the cold months, while the carrots are best.',
    heat: 2,
    notes: ['Crushed rai', 'Red chilli', 'Salt'],
    pairing: 'Rajma chawal',
    variants: [
      { size: '100g', price: 139 },
      { size: '250g', price: 279 },
      { size: '500g', price: 499 },
    ],
    defaultSize: '250g',
    image: '/images/carrot.png',
  },

  // ─────────────── JAMS ───────────────
  {
    id: 'kiwi-jam',
    category: 'jam',
    name: 'Kiwi',
    punjabi: 'Kiwi Jam',
    tagline: 'Tart, bright, and unmistakably green.',
    description:
      'Fresh kiwi fruit slow-cooked with a squeeze of lemon until it turns into a vibrant, tangy spread. No artificial colours — the green comes from the fruit itself.',
    notes: ['Kiwi', 'Lemon', 'Cane sugar'],
    variants: [
      { size: '100g', price: 199 },
      { size: '250g', price: 399 },
      { size: '500g', price: 749 },
    ],
    defaultSize: '250g',
    image: '🥝',
    // TODO: Remove comment when kiwi jam goes live
    // comingSoon: true,
  },
  {
    id: 'strawberry-jam',
    category: 'jam',
    name: 'Strawberry',
    punjabi: 'Strawberry Jam',
    tagline: 'The classic, done right.',
    description:
      'Whole strawberries, simmered slowly with sugar and a touch of lemon until thick and glossy. Perfect on toast, pancakes, or straight off the spoon.',
    notes: ['Strawberry', 'Lemon', 'Cane sugar'],
    variants: [
      { size: '100g', price: 199 },
      { size: '250g', price: 399 },
      { size: '500g', price: 749 },
    ],
    defaultSize: '250g',
    image: '🍓',
    badge: 'Bestseller',
    // TODO: Remove comment when kiwi jam goes live
    // comingSoon: true,
  },
  {
    id: 'mix-jam',
    category: 'jam',
    name: 'Mix Fruit',
    punjabi: 'Mix Fruit Jam',
    tagline: 'A little bit of everything.',
    description:
      'Apple, pineapple, mango and papaya cooked down together — the jar you grew up with, made properly at home.',
    notes: ['Apple', 'Pineapple', 'Mango'],
    variants: [
      { size: '100g', price: 179 },
      { size: '250g', price: 349 },
      { size: '500g', price: 649 },
    ],
    defaultSize: '250g',
    image: '🍯',
    // TODO: Remove comment when kiwi jam goes live
    // comingSoon: true,
  },
  {
    id: 'amla-beetroot-jam',
    category: 'jam',
    name: 'Amla Beetroot',
    punjabi: 'Amla Beetroot Jam',
    tagline: 'Deep ruby. Quietly good for you.',
    description:
      'The tartness of amla balanced by the earthy sweetness of beetroot. Rich in vitamin C and iron — a spoon a day does you good.',
    notes: ['Amla', 'Beetroot', 'Jaggery'],
    variants: [
      { size: '100g', price: 229 },
      { size: '250g', price: 449 },
      { size: '500g', price: 829 },
    ],
    defaultSize: '250g',
    image: '🫐',
    badge: 'New',
    // TODO: Remove comment when kiwi jam goes live
    // comingSoon: true,
  },
  {
    id: 'pineapple-jam',
    category: 'jam',
    name: 'Pineapple',
    punjabi: 'Pineapple Jam',
    tagline: 'Bright, tropical, sunshine in a jar.',
    description:
      'Sweet pineapple chunks cooked with a whisper of cardamom — bright, sunny, and impossible to stop eating.',
    notes: ['Pineapple', 'Cardamom', 'Cane sugar'],
    variants: [
      { size: '100g', price: 179 },
      { size: '250g', price: 349 },
      { size: '500g', price: 649 },
    ],
    defaultSize: '250g',
    image: '🍍',
    // TODO: Remove comment when kiwi jam goes live
    // comingSoon: true,
  },

  // ─────────────── SPICES ───────────────
  {
    id: 'black-pepper',
    category: 'spices',
    name: 'Black Pepper',
    punjabi: 'Kali Mirch',
    tagline: 'Bold, pungent, freshly ground.',
    description:
      'Whole Malabar black peppercorns, sun-dried and stone-ground in small batches. Sharp, aromatic, and nothing like the supermarket stuff.',
    notes: ['100% black pepper'],
    variants: [
      { size: '50g', price: 149 },
      { size: '100g', price: 249 },
      { size: '250g', price: 549 },
    ],
    defaultSize: '50g',
    image: '⚫',
    // TODO: Remove comment when kiwi jam goes live
    // comingSoon: true,
  },
  {
    id: 'red-chilli',
    category: 'spices',
    name: 'Red Chilli',
    punjabi: 'Lal Mirch',
    tagline: 'Deep heat, real colour.',
    description:
      'Sun-dried Kashmiri and Mathania chillies, stone-ground for a deep red powder that colours your food beautifully without burning it.',
    notes: ['Kashmiri chilli', 'Mathania chilli'],
    variants: [
      { size: '50g', price: 89 },
      { size: '100g', price: 149 },
      { size: '250g', price: 329 },
    ],
    defaultSize: '50g',
    image: '🌶️',
    badge: 'Bestseller',
    // TODO: Remove comment when kiwi jam goes live
    // comingSoon: true,
  },
  {
    id: 'coriander',
    category: 'spices',
    name: 'Coriander',
    punjabi: 'Dhania Powder',
    tagline: 'The base of every good masala.',
    description:
      'Plump Rajasthani coriander seeds, roasted gently then ground fine. Sweet, citrusy and essential.',
    notes: ['Coriander seeds'],
    variants: [
      { size: '50g', price: 69 },
      { size: '100g', price: 99 },
      { size: '250g', price: 229 },
    ],
    defaultSize: '50g',
    image: '🟢',
    // TODO: Remove comment when kiwi jam goes live
    // comingSoon: true,
  },
  {
    id: 'turmeric',
    category: 'spices',
    name: 'Turmeric',
    punjabi: 'Haldi Powder',
    tagline: 'Golden, earthy, essential.',
    description:
      'High-curcumin turmeric from Sangli, ground fresh. Deep golden colour, earthy flavour — the heart of every Indian kitchen.',
    notes: ['Turmeric'],
    variants: [
      { size: '50g', price: 79 },
      { size: '100g', price: 129 },
      { size: '250g', price: 289 },
    ],
    defaultSize: '50g',
    image: '🟡',
    // TODO: Remove comment when kiwi jam goes live
    // comingSoon: true,
  },
  {
    id: 'cumin',
    category: 'spices',
    name: 'Cumin',
    punjabi: 'Jeera Powder',
    tagline: 'Warm, nutty, unmistakable.',
    description:
      "Unjha cumin seeds, dry-roasted until they crackle, then ground while warm. The smell alone will remind you of your mother's kitchen.",
    notes: ['Cumin seeds'],
    variants: [
      { size: '50g', price: 99 },
      { size: '100g', price: 179 },
      { size: '250g', price: 399 },
    ],
    defaultSize: '50g',
    image: '🌾',
    // TODO: Remove comment when kiwi jam goes live
    // comingSoon: true,
  },
  {
    id: 'dry-ginger',
    category: 'spices',
    name: 'Dry Ginger',
    punjabi: 'Saunth Powder',
    tagline: 'Warmth for winter mornings.',
    description:
      'Sun-dried ginger, ground to a warm, sweet powder. Perfect in chai, kadha, and traditional winter recipes.',
    notes: ['Dry ginger'],
    variants: [
      { size: '50g', price: 119 },
      { size: '100g', price: 199 },
      { size: '250g', price: 449 },
    ],
    defaultSize: '50g',
    image: '🫚',
    // TODO: Remove comment when kiwi jam goes live
    // comingSoon: true,
  },
  {
    id: 'hing',
    category: 'spices',
    name: 'Asafoetida',
    punjabi: 'Hing',
    tagline: 'A pinch transforms everything.',
    description:
      'Pure hing compounded with wheat flour and gum arabic — the traditional way. One pinch in hot ghee and your whole kitchen smells like home.',
    notes: ['Asafoetida', 'Wheat flour', 'Gum arabic'],
    variants: [
      { size: '50g', price: 199 },
      { size: '100g', price: 349 },
      { size: '250g', price: 799 },
    ],
    defaultSize: '50g',
    image: '🟤',
    // TODO: Remove comment when kiwi jam goes live
    // comingSoon: true,
  },
  {
    id: 'fennel',
    category: 'spices',
    name: 'Fennel',
    punjabi: 'Saunf Powder',
    tagline: 'Sweet, cooling, the finishing note.',
    description:
      'Green fennel seeds from Gujarat, ground fine. Sweet, cooling, and the secret to good achaar masala.',
    notes: ['Fennel seeds'],
    variants: [
      { size: '50g', price: 69 },
      { size: '100g', price: 119 },
      { size: '250g', price: 269 },
    ],
    defaultSize: '50g',
    image: '🌿',
    // TODO: Remove comment when kiwi jam goes live
    // comingSoon: true,
  },
]

export function formatPrice(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

export const productsByCategory = (cat: Category) =>
  pickles.filter((p) => p.category === cat)

export const categories = [
  { slug: 'pickle' as const, name: 'Pickle', emoji: '🫙', count: 6 },
  { slug: 'jam' as const, name: 'Jam', emoji: '🍓', count: 5 },
  { slug: 'spices' as const, name: 'Spices Powder', emoji: '🌶️', count: 8 },
]