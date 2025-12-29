import partner1 from "@/assets/1.avif";
import partner2 from "@/assets/2.avif";
import partner3 from "@/assets/3.avif";

const PartnersSection = () => {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            شركاؤنا
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-primary rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            نعمل مع نخبة من الشركاء العالميين لتقديم أفضل الحلول الزراعية
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[partner1, partner2, partner3].map((logo, index) => (
            <div
              key={index}
              className="group flex items-center justify-center rounded-2xl border border-border bg-background p-10 transition-colors duration-300"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-h-20 w-auto opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
