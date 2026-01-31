import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gradient">ANK</span>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Agha Noor Ahmed Khan
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">
              Built with precision and purpose
            </span>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
