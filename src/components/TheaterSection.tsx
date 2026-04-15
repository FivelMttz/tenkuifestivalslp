import { Theater, Baby, Music, Drama } from "lucide-react";

const obras = [
  {
    title: "Pipí la noche",
    company: "Casa de los títeres MONINI",
    category: "Teatro de Títeres",
    audience: "Desde 2 años",
    date: "29 abril · 5:00 p.m.",
    venue: "Casa de los títeres MONINI",
    cost: "Cooperación (Preventa)",
    icon: Theater,
    synopsis: "Diego enfrenta el estigma de usar pañal por las noches mediante un viaje de aventuras imaginarias.",
  },
  {
    title: "DUANOP",
    company: "¡Caracoles! Danza Teatro",
    category: "Teatro para bebés",
    audience: "6 meses a 4 años",
    date: "30 abril · 4:30 y 5:30 p.m.",
    venue: "C.D.C. Raúl Gamboa del I.P.B.A",
    cost: "Entrada Libre",
    icon: Baby,
    synopsis: "Experiencia escénica donde la cochera, la sala o el jardín se transforman en mundos extraordinarios.",
  },
  {
    title: "La raíz del nido",
    company: "Garúa",
    category: "Teatro Inmersivo y Música",
    audience: "Primera infancia",
    date: "2 mayo · 10:00 a.m.",
    venue: "MUNI, Museo Universitario UASLP",
    cost: "Cooperación (Preventa)",
    icon: Music,
    synopsis: "Poesía y música en vivo para explorar los elementos vitales: agua, tierra, fuego y aire.",
  },
  {
    title: "Los males invisibles",
    company: "¡Caracoles! Danza Teatro",
    category: "Drama interactivo",
    audience: "Desde 4 años",
    date: "3 mayo · 4:00 p.m.",
    venue: "Arte Índigo",
    cost: "Cooperación (Preventa)",
    icon: Drama,
    synopsis: "Dos cuentacuentos nómadas exploran los males que quiebran los valores en la infancia.",
  },
];

const TheaterSection = () => {
  return (
    <section id="obras" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-golden text-2xl">✦</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground uppercase tracking-wide">
            Obras de Teatro
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {obras.map((obra) => {
            const Icon = obra.icon;
            return (
              <div key={obra.title} className="ticket-card p-6 flex flex-col items-center text-center">
                <span className="text-xs uppercase tracking-[0.15em] font-semibold text-coral mb-1">
                  Admit One
                </span>
                <h3 className="font-serif text-xl font-bold text-warm-brown mb-3 leading-tight">
                  {obra.title}
                </h3>
                <p className="text-xs text-warm-brown/60 mb-4 leading-relaxed">
                  {obra.synopsis}
                </p>

                <div className="mt-auto flex flex-col items-center gap-2">
                  <Icon className="w-5 h-5 text-warm-brown/50" />
                  <span className="text-xs font-medium text-warm-brown/70">{obra.venue}</span>
                  <span className="text-[10px] text-warm-brown/50">{obra.date}</span>
                  <span className="text-[10px] bg-sage/50 text-warm-brown/60 px-2 py-0.5 rounded-full">
                    {obra.audience}
                  </span>
                  <a
                    href="https://wa.me/524447027037"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 bg-terracotta text-foreground px-5 py-2 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    Reservar
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TheaterSection;
