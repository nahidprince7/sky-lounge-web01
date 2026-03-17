import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Private Dining Rooms",
    desc: "Intimate spaces for special celebrations, business meetings, or exclusive gatherings with dedicated service.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-8 h-8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Happy Hour Dining",
    desc: "Enjoy curated specials during golden hour — the perfect blend of value and luxury.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Group & Family Friendly",
    desc: "Spacious seating, kid-friendly options, and an atmosphere that welcomes every generation.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-8 h-8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Premium Service",
    desc: "From the moment you arrive, our dedicated team ensures every detail is flawless.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="relative py-24 md:py-32 bg-secondary">
    <div className="absolute inset-0 amber-radiance opacity-30 pointer-events-none" />
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        className="text-center mb-16"
      >
        <p className="label-upper text-primary mb-4">The Experience</p>
        <h2 className="heading-display text-foreground text-4xl md:text-5xl">
          More Than a Meal
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            className="glass-card rounded-xl p-8 text-center group hover:border-primary/30 transition-colors duration-500"
          >
            <div className="text-primary mb-5 flex justify-center group-hover:scale-110 transition-transform duration-500">
              {f.icon}
            </div>
            <h3 className="heading-display-bold text-foreground text-xl mb-3">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
