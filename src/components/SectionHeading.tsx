import { motion } from 'framer-motion';

interface Props {
  subtitle?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ subtitle, title, description }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-12 lg:mb-16"
  >
    {subtitle && (
      <span className="font-sans-brand text-xs uppercase tracking-[0.3em] text-primary">{subtitle}</span>
    )}
    <h2 className="font-display text-3xl lg:text-4xl text-foreground mt-2">{title}</h2>
    <div className="line-gold mx-auto mt-4" />
    {description && (
      <p className="text-muted-foreground font-body text-lg mt-4 max-w-xl mx-auto">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
