import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Shield, Users, Award, Truck, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "معدات عالمية المستوى",
    description: "نوفر أفضل الجرارات والمعدات من العلامات التجارية الرائدة عالمياً",
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

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding bg-primary relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 leaf-pattern opacity-10" />
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm mb-4 bg-accent/20 px-4 py-2 rounded-full">
            مميزاتنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            لماذا نحن؟
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              نحن نؤمن بأن الزراعة هي أساس التقدم. لذلك نلتزم بتوفير معدات عالمية
              المستوى، أنظمة ري متطورة، وبذور وأسمدة عالية الجودة لدعم نمو القطاع
              الزراعي في ليبيا.
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              نحن نعمل من أجل المزارعين — ليس فقط بتوفير الأدوات، بل بالدعم،
              التدريب، وخدمات ما بعد البيع التي تضمن النجاح لأجيال قادمة.
            </p>
          </div>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
              className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-primary-foreground/20 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors duration-300">
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