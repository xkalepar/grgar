import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, FileText, Building2, Users } from "lucide-react";
import supportTeam from "@/assets/support-team.jpg";
import warehouse from "@/assets/warehouse.jpg";

const branches = [
  { city: "بنغازي", country: "ليبيا", phone: "0926060194" },
  { city: "سبها", country: "ليبيا", phone: "0926060197" },
  { city: "الجالو", country: "ليبيا", phone: "0926060195" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={warehouse}
          alt=""
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted" />
      </div>

      <div ref={ref} className="relative section-container section-padding">
        <motion.div
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Team Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-large"
            >
              <img
                src={supportTeam}
                alt="فريق الدعم الفني"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 left-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-primary-foreground">
                  <span className="font-bold block">فريق الدعم الفني</span>
                  <span className="text-sm text-primary-foreground/80">جاهزون لخدمتكم</span>
                </div>
              </div>
            </motion.div>

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
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="group p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-500"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-glow transition-all duration-500">
                          <Building2 className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground text-lg">
                            {branch.city}
                          </h4>
                          <p className="text-muted-foreground">{branch.country}</p>
                        </div>
                      </div>
                      <a
                        href={`tel:${branch.phone}`}
                        className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-lg"
                      >
                        <Phone className="w-5 h-5" />
                        <span dir="ltr">{branch.phone}</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="p-5 rounded-xl bg-primary/5 border border-primary/20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h4 className="font-bold text-foreground">المقرّات</h4>
                </div>
                <p className="text-muted-foreground text-sm">بنغازي – سبها – الجالو</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="p-5 rounded-xl bg-card border border-border"
              >
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <h4 className="font-bold text-foreground">السجل التجاري</h4>
                </div>
                <p className="text-muted-foreground text-sm font-mono" dir="ltr">
                  23-07-0130
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-full min-h-[500px] lg:min-h-[600px]"
          >
            <div className="relative h-full rounded-3xl overflow-hidden border-4 border-primary/20 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.0!2d20.0661!3d32.1165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA2JzU5LjQiTiAyMMKwMDMnNTcuOSJF!5e0!3m2!1sen!2sly!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع غرغار للاستثمار الزراعي"
              />
              
              {/* Map Overlay Card */}
              <div className="absolute bottom-6 right-6 left-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-large border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="font-bold text-foreground block">غرغار للاستثمار الزراعي</span>
                    <span className="text-muted-foreground text-sm">الموزع الرائد للحلول الزراعية</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;