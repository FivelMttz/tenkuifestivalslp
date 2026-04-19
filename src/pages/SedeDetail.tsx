import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, CheckCircle, Calendar, ExternalLink } from "lucide-react";
import { useEvents } from "@/contexts/EventContext";
import ImageCarousel from "@/components/ImageCarousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SedeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { sedes } = useEvents();
  const sede = sedes.find((s) => s.slug === slug);

  if (!sede) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Sede no encontrada</h1>
          <Link to="/#sedes" className="text-accent hover:underline">Volver a sedes</Link>
        </div>
      </div>
    );
  }

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${sede.mapQuery}`;
  const hasGallery = sede.gallery && sede.gallery.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-20">
        <div className="relative overflow-hidden rounded-b-3xl mx-4 sm:mx-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="bg-cream p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <Link to="/#sedes" className="inline-flex items-center gap-2 text-warm-brown/60 hover:text-warm-brown text-sm mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Volver a sedes
              </Link>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-brown mb-4 leading-tight">{sede.name}</h1>
              <p className="text-warm-brown/60 leading-relaxed mb-6">{sede.description}</p>
              <div className="flex flex-wrap gap-2">
                {sede.tags.map((tag) => (
                  <span key={tag} className="text-xs font-semibold bg-golden/20 text-warm-brown/80 px-4 py-1.5 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <div className="hidden lg:block bg-gradient-to-br from-terracotta-dark to-warm-brown relative min-h-[320px]">
              {sede.coverImage ? (
                <img src={sede.coverImage} alt={sede.name} className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-golden blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-coral blur-3xl" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="w-20 h-20 text-foreground/20" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {hasGallery && (
        <section className="container mx-auto px-6 mt-8">
          <ImageCarousel images={sede.gallery!} />
        </section>
      )}

      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-cream rounded-2xl p-8 space-y-6">
            <h2 className="font-serif text-2xl font-bold text-warm-brown">Detalles del Lugar</h2>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-coral/20 flex items-center justify-center shrink-0"><MapPin className="w-4 h-4 text-coral" /></div>
              <div><p className="text-xs text-warm-brown/50">Ubicación</p><p className="font-semibold text-warm-brown text-sm">{sede.address}</p></div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3"><CheckCircle className="w-4 h-4 text-accent" /><span className="text-sm font-semibold text-warm-brown">Características</span></div>
              <ul className="space-y-2 ml-6">
                {sede.features.map((f) => (
                  <li key={f} className="text-sm text-warm-brown/70 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-sage-light rounded-2xl p-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto"><MapPin className="w-6 h-6 text-accent" /></div>
              <h3 className="font-serif text-xl font-bold text-warm-brown">Encuéntranos</h3>
              <p className="text-sm text-warm-brown/60">{sede.address}, San Luis Potosí</p>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-coral text-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                <ExternalLink className="w-4 h-4" /> Abrir en Google Maps
              </a>
            </div>
            <div className="bg-cream rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4"><Calendar className="w-5 h-5 text-golden" /><h3 className="font-serif text-lg font-bold text-warm-brown">Eventos en esta sede</h3></div>
              <ul className="space-y-3">
                {sede.eventsHere.map((ev) => (
                  <li key={ev} className="text-sm text-warm-brown/70 bg-sage/30 px-4 py-2.5 rounded-xl">{ev}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SedeDetail;
