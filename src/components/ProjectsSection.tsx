import { motion } from "framer-motion";
import projectsImage from "@/assets/projects-image.jpg";

const projects = [
  {
    title: "Material Archive",
    description:
      "A living catalog of surface textures, glazes, and patinas collected across seven countries.",
    tag: "Ongoing",
  },
  {
    title: "Objects in Conversation",
    description:
      "An exhibition pairing historical craft objects with their contemporary digital echoes.",
    tag: "Exhibition, 2025",
  },
  {
    title: "The Quiet Interface",
    description:
      "Research-through-design project exploring calm technology through ceramic interaction surfaces.",
    tag: "Research Project",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 md:py-48 px-6 md:px-16 lg:px-24">
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
                Projects
              </p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground leading-snug">
                Works that live between research and making.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="space-y-12">
                {projects.map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-baseline gap-4 mb-2">
                      <h3 className="font-display text-2xl md:text-3xl font-light text-foreground group-hover:text-accent transition-colors duration-500">
                        {project.title}
                      </h3>
                      <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground whitespace-nowrap">
                        {project.tag}
                      </span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-lg">
                      {project.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <img
                src={projectsImage}
                alt="Metal relief tiles with botanical patterns"
                className="w-full object-cover rounded-sm"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
