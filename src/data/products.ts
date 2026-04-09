export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'oud' | 'musk' | 'floral' | 'amber' | 'fresh';
  gender: 'men' | 'women' | 'unisex';
  size: string;
  description: string;
  shortDescription: string;
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  rating: number;
  reviews: number;
  badge?: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Oud Royale',
    slug: 'oud-royale',
    price: 2999,
    originalPrice: 3999,
    image: 'product-oud-royale',
    category: 'oud',
    gender: 'unisex',
    size: '50ml',
    description: 'A majestic composition that captures the essence of Arabian royalty. Oud Royale is an opulent blend of rare agarwood, infused with precious saffron and wrapped in the warmth of aged sandalwood. This is not merely a fragrance — it is an heirloom of scent, designed for those who command attention without uttering a word.',
    shortDescription: 'An opulent blend of rare agarwood and precious saffron.',
    notes: {
      top: ['Saffron', 'Bergamot', 'Pink Pepper'],
      middle: ['Oud', 'Turkish Rose', 'Jasmine'],
      base: ['Sandalwood', 'Amber', 'Musk'],
    },
    rating: 4.9,
    reviews: 127,
    badge: 'Bestseller',
    inStock: true,
  },
  {
    id: '2',
    name: 'Desert Musk',
    slug: 'desert-musk',
    price: 2499,
    image: 'product-desert-musk',
    category: 'musk',
    gender: 'men',
    size: '50ml',
    description: 'Inspired by the endless golden dunes at twilight, Desert Musk is a refined composition of white musk and warm amber, elevated by the subtle sweetness of Tonka bean. A fragrance that whispers of desert winds and ancient trade routes.',
    shortDescription: 'Refined white musk and warm amber inspired by golden dunes.',
    notes: {
      top: ['Cardamom', 'Lavender', 'Citrus'],
      middle: ['White Musk', 'Geranium', 'Violet Leaf'],
      base: ['Amber', 'Tonka Bean', 'Vetiver'],
    },
    rating: 4.8,
    reviews: 89,
    inStock: true,
  },
  {
    id: '3',
    name: 'Royal Amber',
    slug: 'royal-amber',
    price: 3499,
    originalPrice: 4499,
    image: 'product-royal-amber',
    category: 'amber',
    gender: 'unisex',
    size: '50ml',
    description: 'An exquisite tribute to the ancient art of amber perfumery. Royal Amber marries the warmth of labdanum with the depth of benzoin resin, creating a golden aura that lingers on the skin for hours. Each application reveals new facets of its extraordinary character.',
    shortDescription: 'Exquisite warmth of labdanum and depth of benzoin resin.',
    notes: {
      top: ['Cinnamon', 'Orange Blossom', 'Saffron'],
      middle: ['Amber', 'Rose Absolute', 'Incense'],
      base: ['Labdanum', 'Benzoin', 'Vanilla'],
    },
    rating: 4.9,
    reviews: 156,
    badge: 'Premium',
    inStock: true,
  },
  {
    id: '4',
    name: 'Velvet Rose',
    slug: 'velvet-rose',
    price: 2799,
    image: 'product-velvet-rose',
    category: 'floral',
    gender: 'women',
    size: '50ml',
    description: 'A sophisticated floral masterpiece woven from the finest Damascena roses. Velvet Rose captures the delicate beauty of a midnight garden in full bloom, enhanced with rich oud undertones and a veil of powdery musk. Feminine, bold, and utterly unforgettable.',
    shortDescription: 'Sophisticated Damascena roses with rich oud undertones.',
    notes: {
      top: ['Rose de Mai', 'Raspberry', 'Pink Pepper'],
      middle: ['Damascena Rose', 'Peony', 'Oud'],
      base: ['White Musk', 'Patchouli', 'Cashmere Wood'],
    },
    rating: 4.7,
    reviews: 94,
    badge: 'New',
    inStock: true,
  },
  {
    id: '5',
    name: 'Midnight Noir',
    slug: 'midnight-noir',
    price: 3299,
    image: 'product-midnight-noir',
    category: 'oud',
    gender: 'men',
    size: '50ml',
    description: 'Darkness has never been this alluring. Midnight Noir is a bold, unapologetic fragrance built on a foundation of black oud and smoky vetiver. Leather accords add raw sophistication, while a whisper of dark vanilla provides an addictive warmth. For the man who owns the night.',
    shortDescription: 'Bold black oud and smoky vetiver for the fearless.',
    notes: {
      top: ['Black Pepper', 'Elemi', 'Bergamot'],
      middle: ['Black Oud', 'Leather', 'Iris'],
      base: ['Vetiver', 'Dark Vanilla', 'Smoky Woods'],
    },
    rating: 4.8,
    reviews: 112,
    inStock: true,
  },
  {
    id: '6',
    name: 'Saffron Elixir',
    slug: 'saffron-elixir',
    price: 3799,
    originalPrice: 4299,
    image: 'product-saffron-elixir',
    category: 'amber',
    gender: 'unisex',
    size: '50ml',
    description: 'The liquid gold of perfumery. Saffron Elixir is an extraordinary composition where the world\'s most precious spice meets rare oud and rich amber. Each drop is an investment in elegance — a fragrance that transforms the ordinary into the exceptional.',
    shortDescription: 'Extraordinary saffron meets rare oud and rich amber.',
    notes: {
      top: ['Saffron', 'Nutmeg', 'Mandarin'],
      middle: ['Oud', 'Rose', 'Honey'],
      base: ['Amber', 'Sandalwood', 'Musk'],
    },
    rating: 5.0,
    reviews: 78,
    badge: 'Exclusive',
    inStock: true,
  },
];

export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
export const getProductById = (id: string) => products.find(p => p.id === id);
