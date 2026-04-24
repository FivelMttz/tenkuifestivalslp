import { Theater, Baby, Music, Drama, BookOpen, Heart, Paintbrush, Drum } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Obra {
  slug: string;
  title: string;
  company: string;
  category: string;
  audience: string;
  date: string;
  time: string;
  venue: string;
  venueAddress: string;
  cost: string;
  icon: LucideIcon;
  synopsis: string;
  team: { role: string; name: string }[];
}

export interface Taller {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  venueAddress: string;
  audience: string;
  cost: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  facilitators: string;
  description: string;
  tags: string[];
}

export const obras: Obra[] = [
  {
    slug: "pipi-la-noche",
    title: "Pipí la noche",
    company: "Casa de los títeres MONINI presenta:",
    category: "Teatro de Títeres",
    audience: "Infancias a partir de 2 años",
    date: "29 Abril",
    time: "5:00pm",
    venue: "Casa de los títeres MONINI",
    venueAddress: "Morelos #1065, Zona Centro",
    cost: "Cooperación:\nA partir del 13 de Abril: $120 Adulto / $80 Infancias\nA partir 24 de Abril: $140 Adultos / $100 Infancias",
    icon: Theater,
    synopsis: "Diego, un niño de 7 años avergonzado por usar pañal durante las noches, se aventura a descubrir el motivo de hacerse pipí en la cama para poder luchar contra ello. En un mundo de aventuras imaginarias y lleno de experiencias extraordinarias Diego logra superar su problema.",
    team: [
      { role: "Autor", name: "Sandra Delgado" },
      { role: "Dirección", name: "Sandra Delgado" },
      { role: "Música original", name: "Nicolas Alfonso" },
      { role: "Manipulación", name: "Sandra Delgado y Sheila Sierra" },
    ],
  },
  {
    slug: "duanop",
    title: "DUANOP",
    company: "¡Caracoles! Danza Teatro presenta:",
    category: "Teatro para bebés / Espectáculo para la primera infancia",
    audience: "Primera infancia de 6 meses a 4 años",
    date: "30 Abril",
    time: "4:30pm y 5:30pm",
    venue: "Centro de Difusión Cultural Raúl Gamboa del I.P.B.A.",
    venueAddress: "Avenida Universidad esq, C. Negrete SN, Centro",
    cost: "Entrada libre\nAcceso: Cupo limitado. No requiere registro previo, se recomienda anticipar la llegada\nBoletos al Whatsapp: 44 47 02 70 37",
    icon: Baby,
    synopsis: "\"DUANOP\" es una experiencia escénica dirigida a primeras infancias donde solo basta encontrarse para empezar a jugar, un espacio donde todos los lugares se vuelven posibles, la cochera, la sala y el jardín se vuelven mundos extraordinarios.",
    team: [
      { role: "Idea original", name: "Mayela Guadarrama Briones" },
      { role: "Equipo creativo", name: "Mayela Guadarrama Briones, Jacobo Núñez y Miriam Castillo" },
    ],
  },
  {
    slug: "la-raiz-del-nido",
    title: "La raíz del nido",
    company: "Garúa",
    category: "Teatro Inmersivo y Música",
    audience: "Primera infancia",
    date: "2 de mayo",
    time: "10:00 a.m.",
    venue: "MUNI, Museo Universitario UASLP",
    venueAddress: "Av. Sierra Leona 550, Lomas 2da sección",
    cost: "Cooperación (Preventa)",
    icon: Music,
    synopsis: "Puesta en escena inmersiva que utiliza la poesía y la música en vivo para explorar los elementos vitales: agua, tierra, fuego y aire. Un ambiente cuidado que invita a ser espectador y partícipe del crecimiento.",
    team: [
      { role: "Dirección", name: "Adriana Aguilar Hervert" },
      { role: "Músico", name: "Irma Zamora" },
      { role: "Músico", name: "Daniel Uresti" },
      { role: "Músico", name: "Teodoro Munguía" },
    ],
  },
  {
    slug: "los-males-invisibles",
    title: "Los males invisibles",
    company: "¡Caracoles! Danza Teatro",
    category: "Drama interactivo",
    audience: "Desde 4 años",
    date: "3 de mayo",
    time: "4:00 p.m.",
    venue: "Arte Índigo",
    venueAddress: "Martínez de Castro #106, Col. Centro",
    cost: "Cooperación (Preventa)",
    icon: Drama,
    synopsis: "Drama contemporáneo interactivo donde dos cuentacuentos nómadas exploran los males que quiebran los valores en la infancia, recordándonos que lo que sembramos es lo que cosechamos.",
    team: [
      { role: "Dirección y dramaturgia", name: "Jacobo Núñez" },
      { role: "Dramaturgia", name: "Mayela Guadarrama" },
      { role: "Elenco", name: "Luisa Olivares" },
      { role: "Elenco", name: "Eli Durán" },
    ],
  },
];

export const talleres: Taller[] = [
  {
    slug: "cuentacuentos",
    title: "Cuentacuentos",
    subtitle: "Historias vivas para toda la familia.",
    date: "1 de mayo",
    time: "12:00 p.m.",
    venue: "Semillas Suzuki",
    venueAddress: "Alfredo M. Terrazas #305, Col. Tequisquiapan",
    audience: "6 a 12 años",
    cost: "Cooperación",
    icon: BookOpen,
    iconBg: "bg-golden/20",
    iconColor: "text-golden",
    facilitators: "Gustavo Antonio Salazar Pérez e Irma Zamora (Gustoño y la Lupita)",
    description: "Narración oral con instrumentos tradicionales mexicanos para orientar a las familias en la creación de su primer acervo de literatura infantil.",
    tags: ["Narración oral", "Música tradicional", "Literatura infantil"],
  },
  {
    slug: "entre-libros-y-arrullos",
    title: "Entre libros y arrullos",
    subtitle: "Espacio sensorial para primera infancia.",
    date: "2 de mayo",
    time: "1:00 p.m.",
    venue: "Letrasconmás",
    venueAddress: "Prol. Santos Degollado #1220 esq. Ejército Nacional, Col. Burócrata",
    audience: "2 a 5 años",
    cost: "Cooperación (infancia + acompañante)",
    icon: Heart,
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
    facilitators: "Ma. Eugenia Urbina Espejel (Maru Urbina)",
    description: "Creación de experiencias literarias mediante el juego del lenguaje y el movimiento, fortaleciendo el vínculo afectivo y lector desde la cuna.",
    tags: ["Lenguaje", "Movimiento", "Vínculo afectivo"],
  },
  {
    slug: "transferencias-graficas",
    title: "Transferencias Gráficas",
    subtitle: "Técnicas de impresión creativa.",
    date: "2 de mayo",
    time: "4:00 p.m.",
    venue: "Arte Índigo",
    venueAddress: "Martínez de Castro #106, Col. Centro",
    audience: "8 a 13 años",
    cost: "Cooperación",
    icon: Paintbrush,
    iconBg: "bg-coral/20",
    iconColor: "text-coral",
    facilitators: "Alejandra González Fraga (Arte Índigo)",
    description: "Taller técnico de grabado (relieve y hueco) donde cada participante crea su propia matriz y estampas, explorando el arte como proceso de reproducción.",
    tags: ["Grabado", "Artes plásticas", "Impresión"],
  },
  {
    slug: "fiesta-de-tambores",
    title: "Fiesta de tambores",
    subtitle: "Percusión y ritmo comunitario.",
    date: "3 de mayo",
    time: "10:30 a.m.",
    venue: "Ku'estudio",
    venueAddress: "Av. Constitución #1105-B, Barrio de San Sebastián",
    audience: "Desde 2 años",
    cost: "Entrada Libre (registro previo)",
    icon: Drum,
    iconBg: "bg-peach/30",
    iconColor: "text-coral",
    facilitators: "Ensamble Semillas Suzuki (Mónica Almendarez, Dionisio Alzaga, Adriana Aguilar)",
    description: "Exploración lúdica de la voz, percusión y movimiento basada en ritmos afro-latinos. Un espacio de goce familiar sin necesidad de conocimientos previos. Sumérgete en una experiencia vibrante donde el cuerpo se convierte en instrumento.",
    tags: ["Ritmos afro-latinos", "Voz", "Percusión"],
  },
];

export interface Sede {
  slug: string;
  name: string;
  address: string;
  description: string;
  features: string[];
  tags: string[];
  eventsHere: string[];
  mapQuery: string;
}

export const sedes: Sede[] = [
  {
    slug: "semillas-suzuki",
    name: "Semillas Suzuki",
    address: "Alfredo M. Terrazas #305, Col. Tequisquiapan",
    description: "Un espacio dedicado a la pedagogía musical y el desarrollo artístico infantil, donde la música se convierte en herramienta de crecimiento y conexión familiar.",
    features: ["Salón acústico", "Instrumentos de percusión", "Espacio para familias", "Estacionamiento cercano"],
    tags: ["Música", "Pedagogía"],
    eventsHere: ["Cuentacuentos (1 mayo · 12:00 p.m.)", "Galería Fanzinoteka (1 mayo · 11:30 a.m.)"],
    mapQuery: "Semillas+Suzuki+Alfredo+M+Terrazas+305+San+Luis+Potosi",
  },
  {
    slug: "kuestudio",
    name: "Ku'estudio",
    address: "Av. Constitución #1105-B, Barrio de San Sebastián",
    description: "Espacio multidisciplinario dedicado a la experimentación artística y corporal, ideal para encuentros de percusión y movimiento comunitario.",
    features: ["Espacio amplio", "Equipo de percusión", "Área al aire libre"],
    tags: ["Multidisciplinario", "Barrio de San Sebastián"],
    eventsHere: ["Fiesta de tambores (3 mayo · 10:30 a.m.)"],
    mapQuery: "Ku+estudio+Constitucion+1105+San+Luis+Potosi",
  },
  {
    slug: "arte-indigo",
    name: "Arte Índigo",
    address: "Martínez de Castro #106, Col. Centro",
    description: "Taller y galería de artes visuales en el corazón del centro histórico, especializado en técnicas de grabado e impresión artística.",
    features: ["Taller de grabado", "Galería de exposición", "Centro histórico", "Acceso peatonal"],
    tags: ["Artes Plásticas", "Centro Histórico"],
    eventsHere: ["Transferencias Gráficas (2 mayo · 4:00 p.m.)", "Los males invisibles (3 mayo · 4:00 p.m.)", "Galería Fanzinoteka (3 mayo · 3:30 p.m.)"],
    mapQuery: "Martinez+de+Castro+106+San+Luis+Potosi",
  },
  {
    slug: "casa-de-los-titeres-monini",
    name: "Casa de los títeres MONINI",
    address: "Morelos #1065, Zona Centro",
    description: "Un espacio mágico en el corazón de San Luis Potosí dedicado al arte de los títeres y la imaginación. Teatro familiar con tradición y calidez.",
    features: ["Espacio climatizado", "Acceso para carriolas", "Área de café y cuentos"],
    tags: ["Teatro Familiar", "Centro Histórico"],
    eventsHere: ["Pipí la noche (29 abril · 5:00 p.m.)"],
    mapQuery: "Morelos+1065+Zona+Centro+San+Luis+Potosi",
  },
  {
    slug: "letrasconmas",
    name: "Letrasconmás",
    address: "Prol. Santos Degollado #1220 esq. Ejército Nacional, Col. Burócrata",
    description: "Librería y espacio de fomento a la lectura infantil, donde las historias cobran vida a través de talleres y encuentros literarios.",
    features: ["Acervo infantil", "Rincón de lectura", "Espacio íntimo"],
    tags: ["Literatura", "Fomento a la lectura"],
    eventsHere: ["Entre libros y arrullos (2 mayo · 1:00 p.m.)"],
    mapQuery: "Santos+Degollado+1220+San+Luis+Potosi",
  },
  {
    slug: "ipba-cdc-raul-gamboa",
    name: "I.P.B.A (CDC Raúl Gamboa)",
    address: "Av. Universidad esq. C. Negrete, Centro",
    description: "Centro de Difusión Cultural del Instituto Potosino de Bellas Artes. Un referente institucional para la programación escénica de la ciudad.",
    features: ["Foro escénico", "Butacas", "Accesibilidad", "Estacionamiento"],
    tags: ["Institucional", "Danza Teatro"],
    eventsHere: ["DUANOP (30 abril · 4:30 y 5:30 p.m.)"],
    mapQuery: "CDC+Raul+Gamboa+IPBA+San+Luis+Potosi",
  },
  {
    slug: "muni-museo-universitario",
    name: "MUNI (Museo Universitario)",
    address: "Av. Sierra Leona 550, Lomas 2da sección",
    description: "El Museo Universitario de la UASLP ofrece un espacio cultural de primer nivel para experiencias inmersivas y exposiciones artísticas.",
    features: ["Salas de exposición", "Jardín", "Estacionamiento amplio", "Cafetería"],
    tags: ["Museo", "Lomas"],
    eventsHere: ["La raíz del nido (2 mayo · 10:00 a.m.)", "Galería Fanzinoteka (2 mayo · 9:30 a.m.)"],
    mapQuery: "MUNI+Museo+Universitario+UASLP+Sierra+Leona+San+Luis+Potosi",
  },
];
