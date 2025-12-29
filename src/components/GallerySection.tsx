import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

import galleryTractor from "@/assets/gallery-tractor.jpg";
import galleryIrrigation from "@/assets/gallery-irrigation.jpg";
import galleryTraining from "@/assets/gallery-training.jpg";
import galleryField from "@/assets/gallery-field.jpg";
import galleryMaintenance from "@/assets/gallery-maintenance.jpg";
import gallerySeeds from "@/assets/gallery-seeds.jpg";

const galleryItems = [
  { src: galleryTractor, alt: "جرارات CLAAS", category: "المعدات" },
  { src: galleryIrrigation, alt: "أنظمة الري المحوري", category: "الري" },
  { src: galleryTraining, alt: "التدريب الفني", category: "التدريب" },
  { src: galleryField, alt: "عمليات الحصاد", category: "العمليات" },
  { src: galleryMaintenance, alt: "الصيانة والدعم الفني", category: "الصيانة" },
  { src: gallerySeeds, alt: "البذور والأسمدة", category: "المنتجات" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-muted/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm mb-4 bg-secondary/10 px-4 py-2 rounded-full">
            أعمالنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            معرض الصور
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نظرة على أعمالنا ومعداتنا وخدماتنا في الميدان
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-soft hover:shadow-large transition-all duration-500"
              onClick={() => setSelectedImage(item.src)}
            >
              <div className="aspect-square">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 right-0 left-0 p-6 text-primary-foreground">
                  <span className="text-sm font-medium bg-accent/30 px-3 py-1 rounded-full mb-2 inline-block">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold">{item.alt}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 left-6 text-primary-foreground hover:text-accent transition-colors"
            aria-label="إغلاق"
          >
            <X size={32} />
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="صورة مكبرة"
            className="max-w-full max-h-[85vh] rounded-2xl shadow-large object-contain"
          />
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;