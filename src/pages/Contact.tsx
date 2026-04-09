import { useState } from 'react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading subtitle="Get in Touch" title="Contact Us" description="We'd love to hear from you. Reach out and let us help you find your perfect fragrance." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {submitted ? (
              <div className="text-center py-12">
                <h3 className="font-display text-2xl text-foreground">Thank You</h3>
                <p className="text-muted-foreground font-body mt-2">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                <div>
                  <label className="font-sans-brand text-xs uppercase tracking-[0.15em] text-muted-foreground">Name</label>
                  <input required className="mt-2 w-full bg-input border border-border rounded px-4 py-3 font-body text-foreground focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="font-sans-brand text-xs uppercase tracking-[0.15em] text-muted-foreground">Email</label>
                  <input required type="email" className="mt-2 w-full bg-input border border-border rounded px-4 py-3 font-body text-foreground focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="font-sans-brand text-xs uppercase tracking-[0.15em] text-muted-foreground">Message</label>
                  <textarea required rows={5} className="mt-2 w-full bg-input border border-border rounded px-4 py-3 font-body text-foreground focus:outline-none focus:border-primary resize-none" />
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full">Send Message</Button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div>
              <h3 className="font-display text-xl text-foreground mb-4">Visit Us</h3>
              <div className="space-y-4 text-muted-foreground font-body">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary mt-1 shrink-0" />
                  <span>Near Shams Masjid, Mira Road East, Maharashtra – 401107, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-primary shrink-0" />
                  <a href="mailto:shaikhmobasshir122@gmail.com" className="hover:text-primary transition-colors">shaikhmobasshir122@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="border border-border rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.0!2d72.85!3d19.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE2JzQ4LjAiTiA3MsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="300"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                title="Al Haay Perfume Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
