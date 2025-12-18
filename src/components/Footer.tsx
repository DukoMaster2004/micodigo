import { MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12 md:py-16 lg:py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <img 
                src="/assets/img/logo.png" 
                alt="IB Math Logo" 
                className="h-16 md:h-20 lg:h-24 w-auto"
              />
            </div>
            <p className="text-background/70 text-xs md:text-sm leading-relaxed">
              Clases particulares de Matemáticas del Bachillerato Internacional. 
              Excelencia académica y mentoría personalizada.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-3 md:mb-4 text-sm md:text-base">Enlaces rápidos</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Sobre mí", href: "#sobre-mi" },
                { name: "Servicios", href: "#servicios" },
                { name: "Metodología", href: "#metodologia" },
                { name: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-background/70 hover:text-accent transition-colors text-xs md:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-3 md:mb-4 text-sm md:text-base">Contacto directo</h4>
            <div className="space-y-2 md:space-y-3">
              <a
                href="https://wa.me/51993745240"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors text-xs md:text-sm"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">+51 993 745 240</span>
              </a>
              <a
                href="https://wa.me/51937182708"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors text-xs md:text-sm"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">+51 937 182 708</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4 text-center sm:text-left">
          <p className="text-background/50 text-xs md:text-sm">
            © {currentYear} IB MATH – Todos los derechos reservados ya esta pero poco falta.
          </p>
          <p className="text-background/50 text-xs md:text-sm">
            Matemáticas del Bachillerato Internacional
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;