import { motion } from "framer-motion";
import img1 from "@/assets/birdseyeview.jpg";
import img2 from "@/assets/food1.jpg";
import img3 from "@/assets/meeting_hall.jpg";
import img4 from "@/assets/food2.jpg";
import img5 from "@/assets/view.jpg";
import img6 from "@/assets/food3.jpg";
import img7 from "@/assets/birdseyeview2.jpg";
import img8 from "@/assets/sittingareaoutside.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const images = [
  { src: img1, alt: "Sky Lounge at night", span: "col-span-2 row-span-2" },
  { src: img2, alt: "Tandoori chicken", span: "" },
  { src: img3, alt: "Private dining room", span: "" },
  { src: img4, alt: "Signature dishes", span: "" },
  { src: img5, alt: "Rooftop greenery", span: "" },
  { src: img6, alt: "Spiced curry", span: "col-span-2" },
  { src: img7, alt: "Bird's eye view", span: "" },
  { src: img8, alt: "Outdoor seating", span: "" },
];

const GallerySection = () => (
  <section id="gallery" className="relative py-24 md:py-32">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        className="text-center mb-16"
      >
        <p className="label-upper text-primary mb-4">Gallery</p>
        <h2 className="heading-display text-foreground text-4xl md:text-5xl">
          A Glimpse Inside
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <motion.div
            key={img.alt}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: i * 0.05 }}
            className={`${img.span} relative overflow-hidden rounded-lg group cursor-pointer`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover aspect-square scale-110 group-hover:scale-125 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
