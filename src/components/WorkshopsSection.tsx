import { BookOpen, Heart, Paintbrush, Drum } from "lucide-react";

const talleres = [
  {
    title: "Cuentacuentos",
    subtitle: "Historias vivas para toda la familia.",
    date: "1 MAYO · 12:00 P.M.",
    venue: "Semillas Suzuki",
    audience: "6 a 12 años",
    cost: "Cooperación",
    icon: BookOpen,
    iconBg: "bg-golden/20",
    iconColor: "text-golden",
  },
  {
    title: "Entre libros y arrullos",
    subtitle: "Espacio sensorial para primera infancia.",
    date: "2 MAYO · 1:00 P.M.",
    venue: "Letrasconmás",
    audience: "2 a 5 años",
    cost: "Cooperación (infancia + acompañante)",
    icon: Heart,
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
  },
  {
    title: "Transferencias Gráficas",
    subtitle: "Técnicas de impresión creativa.",
    date: "2 MAYO · 4:00 P.M.",
    venue: "Arte Índigo",
    audience: "8 a 13 años",
    cost: "Cooperación",
    icon: Paintbrush,
    iconBg: "bg-coral/20",
    iconColor: "text-coral",
  },
  {
    title: "Fiesta de tambores",
    subtitle: "Percusión y ritmo comunitario.",
    date: "3 MAYO · 10:30 A.M.",
    venue: "Ku'estudio",
    audience: "Desde 2 años",
    cost: "Entrada Libre (registro previo)",
    icon: Drum,
    iconBg: "bg-peach/30",
    iconColor: "text-coral",
  },
];

const WorkshopsSection = () => {
  return (
    <section id="talleres" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-accent text-2xl">◎</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground uppercase tracking-wide">
            Talleres
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {talleres.map((taller) => {
            const Icon = taller.icon;
            return (
              <div key={taller.title} className="workshop-card p-6 flex items-start gap-5">
                <div className={`w-14 h-14 rounded-2xl ${taller.iconBg} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-6 h-6 ${taller.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg font-bold text-warm-brown">
                    {taller.title}
                  </h3>
                  <p className="text-sm text-warm-brown/60 mb-3">{taller.subtitle}</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider bg-warm-brown/10 text-warm-brown/70 px-3 py-1 rounded-full">
                      {taller.date}
                    </span>
                    <a
                      href="https://wa.me/524447027037"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-accent hover:underline"
                    >
                      Inscribirme →
                    </a>
                  </div>
                  <p className="text-[10px] text-warm-brown/40 mt-2">{taller.venue} · {taller.audience}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
