import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, Globe } from "lucide-react";
import profileImg from "@/assets/profile-nobg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6"
          >
            AI Engineer · Researcher · Educator
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] mb-6"
          >
            Ferdous Bin Ali
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
          >
            8+ years driving AI from research to production — bridging academic rigor
            with industry impact across LLMs, computer vision, and MLOps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center md:justify-start gap-4 flex-wrap"
          >
            <a
              href="mailto:hridoyferdous@yahoo.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-body text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail size={16} /> Get in Touch
            </a>
            <a
              href="https://linkedin.com/in/fbali0239"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-body text-sm text-foreground hover:bg-secondary transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://iknownothing.me"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-body text-sm text-foreground hover:bg-secondary transition-colors"
            >
              <Globe size={16} /> Website
            </a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0"
        >
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-md" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <img
                src={profileImg}
                alt="Ferdous Bin Ali"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Floating accent dots */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-primary/30 rounded-full"
            />
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-4 -left-3 w-4 h-4 bg-accent/40 rounded-full"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
