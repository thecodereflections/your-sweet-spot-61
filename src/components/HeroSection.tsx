import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import CalendlyModal from "@/components/CalendlyModal";

const words = ["Intelligent", "Digital", "Systems", "for", "Modern"];
const glowWords = ["Intelligent", "Systems"];

const FloatingShape = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay, duration: 2 }}
    className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
  />
);

const HeroSection = () => {
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-hero" />
      <div
        className="absolute inset-0 animate-gradient opacity-30"
        style={{
          background: "linear-gradient(135deg, hsl(250 60% 20%) 0%, hsl(230 40% 10%) 25%, hsl(270 50% 15%) 50%, hsl(200 60% 15%) 75%, hsl(250 60% 20%) 100%)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(250 60% 58% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(250 60% 58% / 0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Floating shapes */}
      <FloatingShape className="w-96 h-96 bg-primary/10 top-20 -right-20 animate-float-shape" delay={0} />
      <FloatingShape className="w-72 h-72 bg-secondary/8 bottom-20 -left-10 animate-float-shape" delay={2} />
      <FloatingShape className="w-48 h-48 bg-primary/5 top-1/2 left-1/3 animate-float-shape" delay={4} />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondary text-sm font-medium tracking-[0.25em] uppercase mb-8"
          >
            Digital Systems &amp; AI Automation Agency
          </motion.p>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-4">
            {words.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.5, ease: "easeOut" }}
                className={`inline-block mr-[0.3em] ${glowWords.includes(word) ? "gradient-text" : ""}`}
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="gradient-text"
            >
              UK Businesses
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-xl mb-4 font-body leading-relaxed"
          >
            We design, automate, and scale high-performance web platforms and AI-driven workflows that reduce operational friction and increase measurable growth.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-muted-foreground/60 text-sm mb-10"
          >
            Trusted by startups and growing service businesses across the UK &amp; India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              variant="hero"
              size="lg"
              className="text-base px-8 py-6 animate-pulse-glow"
              onClick={() => setCalendlyOpen(true)}
            >
              Book a Free Strategy Call
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              className="text-base px-8 py-6"
              onClick={() => scrollToSection("case-studies")}
            >
              <Play size={16} className="mr-2" />
              View Our Work
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <CalendlyModal open={calendlyOpen} onOpenChange={setCalendlyOpen} />
    </section>
  );
};

export default HeroSection;
