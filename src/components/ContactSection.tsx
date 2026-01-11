import { MessageCircle, Phone, Mail, MapPin, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-12 md:py-16 lg:py-32 bg-black relative overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 md:-top-32 lg:top-20 right-0 md:right-20 w-48 md:w-96 lg:w-96 h-48 md:h-96 lg:h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 md:-bottom-32 lg:-bottom-32 -left-40 md:-left-32 lg:-left-32 w-48 md:w-80 lg:w-80 h-48 md:h-80 lg:h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 text-white text-xs md:text-sm font-medium mb-4 md:mb-8 border border-white/20 backdrop-blur">
              <Zap className="w-3 h-3 md:w-4 md:h-4" />
              Conectemos Ahora
            </div>

            {/* Title */}
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-8 leading-tight">
              ¿Listo para alcanzar tu{" "}
              <span className="text-gradient-gold">máximo potencial</span>?
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-xl text-white/80 mb-6 md:mb-12 leading-relaxed">
              Da el primer paso hacia el éxito académico. Contáctame directamente 
              por WhatsApp para agendar tu primera clase o resolver cualquier duda.
            </p>

            {/* WhatsApp Buttons */}
            <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
              <Button 
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-3 px-6 md:px-8 py-5 md:py-6 text-sm md:text-base rounded-xl md:rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 group hover:scale-105 font-semibold"
                onClick={() => window.open("https://wa.me/51993745240", "_blank")}
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
                <div className="text-left flex-1">
                  <div className="text-xs md:text-sm">WhatsApp Línea 1</div>
                  <div className="text-xs opacity-90">+51 993 745 240</div>
                </div>
              </Button>

              <Button 
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-3 px-6 md:px-8 py-5 md:py-6 text-sm md:text-base rounded-xl md:rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 group hover:scale-105 font-semibold"
                onClick={() => window.open("https://wa.me/51937182708", "_blank")}
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
                <div className="text-left flex-1">
                  <div className="text-xs md:text-sm">WhatsApp Línea 2</div>
                  <div className="text-xs opacity-90">+51 937 182 708</div>
                </div>
              </Button>
            </div>

            {/* Info Grid */}
            <div className="space-y-4 pt-8 md:pt-12 border-t border-white/10">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#25D366]" />
                </div>
                <div className="min-w-0">
                  <div className="text-white/60 text-xs md:text-sm">Teléfonos</div>
                  <div className="text-white font-medium text-xs md:text-sm break-all">+51 993 745 240 • +51 937 182 708</div>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#25D366]" />
                </div>
                <div>
                  <div className="text-white/60 text-xs md:text-sm">Horario de atención</div>
                  <div className="text-white font-medium text-xs md:text-sm">Lunes a Sábado • 8:00 AM - 9:00 PM</div>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#25D366]" />
                </div>
                <div>
                  <div className="text-white/60 text-xs md:text-sm">Modalidad</div>
                  <div className="text-white font-medium text-xs md:text-sm">Online (Zoom/Meet) • Presencial (Lima)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Success Animation */}
          <div className="hidden lg:flex justify-center items-center relative h-full min-h-96">
            {/* Avatar with floating animation */}
            <div className="relative animate-float">
              {/* Floating stars */}
              <div className="absolute -top-16 -right-16 w-8 h-8 text-gold-light animate-bounce" style={{ animationDelay: "0s" }}>★</div>
              <div className="absolute -bottom-12 -left-20 w-6 h-6 text-primary animate-bounce" style={{ animationDelay: "0.5s" }}>★</div>
              <div className="absolute top-1/2 -right-24 w-5 h-5 text-accent animate-bounce" style={{ animationDelay: "1s" }}>★</div>

              {/* Main avatar image */}
              <img 
                src="/assets/img/otrorey.png" 
                alt="Éxito" 
                className="w-full max-w-xs md:max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;