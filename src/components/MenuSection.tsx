import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type MenuItem = { name: string; desc: string; price: string; badge?: string };

const menuData: Record<string, MenuItem[]> = {
  Starters: [
    { name: "Tandoori Chicken Lollipop", desc: "Marinated drumettes char-grilled in the tandoor with mint chutney", price: "৳650", badge: "Chef's Special" },
    { name: "Prawn Tempura", desc: "Crispy battered tiger prawns with wasabi aioli", price: "৳850" },
    { name: "Mutton Seekh Kebab", desc: "Hand-rolled spiced mutton kebabs, slow-cooked over charcoal", price: "৳750" },
    { name: "Dahi Puri Chaat", desc: "Crispy shells filled with yogurt, tamarind, and pomegranate", price: "৳450" },
  ],
  "Main Course": [
    { name: "Grilled Ribeye", desc: "Charred to perfection, served with truffle butter and seasonal vegetables", price: "৳2,450", badge: "Chef's Special" },
    { name: "Saffron Risotto", desc: "Arborio rice infused with premium Persian saffron and parmesan", price: "৳1,850" },
    { name: "Kacchi Biryani", desc: "Slow-cooked aromatic mutton biryani with rose water and saffron", price: "৳1,200" },
    { name: "Grilled Salmon Fillet", desc: "Atlantic salmon with lemon butter sauce and asparagus", price: "৳2,800" },
  ],
  Desserts: [
    { name: "Molten Chocolate Lava Cake", desc: "Dark Belgian chocolate with vanilla bean ice cream", price: "৳650" },
    { name: "Firni Royale", desc: "Traditional rice pudding with pistachio and gold leaf", price: "৳450", badge: "House Special" },
    { name: "Crème Brûlée", desc: "Classic French custard with a caramelized sugar crust", price: "৳550" },
  ],
  Drinks: [
    { name: "Sky Sunset Mocktail", desc: "Mango, passion fruit, and grenadine layered sunset", price: "৳350", badge: "Signature" },
    { name: "Turkish Coffee", desc: "Slow-brewed dark roast with cardamom and cinnamon", price: "৳250" },
    { name: "Rose Lemonade", desc: "Fresh lemon with rose water and crushed ice", price: "৳200" },
    { name: "Premium Fruit Smoothie", desc: "Seasonal tropical fruits blended fresh to order", price: "৳300" },
  ],
};

const categories = Object.keys(menuData);

const MenuSection = () => {
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="menu" className="relative py-24 md:py-32">
      <div className="absolute inset-0 amber-radiance opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16"
        >
          <p className="label-upper text-primary mb-4">The Menu</p>
          <h2 className="heading-display text-foreground text-4xl md:text-5xl">
            Signature Flavours
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Each dish is a journey — crafted with the finest ingredients and presented with artistry.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Chef's Specials", "Happy Hour Offers", "All You Can Eat"].map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full gold-border label-upper text-[10px] text-primary">
              {tag}
            </span>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full label-upper text-xs transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground gold-glow"
                  : "gold-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease }}
            className="max-w-3xl mx-auto space-y-1"
          >
            {menuData[active].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease, delay: i * 0.08 }}
                className="flex items-start justify-between py-6 border-b border-border group"
              >
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-3">
                    <h3 className="heading-display-bold text-foreground text-xl group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </h3>
                    {item.badge && (
                      <span className="label-upper text-[9px] px-2 py-0.5 rounded-full bg-primary/15 text-primary">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                </div>
                <p className="heading-display text-primary text-xl whitespace-nowrap">{item.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
