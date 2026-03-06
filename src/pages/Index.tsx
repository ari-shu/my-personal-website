import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ChevronDown } from "lucide-react";
import headshot from "@/assets/headshot.png";

const navItems = ["About", "Research", "Projects"];

const publications = [
{
  title: "Your Publication Title Goes Here",
  authors: "Your Name, Co-Author Name",
  venue: "Journal or Conference Name (2025)",
  tags: ["Topic 1", "Topic 2"],
  link: "#"
},
{
  title: "Another Publication Title",
  authors: "Co-Author Name, Your Name",
  venue: "Conference Proceedings (2024)",
  tags: ["Topic 3", "Topic 1"],
  link: "#"
}];


const projects = [
{
  title: "Project Alpha",
  description:
  "A brief description of your project — what it does, why it matters, and what technologies or methods you used.",
  tags: ["React", "TypeScript", "Design"],
  link: "#"
},
{
  title: "Project Beta",
  description:
  "Another project description. Keep it concise but informative.",
  tags: ["Python", "ML", "Research"],
  link: "#"
},
{
  title: "Project Gamma",
  description:
  "A third project. Could be an open-source tool, a research prototype, or a creative side project.",
  tags: ["Open Source", "API"],
  link: "#"
}];


const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" as const }
  })
};

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      {/* Nav — minimal, left-aligned name, right links */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-8 md:px-16 h-16 flex items-center justify-between">
          

          
          <div className="flex items-center gap-8">
            {navItems.map((item) =>
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500 font-body font-medium">
              
                {item}
              </a>
            )}
            <a
              className="text-xs tracking-[0.15em] uppercase border border-foreground text-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-all duration-500 font-body font-medium" href="https://trustworthyailab.substack.com/">
              BLOG
            </a>
            <div className="ml-auto text-muted-foreground flex-row flex items-center justify-start gap-[20px]">
              <a href="#" className="hover:text-foreground transition-colors duration-500" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-foreground transition-colors duration-500" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="mailto:you@email.com" className="hover:text-foreground transition-colors duration-500" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero — centered, intimate, generous space */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" as const }}
          className="flex flex-col items-center">
          
          {/* Headshot placeholder */}
          <div className="w-48 h-56 rounded-[50%] bg-card border border-border overflow-hidden mb-10">
            <img src={headshot} alt="Headshot" className="w-full h-full object-cover" />
          </div>

          <h1 className="font-body text-5xl md:text-7xl font-medium text-foreground mb-4 leading-tight tracking-tight">
            ARIELLA SHULMAN 
          </h1>
          <p className="text-muted-foreground max-w-md mb-10 leading-relaxed text-2xl font-mono">
            ai ethics & governance       
          </p>



          
        </motion.div>

        <a href="#about" className="absolute bottom-10">
          <ChevronDown className="w-5 h-5 text-muted-foreground/50 animate-bounce" />
        </a>
      </section>

      {/* About — asymmetric grid with generous whitespace */}
      <section id="about" className="py-32 md:py-44 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fade}
            custom={0}>
            
            <p className="text-sm tracking-[0.3em] uppercase text-foreground font-body font-medium">
              About
            </p>
          </motion.div>
          <motion.div
            className="lg:col-span-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fade}
            custom={1}>
            
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground leading-snug mb-10">
              A few words about who I am and what I care about.
            </h2>
            <div className="space-y-5 text-muted-foreground font-body text-base leading-relaxed">
              <p>
                Write a paragraph about yourself here. Describe your research
                interests, your current position, and link to your{" "}
                <a href="#" className="text-foreground border-b border-foreground/30 hover:border-foreground transition-colors duration-500">
                  lab
                </a>{" "}
                or{" "}
                <a href="#" className="text-foreground border-b border-foreground/30 hover:border-foreground transition-colors duration-500">
                  advisor
                </a>.
              </p>
              <p>
                Previously, you worked at [Company] where you did [things]. Connect
                your past experience to your current research direction.
              </p>
              <p>
                In your free time, you enjoy [hobbies]. This adds a personal, human touch.
              </p>
            </div>

            {/* Contact details row */}
            <div className="mt-14 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
              { label: "Email", value: "you@email.com" },
              { label: "Location", value: "City, Country" },
              { label: "Scholar", value: "Google Scholar →" }].
              map((item) =>
              <div key={item.label}>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-foreground">{item.value}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications — cards with tags */}
      <section id="research" className="py-32 md:py-44 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fade}
            custom={0}>
            
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body font-medium">
              Publications
            </p>
          </motion.div>
          <div className="lg:col-span-8 space-y-0">
            {publications.map((pub, i) =>
            <motion.a
              key={i}
              href={pub.link}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              custom={i + 1}
              className="block py-8 border-b border-border group">
              
                <div className="flex flex-wrap gap-2 mb-3">
                  {pub.tags.map((tag) =>
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.15em] uppercase font-medium bg-card text-muted-foreground px-3 py-1 rounded-full">
                  
                      {tag}
                    </span>
                )}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-normal text-foreground group-hover:text-primary transition-colors duration-500 mb-2">
                  {pub.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">{pub.authors}</p>
                <p className="text-sm text-muted-foreground italic">{pub.venue}</p>
              </motion.a>
            )}
          </div>
        </div>
      </section>

      {/* Projects — cards */}
      <section id="projects" className="py-32 md:py-44 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fade}
            custom={0}>
            
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body font-medium">
              Projects
            </p>
          </motion.div>
          <div className="lg:col-span-8 space-y-8">
            {projects.map((project, i) =>
            <motion.a
              key={i}
              href={project.link}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              custom={i + 1}
              className="block bg-card border border-border p-8 group hover:shadow-lg transition-shadow duration-500">
              
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) =>
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.15em] uppercase font-medium bg-background text-muted-foreground px-3 py-1 rounded-full">
                  
                      {tag}
                    </span>
                )}
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-light text-foreground group-hover:text-primary transition-colors duration-500 mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </motion.a>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 md:px-16 border-t border-border">
        <div className="max-w-6xl mx-auto flex-col text-center gap-4 flex items-center justify-center">
          <p className="text-xs text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} Your Name
          </p>
          <p className="text-xs text-muted-foreground tracking-wide font-display italic">
            Made with care.
          </p>
        </div>
      </footer>
    </main>);

};

export default Index;