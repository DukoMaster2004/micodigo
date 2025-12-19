import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Search } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Certificados", href: "#certificados" },
  { name: "Servicios", href: "#servicios" },
  { name: "Metodología IB", href: "#metodologia" },
  { name: "Videos", href: "#videos" },
  { name: "Formulario", href: "#formulario" },
  { name: "Contacto", href: "#contacto" },
];

const searchSections = [
  { name: "Inicio", id: "#inicio" },
  { name: "Sobre mí", id: "#sobre-mi" },
  { name: "Licencias y Certificados", id: "#certificados" },
  { name: "Alumnos Destacados", id: "#certificados" },
  { name: "Servicios", id: "#servicios" },
  { name: "Metodología IB", id: "#metodologia" },
  { name: "Galería de Videos", id: "#videos" },
  { name: "Formulario de Contacto", id: "#formulario" },
  { name: "Contacto", id: "#contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setSearchOpen(false);
    setSearchQuery("");
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = searchSections.filter((section) =>
        section.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const firstNavLinks = navLinks.slice(0, 4);
  const secondNavLinks = navLinks.slice(4);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 to-slate-800 backdrop-blur-xl border-b border-slate-700 shadow-2xl transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24 gap-6">
          {/* Logo - Compacto */}
          <button 
            onClick={() => scrollToSection("#inicio")}
            className="flex items-center gap-2 flex-shrink-0 group cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg group-hover:shadow-yellow-400/50 transition-all flex-shrink-0">
              <span className="text-white font-bold text-lg md:text-xl">∫</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-base md:text-lg font-bold text-white block leading-tight">
                IB Math <span className="text-yellow-400">Banda 7</span>
              </span>
              <span className="text-xs text-gray-400 font-medium">Matemáticas IB</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-3 2xl:gap-4">
            {firstNavLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-xs 2xl:text-sm font-semibold text-gray-200 hover:text-yellow-300 transition-all duration-300 px-2.5 py-1.5 rounded-lg hover:bg-yellow-400/10 border border-transparent hover:border-yellow-400/30 whitespace-nowrap"
              >
                {link.name}
              </button>
            ))}
            
            <div className="w-px h-6 bg-gradient-to-b from-transparent via-slate-500 to-transparent" />
            
            {secondNavLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-xs 2xl:text-sm font-semibold text-gray-200 hover:text-yellow-300 transition-all duration-300 px-2.5 py-1.5 rounded-lg hover:bg-yellow-400/10 border border-transparent hover:border-yellow-400/30 whitespace-nowrap"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Search and CTA - Desktop */}
          <div className="hidden xl:flex items-center gap-2 flex-shrink-0">
            {/* Search Button */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-200 hover:text-yellow-300 transition-colors rounded-lg hover:bg-yellow-400/10 border border-transparent hover:border-yellow-400/30"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Search Dropdown */}
              {searchOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 p-4 z-50">
                  <input
                    type="text"
                    placeholder="Buscar en la página..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700 text-white placeholder-gray-400 rounded-lg border border-slate-600 focus:border-yellow-400 focus:outline-none text-sm"
                    autoFocus
                  />
                  
                  {searchResults.length > 0 ? (
                    <div className="mt-3 space-y-1 max-h-64 overflow-y-auto">
                      {searchResults.map((result) => (
                        <button
                          key={result.name}
                          onClick={() => scrollToSection(result.id)}
                          className="w-full text-left px-3 py-2 rounded-lg bg-slate-700 hover:bg-yellow-400/20 text-gray-300 hover:text-yellow-300 transition-all font-medium text-sm"
                        >
                          {result.name}
                        </button>
                      ))}
                    </div>
                  ) : searchQuery && (
                    <p className="mt-3 text-center text-gray-400 text-sm">
                      No se encontraron resultados
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <button 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-green-500/50 text-xs 2xl:text-sm px-4 py-1.5 2xl:py-2 font-bold rounded-lg transition-all hover:scale-105 flex items-center gap-2 whitespace-nowrap"
              onClick={() => window.open("https://wa.me/51993745240", "_blank")}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 text-gray-200 hover:text-yellow-300 transition-colors rounded-lg hover:bg-yellow-400/10 md:flex hidden"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              className="p-2.5 text-yellow-400 hover:text-yellow-300 transition-colors rounded-lg hover:bg-yellow-400/10"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 md:w-7 md:h-7" /> : <Menu className="w-6 h-6 md:w-7 md:h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Dropdown */}
        {searchOpen && (
          <div className="xl:hidden pb-4 border-t border-slate-700">
            <div className="pt-4">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 text-white placeholder-gray-400 rounded-lg border border-slate-600 focus:border-yellow-400 focus:outline-none text-base"
              />
              {searchResults.length > 0 && (
                <div className="absolute left-4 right-4 mt-2 bg-slate-800 rounded-lg shadow-xl border border-slate-700 z-10 max-h-64 overflow-y-auto">
                  {searchResults.map((result) => (
                    <button
                      key={result.name}
                      onClick={() => scrollToSection(result.id)}
                      className="w-full text-left px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-slate-700 transition-colors text-base border-b border-slate-700 last:border-b-0"
                    >
                      {result.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="xl:hidden pb-6 border-t border-slate-700">
            <div className="flex flex-col gap-3 pt-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-yellow-400 transition-all py-3 px-4 text-lg font-semibold pl-4 border-l-4 border-slate-700 hover:border-yellow-400 bg-slate-700/30 rounded-r-lg"
                >
                  {link.name}
                </button>
              ))}
              <button 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white gap-3 mt-6 w-full text-lg font-bold rounded-lg transition-all hover:scale-105 flex items-center justify-center py-4"
                onClick={() => window.open("https://wa.me/51993745240", "_blank")}
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;