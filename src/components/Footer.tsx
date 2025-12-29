import { Facebook, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">غ</span>
              </div>
              <span className="font-bold text-xl">غرغار للاستثمار الزراعي</span>
            </div>
            <p className="text-background/70 leading-relaxed max-w-md mb-6">
              الموزّع الرائد لجرارات CLAAS، وأنظمة الري المحوري Western، والحلول
              الزراعية المتكاملة في ليبيا. نعمل على دعم مستقبل الزراعة وتمكين
              المزارعين من تحقيق أفضل إنتاجية.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61550705035262"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="فيسبوك"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">روابط سريعة</h4>
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
                  className="block text-background/70 hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">تواصل معنا</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>بنغازي – سبها – الجالو</span>
              </div>
              <a
                href="tel:0926060194"
                className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span dir="ltr">0926060194</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
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
                className="text-accent hover:underline"
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