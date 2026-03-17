import { motion } from "framer-motion";
import insideImg from "@/assets/inside_view.jpg";
import sittingImg from "@/assets/sittingareaoutside.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const AboutSection = () => (
  <section id="about" className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute inset-0 amber-radiance opacity-50 pointer-events-none" />
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="relative"
        >
          <div className="relative">
            <img
              src={insideImg}
              alt="Sky Lounge interior"
              className="w-full rounded-lg object-cover aspect-[4/3]"
              loading="lazy"
            />
            <div className="absolute -bottom-8 -right-4 md:right-8 w-48 md:w-64">
              <img
                src={sittingImg}
                alt="Rooftop seating"
                className="rounded-lg object-cover aspect-square gold-border shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
        >
          <p className="label-upper text-primary mb-4">Our Story</p>
          <h2 className="heading-display text-foreground text-4xl md:text-5xl mb-6">
            A Sanctuary Above the City
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Perched above the vibrant pulse of Mirpur, Sky Lounge transforms the ordinary into the extraordinary. 
              Located at Sony Square, Mirpur 1, our rooftop sanctuary offers panoramic views of the city skyline 
              paired with an atmosphere that whispers elegance.
            </p>
            <p>
              The city hums below. Up here, there is only the scent of wood-fired salt and the glow of the horizon. 
              Every detail — from our artisan metal tree sculptures to the ambient candlelight — is curated 
              to make you forget the world beneath.
            </p>
            <p>
              Whether you seek a romantic evening, a family celebration, or a gathering with friends, 
              Sky Lounge delivers an experience that lingers long after the last course.
            </p>
          </div>

          <div className="mt-8 flex gap-8">
            {[
              { num: "10,000+", label: "Happy Guests" },
              { num: "4.1★", label: "Google Rating" },
              { num: "50+", label: "Signature Dishes" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="heading-display text-2xl md:text-3xl text-primary">{stat.num}</p>
                <p className="label-upper text-muted-foreground text-[10px] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
