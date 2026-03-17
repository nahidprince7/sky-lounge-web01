import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const reviews = [
  {
    name: "Nadia R.",
    rating: 5,
    text: "The ambiance alone is worth the visit. Add the incredible food and service, and Sky Lounge becomes an unforgettable experience. Our anniversary dinner here was pure magic.",
  },
  {
    name: "Tanvir H.",
    rating: 5,
    text: "Best rooftop dining in Dhaka. The Kacchi Biryani is legendary. The private dining room was perfect for our family gathering. Will definitely return.",
  },
  {
    name: "Sadia K.",
    rating: 4,
    text: "A hidden gem in Mirpur! The sunset views combined with the elegant interiors create such a premium feel. Every dish was beautifully presented and delicious.",
  },
  {
    name: "Arif M.",
    rating: 5,
    text: "Took my team here for a business dinner. The private room with that stunning chandelier impressed everyone. Service was impeccable. Highly recommend for special occasions.",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        viewBox="0 0 20 20"
        fill={i < count ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1"
        className={`w-4 h-4 ${i < count ? "text-primary" : "text-muted-foreground/30"}`}
      >
        <path d="M10 1l2.47 5.01L18 6.86l-4 3.9.94 5.5L10 13.48l-4.94 2.78.94-5.5-4-3.9 5.53-.85L10 1z" />
      </svg>
    ))}
  </div>
);

const ReviewsSection = () => (
  <section id="reviews" className="relative py-24 md:py-32">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        className="text-center mb-16"
      >
        <p className="label-upper text-primary mb-4">Testimonials</p>
        <h2 className="heading-display text-foreground text-4xl md:text-5xl">
          A Trusted Destination
        </h2>
        <p className="text-muted-foreground mt-4">
          Loved by over <span className="text-primary">10,000 guests</span> · 4.1+ on Google
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            className="glass-card rounded-xl p-6 flex flex-col"
          >
            <Stars count={r.rating} />
            <p className="text-muted-foreground text-sm leading-relaxed mt-4 flex-1">"{r.text}"</p>
            <p className="heading-display-bold text-foreground mt-4">{r.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
