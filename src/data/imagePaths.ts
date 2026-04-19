/**
 * Manifiesto centralizado de rutas de imágenes del Festival Tënkui 2026.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * CÓMO FUNCIONA (Para hospedaje en GitHub Pages, sin base de datos)
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * 1. Todas las imágenes viven dentro de la carpeta `public/images/` del repo.
 * 2. Vite copia tal cual lo que esté en `public/` a la raíz del build.
 *    Por lo tanto, una imagen en `public/images/obras/pipi-la-noche/cover.jpg`
 *    queda accesible en producción como `/images/obras/pipi-la-noche/cover.jpg`.
 * 3. Para "actualizar" una imagen basta con hacer commit de un archivo nuevo
 *    EN LA MISMA RUTA y CON EL MISMO NOMBRE. No hay que tocar código.
 * 4. El panel de administración solo MUESTRA estas rutas (read-only) para que
 *    sepas qué archivo reemplazar en el repo.
 *
 * Convenciones de nombres:
 *   - cover.jpg     → imagen de portada (ratio 16/9 sugerido, mín 1200×675)
 *   - 01.jpg, 02.jpg, ... → galería (mismo ratio, orden por número)
 *   - hero-1.jpg, hero-2.jpg, hero-3.jpg → carrusel principal (21/9, 1920×823)
 */

export interface ImagePathSet {
  cover: string;
  gallery: string[];
}

const base = (path: string) => `${import.meta.env.BASE_URL}${path}`.replace(/\/+/g, "/");

/* ─── HERO (carrusel principal de la home) ─── */
export const heroPaths: string[] = [
  base("images/hero/hero-1.jpg"),
  base("images/hero/hero-2.jpg"),
  base("images/hero/hero-3.jpg"),
];

/* ─── OBRAS ─── */
export const obraPaths: Record<string, ImagePathSet> = {
  "pipi-la-noche": {
    cover: base("images/obras/pipi-la-noche/cover.jpg"),
    gallery: [
      base("images/obras/pipi-la-noche/01.jpg"),
      base("images/obras/pipi-la-noche/02.jpg"),
      base("images/obras/pipi-la-noche/03.jpg"),
    ],
  },
  "duanop": {
    cover: base("images/obras/duanop/cover.jpg"),
    gallery: [
      base("images/obras/duanop/01.jpg"),
      base("images/obras/duanop/02.jpg"),
      base("images/obras/duanop/03.jpg"),
    ],
  },
  "la-raiz-del-nido": {
    cover: base("images/obras/la-raiz-del-nido/cover.jpg"),
    gallery: [
      base("images/obras/la-raiz-del-nido/01.jpg"),
      base("images/obras/la-raiz-del-nido/02.jpg"),
      base("images/obras/la-raiz-del-nido/03.jpg"),
    ],
  },
  "los-males-invisibles": {
    cover: base("images/obras/los-males-invisibles/cover.jpg"),
    gallery: [
      base("images/obras/los-males-invisibles/01.jpg"),
      base("images/obras/los-males-invisibles/02.jpg"),
      base("images/obras/los-males-invisibles/03.jpg"),
    ],
  },
};

/* ─── TALLERES ─── */
export const tallerPaths: Record<string, ImagePathSet> = {
  "cuentacuentos": {
    cover: base("images/talleres/cuentacuentos/cover.jpg"),
    gallery: [
      base("images/talleres/cuentacuentos/01.jpg"),
      base("images/talleres/cuentacuentos/02.jpg"),
    ],
  },
  "entre-libros-y-arrullos": {
    cover: base("images/talleres/entre-libros-y-arrullos/cover.jpg"),
    gallery: [
      base("images/talleres/entre-libros-y-arrullos/01.jpg"),
      base("images/talleres/entre-libros-y-arrullos/02.jpg"),
    ],
  },
  "transferencias-graficas": {
    cover: base("images/talleres/transferencias-graficas/cover.jpg"),
    gallery: [
      base("images/talleres/transferencias-graficas/01.jpg"),
      base("images/talleres/transferencias-graficas/02.jpg"),
    ],
  },
  "fiesta-de-tambores": {
    cover: base("images/talleres/fiesta-de-tambores/cover.jpg"),
    gallery: [
      base("images/talleres/fiesta-de-tambores/01.jpg"),
      base("images/talleres/fiesta-de-tambores/02.jpg"),
    ],
  },
};

/* ─── SEDES ─── */
export const sedePaths: Record<string, ImagePathSet> = {
  "semillas-suzuki":            { cover: base("images/sedes/semillas-suzuki/cover.jpg"),            gallery: [base("images/sedes/semillas-suzuki/01.jpg"),            base("images/sedes/semillas-suzuki/02.jpg")] },
  "kuestudio":                  { cover: base("images/sedes/kuestudio/cover.jpg"),                  gallery: [base("images/sedes/kuestudio/01.jpg"),                  base("images/sedes/kuestudio/02.jpg")] },
  "arte-indigo":                { cover: base("images/sedes/arte-indigo/cover.jpg"),                gallery: [base("images/sedes/arte-indigo/01.jpg"),                base("images/sedes/arte-indigo/02.jpg")] },
  "casa-de-los-titeres-monini": { cover: base("images/sedes/casa-de-los-titeres-monini/cover.jpg"), gallery: [base("images/sedes/casa-de-los-titeres-monini/01.jpg"), base("images/sedes/casa-de-los-titeres-monini/02.jpg")] },
  "letrasconmas":               { cover: base("images/sedes/letrasconmas/cover.jpg"),               gallery: [base("images/sedes/letrasconmas/01.jpg"),               base("images/sedes/letrasconmas/02.jpg")] },
  "ipba-cdc-raul-gamboa":       { cover: base("images/sedes/ipba-cdc-raul-gamboa/cover.jpg"),       gallery: [base("images/sedes/ipba-cdc-raul-gamboa/01.jpg"),       base("images/sedes/ipba-cdc-raul-gamboa/02.jpg")] },
  "muni-museo-universitario":   { cover: base("images/sedes/muni-museo-universitario/cover.jpg"),   gallery: [base("images/sedes/muni-museo-universitario/01.jpg"),   base("images/sedes/muni-museo-universitario/02.jpg")] },
};

/* ─── Lista plana (para el admin y para el documento de referencia) ─── */
export interface ImageManifestEntry {
  category: "Hero" | "Obra" | "Taller" | "Sede";
  group: string;        // título legible
  role: "Portada" | "Galería" | "Hero";
  publicPath: string;   // ruta dentro del repo (sin base url)
  url: string;          // ruta servida (con base url)
}

const strip = (u: string) => u.replace(/^\/+/, "");

export const imageManifest: ImageManifestEntry[] = [
  ...heroPaths.map((url, i): ImageManifestEntry => ({
    category: "Hero",
    group: `Carrusel principal #${i + 1}`,
    role: "Hero",
    publicPath: `public/${strip(url)}`,
    url,
  })),
  ...Object.entries(obraPaths).flatMap(([slug, set]): ImageManifestEntry[] => [
    { category: "Obra", group: slug, role: "Portada", publicPath: `public/${strip(set.cover)}`, url: set.cover },
    ...set.gallery.map((g): ImageManifestEntry => ({
      category: "Obra", group: slug, role: "Galería", publicPath: `public/${strip(g)}`, url: g,
    })),
  ]),
  ...Object.entries(tallerPaths).flatMap(([slug, set]): ImageManifestEntry[] => [
    { category: "Taller", group: slug, role: "Portada", publicPath: `public/${strip(set.cover)}`, url: set.cover },
    ...set.gallery.map((g): ImageManifestEntry => ({
      category: "Taller", group: slug, role: "Galería", publicPath: `public/${strip(g)}`, url: g,
    })),
  ]),
  ...Object.entries(sedePaths).flatMap(([slug, set]): ImageManifestEntry[] => [
    { category: "Sede", group: slug, role: "Portada", publicPath: `public/${strip(set.cover)}`, url: set.cover },
    ...set.gallery.map((g): ImageManifestEntry => ({
      category: "Sede", group: slug, role: "Galería", publicPath: `public/${strip(g)}`, url: g,
    })),
  ]),
];
