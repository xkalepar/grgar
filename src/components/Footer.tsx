import { Facebook, MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import heroFarmer from "@/assets/hero-farmer.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroFarmer}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-foreground/95" />
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        onClick={scrollToTop}
        className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg hover:bg-secondary transition-colors z-10"
        aria-label="العودة للأعلى"
      >
        <ArrowUp className="w-5 h-5 text-primary-foreground" />
      </motion.button>

      <div className="relative section-container py-16 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">
                  غ
                </span>
              </div>
              <div>
                <span className="font-bold text-xl block">
                  غرغار للاستثمار الزراعي
                </span>
                <span className="text-background/60 text-sm">
                  GHARGROW AGRO-INDUSTRIES
                </span>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed max-w-md mb-8">
              الموزّع الرائد لجرارات CLAAS، وأنظمة الري المحوري Western، والحلول
              الزراعية المتكاملة في ليبيا. نعمل على دعم مستقبل الزراعة وتمكين
              المزارعين من تحقيق أفضل إنتاجية.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-background/60 text-sm">تابعنا:</span>
              <a
                href="https://www.facebook.com/profile.php?id=61550705035262"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="فيسبوك"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-accent rounded-full" />
              روابط سريعة
            </h4>
            <nav className="space-y-3">
              {[
                { href: "#hero", label: "الرئيسية" },
                { href: "#about", label: "من نحن" },
                { href: "#services", label: "خدماتنا" },
                { href: "#gallery", label: "معرض الصور" },
                { href: "#contact", label: "تواصل معنا" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-background/70 hover:text-accent hover:translate-x-2 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-accent rounded-full" />
              تواصل معنا
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-background/70">
                <div className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <span>بنغازي – سبها – الجالو</span>
              </div>
              <a
                href="tel:0926060194"
                className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <span dir="ltr">0926060194</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-background/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} غرغار للاستثمار الزراعي. جميع الحقوق محفوظة.
            </p>
            <p className="text-background/40 text-sm">
              التصميم والتنفيذ بواسطة{" "}
              <a
                href="https://mnfd.ly"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                منفذ – mnfd.ly
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
