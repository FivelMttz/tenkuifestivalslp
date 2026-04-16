import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useEvents } from "@/contexts/EventContext";

const VenuesSection = () => {
  const { sedes } = useEvents();

  return (
    <section id="sedes" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground uppercase tracking-wide mb-10">
          Sedes Participantes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sedes.map((sede) => (
            <Link
              key={sede.slug}
              to={`/sede/${sede.slug}`}
              className="bg-muted/30 border border-foreground/10 rounded-2xl p-5 flex items-start gap-3 hover:bg-muted/50 transition-colors group"
            >
              <MapPin className="w-5 h-5 text-coral mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground text-sm group-hover:text-golden transition-colors">{sede.name}</h3>
                <p className="text-xs text-muted-foreground">{sede.address}</p>
                <span className="text-[10px] font-semibold text-accent mt-1 inline-block">Ver detalle →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Galería Escolar */}
        <div className="mt-12 bg-muted/20 border border-foreground/10 rounded-3xl p-8">
          <h3 className="font-serif text-xl font-bold text-foreground mb-2">
            📖 Galería: La Fanzinoteka Escolar
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            El fanzine como herramienta de comunicación y arte comunitario. Entrada libre sin registro previo.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-foreground/80">
            <span className="bg-golden/20 px-3 py-1 rounded-full text-xs font-medium">1 mayo · 11:30 a.m. — Semillas Suzuki</span>
            <span className="bg-golden/20 px-3 py-1 rounded-full text-xs font-medium">2 mayo · 9:30 a.m. — MUNI</span>
            <span className="bg-golden/20 px-3 py-1 rounded-full text-xs font-medium">3 mayo · 3:30 p.m. — Arte Índigo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenuesSection;
