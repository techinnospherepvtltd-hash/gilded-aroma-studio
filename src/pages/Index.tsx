import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { getImage } from '@/data/images';
import ProductCard from '@/components/ProductCard';
import SectionHeading from '@/components/SectionHeading';
import { Sparkles, Droplets, Clock, Star } from 'lucide-react';
import heroImg from '@/assets/hero-perfume.jpg';

const testimonials = [
  { name: 'Ayesha K.', text: 'Oud Royale is absolutely divine. The longevity is incredible — I receive compliments 8 hours after applying.', rating: 5 },
  { name: 'Rohit M.', text: 'Midnight Noir has become my signature scent. It is sophisticated, masculine, and lasts all day.', rating: 5 },
  { name: 'Priya S.', text: 'Velvet Rose is the most elegant fragrance I have ever worn. Al Haay truly understands luxury.', rating: 5 },
];

const features = [
  { icon: Droplets, title: 'Premium Ingredients', desc: 'Sourced from the finest perfumery houses worldwide' },
  { icon: Clock, title: 'Long Lasting', desc: '8-12 hours of mesmerizing fragrance on skin' },
  { icon: Sparkles, title: 'Affordable Luxury', desc: 'International quality at accessible prices' },
];

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Al Haay luxury perfume" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
      </div>
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-2xl"
        >
          <span className="font-sans-brand text-xs uppercase tracking-[0.4em] text-primary">Al Haay Perfume</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 leading-tight">
            Luxury Fragrances That Define Your Presence
          </h1>
          <p className="font-body text-lg lg:text-xl text-muted-foreground mt-6 max-w-lg leading-relaxed">
            Discover the art of Arabian perfumery — handcrafted compositions that captivate the senses and leave an unforgettable impression.
          </p>
          <div className="flex gap-4 mt-8">
            <Button variant="hero" size="lg" asChild>
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button variant="luxury" size="lg" asChild>
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Featured Products */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading subtitle="Collection" title="Signature Fragrances" description="Each fragrance is a masterpiece, meticulously crafted from the world's finest ingredients." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="text-center mt-12">
          <Button variant="luxury" size="lg" asChild>
            <Link to="/shop">View All Fragrances</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading subtitle="Why Al Haay" title="The Art of Luxury Perfumery" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto border border-primary rounded-full flex items-center justify-center mb-6">
                <f.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground font-body">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading subtitle="Testimonials" title="What Our Patrons Say" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-8 rounded"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="font-body text-foreground italic leading-relaxed">"{t.text}"</p>
              <p className="font-sans-brand text-xs uppercase tracking-[0.15em] text-primary mt-4">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Newsletter */}
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <SectionHeading subtitle="Newsletter" title="Join the Inner Circle" description="Be the first to discover new launches, exclusive offers, and the world of Al Haay." />
        <form className="max-w-md mx-auto flex gap-3" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-input border border-border rounded px-4 py-3 font-sans-brand text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
          <Button variant="hero">Subscribe</Button>
        </form>
      </div>
    </section>
  </div>
);

export default Index;
