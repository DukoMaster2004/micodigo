import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Servicios", href: "#servicios" },
  { name: "Metodología IB", href: "#metodologia" },
  { name: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(false);
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
          !parent.classList.contains("navbar") &&
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-b border-border navbar">
      <style>{`
        .highlight {
          animation: highlightPulse 2s ease-in-out;
        }
        @keyframes highlightPulse {
          0%, 100% { background-color: transparent; }
          50% { background-color: rgba(255, 193, 7, 0.3); }
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24 lg:h-32">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#inicio");
            }}
            className="flex items-center gap-2 md:gap-3 flex-shrink-0"
          >
            <img
              src="/assets/img/logo.png"
              alt="IB Math Logo"
              className="h-14 md:h-18 lg:h-28 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm xl:text-base font-medium text-white hover:text-accent transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Search */}
          <div className="hidden lg:flex items-center relative">
            <div className="relative group w-48">
              <div className="flex items-center bg-white/10 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-accent transition-all">
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setSearchOpen(true)}
                  className="bg-transparent text-white placeholder-white/50 text-xs xl:text-sm flex-1 focus:outline-none"
                />
                <Search className="w-4 h-4 text-white/50 flex-shrink-0" />
              </div>

              {/* Search Results Dropdown */}
              {searchOpen && searchTerm && searchResults.length > 0 && (
                <div className="absolute top-full mt-2 w-56 bg-black border border-accent/30 rounded-lg shadow-lg z-50 max-h-72 overflow-y-auto">
                  {searchResults.map((result, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSearchResultClick(result.element)}
                      className="w-full text-left px-3 py-2 hover:bg-accent/20 transition-colors text-xs border-b border-white/10 last:border-b-0 truncate text-white/90 hover:text-accent"
                    >
                      {result.text.slice(0, 50)}...
                    </button>
                  ))}
                </div>
              )}

              {searchOpen && searchTerm && searchResults.length === 0 && (
                <div className="absolute top-full mt-2 w-56 bg-black border border-accent/30 rounded-lg shadow-lg z-50 p-3">
                  <p className="text-xs text-white/50">No se encontraron resultados</p>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="default"
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shadow-gold text-sm xl:text-base px-4 xl:px-6 py-2 xl:py-3"
              onClick={() => window.open("https://wa.me/51993745240", "_blank")}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/30 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-white hover:text-accent transition-colors py-2 text-sm"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Search */}
              <div className="py-2 border-y border-white/10 my-2">
                <div className="flex items-center bg-white/10 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-accent">
                  <input
                    type="text"
                    placeholder="Buscar en la página..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setSearchOpen(true)}
                    className="bg-transparent text-white placeholder-white/50 text-xs flex-1 focus:outline-none"
                  />
                  <Search className="w-4 h-4 text-white/50" />
                </div>

                {/* Mobile Search Results */}
                {searchOpen && searchTerm && (
                  <div className="mt-2 space-y-1 max-h-48 overflow-y-auto">
                    {searchResults.length > 0 ? (
                      searchResults.map((result, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            handleSearchResultClick(result.element);
                            setIsOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 bg-white/5 hover:bg-accent/20 rounded text-xs text-white/90 hover:text-accent transition-colors truncate"
                        >
                          {result.text.slice(0, 40)}...
                        </button>
                      ))
                    ) : (
                      <p className="text-xs text-white/50 px-3 py-2">No se encontraron resultados</p>
                    )}
                  </div>
                )}
              </div>

              <Button
                variant="default"
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 mt-2 w-full text-sm"
                onClick={() => window.open("https://wa.me/51993745240", "_blank")}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;