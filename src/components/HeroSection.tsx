import { Button } from "@/components/ui/button";
import { ArrowLeft, Headphones, Award, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Images
import heroFarmer from "@/assets/hero-farmer.jpg";
import heroIrrigation from "@/assets/hero-irrigation-water.jpg";
import detailMachinery from "@/assets/detail-machinery.jpg";
import tractorAction from "@/assets/tractor-action.jpg";

const badges = [
  { icon: Award, text: "موزّع معتمد" },
  { icon: Headphones, text: "دعم فني مستمر" },
  { icon: MapPin, text: "خبرة وطنية" },
];

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[100vh] lg:min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Layer with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src={heroIrrigation}
          alt="أنظمة الري المحوري"
          className="w-full h-full object-cover animate-zoom-in"
        />
        {/* Multi-layer Overlays */}
        <div className="absolute inset-0 bg-gradient-to-l from-primary/95 via-primary/85 to-secondary/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
        <div className="absolute inset-0 diagonal-lines" />
        <div className="absolute inset-0 grain-overlay" />
      </motion.div>

      {/* Animated Line Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute -right-20 top-1/4 w-96 h-96 border border-primary-foreground/20 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute -right-32 top-1/4 w-[500px] h-[500px] border border-primary-foreground/20 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute -right-44 top-1/4 w-[600px] h-[600px] border border-primary-foreground/20 rounded-full"
        />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 section-container w-full py-32 lg:py-0"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content - Right Side */}
          <div className="order-2 lg:order-1 text-center lg:text-right">
            {/* Animated Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
            >
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2"
                >
                  <badge.icon className="w-4 h-4 text-accent" />
                  <span className="text-primary-foreground/90 text-sm font-medium">
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.1] mb-6 text-shadow-hero"
            >
              <span className="block">نزرع الثقة…</span>
              <span className="block text-accent mt-2">ونحصد النجاح</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-primary-foreground/85 max-w-2xl mx-auto lg:mx-0 lg:mr-0 mb-10 leading-relaxed"
            >
              من قلب الأرض الليبية، نوفر أحدث الحلول الزراعية التي تمكّن المزارعين
              من النمو، الاستدامة، والازدهار
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("#services")}
                className="min-w-[200px] group"
              >
                استكشف حلولنا
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="min-w-[200px]"
              >
                <Headphones className="w-5 h-5" />
                تواصل مع فريقنا
              </Button>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-primary-foreground/20"
            >
              <div className="text-center lg:text-right">
                <span className="block text-3xl md:text-4xl font-black text-accent">+١٥</span>
                <span className="text-primary-foreground/70 text-sm">سنوات خبرة</span>
              </div>
              <div className="text-center lg:text-right">
                <span className="block text-3xl md:text-4xl font-black text-accent">+١٠٠٠</span>
                <span className="text-primary-foreground/70 text-sm">مزارع نفخر بخدمتهم</span>
              </div>
              <div className="text-center lg:text-right">
                <span className="block text-3xl md:text-4xl font-black text-accent">٣</span>
                <span className="text-primary-foreground/70 text-sm">فروع في ليبيا</span>
              </div>
            </motion.div>
          </div>

          {/* Image Collage - Left Side */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              {/* Main Large Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.9 }}
                className="relative z-20 rounded-3xl overflow-hidden shadow-xl border-4 border-primary-foreground/10"
              >
                <img
                  src={heroFarmer}
                  alt="مزارع ليبي في الحقول"
                  className="w-full h-[350px] md:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Image 1 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="absolute -bottom-8 -right-4 lg:-right-12 z-30 w-40 md:w-48 rounded-2xl overflow-hidden shadow-large border-4 border-card animate-float-slow"
              >
                <img
                  src={tractorAction}
                  alt="جرار في العمل"
                  className="w-full h-28 md:h-32 object-cover"
                />
              </motion.div>

              {/* Floating Image 2 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="absolute -top-6 -left-4 lg:-left-12 z-10 w-32 md:w-40 rounded-2xl overflow-hidden shadow-large border-4 border-card animate-float animation-delay-500"
              >
                <img
                  src={detailMachinery}
                  alt="تفاصيل المعدات"
                  className="w-full h-32 md:h-40 object-cover"
                />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute top-1/2 -right-8 w-16 h-16 bg-golden/30 rounded-full blur-xl"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
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
    </section>
  );
};

export default HeroSection;