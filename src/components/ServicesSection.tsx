import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import galleryTractor from "@/assets/gallery-tractor.jpg";
import galleryIrrigation from "@/assets/gallery-irrigation.jpg";
import gallerySeeds from "@/assets/gallery-seeds.jpg";
import trainingClassroom from "@/assets/training-classroom.jpg";
import galleryMaintenance from "@/assets/gallery-maintenance.jpg";

const services = [
  {
    image: galleryTractor,
    title: "توريد المعدات الزراعية",
    description: "توفير أحدث جرارات CLAAS والمعدات الزراعية عالية الجودة",
  },
  {
    image: galleryIrrigation,
    title: "أنظمة الري المحوري",
    description: "حلول ري متقدمة من Western لرفع كفاءة الإنتاج الزراعي",
  },
  {
    image: gallerySeeds,
    title: "البذور والأسمدة",
    description: "منتجات مختارة تضمن نمو صحي وإنتاج مستدام",
  },
  {
    image: trainingClassroom,
    title: "التدريب والدعم الفني",
    description: "تدريب متخصص وخدمات ما بعد البيع لضمان أفضل أداء",
  },
  {
    image: galleryMaintenance,
    title: "الصيانة وخدمة ما بعد البيع",
    description: "دعم فني مستمر وصيانة معتمدة",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative overflow-hidden">
      {/* Alternating Background */}
      <div className="absolute inset-0 bg-muted/50" />
      <div className="absolute inset-0 leaf-pattern" />

      <div ref={ref} className="relative section-container section-padding">
        <motion.div
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

        {/* Services Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.12, duration: 0.7 }}
              className={`group relative rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-xl transition-all duration-700 hover:-translate-y-2 ${
                index === services.length - 1 && services.length % 3 !== 0
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Service Number */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">
                    {(index + 1).toLocaleString('ar-EG')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-2">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Arrow Link */}
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <span className="text-sm font-semibold">تعرف أكثر</span>
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-3xl transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            variant="default"
            size="lg"
            onClick={() => {
              const element = document.querySelector("#contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group"
          >
            تواصل معنا للاستفسار
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;