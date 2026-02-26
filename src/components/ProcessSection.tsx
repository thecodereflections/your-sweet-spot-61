import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, num: "01", title: "Discovery & Strategy Call", desc: "We understand your business goals, challenges, and target audience." },
  { icon: PenTool, num: "02", title: "Requirement Mapping & Architecture", desc: "We map your requirements and design the system architecture." },
  { icon: Code, num: "03", title: "Design & Build Phase", desc: "We design and develop your platform using scalable, clean code." },
  { icon: TestTube, num: "04", title: "Testing & Performance Optimisation", desc: "We test for responsiveness, speed, SEO, and functionality." },
  { icon: Rocket, num: "05", title: "Launch & Ongoing Support", desc: "We deploy your platform and provide continuous support." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 gradient-hero opacity-80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-[0.2em]">How We Work</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Our 5-Step Delivery Framework
          </h2>
          <p className="text-muted-foreground/70 max-w-xl mx-auto">
            Structured delivery with full transparency at every stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative text-center group"
            >
              <div className="w-14 h-14 rounded-2xl gradient-accent mx-auto flex items-center justify-center mb-4 group-hover:shadow-glow-sm group-hover:scale-110 transition-all duration-300">
                <step.icon size={24} className="text-accent-foreground" />
              </div>
              <span className="text-xs text-secondary font-bold tracking-widest mb-1 block">{step.num}</span>
              <h3 className="font-display text-sm font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground/60 text-xs leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
