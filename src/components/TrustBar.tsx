import { motion } from "framer-motion";

const TrustBar = () => {
  return (
    <section className="py-8 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center gap-3"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-border origin-right"
          />
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.15em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.05em" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="text-center text-sm text-muted-foreground/70 tracking-wide"
          >
            Trusted by startups and growing service businesses worldwide
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-border origin-left"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
