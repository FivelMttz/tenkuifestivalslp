import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-foreground/10 py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
          Tënkui <span className="text-gradient">2026</span>
        </h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
          Movimiento de arte para las infancias, desarrollado por espacios culturales autogestivos de San Luis Potosí.
        </p>
        <a
          href="https://wa.me/524447027037"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp: 44 47 02 70 37
        </a>
        <p className="text-xs text-muted-foreground mt-8">
          © 2026 Festival Tënkui. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
