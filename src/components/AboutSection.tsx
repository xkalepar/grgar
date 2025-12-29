import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Award, Users, Wrench, TrendingUp, Shield } from "lucide-react";
import galleryIrrigation from "@/assets/gallery-irrigation.jpg";
import trainingClassroom from "@/assets/training-classroom.jpg";
import supportTeam from "@/assets/support-team.jpg";

const features = [
  { icon: Award, text: "الموزع الرسمي لـ CLAAS" },
  { icon: Users, text: "خدمة آلاف المزارعين" },
  { icon: Wrench, text: "دعم فني متواصل" },
  { icon: CheckCircle2, text: "منتجات عالية الجودة" },
  { icon: TrendingUp, text: "تحسين الإنتاجية" },
  { icon: Shield, text: "ضمان شامل" },
];

const AboutSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={galleryIrrigation}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-muted/95 via-muted/98 to-muted" />
        <div className="absolute inset-0 leaf-pattern" />
      </div>

      <div ref={containerRef} className="relative section-container section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm mb-4 bg-secondary/10 px-4 py-2 rounded-full">
            تعرف علينا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            من نحن
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Collage Side */}
          <motion.div
            style={{ y: imageY }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={galleryIrrigation}
                alt="أنظمة الري المحوري في ليبيا"
                className="w-full h-[350px] lg:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
            </motion.div>

            {/* Secondary Image - Training */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-8 -right-4 lg:-right-8 w-48 lg:w-56 rounded-2xl overflow-hidden shadow-large border-4 border-card"
            >
              <img
                src={trainingClassroom}
                alt="تدريب المزارعين"
                className="w-full h-36 lg:h-40 object-cover"
              />
            </motion.div>

            {/* Third Image - Support Team */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute -top-6 -left-4 lg:-left-8 w-40 lg:w-48 rounded-2xl overflow-hidden shadow-large border-4 border-card"
            >
              <img
                src={supportTeam}
                alt="فريق الدعم الفني"
                className="w-full h-28 lg:h-32 object-cover"
              />
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute top-1/2 -translate-y-1/2 -left-4 lg:left-4 bg-card rounded-2xl shadow-xl p-5 border border-border"
            >
              <div className="text-center">
                <span className="text-4xl lg:text-5xl font-black text-primary">+١٠٠٠</span>
                <p className="text-muted-foreground mt-1 text-sm">مزارع نفخر بخدمتهم</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="order-1 lg:order-2"
          >
            {/* Heading */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              عن <span className="text-primary">غرغار للاستثمار الزراعي</span>
            </h3>

            {/* Description */}
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed mb-10">
              <p>
                في شركة غرغار للاستثمار الزراعي، نعمل على دعم مستقبل الزراعة في
                ليبيا. نحن الموزّع الرائد لجرارات CLAAS، وأنظمة الري المحوري
                Western، والحلول الزراعية المتقدمة التي تمكّن المزارعين من تحقيق
                أفضل إنتاجية.
              </p>
              <p>
                لا يقتصر دورنا على توفير المعدات فقط، بل نلتزم بتقديم التدريب،
                وخدمات ما بعد البيع، والدعم الفني والصيانة لضمان نجاح مستدام ونمو
                طويل الأمد لكل مزارع.
              </p>
            </div>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 w-24 bg-gradient-to-l from-primary to-accent rounded-full mb-8 origin-right"
            />

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="group flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:shadow-glow transition-all duration-500">
                    <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <span className="font-medium text-foreground text-sm">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;