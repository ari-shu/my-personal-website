import { motion } from "framer-motion";
import heroImage from "@/assets/hero-object.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8">
            Portfolio & Research
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] text-foreground mb-8">
            Your
            <br />
            <em className="font-light">Name</em>
          </h1>
          <p className="font-body text-base text-muted-foreground max-w-md leading-relaxed">
            Researcher, maker, and observer of form. Exploring the intersection
            of craft, materiality, and meaning.
          </p>
          <nav className="mt-12 flex gap-8">
            {["About", "Research", "Projects"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
              >
                {item}
              </a>
            ))}
          </nav>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <img
            src={heroImage}
            alt="Ceramic bowl with sage and earth tone glazes"
            className="w-72 md:w-96 lg:w-[28rem] object-cover rounded-sm"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
