import { Link } from "react-router-dom";
import { talleres } from "@/data/events";

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
              <div key={taller.slug} className="workshop-card p-6 flex items-start gap-5">
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
                      {taller.date} · {taller.time}
                    </span>
                    <Link
                      to={`/taller/${taller.slug}`}
                      className="text-sm font-semibold text-accent hover:underline"
                    >
                      Ver detalle →
                    </Link>
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
