import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import aerialIrrigation from "@/assets/aerial-irrigation.jpg";

const partners = [
  { name: "CLAAS", logo: "CLAAS" },
  { name: "Western", logo: "Western" },
  { name: "CLAAS", logo: "CLAAS" },
  { name: "Western", logo: "Western" },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="partners" className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={aerialIrrigation}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="absolute inset-0 diagonal-lines opacity-30" />
      </div>

      <div ref={ref} className="relative section-container py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-accent font-semibold text-sm mb-4 bg-accent/20 px-4 py-2 rounded-full">
            شركاؤنا في النجاح
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            شركاؤنا
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            نفخر بشراكتنا مع أكبر العلامات التجارية العالمية في مجال المعدات الزراعية
          </p>
        </motion.div>

        {/* Auto-scrolling Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative overflow-hidden py-8"
        >
          <div 
            className="flex items-center gap-12 whitespace-nowrap"
            style={{ transform: `translateX(${scrollPosition}px)` }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + (index % partners.length) * 0.1, duration: 0.6 }}
                className="group flex-shrink-0"
              >
                <div className="w-48 h-28 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center p-6 transition-all duration-500 group-hover:bg-primary-foreground/20 group-hover:shadow-glow-accent group-hover:border-accent/40">
                  <span className="text-3xl font-black text-primary-foreground/60 group-hover:text-primary-foreground transition-colors duration-300">
                    {partner.logo}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <span className="w-3 h-3 rounded-full bg-accent animate-pulse" />
            <span>موزع معتمد</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <span className="w-3 h-3 rounded-full bg-golden animate-pulse animation-delay-200" />
            <span>قطع غيار أصلية</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <span className="w-3 h-3 rounded-full bg-primary-foreground/80 animate-pulse animation-delay-400" />
            <span>دعم فني متخصص</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;