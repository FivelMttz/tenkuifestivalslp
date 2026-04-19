import HeroCarousel from "@/components/HeroCarousel";
import { useEvents } from "@/contexts/EventContext";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const defaultHeroImages = [hero1, hero2, hero3];

const HeroSection = () => {
  const { heroImages } = useEvents();
  const displayImages = heroImages.length > 0 ? heroImages : defaultHeroImages;

  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-coral/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-golden/10 blur-3xl" />
      <div className="absolute top-40 left-1/4 w-32 h-32 rounded-full bg-peach/15 blur-2xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            29 abril — 03 mayo · San Luis Potosí
          </p>
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-serif font-black leading-[0.95] sm:leading-[0.9] mb-2">
            Tu pase a
          </h1>
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-serif font-black italic leading-[0.95] sm:leading-[0.9] mb-6 sm:mb-8 text-gradient">
            la magia
          </h1>
          <p className="text-base sm:text-xl text-foreground/70 max-w-xl leading-relaxed mb-8 sm:mb-10">
            Movimiento de arte para las infancias. Obras de teatro y talleres artísticos diseñados para despertar la curiosidad.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href="https://wa.me/524447027037"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-coral text-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-transform"
            >
              Reservar vía WhatsApp →
            </a>
            <a
              href="#obras"
              className="inline-flex items-center gap-2 border-2 border-foreground/30 text-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-foreground/5 transition-colors"
            >
              Ver cartelera
            </a>
          </div>

          <div className="mt-10 sm:mt-12 flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-golden shrink-0" />
              Preventa 1 desde 13 abril · $120 / $80
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-coral shrink-0" />
              Preventa 2 desde 24 abril · $140 / $100
            </div>
          </div>
        </div>

        {/* Hero Carousel */}
        <div className="mt-10 sm:mt-12 max-w-5xl mx-auto">
          <HeroCarousel images={displayImages} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
