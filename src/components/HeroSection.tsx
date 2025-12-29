import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-agriculture.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="حقول زراعية في ليبيا"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-primary/95 via-primary/85 to-secondary/80" />
        {/* Pattern Overlay */}
        <div className="absolute inset-0 leaf-pattern opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-5 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              الموزع الرائد في ليبيا
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-primary-foreground leading-tight mb-6"
          >
            نزرع اليوم
            <br />
            <span className="text-accent">لنصنع نجاح الغد</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-primary-foreground/85 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            حلول زراعية متكاملة تدعم المزارعين بأحدث المعدات، أنظمة الري، والخبرة
            الفنية في جميع أنحاء ليبيا
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("#services")}
              className="min-w-[200px]"
            >
              تصفح منتجاتنا
              <ArrowDown className="w-5 h-5 animate-float" />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="min-w-[200px]"
            >
              <MessageCircle className="w-5 h-5" />
              تواصل معنا
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("#about")}
            className="flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="التمرير للأسفل"
          >
            <span className="text-sm">اكتشف المزيد</span>
            <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 rounded-full bg-primary-foreground/70"
              />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;