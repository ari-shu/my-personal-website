import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ChevronDown } from "lucide-react";
import portrait from "@/assets/portrait.png";
import FloatingImage from "@/components/FloatingImage";

// Decorative images

import bowl from "@/assets/subject-bowl.png";
import bottle from "@/assets/subject-bottle.png";
import ocarina from "@/assets/subject-ocarina.png";
import vase from "@/assets/subject-vase.png";
import star from "@/assets/subject-star.png";
import tree from "@/assets/subject-tree.png";
import mask from "@/assets/subject-mask.png";
import leaf from "@/assets/subject-leaf.png";
import moons from "@/assets/subject-moons.png";

const navItems = ["About", "Research", "Projects"];

const publications = [
{
  title: "second-hand ai",
  authors: "Your Name, Co-Author Name" as React.ReactNode,
  venue: "Journal or Conference Name (2025)",
  tags: ["ai", "sociology"],
},
{
  title: "stylize, escalate, refuse: Epistemic Pluralism via institutional Orchestration Layers",
  authors: <><strong className="font-semibold text-foreground">ariella shulman</strong>, kostadin devedzhiev, juan pablo partida, elaf almamoud, umang bhatt</>,
  venue: "under review, ACM Conference on Fairness, Accountability, and Transparency (2026)",
  tags: ["ai", "epistemology"],
}];

const projects = [
{
  title: "Cultural Diversity in the Era of Algorithmic Monoculture",
  description:
  "satellite dialogue at 2026 india ai impact summit investigating multi-stakeholder perspectives on institutional ai deployment. conducted interviews across industry, academia, and policy.",
  tags: ["research", "social infrastructure"],
  link: "https://www.linkedin.com/posts/ariella-shulman_what-an-incredible-week-spent-in-new-delhi-activity-7431092053796704256-uEu4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFBSMkBLr7r_waK211KUvrLiidLJ49LBYE"
},
{
  title: "ai ethics is for everyone",
  description:
  "a grassroots initiative to broaden interdisciplinary engagement with the ai ethics community. organized by the exec team of the cambridge ai ethics society (i'm the co-vice pres!)",
  tags: ["community"],
  link: "https://www.instagram.com/cambridgeaiethics/"
},
{
  title: "trustworthy ai substack",
  description: "started a substack for the trace lab. subscribe for weekly reads.",
  tags: ["blog", "community"],
  link: "https://trustworthyailab.substack.com/"
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
    <main className="bg-background min-h-screen overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-8 md:px-16 h-16 flex items-center justify-center">
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
              className="text-xs tracking-[0.15em] uppercase border border-foreground text-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-all duration-500 font-body font-medium" href="https://trustworthyailab.substack.com/" target="_blank" rel="noopener noreferrer">
              BLOG
            </a>
            <div className="text-muted-foreground flex-row flex items-center justify-start gap-[20px]">
              <a href="https://www.linkedin.com/in/ariella-shulman/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-500" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com/ari-shu" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-500" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="mailto:as3732@cam.ac.uk" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-500" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 pt-16 relative">
        {/* Decorative: star top-left */}
        <FloatingImage
          src={star}
          alt=""
          className="absolute top-28 left-8 md:left-20 w-14 md:w-20"
          delay={0.8}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" as const }}
          className="flex flex-col items-center">
          <div className="relative w-72 mb-10 flex items-center justify-center">
            <img
              src={portrait}
              alt="Ariella Shulman"
              className="w-full h-auto"
            />
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

      {/* Decorative strip between Hero and About */}
      <div className="relative max-w-6xl mx-auto px-8 md:px-16">
        <div className="flex items-end justify-end gap-8 py-8">
          <FloatingImage src={ocarina} alt="" className="w-16 md:w-24" delay={0.1} />
          <FloatingImage src={leaf} alt="" className="w-20 md:w-28" delay={0.3} />
        </div>
      </div>

      {/* About */}
      <section id="about" className="py-20 md:py-28 px-8 md:px-16 relative">
        {/* Decorative: bottle floating far left */}
        <FloatingImage
          src={bottle}
          alt=""
          className="hidden lg:block absolute top-20 -left-4 w-28"
          delay={0.4}
        />

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
            <div className="space-y-5 text-muted-foreground font-body text-base leading-relaxed">
              <p>
                by examining the deployment of ai in critical social infrastructure, i seek to understand how ai will change the moral and epistemic fabric of our society. my research spans philosophy, computer-human interaction, cognitive science, and policy.
              </p>
              <p>currently, i am studying for an <a href="https://www.lcfi.ac.uk/education/mphil" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors duration-500">mphil in ethics of ai, data &amp; algorithms</a> at the university of cambridge. i also conduct research in cambridge's <a href="https://trace-lab.ai/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors duration-500">trustworthy ai lab (trace)</a> and i am working on developing safety frameworks for ai tutors with <a href="https://eedi-labs-67qwnm2lxu4blqi5.webflow.io/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors duration-500">eedi labs</a>.
              </p>
              <p>
                previously, i studied philosophy and neuroethics at emory university in atlanta, ga. i have held positions at the legal aid society, where i fought unlawful evictions in nyc housing courts, and the democratic congressional campaign committee, where i led canvassing efforts in house district ny-11.
              </p>
              <p>in my free time, i enjoy reading books, throwing pottery, and playing chess.
              </p>
            </div>

            <div className="mt-14 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
              { label: "Email", value: "you@email.com" },
              { label: "Location", value: "City, Country" },
              { label: "Scholar", value: "Google Scholar →" }].
              map((item) =>
              <div key={item.label}>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Decorative strip between About and Publications */}
      <div className="relative max-w-6xl mx-auto px-8 md:px-16">
        <div className="flex items-center justify-between py-6">
          <FloatingImage src={bowl} alt="" className="w-28 md:w-40" delay={0.1} />
          <FloatingImage src={mask} alt="" className="w-14 md:w-20 ml-auto" delay={0.3} />
        </div>
      </div>

      {/* Publications */}
      <section id="research" className="py-20 md:py-28 px-8 md:px-16 relative">
        {/* Decorative: tree floating right */}
        <FloatingImage
          src={tree}
          alt=""
          className="hidden lg:block absolute bottom-16 -right-2 w-20"
          delay={0.5}
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fade}
            custom={0}>
            <p className="text-sm tracking-[0.3em] uppercase text-foreground font-body font-medium">
              Publications
            </p>
          </motion.div>
          <div className="lg:col-span-8 space-y-0">
            {publications.map((pub, i) =>
            <motion.div
              key={i}
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
                <h3 className="text-xl font-normal text-foreground group-hover:text-primary transition-colors duration-500 mb-2 text-left font-mono md:text-lg">
                  {pub.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">{pub.authors}</p>
                <p className="text-sm text-muted-foreground italic">{pub.venue}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Decorative strip between Publications and Projects */}
      <div className="relative max-w-6xl mx-auto px-8 md:px-16">
        <div className="flex items-center justify-center gap-12 py-8">
          <FloatingImage src={vase} alt="" className="w-20 md:w-28" delay={0.1} />
          <FloatingImage src={moons} alt="" className="w-10 md:w-14" delay={0.35} />
        </div>
      </div>

      {/* Projects */}
      <section id="projects" className="py-20 md:py-28 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fade}
            custom={0}>
            <p className="text-sm tracking-[0.3em] uppercase text-foreground font-body font-medium">
              Projects
            </p>
          </motion.div>
          <div className="lg:col-span-8 space-y-8">
            {projects.map((project, i) =>
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
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
                <h3 className="text-xl font-normal text-foreground group-hover:text-primary transition-colors duration-500 mb-3 text-left font-mono md:text-lg">
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
            © {new Date().getFullYear()} Ariella Shulman
          </p>
        </div>
      </footer>
    </main>);
};

export default Index;
