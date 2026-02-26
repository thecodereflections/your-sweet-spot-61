import { motion } from "framer-motion";
import { Code2, Workflow, Bot, ShoppingCart, Blocks } from "lucide-react";

const stack = [
  { icon: Blocks, title: "No-Code & Low-Code", desc: "Rapid prototyping and delivery with modern no-code tools." },
  { icon: Code2, title: "Custom API Integrations", desc: "Seamless connectivity between your existing business tools." },
  { icon: Workflow, title: "Automation Tools", desc: "Workflow automation that eliminates manual repetitive tasks." },
  { icon: Bot, title: "AI Workflow Systems", desc: "Intelligent automation powered by modern AI capabilities." },
  { icon: ShoppingCart, title: "E-commerce Platforms", desc: "Scalable online stores built for conversion and growth." },
];

const TechStackSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-[0.2em]">Technology</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Modern &amp; <span className="gradient-text">Scalable</span> Technology Stack
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We use the right tools for every project — modern, reliable, and built to scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stack.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass rounded-2xl p-6 text-center hover-glow hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-sm group-hover:scale-110 transition-all duration-300">
                <item.icon size={22} className="text-accent-foreground" />
              </div>
              <h3 className="font-display text-sm font-semibold text-card-foreground mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
