import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ChevronDown, User } from "lucide-react";

const navItems = ["About", "Research", "Projects"];

const publications = [
  {
    title: "Your Publication Title Goes Here",
    authors: "Your Name, Co-Author Name",
    venue: "Journal or Conference Name (2025)",
    tags: ["Topic 1", "Topic 2"],
    link: "#",
  },
  {
    title: "Another Publication Title",
    authors: "Co-Author Name, Your Name",
    venue: "Conference Proceedings (2024)",
    tags: ["Topic 3", "Topic 1"],
    link: "#",
  },
];

const projects = [
  {
    title: "Project Alpha",
    description:
      "A brief description of your project — what it does, why it matters, and what technologies or methods you used.",
    tags: ["React", "TypeScript", "Design"],
    link: "#",
  },
  {
    title: "Project Beta",
    description:
      "Another project description. Keep it concise but informative. Highlight what's unique or interesting.",
    tags: ["Python", "ML", "Research"],
    link: "#",
  },
  {
    title: "Project Gamma",
    description:
      "A third project. Could be an open-source tool, a research prototype, or a creative side project.",
    tags: ["Open Source", "API", "Data"],
    link: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-semibold text-sm text-foreground">Your Name</span>
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="text-sm bg-primary text-primary-foreground px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="w-40 h-40 rounded-2xl bg-muted flex items-center justify-center mb-8 overflow-hidden">
            <User className="w-16 h-16 text-muted-foreground/40" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Your Name
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-8">
            Your Research Focus | Lab Name, University
          </p>
          <div className="flex gap-3 mb-6">
            <a
              href="#research"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="mailto:you@email.com"
              className="border border-primary text-primary px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors"
            >
              Get in Touch
            </a>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground mb-8">
            <a href="#" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-foreground transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">you@email.com</p>
        </motion.div>
        <a href="#about" className="absolute bottom-8">
          <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </a>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Write a paragraph or two about yourself here. Describe your research
                interests, what drives you, and your current position. Link to your{" "}
                <a href="#" className="text-primary hover:underline">lab</a>,{" "}
                <a href="#" className="text-primary hover:underline">department</a>, or{" "}
                <a href="#" className="text-primary hover:underline">advisor</a>.
              </p>
              <p>
                Previously, you worked at [Company] where you did [things]. You can describe
                your past experience and how it connects to your current research.
              </p>
              <p>
                In your free time, you enjoy [hobbies]. This adds a personal touch.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research / Publications */}
      <section id="research" className="py-24 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-2xl font-bold text-foreground mb-8"
            >
              Publications
            </motion.h2>
            <div className="space-y-6">
              {publications.map((pub, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i + 1}
                  className="bg-background border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                  <p className="text-sm text-muted-foreground italic mb-3">{pub.venue}</p>
                  <a
                    href={pub.link}
                    className="text-sm text-primary font-medium hover:underline"
                  >
                    View Publication →
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-2xl font-bold text-foreground mb-8"
            >
              Projects
            </motion.h2>
            <div className="space-y-6">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i + 1}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="text-sm text-primary font-medium hover:underline"
                  >
                    Learn More →
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name. Built with care.
        </p>
      </footer>
    </main>
  );
};

export default Index;
