import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const ContactSection = () => (
  <section id="contact" className="relative py-24 md:py-32 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        className="text-center mb-16"
      >
        <p className="label-upper text-primary mb-4">Find Us</p>
        <h2 className="heading-display text-foreground text-4xl md:text-5xl">
          Location & Hours
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="rounded-xl overflow-hidden gold-border aspect-[4/3]"
        >
          <iframe
            title="Sky Lounge location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2!2d90.3549!3d23.7939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzM4LjAiTiA5MMKwMjEnMTcuNiJF!5e0!3m2!1sen!2sbd!4v1"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="space-y-8"
        >
          <div>
            <p className="label-upper text-primary mb-3">Address</p>
            <p className="text-foreground text-lg leading-relaxed">
              Sky Lounge, Sony Square,<br />
              Mirpur 1, 105 Mirpur Road,<br />
              Dhaka 1216, Bangladesh
            </p>
            <a
              href="https://maps.google.com/?q=Sky+Lounge+Sony+Square+Mirpur+1+Dhaka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-primary label-upper text-xs hover:underline"
            >
              Get Directions →
            </a>
          </div>

          <div>
            <p className="label-upper text-primary mb-3">Business Hours</p>
            <p className="text-foreground text-lg">12:00 PM – 11:00 PM</p>
            <p className="text-muted-foreground text-sm mt-1">Open Daily · Holiday hours may vary</p>
          </div>

          <div>
            <p className="label-upper text-primary mb-3">Contact</p>
            <a href="tel:+8801977197255" className="text-foreground text-lg hover:text-primary transition-colors">
              01977-197255
            </a>
          </div>

          <a
            href="#reservation"
            className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground label-upper text-sm font-semibold tracking-widest gold-glow hover:scale-105 transition-transform duration-300"
          >
            Reserve Your Table
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
