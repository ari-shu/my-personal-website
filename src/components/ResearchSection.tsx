import { motion } from "framer-motion";
import researchImage from "@/assets/research-image.jpg";

const publications = [
  {
    year: "2025",
    title: "On the Materiality of Silence: Glass Forms in Post-Industrial Practice",
    venue: "Journal of Material Culture",
  },
  {
    year: "2024",
    title: "Tactile Epistemologies: What Hands Know That Eyes Cannot",
    venue: "Design Studies, Vol. 42",
  },
  {
    year: "2024",
    title: "The Weight of Emptiness: Negative Space in Sculptural Ceramics",
    venue: "Craft Research, 15(1)",
  },
  {
    year: "2023",
    title: "Between Function and Contemplation: Objects at Rest",
    venue: "Proceedings of the ACM Conference on Design",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-32 md:py-48 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            <div className="lg:col-span-3">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Research & Publications
              </p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground leading-snug">
                Selected writings on form, craft, and the poetics of material.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <img
                src={researchImage}
                alt="Glass vessels arranged in soft light"
                className="w-full object-cover rounded-sm"
              />
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-0">
                {publications.map((pub, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="py-6 border-b border-border group cursor-pointer"
                  >
                    <p className="font-body text-xs text-muted-foreground mb-2">
                      {pub.year}
                    </p>
                    <h3 className="font-display text-lg md:text-xl font-normal text-foreground group-hover:text-accent transition-colors duration-500 mb-1">
                      {pub.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground italic">
                      {pub.venue}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
