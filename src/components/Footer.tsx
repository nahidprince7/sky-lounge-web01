import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="border-t border-border py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Sky Lounge" className="h-10 w-10 rounded-full object-cover" />
            <span className="heading-display text-xl text-foreground">Sky Lounge</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            A celestial dining experience above the heart of Mirpur, Dhaka.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="label-upper text-primary mb-4">Quick Links</p>
          <nav className="space-y-2">
            {["About", "Menu", "Experience", "Gallery", "Reviews", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="block text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p className="label-upper text-primary mb-4">Contact</p>
          <div className="space-y-2 text-muted-foreground text-sm">
            <p>Sony Square, Mirpur 1</p>
            <p>105 Mirpur Road, Dhaka 1216</p>
            <a href="tel:+8801977197255" className="block hover:text-primary transition-colors">01977-197255</a>
            <p>12 PM – 11 PM Daily</p>
          </div>
        </div>

        {/* Social */}
        <div>
          <p className="label-upper text-primary mb-4">Follow Us</p>
          <div className="flex gap-4">
            {[
              { label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
              { label: "Instagram", path: "M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-10 h-10 rounded-full gold-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>

          <div className="mt-6">
            <p className="label-upper text-muted-foreground text-[10px] mb-2">Newsletter</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-background/50 border border-border rounded-l-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-r-lg label-upper text-[10px] hover:opacity-90 transition-opacity">
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Sky Lounge. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
