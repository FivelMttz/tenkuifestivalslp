import { MapPin } from "lucide-react";

const sedes = [
  { name: "Semillas Suzuki", address: "Alfredo M. Terrazas #305, Col. Tequisquiapan" },
  { name: "Ku'estudio", address: "Av. Constitución #1105-B, Barrio de San Sebastián" },
  { name: "Arte Índigo", address: "Martínez de Castro #106, Col. Centro" },
  { name: "Casa de los títeres MONINI", address: "Morelos #1065, Zona Centro" },
  { name: "Letrasconmás", address: "Prol. Santos Degollado #1220 esq. Ejército Nacional" },
  { name: "I.P.B.A (CDC Raúl Gamboa)", address: "Av. Universidad esq. C. Negrete, Centro" },
  { name: "MUNI (Museo Universitario)", address: "Av. Sierra Leona 550, Lomas 2da sección" },
];

const VenuesSection = () => {
  return (
    <section id="sedes" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground uppercase tracking-wide mb-10">
          Sedes Participantes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sedes.map((sede) => (
            <div
              key={sede.name}
              className="bg-muted/30 border border-foreground/10 rounded-2xl p-5 flex items-start gap-3 hover:bg-muted/50 transition-colors"
            >
              <MapPin className="w-5 h-5 text-coral mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground text-sm">{sede.name}</h3>
                <p className="text-xs text-muted-foreground">{sede.address}</p>
              </div>
            </div>
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
