import { Headphones, Award, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Images
import heroFarmer from "@/assets/hero-farmer.jpg";
import heroIrrigation from "@/assets/hero-irrigation-water.jpg";
import tractorAction from "@/assets/tractor-action.jpg";

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
        <div className="absolute inset-0 bg-gradient-to-l from-primary/70 via-primary/60 to-secondary/50" />
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-right space-y-8 order-2 md:order-1">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
                نزرع <span className="">الثقة</span>...
                <br />
                ونحصد <span className="">النجاح</span>
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed max-w-xl">
                من قلب الأرض الليبية، نوفر حلولاً زراعية متكاملة تمكّن المزارعين
                من النمو، الاستدامة، والازدهار.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                //
                href="/#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 active:scale-95 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 h-14 text-lg"
              >
                استكشف حلولنا
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>

              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 active:scale-95 border-2 h-14 text-lg border-white text-white hover:bg-white hover:text-primary"
              >
                تواصل مع فريقنا
              </a>
            </div>
          </div>

          {/* Images */}
          <div className="relative h-[400px] md:h-[600px] hidden md:block order-1 md:order-2">
            <div className="absolute top-10 left-10 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 z-10">
              <img
                src={heroFarmer}
                alt="CLAAS Tractor"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-bold text-lg">أحدث معدات CLAAS</p>
              </div>
            </div>

            <div className="absolute bottom-10 right-10 w-1/2 h-1/2 rounded-3xl overflow-hidden shadow-2xl border-4 border-primary z-20">
              <img
                src={tractorAction}
                alt="Irrigation System"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-0 right-0 p-8 animate-pulse text-primary opacity-30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={120}
                height={120}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 20h10" />
                <path d="M10 20c5.5-2.5.8-6.4 3-10" />
                <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
                <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
              </svg>
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
