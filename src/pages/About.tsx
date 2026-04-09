import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

const About = () => (
  <div className="min-h-screen pt-24 pb-20">
    <div className="container mx-auto px-4 lg:px-8">
      <SectionHeading subtitle="Our Story" title="The House of Al Hay" description="Where Arabian heritage meets modern luxury." />

      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-body text-lg text-foreground leading-relaxed">
            Al Hay Perfume was born from a profound reverence for the ancient art of Arabian perfumery — a tradition that has enchanted civilizations for millennia. Our name, meaning "The Living," reflects our belief that a truly exceptional fragrance is a living entity, evolving and breathing with the wearer throughout the day.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <h3 className="font-display text-2xl text-foreground mb-4">Heritage & Craftsmanship</h3>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Every fragrance in our collection is meticulously composed using the world's finest raw materials — from the smoky depths of aged agarwood harvested in Southeast Asian forests to the intoxicating Damascena roses of Turkey's Valley of Roses. We collaborate with master perfumers who understand that true luxury lies in the subtlety of balance and the purity of ingredients.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <h3 className="font-display text-2xl text-foreground mb-4">Our Philosophy</h3>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            We believe that luxury should be accessible without compromise. Al Hay bridges the gap between international prestige perfumery and attainable elegance, delivering fragrances that rival the world's most exclusive maisons at a fraction of the cost. Every bottle is a testament to our unwavering commitment to quality, longevity, and artistry.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <h3 className="font-display text-2xl text-foreground mb-4">The Al Hay Promise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              { title: 'Purity', desc: 'Only the finest, ethically sourced ingredients make it into our compositions.' },
              { title: 'Longevity', desc: 'Engineered to last 8-12 hours, our fragrances become a part of your identity.' },
              { title: 'Elegance', desc: 'From bottle to scent, every detail is designed to evoke sophistication.' },
            ].map((item, i) => (
              <div key={i} className="border border-border p-6 rounded text-center">
                <h4 className="font-display text-lg text-primary mb-2">{item.title}</h4>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default About;
