import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, MessageCircle, Users, Sparkles } from "lucide-react";
import { useEvents } from "@/contexts/EventContext";
import ImageCarousel from "@/components/ImageCarousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TallerDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { talleres } = useEvents();
  const taller = talleres.find((t) => t.slug === slug);

  if (!taller) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Taller no encontrado</h1>
          <Link to="/" className="text-accent hover:underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  const Icon = taller.icon;
  const hasGallery = taller.gallery && taller.gallery.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-20">
        <div className="relative bg-gradient-to-br from-accent/80 to-background overflow-hidden rounded-b-3xl mx-4 sm:mx-6">
          {taller.coverImage && (
            <img src={taller.coverImage} alt={taller.title} className="absolute inset-0 w-full h-full object-cover opacity-30" />
          )}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-golden blur-3xl" />
            <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-sage blur-3xl" />
          </div>
          <div className="relative container mx-auto px-6 py-16 sm:py-24">
            <Link to="/#talleres" className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Volver a talleres
            </Link>
            <span className="inline-flex items-center gap-2 bg-foreground/10 backdrop-blur-sm text-foreground/90 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3 h-3" /> Taller
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-3">{taller.title}</h1>
            <p className="text-foreground/70 text-lg">{taller.subtitle}</p>
          </div>
        </div>
      </section>

      {hasGallery && (
        <section className="container mx-auto px-6 -mt-6 relative z-10">
          <ImageCarousel images={taller.gallery!} />
        </section>
      )}

      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-cream rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                {Icon && (
                  <div className={`w-10 h-10 rounded-xl ${taller.iconBg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${taller.iconColor}`} />
                  </div>
                )}
                <h2 className="font-serif text-2xl font-bold text-warm-brown">Sobre el taller</h2>
              </div>
              <p className="text-warm-brown/70 leading-relaxed text-base mb-6">{taller.description}</p>
              <div className="flex flex-wrap gap-2">
                {taller.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium bg-sage/50 text-warm-brown/70 px-3 py-1.5 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Facilitadores</h2>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-warm-brown/60" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{taller.facilitators}</p>
                  <p className="text-foreground/50 text-sm">Facilitador(a)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-sage-light rounded-2xl p-6 space-y-5">
              <h3 className="font-serif text-xl font-bold text-warm-brown">Logística</h3>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center shrink-0"><Calendar className="w-4 h-4 text-accent" /></div>
                <div><p className="text-xs text-warm-brown/50">Fecha</p><p className="font-semibold text-warm-brown">{taller.date}</p></div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-golden/20 flex items-center justify-center shrink-0"><Clock className="w-4 h-4 text-golden" /></div>
                <div><p className="text-xs text-warm-brown/50">Hora</p><p className="font-semibold text-warm-brown">{taller.time}</p></div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-coral/20 flex items-center justify-center shrink-0"><MapPin className="w-4 h-4 text-coral" /></div>
                <div><p className="text-xs text-warm-brown/50">Lugar</p><p className="font-semibold text-warm-brown">{taller.venue}</p><p className="text-xs text-warm-brown/50">{taller.venueAddress}</p></div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-peach/30 flex items-center justify-center shrink-0"><Users className="w-4 h-4 text-coral" /></div>
                <div><p className="text-xs text-warm-brown/50">Público</p><p className="font-semibold text-warm-brown">{taller.audience}</p></div>
              </div>
              <div className="bg-accent/10 rounded-xl px-4 py-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" /><span className="text-sm font-medium text-accent">{taller.cost}</span>
              </div>
            </div>
            <a href="https://wa.me/524447027037" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-terracotta text-foreground px-6 py-4 rounded-2xl font-semibold hover:opacity-90 transition-opacity">
              <MessageCircle className="w-5 h-5" />
              <div className="text-left">
                <span className="text-xs uppercase tracking-wider opacity-70 block">Inscríbete ahora</span>
                <span>Registro por WhatsApp</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TallerDetail;
