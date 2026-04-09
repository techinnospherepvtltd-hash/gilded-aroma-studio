import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { getImage } from '@/data/images';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div className="relative overflow-hidden bg-card rounded">
        <Link to={`/product/${product.slug}`}>
          <img
            src={getImage(product.image)}
            alt={product.name}
            className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            width={400}
            height={500}
          />
        </Link>
        {product.badge && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground font-sans-brand text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-sm">
            {product.badge}
          </span>
        )}
        <button
          onClick={() => addItem(product)}
          className="absolute bottom-3 right-3 w-10 h-10 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all opacity-0 group-hover:opacity-100"
        >
          <ShoppingBag size={16} />
        </button>
      </div>
      <div className="mt-4 space-y-1">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={10} className={i < Math.floor(product.rating) ? 'text-primary fill-primary' : 'text-muted-foreground'} />
          ))}
          <span className="text-muted-foreground font-sans-brand text-[10px] ml-1">({product.reviews})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-display text-lg text-foreground hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <p className="text-muted-foreground font-body text-sm">{product.shortDescription}</p>
        <div className="flex items-center gap-2 pt-1">
          <span className="font-sans-brand text-primary font-semibold">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="font-sans-brand text-muted-foreground text-sm line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
