import { motion } from "framer-motion";
import heroImg from "@/assets/birdseyeview.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const HeroSection = () => (
  <section className="relative min-h-svh flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Sky Lounge rooftop at night"
        className="w-full h-full object-cover scale-105"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
    </div>

    {/* Amber glow */}
    <div className="absolute inset-0 amber-radiance pointer-events-none" />

    <div className="relative z-10 text-center max-w-[800px] px-4">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.2 }}
        className="label-upper text-primary mb-6"
      >
        Mirpur's Finest Rooftop Dining
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.4 }}
        className="heading-display text-foreground leading-[1.1]"
        style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
      >
        Elevate Your Dining Experience
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.7 }}
        className="mt-6 text-muted-foreground text-lg md:text-xl max-w-[600px] mx-auto leading-relaxed"
      >
        Fine dining, premium ambiance, and unforgettable moments in the heart of Mirpur
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 1 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#reservation"
          className="px-8 py-4 rounded-full bg-primary text-primary-foreground label-upper text-sm font-semibold tracking-widest gold-glow hover:scale-105 transition-transform duration-300"
        >
          Reserve Your Table
        </a>
        <a
          href="#menu"
          className="px-8 py-4 rounded-full gold-border text-foreground label-upper text-sm font-semibold tracking-widest hover:bg-primary/10 transition-colors duration-300"
        >
          Explore Menu
        </a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent" />
    </motion.div>
  </section>
);

export default HeroSection;
