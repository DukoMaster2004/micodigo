import { MessageCircle, Search, X } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<
    { text: string; element: Element }[]
  >([]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const performSearch = (term: string) => {
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }

    const lowerTerm = term.toLowerCase();
    const results: { text: string; element: Element }[] = [];
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null
    );

    let node;
    while ((node = walker.nextNode())) {
      if (
        node.textContent &&
        node.textContent.toLowerCase().includes(lowerTerm)
      ) {
        const parent = node.parentElement;
        if (
          parent &&
          !parent.classList.contains("footer") &&
          parent.offsetParent !== null
        ) {
          results.push({ text: node.textContent, element: parent });
        }
      }
    }

    setSearchResults(results.slice(0, 5));
  };

  useEffect(() => {
    performSearch(searchTerm);
  }, [searchTerm]);

  const handleSearchResultClick = (element: Element) => {
    element.scrollIntoView({ behavior: "smooth" });
    element.classList.add("highlight");
    setTimeout(() => element.classList.remove("highlight"), 2000);
    setSearchOpen(false);
    setSearchTerm("");
  };

  return (
    <footer className="bg-foreground text-background py-12 md:py-16 lg:py-20 px-4 footer">
      <style>{`
        .highlight {
          animation: highlightPulse 2s ease-in-out;
        }
        @keyframes highlightPulse {
          0%, 100% { background-color: transparent; }
          50% { background-color: rgba(255, 193, 7, 0.3); }
        }
      `}</style>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
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
            <h4 className="font-semibold text-background mb-3 md:mb-4 text-sm md:text-base">
              Enlaces rápidos
            </h4>
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
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
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
            <h4 className="font-semibold text-background mb-3 md:mb-4 text-sm md:text-base">
              Contacto directo
            </h4>
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

          {/* Search */}
          <div>
            <h4 className="font-semibold text-background mb-3 md:mb-4 text-sm md:text-base">
              Buscar en la página
            </h4>
            <div className="relative">
              <div
                className="relative flex items-center"
                onClick={() => setSearchOpen(true)}
              >
                <input
                  type="text"
                  placeholder="Escribe para buscar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 bg-background/10 text-background placeholder-background/50 rounded text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Search className="w-4 h-4 absolute right-2 text-background/50" />
              </div>

              {/* Search Results Dropdown */}
              {searchOpen && searchTerm && searchResults.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-background text-foreground rounded shadow-lg z-50 max-h-64 overflow-y-auto">
                  {searchResults.map((result, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSearchResultClick(result.element)}
                      className="w-full text-left px-3 py-2 hover:bg-accent/20 transition-colors text-xs md:text-sm border-b border-background/10 last:border-b-0 truncate"
                    >
                      {result.text.slice(0, 60)}...
                    </button>
                  ))}
                </div>
              )}

              {searchOpen && searchTerm && searchResults.length === 0 && (
                <div className="absolute top-full mt-2 w-full bg-background text-foreground rounded shadow-lg z-50 p-3">
                  <p className="text-xs text-foreground/70">
                    No se encontraron resultados
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4 text-center sm:text-left">
          <p className="text-background/50 text-xs md:text-sm">
            © {currentYear} IB MATH – Todos los derechos reservados ya esta pero NOSEESES
            poco falta.
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