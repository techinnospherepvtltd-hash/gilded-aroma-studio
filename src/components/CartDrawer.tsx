import { useCart } from '@/context/CartContext';
import { getImage } from '@/data/images';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card border-l border-border z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-display text-xl text-foreground">Your Cart</h2>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-muted-foreground font-body text-lg">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {items.map(item => (
                    <div key={item.product.id} className="flex gap-4 border-b border-border pb-4">
                      <img src={getImage(item.product.image)} alt={item.product.name} className="w-20 h-20 object-cover rounded" loading="lazy" />
                      <div className="flex-1">
                        <h3 className="font-display text-sm text-foreground">{item.product.name}</h3>
                        <p className="text-primary font-sans-brand text-sm mt-1">₹{item.product.price.toLocaleString()}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="text-muted-foreground hover:text-foreground"><Minus size={14} /></button>
                          <span className="font-sans-brand text-sm text-foreground w-6 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="text-muted-foreground hover:text-foreground"><Plus size={14} /></button>
                          <button onClick={() => removeItem(item.product.id)} className="ml-auto text-muted-foreground hover:text-destructive"><Trash2 size={14} /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6 border-t border-border space-y-4">
                  <div className="flex justify-between font-sans-brand">
                    <span className="text-muted-foreground uppercase tracking-wider text-xs">Total</span>
                    <span className="text-primary text-lg font-semibold">₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <Button variant="hero" className="w-full" size="lg">Proceed to Checkout</Button>
                  <button onClick={clearCart} className="w-full text-center text-muted-foreground text-xs font-sans-brand uppercase tracking-wider hover:text-foreground transition-colors">
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
