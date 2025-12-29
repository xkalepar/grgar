import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Tractor, Droplets, Leaf, GraduationCap, Wrench, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Tractor,
    title: "توريد المعدات الزراعية",
    description: "توفير أحدث جرارات CLAAS والمعدات الزراعية عالية الجودة",
  },
  {
    icon: Droplets,
    title: "أنظمة الري المحوري",
    description: "حلول ري متقدمة من Western لرفع كفاءة الإنتاج الزراعي",
  },
  {
    icon: Leaf,
    title: "البذور والأسمدة",
    description: "منتجات مختارة تضمن نمو صحي وإنتاج مستدام",
  },
  {
    icon: GraduationCap,
    title: "التدريب والدعم الفني",
    description: "تدريب متخصص وخدمات ما بعد البيع لضمان أفضل أداء",
  },
  {
    icon: Wrench,
    title: "الصيانة وخدمة ما بعد البيع",
    description: "دعم فني مستمر وصيانة معتمدة",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-card leaf-pattern">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm mb-4 bg-secondary/10 px-4 py-2 rounded-full">
            ما نقدمه
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            خدماتنا
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات الزراعية لدعم المزارعين في رحلة نجاحهم
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
              className={`group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-large transition-all duration-500 ${
                index === services.length - 1 && services.length % 3 !== 0
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-glow transition-all duration-500">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">تعرف أكثر</span>
                <ArrowLeft className="w-4 h-4" />
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="default"
            size="lg"
            onClick={() => {
              const element = document.querySelector("#contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            تواصل معنا للاستفسار
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;