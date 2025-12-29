import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Award, Users, Wrench } from "lucide-react";
import galleryIrrigation from "@/assets/gallery-irrigation.jpg";

const features = [
  { icon: Award, text: "الموزع الرسمي لـ CLAAS" },
  { icon: Users, text: "خدمة آلاف المزارعين" },
  { icon: Wrench, text: "دعم فني متواصل" },
  { icon: CheckCircle2, text: "منتجات عالية الجودة" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-muted/30 leaf-pattern">
      <div className="section-container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img
                src={galleryIrrigation}
                alt="أنظمة الري المحوري في ليبيا"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-large p-6 border border-border"
            >
              <div className="text-center">
                <span className="text-4xl font-black text-primary">+١٠٠٠</span>
                <p className="text-muted-foreground mt-1">مزارع نفخر بخدمتهم</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            {/* Section Label */}
            <span className="inline-block text-secondary font-semibold text-sm mb-4 bg-secondary/10 px-4 py-2 rounded-full">
              من نحن
            </span>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              عن <span className="text-primary">غرغار للاستثمار الزراعي</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
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

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
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