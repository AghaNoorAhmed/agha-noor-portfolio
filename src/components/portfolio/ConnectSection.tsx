import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Youtube, Facebook, ExternalLink, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/aghanoorahmed",
    icon: Github,
    description: "Code & Projects",
    color: "hover:border-[#333] hover:bg-[#333]/10",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/aghanoor",
    icon: Linkedin,
    description: "Professional Network",
    color: "hover:border-[#0A66C2] hover:bg-[#0A66C2]/10",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/aghanoormedia",
    icon: Twitter,
    description: "Thoughts & Updates",
    color: "hover:border-foreground hover:bg-foreground/10",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@aghanoor",
    icon: Youtube,
    description: "Video Content",
    color: "hover:border-[#FF0000] hover:bg-[#FF0000]/10",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/aghanoorvlogs",
    icon: Instagram,
    description: "Personal",
    color: "hover:border-[#E4405F] hover:bg-[#E4405F]/10",
  },
  {
    name: "Instagram Media",
    url: "https://instagram.com/aghanoormedia",
    icon: Instagram,
    description: "Professional Media",
    color: "hover:border-[#E4405F] hover:bg-[#E4405F]/10",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/aghanooryt",
    icon: Facebook,
    description: "Community",
    color: "hover:border-[#1877F2] hover:bg-[#1877F2]/10",
  },
];

const ConnectSection = () => {
  return (
    <section id="connect" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-wider">Connect</span>
          <h2 className="heading-section mt-4">Let's Build Together</h2>
          <p className="text-body mt-4 max-w-2xl mx-auto">
            Open to opportunities in software engineering, AI/ML, and impactful technology projects.
            Let's connect and explore how we can create something meaningful.
          </p>
        </motion.div>

        {/* Social links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group flex items-center gap-4 p-5 rounded-xl border border-border bg-card/50 transition-all duration-300 ${link.color}`}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                <link.icon className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold truncate">{link.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
                <span className="text-sm text-muted-foreground">{link.description}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Prefer email? Reach out directly.</p>
          <a
            href="mailto:contact@aghanoor.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            <Mail className="w-5 h-5" />
            <span>Get in Touch</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ConnectSection;
