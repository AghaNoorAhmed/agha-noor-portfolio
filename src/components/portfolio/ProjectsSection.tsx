import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Sparkles, Database, Cpu } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Data Analysis Platform",
    description: "Built a scalable machine learning pipeline for processing and analyzing large datasets. Implemented predictive models with high accuracy and optimized for performance.",
    tags: ["Python", "Machine Learning", "Data Engineering", "API Design"],
    icon: Sparkles,
    highlight: true,
  },
  {
    title: "Distributed Systems Architecture",
    description: "Designed and implemented a fault-tolerant distributed system with load balancing, caching strategies, and horizontal scaling capabilities.",
    tags: ["Systems Design", "Distributed Computing", "Performance Optimization"],
    icon: Database,
    highlight: false,
  },
  {
    title: "Neural Network Framework",
    description: "Developed a lightweight deep learning framework from scratch, implementing backpropagation, various optimizers, and common layer architectures.",
    tags: ["Deep Learning", "Python", "NumPy", "Mathematics"],
    icon: Cpu,
    highlight: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-wider">Portfolio</span>
          <h2 className="heading-section mt-4">Engineering Projects</h2>
          <p className="text-body mt-4 max-w-2xl mx-auto">
            Industry-grade engineering work demonstrating problem-solving depth, 
            system design thinking, and execution quality.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`relative card-glass rounded-2xl p-8 transition-all duration-300 hover:border-primary/30 ${project.highlight ? 'border-primary/20' : ''}`}>
                {project.highlight && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Featured
                  </div>
                )}
                
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-body mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/aghanoorahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all group"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">View More on GitHub</span>
            <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
