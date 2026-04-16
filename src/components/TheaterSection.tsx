import { Link } from "react-router-dom";
import { obras } from "@/data/events";

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
              <div key={obra.slug} className="ticket-card p-6 flex flex-col items-center text-center">
                <span className="text-xs uppercase tracking-[0.15em] font-semibold text-coral mb-1">
                  Admit One
                </span>
                <h3 className="font-serif text-xl font-bold text-warm-brown mb-3 leading-tight">
                  {obra.title}
                </h3>
                <p className="text-xs text-warm-brown/60 mb-4 leading-relaxed">
                  {obra.synopsis.slice(0, 100)}…
                </p>

                <div className="mt-auto flex flex-col items-center gap-2">
                  <Icon className="w-5 h-5 text-warm-brown/50" />
                  <span className="text-xs font-medium text-warm-brown/70">{obra.venue}</span>
                  <span className="text-[10px] text-warm-brown/50">{obra.date} · {obra.time}</span>
                  <span className="text-[10px] bg-sage/50 text-warm-brown/60 px-2 py-0.5 rounded-full">
                    {obra.audience}
                  </span>
                  <Link
                    to={`/obra/${obra.slug}`}
                    className="mt-2 bg-terracotta text-foreground px-5 py-2 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    Ver detalle
                  </Link>
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
