import { useState, useMemo } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import SectionHeading from '@/components/SectionHeading';

const categories = ['all', 'oud', 'musk', 'floral', 'amber'] as const;
const genders = ['all', 'men', 'women', 'unisex'] as const;

const Shop = () => {
  const [category, setCategory] = useState<string>('all');
  const [gender, setGender] = useState<string>('all');

  const filtered = useMemo(() => {
    return products.filter(p => {
      if (category !== 'all' && p.category !== category) return false;
      if (gender !== 'all' && p.gender !== gender) return false;
      return true;
    });
  }, [category, gender]);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading subtitle="Collection" title="Our Fragrances" description="Explore our curated collection of luxury perfumes, each crafted to perfection." />

        {/* Filters */}
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          <div className="flex gap-2">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`font-sans-brand text-[11px] uppercase tracking-[0.15em] px-4 py-2 border rounded transition-all ${
                  category === c ? 'border-primary text-primary bg-primary/10' : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {genders.map(g => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`font-sans-brand text-[11px] uppercase tracking-[0.15em] px-4 py-2 border rounded transition-all ${
                  gender === g ? 'border-primary text-primary bg-primary/10' : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground font-body text-lg py-20">No fragrances match your selection.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
