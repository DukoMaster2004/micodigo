import { MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-black overflow-hidden pt-20 md:pt-24 lg:pt-32 px-4">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 md:-top-32 right-0 md:right-10 w-48 md:w-72 lg:w-80 h-48 md:h-72 lg:h-80 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 md:-bottom-32 -left-20 md:left-10 w-48 md:w-96 h-48 md:h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        {/* Math symbols - hidden on mobile */}
        <div className="hidden md:block absolute top-32 right-5 text-4xl md:text-6xl text-white/5 font-display select-none">∑</div>
        <div className="hidden md:block absolute bottom-32 left-5 text-5xl md:text-7xl text-white/5 font-display select-none">∫</div>
        <div className="hidden lg:block absolute top-1/2 right-32 text-5xl text-white/5 font-display select-none">π</div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 border border-white/20 mb-4 md:mb-8 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              <span className="text-xs md:text-sm text-white/90 font-medium">Bachillerato Internacional</span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-8 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
              Matemáticas IB con{" "}
              <span className="text-gradient-gold">pensamiento crítico</span>{" "}
              y mentoría personalizada
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-white/80 mb-6 md:mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
              Desarrollo tu potencial matemático con un enfoque riguroso y personalizado. 
              Preparación de excelencia para estudiantes del Bachillerato Internacional.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg shadow-gold animate-pulse-gold w-full sm:w-auto"
                onClick={() => window.open("https://wa.me/51993745240", "_blank")}
              >
                <MessageCircle className="w-5 h-5" />
                Contáctame
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white/40 text-white bg-white/10 hover:bg-white/20 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg w-full sm:w-auto"
                onClick={scrollToContact}
              >
                Conoce más
              </Button>
            </div>

            {/* Stats - responsive grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16 pt-8 md:pt-16 border-t border-white/10 animate-fade-in" style={{ animationDelay: "0.8s", opacity: 0 }}>
              <div className="text-center sm:text-left">
                <div className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-0.5 md:mb-1">10+</div>
                <div className="text-xs md:text-sm text-white/60">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-0.5 md:mb-1">500+</div>
                <div className="text-xs md:text-sm text-white/60">Estudiantes IB</div>
              </div>
              <div className="text-center sm:text-right">
                <div className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-0.5 md:mb-1">95%</div>
                <div className="text-xs md:text-sm text-white/60">Tasa de éxito</div>
              </div>
            </div>
          </div>

          {/* Right Image - hidden on small screens */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
            <img 
              src="/assets/img/logo.png" 
              alt="Avatar Profesor" 
              className="w-full max-w-xl drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 md:w-8 h-6 md:h-8 text-white/40" />
      </div>
    </section>
  );
};

export default HeroSection;