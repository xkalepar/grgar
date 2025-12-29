import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

import galleryTractor from "@/assets/gallery-tractor.jpg";
import galleryIrrigation from "@/assets/gallery-irrigation.jpg";
import galleryTraining from "@/assets/gallery-training.jpg";
import galleryField from "@/assets/gallery-field.jpg";
import galleryMaintenance from "@/assets/gallery-maintenance.jpg";
import gallerySeeds from "@/assets/gallery-seeds.jpg";
import handsSoil from "@/assets/hands-soil.jpg";
import warehouse from "@/assets/warehouse.jpg";
import tractorAction from "@/assets/tractor-action.jpg";
import aerialIrrigation from "@/assets/aerial-irrigation.jpg";

const galleryItems = [
  {
    src: warehouse,
    alt: "مستودع المعدات الزراعية",
    category: "المعدات",
    size: "large",
  },
  {
    src: galleryTractor,
    alt: "جرارات CLAAS",
    category: "المعدات",
    size: "small",
  },
  { src: handsSoil, alt: "زراعة مستدامة", category: "الزراعة", size: "small" },
  {
    src: galleryIrrigation,
    alt: "أنظمة الري المحوري",
    category: "الري",
    size: "large",
  },
  {
    src: galleryTraining,
    alt: "التدريب الفني",
    category: "التدريب",
    size: "small",
  },
  {
    src: tractorAction,
    alt: "جرار في العمل",
    category: "العمليات",
    size: "small",
  },
  {
    src: aerialIrrigation,
    alt: "منظر جوي للري",
    category: "الري",
    size: "large",
  },
  {
    src: galleryField,
    alt: "عمليات الحصاد",
    category: "العمليات",
    size: "small",
  },
  {
    src: galleryMaintenance,
    alt: "الصيانة والدعم الفني",
    category: "الصيانة",
    size: "small",
  },
  {
    src: gallerySeeds,
    alt: "البذور والأسمدة",
    category: "المنتجات",
    size: "small",
  },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section
      id="gallery"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 leaf-pattern opacity-50" />
      <div className="absolute inset-0 line-pattern" />

      <div className="section-container relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            معرض الصور
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نظرة على أعمالنا ومعداتنا وخدماتنا في الميدان
          </p>
        </motion.div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.1 + index * 0.08, duration: 0.7 }}
              className="group relative break-inside-avoid cursor-pointer"
              onClick={() => setSelectedImage({ src: item.src, alt: item.alt })}
            >
              <div
                className={`relative rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-700 ${
                  item.size === "large" ? "aspect-[4/3]" : "aspect-square"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 right-0 left-0 p-6 text-primary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block text-sm font-medium bg-accent/40 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold">{item.alt}</h3>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary-foreground/0 group-hover:border-primary-foreground/40 transition-colors duration-500 rounded-tl-lg" />
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
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 left-6 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            aria-label="إغلاق"
          >
            <X size={24} />
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-5xl w-full"
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[85vh] rounded-2xl shadow-xl object-contain"
            />
            <div className="absolute bottom-0 right-0 left-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent rounded-b-2xl">
              <h3 className="text-xl font-bold text-primary-foreground">
                {selectedImage.alt}
              </h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
