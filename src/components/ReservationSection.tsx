import { useState } from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const ReservationSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="reservation" className="relative py-24 md:py-32 bg-secondary">
      <div className="absolute inset-0 amber-radiance pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-12"
        >
          <p className="label-upper text-primary mb-4">Reservation</p>
          <h2 className="heading-display text-foreground text-4xl md:text-5xl">
            Book Your Table
          </h2>
          <p className="text-muted-foreground mt-4">
            Or call us directly at{" "}
            <a href="tel:+8801977197255" className="text-primary hover:underline">
              01977-197255
            </a>
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl p-8 md:p-12 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="label-upper text-muted-foreground text-[10px] mb-2 block">Name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div>
              <label className="label-upper text-muted-foreground text-[10px] mb-2 block">Phone</label>
              <input
                type="tel"
                required
                placeholder="01XXX-XXXXXX"
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <label className="label-upper text-muted-foreground text-[10px] mb-2 block">Date</label>
              <input
                type="date"
                required
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div>
              <label className="label-upper text-muted-foreground text-[10px] mb-2 block">Time</label>
              <input
                type="time"
                required
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div>
              <label className="label-upper text-muted-foreground text-[10px] mb-2 block">Guests</label>
              <select
                required
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-primary text-primary-foreground label-upper text-sm font-semibold tracking-widest gold-glow hover:scale-[1.02] transition-transform duration-300"
          >
            {submitted ? "✓ Request Received!" : "Book Your Table Now"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ReservationSection;
