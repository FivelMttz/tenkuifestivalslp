/**
 * Image upload helper for static (no-DB) deployments such as GitHub Pages.
 *
 * Strategy:
 * - The browser cannot write into the project's local /public folder at runtime.
 * - Uploaded files are converted to base64 data URLs and stored in localStorage
 *   (via the EventContext) so they appear immediately in the admin and on the
 *   live site for that browser.
 * - The admin can then EXPORT the full configuration (including base64 images)
 *   as a JSON file. That JSON should be committed to the repo (e.g. in
 *   /public/tenkui-data.json) and IMPORTED on a fresh browser to make the data
 *   visible to all visitors of the published site.
 *
 * For very large catalogs, prefer using external URLs (Imgur, Cloudinary, etc.)
 * pasted into the URL input — they don't bloat localStorage.
 */

export const MAX_IMAGE_BYTES = 2 * 1024 * 1024; // 2 MB raw

export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (file.size > MAX_IMAGE_BYTES) {
      reject(new Error(`La imagen es demasiado grande (max ${Math.round(MAX_IMAGE_BYTES / 1024 / 1024)} MB).`));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("No se pudo leer el archivo."));
    reader.readAsDataURL(file);
  });
}

export function downloadJson(data: unknown, filename: string) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function readJsonFile<T = unknown>(file: File): Promise<T> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        resolve(JSON.parse(reader.result as string) as T);
      } catch (e) {
        reject(new Error("Archivo JSON inválido."));
      }
    };
    reader.onerror = () => reject(new Error("No se pudo leer el archivo."));
    reader.readAsText(file);
  });
}
