import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEvents } from "@/contexts/EventContext";
import {
  Settings, Theater, Palette, MapPin, Image, Calendar, Save, Trash2, Plus,
  ArrowLeft, X, FolderTree, Copy, Check
} from "lucide-react";
import { imageManifest } from "@/data/imagePaths";

type Tab = "config" | "obras" | "talleres" | "sedes" | "hero" | "calendario" | "rutas";

const AdminPanel = () => {
  const navigate = useNavigate();
  const {
    obras, talleres, sedes, config, heroImages,
    updateObra, updateTaller, updateSede, setConfig, setHeroImages,
  } = useEvents();
  const [tab, setTab] = useState<Tab>("config");

  useEffect(() => {
    if (sessionStorage.getItem("tenkui_admin") !== "1") {
      navigate("/admin");
    }
  }, [navigate]);

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "config", label: "Configuración", icon: <Settings className="w-4 h-4" /> },
    { id: "obras", label: "Obras", icon: <Theater className="w-4 h-4" /> },
    { id: "talleres", label: "Talleres", icon: <Palette className="w-4 h-4" /> },
    { id: "sedes", label: "Sedes", icon: <MapPin className="w-4 h-4" /> },
    { id: "hero", label: "Hero Carousel", icon: <Image className="w-4 h-4" /> },
    { id: "calendario", label: "Calendario", icon: <Calendar className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="bg-warm-brown text-cream px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/")} className="hover:opacity-70 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-serif font-bold text-lg">Admin · Tënkui 2026</span>
        </div>
        <button
          onClick={() => { sessionStorage.removeItem("tenkui_admin"); navigate("/admin"); }}
          className="text-sm text-cream/70 hover:text-cream"
        >
          Cerrar sesión
        </button>
      </div>

      <div className="flex min-h-[calc(100vh-52px)]">
        {/* Sidebar */}
        <aside className="w-56 bg-cream border-r border-warm-brown/10 p-4 space-y-1 shrink-0">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                tab === t.id ? "bg-terracotta text-foreground" : "text-warm-brown hover:bg-warm-brown/10"
              }`}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </aside>

        {/* Main */}
        <main className="flex-1 p-6 overflow-y-auto">
          {tab === "config" && <ConfigTab config={config} setConfig={setConfig} />}
          {tab === "obras" && <ObrasTab obras={obras} updateObra={updateObra} />}
          {tab === "talleres" && <TalleresTab talleres={talleres} updateTaller={updateTaller} />}
          {tab === "sedes" && <SedesTab sedes={sedes} updateSede={updateSede} />}
          {tab === "hero" && <HeroTab images={heroImages} setImages={setHeroImages} />}
          {tab === "calendario" && <CalendarioTab obras={obras} talleres={talleres} />}
        </main>
      </div>
    </div>
  );
};

/* ─── Config Tab ─── */
function ConfigTab({ config, setConfig }: any) {
  const [local, setLocal] = useState(config);
  const save = () => setConfig(local);

  return (
    <div className="max-w-2xl space-y-8">
      <h2 className="font-serif text-2xl font-bold text-foreground">Configuración Global</h2>

      <div className="bg-cream rounded-2xl p-6 space-y-4">
        <h3 className="font-semibold text-warm-brown">Canal de Reserva (WhatsApp)</h3>
        <input
          value={local.whatsappNumber}
          onChange={(e) => setLocal({ ...local, whatsappNumber: e.target.value })}
          className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-4 py-2.5 text-warm-brown text-sm"
          placeholder="524447027037"
        />
      </div>

      <div className="bg-cream rounded-2xl p-6 space-y-4">
        <h3 className="font-semibold text-warm-brown">Preventa 1</h3>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="text-xs text-warm-brown/60">Adulto ($)</label>
            <input type="number" value={local.preventa1.adulto}
              onChange={(e) => setLocal({ ...local, preventa1: { ...local.preventa1, adulto: +e.target.value } })}
              className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
          </div>
          <div>
            <label className="text-xs text-warm-brown/60">Infancia ($)</label>
            <input type="number" value={local.preventa1.infancia}
              onChange={(e) => setLocal({ ...local, preventa1: { ...local.preventa1, infancia: +e.target.value } })}
              className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
          </div>
          <div>
            <label className="text-xs text-warm-brown/60">Fecha inicio</label>
            <input type="date" value={local.preventa1.startDate}
              onChange={(e) => setLocal({ ...local, preventa1: { ...local.preventa1, startDate: e.target.value } })}
              className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
          </div>
        </div>
      </div>

      <div className="bg-cream rounded-2xl p-6 space-y-4">
        <h3 className="font-semibold text-warm-brown">Preventa 2</h3>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="text-xs text-warm-brown/60">Adulto ($)</label>
            <input type="number" value={local.preventa2.adulto}
              onChange={(e) => setLocal({ ...local, preventa2: { ...local.preventa2, adulto: +e.target.value } })}
              className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
          </div>
          <div>
            <label className="text-xs text-warm-brown/60">Infancia ($)</label>
            <input type="number" value={local.preventa2.infancia}
              onChange={(e) => setLocal({ ...local, preventa2: { ...local.preventa2, infancia: +e.target.value } })}
              className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
          </div>
          <div>
            <label className="text-xs text-warm-brown/60">Fecha inicio</label>
            <input type="date" value={local.preventa2.startDate}
              onChange={(e) => setLocal({ ...local, preventa2: { ...local.preventa2, startDate: e.target.value } })}
              className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
          </div>
        </div>
      </div>

      <button onClick={save} className="flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
        <Save className="w-4 h-4" /> Guardar cambios
      </button>
    </div>
  );
}

/* ─── Gallery Editor ─── */
function GalleryEditor({ coverImage, gallery, onUpdate }: {
  coverImage?: string;
  gallery?: { url: string; alt: string }[];
  onUpdate: (data: { coverImage?: string; gallery?: { url: string; alt: string }[] }) => void;
}) {
  const [cover, setCover] = useState(coverImage || "");
  const [imgs, setImgs] = useState(gallery || []);
  const [newUrl, setNewUrl] = useState("");

  const save = () => onUpdate({ coverImage: cover, gallery: imgs });
  const addImage = () => {
    if (newUrl.trim()) {
      setImgs([...imgs, { url: newUrl.trim(), alt: "" }]);
      setNewUrl("");
    }
  };
  const removeImage = (i: number) => setImgs(imgs.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs text-warm-brown/60 block mb-1">Imagen de portada (URL)</label>
        <input value={cover} onChange={(e) => setCover(e.target.value)}
          className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm"
          placeholder="https://..." />
        {cover && <img src={cover} alt="preview" className="mt-2 h-24 rounded-lg object-cover" />}
      </div>
      <div>
        <label className="text-xs text-warm-brown/60 block mb-1">Galería de imágenes</label>
        <div className="flex gap-2 flex-wrap mb-2">
          {imgs.map((img, i) => (
            <div key={i} className="relative w-20 h-20">
              <img src={img.url} alt={img.alt} className="w-full h-full rounded-lg object-cover" />
              <button onClick={() => removeImage(i)} className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center">
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input value={newUrl} onChange={(e) => setNewUrl(e.target.value)}
            className="flex-1 bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm"
            placeholder="URL de imagen..." />
          <button onClick={addImage} className="bg-accent/20 text-accent px-3 py-2 rounded-xl text-sm font-semibold hover:bg-accent/30">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      <button onClick={save} className="flex items-center gap-2 bg-golden/20 text-warm-brown px-4 py-2 rounded-xl text-sm font-semibold hover:bg-golden/30">
        <Save className="w-3 h-3" /> Guardar imágenes
      </button>
    </div>
  );
}

/* ─── Obras Tab ─── */
function ObrasTab({ obras, updateObra }: any) {
  const [editing, setEditing] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <h2 className="font-serif text-2xl font-bold text-foreground">Obras de Teatro</h2>
      <div className="space-y-4">
        {obras.map((obra: any) => (
          <div key={obra.slug} className="bg-cream rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-serif font-bold text-warm-brown text-lg">{obra.title}</h3>
                <p className="text-xs text-warm-brown/60">{obra.company} · {obra.date} · {obra.time}</p>
              </div>
              <button onClick={() => setEditing(editing === obra.slug ? null : obra.slug)}
                className="text-xs bg-terracotta/20 text-warm-brown px-3 py-1.5 rounded-lg font-medium hover:bg-terracotta/30">
                {editing === obra.slug ? "Cerrar" : "Editar"}
              </button>
            </div>

            {editing === obra.slug && (
              <div className="border-t border-warm-brown/10 pt-4 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-warm-brown/60">Título</label>
                    <input value={obra.title} onChange={(e) => updateObra(obra.slug, { title: e.target.value })}
                      className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-warm-brown/60">Compañía</label>
                    <input value={obra.company} onChange={(e) => updateObra(obra.slug, { company: e.target.value })}
                      className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-warm-brown/60">Fecha</label>
                    <input value={obra.date} onChange={(e) => updateObra(obra.slug, { date: e.target.value })}
                      className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-warm-brown/60">Hora</label>
                    <input value={obra.time} onChange={(e) => updateObra(obra.slug, { time: e.target.value })}
                      className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-warm-brown/60">Público</label>
                    <input value={obra.audience} onChange={(e) => updateObra(obra.slug, { audience: e.target.value })}
                      className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-warm-brown/60">Costo</label>
                    <input value={obra.cost} onChange={(e) => updateObra(obra.slug, { cost: e.target.value })}
                      className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-warm-brown/60">Sinopsis</label>
                  <textarea value={obra.synopsis} onChange={(e) => updateObra(obra.slug, { synopsis: e.target.value })}
                    rows={3} className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
                </div>
                <GalleryEditor coverImage={obra.coverImage} gallery={obra.gallery}
                  onUpdate={(data) => updateObra(obra.slug, data)} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Talleres Tab ─── */
function TalleresTab({ talleres, updateTaller }: any) {
  const [editing, setEditing] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <h2 className="font-serif text-2xl font-bold text-foreground">Talleres</h2>
      <div className="space-y-4">
        {talleres.map((t: any) => (
          <div key={t.slug} className="bg-cream rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-serif font-bold text-warm-brown text-lg">{t.title}</h3>
                <p className="text-xs text-warm-brown/60">{t.date} · {t.time} · {t.venue}</p>
              </div>
              <button onClick={() => setEditing(editing === t.slug ? null : t.slug)}
                className="text-xs bg-terracotta/20 text-warm-brown px-3 py-1.5 rounded-lg font-medium hover:bg-terracotta/30">
                {editing === t.slug ? "Cerrar" : "Editar"}
              </button>
            </div>

            {editing === t.slug && (
              <div className="border-t border-warm-brown/10 pt-4 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-warm-brown/60">Título</label>
                    <input value={t.title} onChange={(e) => updateTaller(t.slug, { title: e.target.value })}
                      className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-warm-brown/60">Subtítulo</label>
                    <input value={t.subtitle} onChange={(e) => updateTaller(t.slug, { subtitle: e.target.value })}
                      className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-warm-brown/60">Fecha</label>
                    <input value={t.date} onChange={(e) => updateTaller(t.slug, { date: e.target.value })}
                      className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-warm-brown/60">Hora</label>
                    <input value={t.time} onChange={(e) => updateTaller(t.slug, { time: e.target.value })}
                      className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-warm-brown/60">Público</label>
                    <input value={t.audience} onChange={(e) => updateTaller(t.slug, { audience: e.target.value })}
                      className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-warm-brown/60">Costo</label>
                    <input value={t.cost} onChange={(e) => updateTaller(t.slug, { cost: e.target.value })}
                      className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-warm-brown/60">Descripción</label>
                  <textarea value={t.description} onChange={(e) => updateTaller(t.slug, { description: e.target.value })}
                    rows={3} className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
                </div>
                <div>
                  <label className="text-xs text-warm-brown/60">Facilitadores</label>
                  <input value={t.facilitators} onChange={(e) => updateTaller(t.slug, { facilitators: e.target.value })}
                    className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
                </div>
                <GalleryEditor coverImage={t.coverImage} gallery={t.gallery}
                  onUpdate={(data) => updateTaller(t.slug, data)} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Sedes Tab ─── */
function SedesTab({ sedes, updateSede }: any) {
  const [editing, setEditing] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <h2 className="font-serif text-2xl font-bold text-foreground">Sedes Participantes</h2>
      <div className="space-y-4">
        {sedes.map((s: any) => (
          <div key={s.slug} className="bg-cream rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-serif font-bold text-warm-brown text-lg">{s.name}</h3>
                <p className="text-xs text-warm-brown/60">{s.address}</p>
              </div>
              <button onClick={() => setEditing(editing === s.slug ? null : s.slug)}
                className="text-xs bg-terracotta/20 text-warm-brown px-3 py-1.5 rounded-lg font-medium hover:bg-terracotta/30">
                {editing === s.slug ? "Cerrar" : "Editar"}
              </button>
            </div>

            {editing === s.slug && (
              <div className="border-t border-warm-brown/10 pt-4 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-warm-brown/60">Nombre</label>
                    <input value={s.name} onChange={(e) => updateSede(s.slug, { name: e.target.value })}
                      className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-warm-brown/60">Dirección</label>
                    <input value={s.address} onChange={(e) => updateSede(s.slug, { address: e.target.value })}
                      className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-warm-brown/60">Descripción</label>
                  <textarea value={s.description} onChange={(e) => updateSede(s.slug, { description: e.target.value })}
                    rows={3} className="w-full bg-cream-light border border-warm-brown/20 rounded-xl px-3 py-2 text-warm-brown text-sm" />
                </div>
                <GalleryEditor coverImage={s.coverImage} gallery={s.gallery}
                  onUpdate={(data) => updateSede(s.slug, data)} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Hero Images Tab ─── */
function HeroTab({ images, setImages }: { images: string[]; setImages: (imgs: string[]) => void }) {
  const [newUrl, setNewUrl] = useState("");
  const add = () => {
    if (newUrl.trim()) {
      setImages([...images, newUrl.trim()]);
      setNewUrl("");
    }
  };
  const remove = (i: number) => setImages(images.filter((_, idx) => idx !== i));

  return (
    <div className="max-w-2xl space-y-6">
      <h2 className="font-serif text-2xl font-bold text-foreground">Carousel del Hero</h2>
      <p className="text-sm text-muted-foreground">Imágenes que aparecen en la sección principal de la página de inicio.</p>

      <div className="flex gap-2">
        <input value={newUrl} onChange={(e) => setNewUrl(e.target.value)}
          className="flex-1 bg-cream border border-warm-brown/20 rounded-xl px-4 py-2.5 text-warm-brown text-sm"
          placeholder="URL de imagen..." />
        <button onClick={add} className="bg-accent text-accent-foreground px-4 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div key={i} className="relative rounded-xl overflow-hidden group">
            <img src={img} alt="" className="w-full aspect-video object-cover" />
            <button onClick={() => remove(i)}
              className="absolute top-2 right-2 w-7 h-7 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Trash2 className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>

      {!images.length && (
        <div className="bg-cream rounded-2xl p-8 text-center text-warm-brown/50 text-sm">
          Aún no hay imágenes. Agrega URLs para que aparezcan en el carousel.
        </div>
      )}
    </div>
  );
}

/* ─── Calendario Tab ─── */
function CalendarioTab({ obras, talleres }: any) {
  const allEvents = [
    ...obras.map((o: any) => ({ type: "Obra", title: o.title, date: o.date, time: o.time, venue: o.venue })),
    ...talleres.map((t: any) => ({ type: "Taller", title: t.title, date: t.date, time: t.time, venue: t.venue })),
  ];

  return (
    <div className="space-y-6">
      <h2 className="font-serif text-2xl font-bold text-foreground">Calendario de Actividades</h2>
      <div className="bg-cream rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-warm-brown/10">
              <th className="text-left px-4 py-3 font-semibold text-warm-brown">Tipo</th>
              <th className="text-left px-4 py-3 font-semibold text-warm-brown">Actividad</th>
              <th className="text-left px-4 py-3 font-semibold text-warm-brown">Fecha</th>
              <th className="text-left px-4 py-3 font-semibold text-warm-brown">Hora</th>
              <th className="text-left px-4 py-3 font-semibold text-warm-brown">Sede</th>
            </tr>
          </thead>
          <tbody>
            {allEvents.map((ev: any, i: number) => (
              <tr key={i} className="border-t border-warm-brown/10">
                <td className="px-4 py-3">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    ev.type === "Obra" ? "bg-coral/20 text-coral" : "bg-accent/20 text-accent"
                  }`}>{ev.type}</span>
                </td>
                <td className="px-4 py-3 text-warm-brown font-medium">{ev.title}</td>
                <td className="px-4 py-3 text-warm-brown/70">{ev.date}</td>
                <td className="px-4 py-3 text-warm-brown/70">{ev.time}</td>
                <td className="px-4 py-3 text-warm-brown/70">{ev.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPanel;
