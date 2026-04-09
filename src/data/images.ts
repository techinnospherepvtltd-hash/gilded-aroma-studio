import heroImg from '@/assets/hero-perfume.jpg';
import oudRoyale from '@/assets/product-oud-royale.jpg';
import desertMusk from '@/assets/product-desert-musk.jpg';
import royalAmber from '@/assets/product-royal-amber.jpg';
import velvetRose from '@/assets/product-velvet-rose.jpg';
import midnightNoir from '@/assets/product-midnight-noir.jpg';
import saffronElixir from '@/assets/product-saffron-elixir.jpg';

export const images: Record<string, string> = {
  'hero-perfume': heroImg,
  'product-oud-royale': oudRoyale,
  'product-desert-musk': desertMusk,
  'product-royal-amber': royalAmber,
  'product-velvet-rose': velvetRose,
  'product-midnight-noir': midnightNoir,
  'product-saffron-elixir': saffronElixir,
};

export const getImage = (key: string) => images[key] || '';
