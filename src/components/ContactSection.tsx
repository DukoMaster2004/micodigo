import { MessageCircle, Phone, Mail, MapPin, Zap, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const ContactSection = () => {
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop"
  ]);

  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <section id="contacto" className="py-12 md:py-16 lg:py-32 bg-black relative overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 md:-top-32 lg:top-20 right-0 md:right-20 w-48 md:w-96 lg:w-96 h-48 md:h-96 lg:h-96 bg-green-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 md:-bottom-32 lg:-bottom-32 -left-40 md:-left-32 lg:-left-32 w-48 md:w-80 lg:w-80 h-48 md:h-80 lg:h-80 bg-green-500/10 rounded-full blur-3xl" />
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
              <span className="text-[#25D366]">máximo potencial</span>?
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
                className="w-full relative overflow-hidden bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white gap-3 px-6 md:px-8 py-5 md:py-6 text-sm md:text-base rounded-2xl shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-500 group hover:scale-[1.02] font-semibold border border-white/10 backdrop-blur-sm"
                onClick={() => window.open("https://wa.me/51993745240", "_blank")}
              >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="text-left flex-1 relative">
                  <div className="text-sm md:text-base font-bold">WhatsApp Línea 1</div>
                  <div className="text-xs md:text-sm opacity-90 font-normal">+51 993 745 240</div>
                </div>
                <div className="relative text-xl group-hover:translate-x-1 transition-transform">→</div>
              </Button>

              <Button 
                size="lg"
                className="w-full relative overflow-hidden bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white gap-3 px-6 md:px-8 py-5 md:py-6 text-sm md:text-base rounded-2xl shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-500 group hover:scale-[1.02] font-semibold border border-white/10 backdrop-blur-sm"
                onClick={() => window.open("https://wa.me/51937182708", "_blank")}
              >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="text-left flex-1 relative">
                  <div className="text-sm md:text-base font-bold">WhatsApp Línea 2</div>
                  <div className="text-xs md:text-sm opacity-90 font-normal">+51 937 182 708</div>
                </div>
                <div className="relative text-xl group-hover:translate-x-1 transition-transform">→</div>
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

              {/* Payment Methods */}
              <div className="flex items-start gap-3 md:gap-4 pt-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-[#25D366]" />
                </div>
                <div className="flex-1">
                  <div className="text-white/60 text-xs md:text-sm mb-2">Métodos de Pago</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => setShowPaymentModal(true)}
                      className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs font-semibold transition-all hover:scale-105"
                    >
                      <span className="text-sm">📱</span>
                      Yape
                    </button>
                    <button 
                      onClick={() => setShowPaymentModal(true)}
                      className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-xs font-semibold transition-all hover:scale-105"
                    >
                      <span className="text-sm">💳</span>
                      Plin
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Carousel Gallery */}
          <div className="hidden lg:flex justify-center items-center relative h-full min-h-96 overflow-hidden">
            {/* Floating decorative elements */}
            <div className="absolute -top-8 right-0 w-8 h-8 text-[#25D366] animate-bounce z-20" style={{ animationDelay: "0s" }}>★</div>
            <div className="absolute -bottom-8 left-0 w-6 h-6 text-[#25D366] animate-bounce z-20" style={{ animationDelay: "0.5s" }}>★</div>
            <div className="absolute top-1/2 right-0 w-5 h-5 text-[#25D366] animate-bounce z-20" style={{ animationDelay: "1s" }}>★</div>

            {/* Carousel Container with Gradient Masks */}
            <div className="relative w-full max-w-2xl">
              {/* Left Gradient Mask */}
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
              
              {/* Right Gradient Mask */}
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

              {/* Scrolling Images Container */}
              <div className="flex gap-6 animate-scroll-left">
                {/* First Set of Images */}
                <div className="flex gap-6 flex-shrink-0">
                  {images.map((img, idx) => (
                    <div key={`first-${idx}`} className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#25D366]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#25D366]/20 w-48 flex-shrink-0">
                      <div className="aspect-[4/5] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        <img 
                          src={img} 
                          alt={`Imagen ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Duplicate Set for Seamless Loop */}
                <div className="flex gap-6 flex-shrink-0">
                  {images.map((img, idx) => (
                    <div key={`second-${idx}`} className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#25D366]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#25D366]/20 w-48 flex-shrink-0">
                      <div className="aspect-[4/5] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        <img 
                          src={img} 
                          alt={`Imagen ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl p-6 md:p-8 max-w-md w-full border border-white/10 animate-in fade-in zoom-in-95">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Métodos de Pago</h3>
            
            <div className="space-y-4 mb-6">
              {/* Yape */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-500/30 hover:border-blue-500/60 transition-colors cursor-pointer group"
                onClick={() => window.open("https://wa.me/51993745240?text=Hola%2C%20quiero%20pagar%20con%20Yape", "_blank")}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">📱</span>
                  <div>
                    <h4 className="font-bold text-white">Yape</h4>
                    <p className="text-xs text-white/60">Transferencia digital</p>
                  </div>
                </div>
                <p className="text-xs text-white/50 ml-12">Escríbeme por WhatsApp para coordinar el pago</p>
              </div>

              {/* Plin */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-500/30 hover:border-purple-500/60 transition-colors cursor-pointer group"
                onClick={() => window.open("https://wa.me/51993745240?text=Hola%2C%20quiero%20pagar%20con%20Plin", "_blank")}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">💳</span>
                  <div>
                    <h4 className="font-bold text-white">Plin</h4>
                    <p className="text-xs text-white/60">Billetera digital</p>
                  </div>
                </div>
                <p className="text-xs text-white/50 ml-12">Escríbeme por WhatsApp para coordinar el pago</p>
              </div>

              {/* Transferencia Bancaria */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-green-600/20 to-green-700/20 border border-green-500/30 hover:border-green-500/60 transition-colors cursor-pointer group"
                onClick={() => window.open("https://wa.me/51993745240?text=Hola%2C%20quiero%20realizar%20una%20transferencia%20bancaria", "_blank")}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">🏦</span>
                  <div>
                    <h4 className="font-bold text-white">Transferencia Bancaria</h4>
                    <p className="text-xs text-white/60">Transferencia directa</p>
                  </div>
                </div>
                <p className="text-xs text-white/50 ml-12">Escríbeme por WhatsApp para coordinar el pago</p>
              </div>
            </div>

            <button
              onClick={() => setShowPaymentModal(false)}
              className="w-full py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll-left {
          animation: scroll-left 10s linear infinite;
        }
        
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;