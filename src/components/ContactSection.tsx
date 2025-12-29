import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, FileText } from "lucide-react";

const branches = [
  { city: "بنغازي", country: "ليبيا", phone: "0926060194" },
  { city: "سبها", country: "ليبيا", phone: "0926060197" },
  { city: "الجالو", country: "ليبيا", phone: "0926060195" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm mb-4 bg-secondary/10 px-4 py-2 rounded-full">
            نحن هنا لمساعدتك
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            تواصل معنا
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            فريقنا جاهز للإجابة على استفساراتكم وتقديم أفضل الحلول الزراعية
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Branches */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                فروعنا
              </h3>
              <div className="grid gap-4">
                {branches.map((branch, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-foreground text-lg">
                          {branch.city}
                        </h4>
                        <p className="text-muted-foreground">{branch.country}</p>
                      </div>
                      <a
                        href={`tel:${branch.phone}`}
                        className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold"
                      >
                        <Phone className="w-5 h-5" />
                        <span dir="ltr">{branch.phone}</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Locations Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="p-6 rounded-xl bg-primary/5 border border-primary/20"
            >
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                المقرّات
              </h4>
              <p className="text-muted-foreground">بنغازي – سبها – الجالو</p>
            </motion.div>

            {/* Commercial Registration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                السجل التجاري
              </h4>
              <p className="text-muted-foreground font-mono" dir="ltr">
                23-07-0130 غرغار الزراعية
              </p>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-full min-h-[400px]"
          >
            <div className="relative h-full rounded-2xl overflow-hidden border-4 border-primary/20 shadow-large">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.0!2d20.0661!3d32.1165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA2JzU5LjQiTiAyMMKwMDMnNTcuOSJF!5e0!3m2!1sen!2sly!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع غرغار للاستثمار الزراعي"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;