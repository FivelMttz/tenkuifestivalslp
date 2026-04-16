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
    company: "Casa de los títeres MONINI",
    category: "Teatro de Títeres",
    audience: "Desde 2 años",
    date: "29 de abril",
    time: "5:00 p.m.",
    venue: "Casa de los títeres MONINI",
    venueAddress: "Morelos #1065, Zona Centro",
    cost: "Cooperación (Preventa)",
    icon: Theater,
    synopsis: "Diego, un niño de 7 años, enfrenta el estigma de usar pañal por las noches. Mediante un viaje de aventuras imaginarias, la obra aborda con ternura y creatividad la superación de este proceso biológico y emocional.",
    team: [
      { role: "Autoría, dirección y manipulación", name: "Sandra Delgado" },
      { role: "Manipulación", name: "Sheila Sierra" },
      { role: "Música original", name: "Nicolas Alfonso" },
    ],
  },
  {
    slug: "duanop",
    title: "DUANOP",
    company: "¡Caracoles! Danza Teatro",
    category: "Teatro para bebés",
    audience: "6 meses a 4 años",
    date: "30 de abril",
    time: "4:30 y 5:30 p.m.",
    venue: "C.D.C. Raúl Gamboa del I.P.B.A",
    venueAddress: "Av. Universidad esq. C. Negrete",
    cost: "Entrada Libre",
    icon: Baby,
    synopsis: "Experiencia escénica diseñada para las primeras infancias. Propone un espacio de juego donde la cochera, la sala o el jardín se transforman en mundos extraordinarios mediante el encuentro lúdico.",
    team: [
      { role: "Idea original", name: "Mayela Guadarrama Briones" },
      { role: "Intérprete", name: "Jacobo Núñez" },
      { role: "Intérprete", name: "Miriam Castillo" },
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
