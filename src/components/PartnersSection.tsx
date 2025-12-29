import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  { name: "CLAAS", logo: "CLAAS" },
  { name: "Western", logo: "Western" },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partners" className="section-padding bg-card">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm mb-4 bg-secondary/10 px-4 py-2 rounded-full">
            شركاؤنا في النجاح
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            شركاؤنا
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نفخر بشراكتنا مع أكبر العلامات التجارية العالمية في مجال المعدات الزراعية
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="w-48 h-32 rounded-2xl bg-muted/50 border border-border flex items-center justify-center p-6 transition-all duration-300 group-hover:bg-primary/5 group-hover:border-primary/30 group-hover:shadow-medium">
                <span className="text-3xl font-black text-muted-foreground/60 group-hover:text-primary transition-colors duration-300">
                  {partner.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-accent" />
            <span>موزع معتمد</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary" />
            <span>قطع غيار أصلية</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-secondary" />
            <span>دعم فني متخصص</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;