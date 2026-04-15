import { MessageCircle } from "lucide-react";

const Navbar = () => {
  const whatsappUrl = "https://wa.me/524447027037";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-foreground/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-serif text-xl font-bold text-foreground tracking-tight">
          Tënkui <span className="text-golden">2026</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#inicio" className="hover:text-foreground transition-colors">Inicio</a>
          <a href="#obras" className="hover:text-foreground transition-colors">Obras</a>
          <a href="#talleres" className="hover:text-foreground transition-colors">Talleres</a>
          <a href="#sedes" className="hover:text-foreground transition-colors">Sedes</a>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Reservar</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
