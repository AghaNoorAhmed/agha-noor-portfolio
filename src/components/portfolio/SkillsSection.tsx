import { motion } from "framer-motion";
import { Brain, Code2, Database, Layers, Rocket, Target, Sparkles, Cpu } from "lucide-react";

const skills = [
  {
    category: "Core CS Fundamentals",
    icon: Code2,
    items: ["Data Structures & Algorithms", "Systems Design", "Object-Oriented Programming", "Software Architecture"],
  },
  {
    category: "Artificial Intelligence",
    icon: Brain,
    items: ["Machine Learning", "Deep Learning", "Neural Networks", "Applied AI Systems"],
  },
  {
    category: "Engineering",
    icon: Layers,
    items: ["Python", "Java", "JavaScript/TypeScript", "C++", "SQL"],
  },
  {
    category: "Tools & Platforms",
    icon: Database,
    items: ["Git & GitHub", "Linux/Unix", "Cloud Platforms", "Development Environments"],
  },
];

const traits = [
  { icon: Target, label: "Ownership", description: "End-to-end responsibility for deliverables" },
  { icon: Sparkles, label: "Precision", description: "Attention to correctness and detail" },
  { icon: Cpu, label: "Curiosity", description: "Deep drive to understand systems" },
  { icon: Rocket, label: "Bias for Action", description: "Move fast, iterate, deliver" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-wider">Expertise</span>
          <h2 className="heading-section mt-4">Technical Strengths</h2>
          <p className="text-body mt-4 max-w-2xl mx-auto">
            Strong foundations in computer science with deep engagement in AI/ML. 
            Comfortable ramping quickly on new technologies and solving ambiguous problems.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass rounded-xl p-6 group hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-md bg-secondary/70 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engineering traits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl font-semibold">Engineering Mindset</h3>
          <p className="text-muted-foreground mt-2">Big Tech traits that define my approach</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {traits.map((trait, index) => (
            <motion.div
              key={trait.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <trait.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-1">{trait.label}</h4>
              <p className="text-xs text-muted-foreground">{trait.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
