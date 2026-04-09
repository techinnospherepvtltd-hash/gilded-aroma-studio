import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => (
  <footer className="bg-charcoal border-t border-border">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl text-gradient-gold mb-4">AL HAAY</h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            Crafting luxury fragrances inspired by the rich heritage of Arabian perfumery. Every bottle tells a story of elegance and refinement.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-sans-brand text-xs uppercase tracking-[0.2em] text-primary mb-6">Quick Links</h4>
          <div className="flex flex-col gap-3">
            {[{ to: '/shop', label: 'Shop' }, { to: '/about', label: 'About Us' }, { to: '/contact', label: 'Contact' }].map(l => (
              <Link key={l.to} to={l.to} className="text-muted-foreground font-body text-sm hover:text-primary transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans-brand text-xs uppercase tracking-[0.2em] text-primary mb-6">Contact</h4>
          <div className="flex flex-col gap-3 text-muted-foreground font-body text-sm">
            <div className="flex items-start gap-2"><MapPin size={14} className="mt-1 text-primary shrink-0" /> Near Shams Masjid, Mira Road East, Maharashtra – 401107</div>
            <div className="flex items-center gap-2"><Mail size={14} className="text-primary" /> shaikhmobasshir122@gmail.com</div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-sans-brand text-xs uppercase tracking-[0.2em] text-primary mb-6">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 text-center">
        <p className="text-muted-foreground font-sans-brand text-xs tracking-wider">
          © {new Date().getFullYear()} Al Haay Perfume. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
