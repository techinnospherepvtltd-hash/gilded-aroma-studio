import { useParams, Link } from 'react-router-dom';
import { getProductBySlug, products } from '@/data/products';
import { getImage } from '@/data/images';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Star, ShoppingBag, ArrowLeft } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import SectionHeading from '@/components/SectionHeading';
import { motion } from 'framer-motion';

const ProductPage = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug || '');
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl text-foreground">Product Not Found</h1>
          <Button variant="luxury" className="mt-4" asChild><Link to="/shop">Back to Shop</Link></Button>
        </div>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground font-sans-brand text-xs uppercase tracking-wider hover:text-primary transition-colors mb-8">
          <ArrowLeft size={14} /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative">
            <img src={getImage(product.image)} alt={product.name} className="w-full aspect-[4/5] object-cover rounded" width={800} height={1000} />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-primary text-primary-foreground font-sans-brand text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-sm">{product.badge}</span>
            )}
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <span className="font-sans-brand text-xs uppercase tracking-[0.3em] text-primary">{product.category} • {product.gender}</span>
            <h1 className="font-display text-3xl lg:text-4xl text-foreground mt-2">{product.name}</h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={i < Math.floor(product.rating) ? 'text-primary fill-primary' : 'text-muted-foreground'} />
                ))}
              </div>
              <span className="text-muted-foreground font-sans-brand text-xs">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <span className="font-sans-brand text-2xl text-primary font-semibold">₹{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="font-sans-brand text-lg text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
              )}
            </div>

            <p className="font-body text-foreground leading-relaxed mt-6">{product.description}</p>

            {/* Fragrance Notes */}
            <div className="mt-8 space-y-4">
              <h3 className="font-sans-brand text-xs uppercase tracking-[0.2em] text-primary">Fragrance Notes</h3>
              {(['top', 'middle', 'base'] as const).map(note => (
                <div key={note} className="flex items-start gap-4">
                  <span className="font-sans-brand text-[10px] uppercase tracking-wider text-muted-foreground w-16 pt-0.5">{note}</span>
                  <div className="flex flex-wrap gap-2">
                    {product.notes[note].map(n => (
                      <span key={n} className="border border-border text-foreground font-body text-sm px-3 py-1 rounded-sm">{n}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-10">
              <Button variant="hero" size="lg" className="flex-1" onClick={() => addItem(product)}>
                <ShoppingBag size={16} /> Add to Cart
              </Button>
            </div>

            <p className="text-muted-foreground font-sans-brand text-[10px] uppercase tracking-wider mt-4">
              {product.size} • Free shipping above ₹2000
            </p>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24">
            <SectionHeading subtitle="You may also like" title="Related Fragrances" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
