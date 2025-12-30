import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  Shield,
  Users,
  Award,
  Truck,
  HeartHandshake,
  Clock,
  MapPin,
  CheckCircle,
} from "lucide-react";
import landscapeSunset from "@/assets/landscape-sunset.jpg";

const reasons = [
  {
    icon: Award,
    title: "معدات عالمية المستوى",
    description:
      "نوفر أفضل الجرارات والمعدات من العلامات التجارية الرائدة عالمياً",
  },
  {
    icon: Truck,
    title: "أنظمة ري متطورة",
    description: "حلول ري حديثة تضمن أفضل استخدام للموارد المائية",
  },
  {
    icon: Shield,
    title: "جودة مضمونة",
    description: "بذور وأسمدة عالية الجودة لضمان محاصيل صحية",
  },
  {
    icon: Users,
    title: "تدريب متخصص",
    description: "برامج تدريبية شاملة لتمكين المزارعين",
  },
  {
    icon: HeartHandshake,
    title: "دعم مستمر",
    description: "خدمات ما بعد البيع والصيانة على مدار الساعة",
  },
  {
    icon: Target,
    title: "رؤية مستقبلية",
    description: "نعمل لأجيال قادمة من النجاح الزراعي",
  },
];

const stats = [
  { icon: Clock, value: "+15", label: "سنوات خبرة" },
  { icon: MapPin, value: "3", label: "تغطية جغرافية" },
  { icon: CheckCircle, value: "24/7", label: "دعم متواصل" },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      id="why-us"
      className="relative overflow-hidden"
    >
      {/* Full-width Background Image with Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 h-[120%] -top-[10%]"
      >
        <img
          src={landscapeSunset}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/92" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/80" />
        <div className="absolute inset-0 diagonal-lines opacity-20" />
      </motion.div>

      <div ref={ref} className="relative section-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-accent font-semibold text-sm mb-4 bg-accent/20 px-4 py-2 rounded-full">
            مميزاتنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            لماذا نحن؟
          </h2>
        </motion.div>

        {/* Main Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="glass-dark p-8 md:p-12 rounded-3xl mb-12"
        >
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-xl md:text-2xl text-primary-foreground/95 leading-relaxed font-medium">
              نحن نؤمن بأن الزراعة هي أساس التقدم. لذلك نلتزم بتوفير معدات
              عالمية المستوى، أنظمة ري متطورة، وبذور وأسمدة عالية الجودة لدعم
              نمو القطاع الزراعي في ليبيا.
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              نحن نعمل من أجل المزارعين — ليس فقط بتوفير الأدوات، بل بالدعم،
              التدريب، وخدمات ما بعد البيع التي تضمن النجاح لأجيال قادمة.
            </p>

            {/* Visual Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 mt-8 border-t border-primary-foreground/20">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-2">
                    <stat.icon className="w-7 h-7 text-accent" />
                  </div>
                  <span className="text-3xl font-black text-primary-foreground">
                    {stat.value}
                  </span>
                  <span className="text-primary-foreground/70 text-sm">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="group glass-dark p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/40 flex items-center justify-center mb-4 group-hover:bg-accent/30 group-hover:shadow-glow-accent transition-all duration-500">
                <reason.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
