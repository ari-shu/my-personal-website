import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 md:py-48 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16"
        >
          <div className="lg:col-span-3">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
              About
            </p>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground leading-snug mb-10">
              I study the quiet logic of objects — how form carries memory,
              and how material becomes language.
            </h2>
            <div className="space-y-6 text-muted-foreground font-body text-base leading-relaxed">
              <p>
                Currently based in [City], I work at the intersection of [your field]
                and [your field]. My research explores how craft traditions inform
                contemporary design thinking and how tactile knowledge shapes our
                understanding of the world.
              </p>
              <p>
                I received my PhD from [University] in [Year] and have since held
                positions at [Institution]. When not in the lab or studio, I can be
                found photographing found objects or wandering through flea markets.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-border">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {[
                  { label: "Email", value: "hello@email.com" },
                  { label: "Twitter", value: "@handle" },
                  { label: "Scholar", value: "Profile →" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-sm text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
