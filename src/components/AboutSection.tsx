import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Block */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] -rotate-3" />

            <img
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2671&auto=format&fit=crop"
              alt="Farmer in Libya"
              className="relative rounded-2xl shadow-xl w-full object-cover h-[500px]"
            />

            <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl shadow-lg border border-border max-w-xs">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg">جودة مضمونة</p>
                  <p className="text-sm text-muted-foreground">
                    منتجات أصلية 100%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div className="mb-12 relative z-10">
              <span className="text-primary font-bold tracking-wide uppercase text-sm mb-2 block">
                قصتنا
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                من نحن
              </h2>

              <div className="h-1.5 w-24 bg-primary mt-4 rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-foreground font-medium text-xl">
                في شركة غرغار للاستثمار الزراعي، نعمل على دعم مستقبل الزراعة في
                ليبيا.
              </p>

              <p>
                نحن الموزّع الرائد لجرارات CLAAS، وأنظمة الري المحوري Western،
                والحلول الزراعية المتقدمة التي تمكّن المزارعين من تحقيق أعلى
                مستويات الإنتاجية.
              </p>

              <p>
                يمتد التزامنا إلى ما هو أبعد من بيع المعدات، حيث نوفر التدريب،
                وخدمات ما بعد البيع، والدعم الفني والصيانة لضمان نجاح مستدام
                ونمو طويل الأمد.
              </p>

              <div className="pt-6 grid grid-cols-2 gap-6">
                <div className="border-r-4 border-primary/20 pr-4">
                  <p className="text-3xl font-bold text-primary">+15</p>
                  <p className="text-sm text-muted-foreground">
                    سنوات من الخبرة
                  </p>
                </div>

                <div className="border-r-4 border-primary/20 pr-4">
                  <p className="text-3xl font-bold text-primary">+2000</p>
                  <p className="text-sm text-muted-foreground">عميل سعيد</p>
                </div>

                <div className="border-r-4 border-primary/20 pr-4">
                  <p className="text-3xl font-bold text-primary">3</p>
                  <p className="text-sm text-muted-foreground">فرع في ليبيا</p>
                </div>

                <div className="border-r-4 border-primary/20 pr-4">
                  <p className="text-3xl font-bold text-primary">+5</p>
                  <p className="text-sm text-muted-foreground">شريك عالمي</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
