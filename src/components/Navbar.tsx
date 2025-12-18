import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
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

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24 lg:h-32">
          {/* Logo */}
          <a 
            href="#inicio" 
            onClick={(e) => { e.preventDefault(); scrollToSection("#inicio"); }}
            className="flex items-center gap-2 md:gap-3 flex-shrink-0"
          >
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
              IB Math <span className="text-accent">Banda 7</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-sm xl:text-base font-medium text-gray-800 hover:text-accent transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              variant="default"
              className="bg-green-500 hover:bg-green-600 text-white gap-2 shadow-lg text-sm xl:text-base px-4 xl:px-6 py-2 xl:py-3"
              onClick={() => window.open("https://wa.me/51993745240", "_blank")}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="text-gray-800 hover:text-accent transition-colors py-2 text-sm"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                variant="default"
                className="bg-green-500 hover:bg-green-600 text-white gap-2 mt-2 w-full text-sm"
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