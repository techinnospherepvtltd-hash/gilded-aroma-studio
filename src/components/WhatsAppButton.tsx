import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919999999999?text=Hello%20Al%20Haay%20Perfume!%20I%27m%20interested%20in%20your%20fragrances."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={24} className="text-[#fff]" />
  </a>
);

export default WhatsAppButton;
