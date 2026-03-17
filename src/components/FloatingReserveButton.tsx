import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingReserveButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#reservation"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50 px-6 py-3.5 rounded-full bg-primary text-primary-foreground label-upper text-xs font-semibold tracking-widest gold-glow hover:scale-105 transition-transform duration-300 lg:hidden"
        >
          Reserve Now
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingReserveButton;
