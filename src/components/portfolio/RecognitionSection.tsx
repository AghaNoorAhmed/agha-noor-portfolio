import { motion } from "framer-motion";
import { Award, Star, Zap, Clock } from "lucide-react";

const RecognitionSection = () => {
  return (
    <section id="recognition" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-wider">Recognition</span>
          <h2 className="heading-section mt-4">Academic Distinction</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main recognition card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative card-glass rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                      Congressional Recognition
                    </span>
                    <span className="text-sm text-muted-foreground font-mono">Spring 2025</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    Certificate of Commendation from U.S. Congressman Zach Nunn
                  </h3>
                  <p className="text-body mb-6">
                    Recognized for completing an extraordinary number of academic credits in a single semester — 
                    a rare distinction demonstrating exceptional time management, intellectual endurance, and 
                    the capacity to perform under extreme academic pressure.
                  </p>
                  
                  {/* Highlight metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                      <Zap className="w-5 h-5 text-primary" />
                      <div>
                        <span className="block text-xs text-muted-foreground uppercase tracking-wider">Trait</span>
                        <span className="font-semibold">Elite Resilience</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <span className="block text-xs text-muted-foreground uppercase tracking-wider">Signal</span>
                        <span className="font-semibold">Extreme Capacity</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                      <Star className="w-5 h-5 text-primary" />
                      <div>
                        <span className="block text-xs text-muted-foreground uppercase tracking-wider">Ready For</span>
                        <span className="font-semibold">Big Tech & AI</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecognitionSection;
