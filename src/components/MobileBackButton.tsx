import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/**
 * Floating back-to-home button visible only on mobile (< md).
 * Anchored bottom-left so it doesn't conflict with WhatsApp CTAs.
 */
const MobileBackButton = () => {
  return (
    <Link
      to="/"
      aria-label="Volver al inicio"
      className="md:hidden fixed bottom-5 left-5 z-40 flex items-center gap-2 bg-warm-brown text-cream px-4 py-3 rounded-full shadow-lg shadow-warm-brown/30 hover:opacity-90 transition-opacity text-sm font-semibold"
    >
      <ArrowLeft className="w-4 h-4" />
      Inicio
    </Link>
  );
};

export default MobileBackButton;
