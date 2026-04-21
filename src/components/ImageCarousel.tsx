import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: { url: string; alt?: string }[];
  className?: string;
}

/** Eliminamos entradas cuya URL no pudo cargar (404, etc.) */
function useFilteredImages(images: { url: string; alt?: string }[]) {
  const [failed, setFailed] = useState<Set<string>>(() => new Set());
  const markFailed = (url: string) =>
    setFailed((prev) => new Set([...prev, url]));
  const visible = images.filter((img) => !failed.has(img.url));
  return { visible, markFailed };
}

const ImageCarousel = ({ images, className = "" }: ImageCarouselProps) => {
  const { visible, markFailed } = useFilteredImages(images);
  const [current, setCurrent] = useState(0);

  // Si al filtrar el índice actual quedó fuera de rango, lo corregimos
  const safeIndex = Math.min(current, Math.max(visible.length - 1, 0));

  if (!visible.length) return null;

  const prev = () => setCurrent((c) => (c === 0 ? visible.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === visible.length - 1 ? 0 : c + 1));

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <div className="aspect-video bg-warm-brown/10">
        <img
          src={visible[safeIndex].url}
          alt={visible[safeIndex].alt || ""}
          className="w-full h-full object-cover"
          onError={() => markFailed(visible[safeIndex].url)}
        />
      </div>
      {visible.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {visible.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === safeIndex ? "bg-foreground" : "bg-foreground/40"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
