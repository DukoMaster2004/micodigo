import { Send, Mail } from "lucide-react";
import { useState, ChangeEvent } from "react";

interface FormDataType {
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  horario: string;
  mensaje: string;
}

const FormularioContacto = () => {
  const [formData, setFormData] = useState<FormDataType>({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    horario: "",
    mensaje: ""
  });

  const [enviado, setEnviado] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [mostrarOpciones, setMostrarOpciones] = useState<boolean>(false);

  const horariosDisponibles = [
    "8:00 AM - 9:00 AM",
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
    "7:00 PM - 8:00 PM",
    "8:00 PM - 9:00 PM"
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError("");
  };

  const handleSubmit = () => {
    if (!formData.nombre || !formData.email || !formData.asunto || !formData.horario || !formData.mensaje) {
      setError("Por favor completa todos los campos requeridos");
      return;
    }

    setError("");
    setMostrarOpciones(true);
  };

  const enviarPorWhatsApp = (numero: string) => {
    const mensaje = `Hola, mi nombre es ${formData.nombre}. \n\nAsunto: ${formData.asunto}\n\nHorario deseado: ${formData.horario}\n\nMensaje: ${formData.mensaje}\n\nMi email: ${formData.email}\nMi teléfono: ${formData.telefono || "No proporcionado"}`;
    const mensajeCodificado = encodeURIComponent(mensaje);
    window.open(`https://wa.me/${numero}?text=${mensajeCodificado}`, "_blank");
    
    setEnviado(true);
    setMostrarOpciones(false);
    
    setTimeout(() => {
      setEnviado(false);
      setFormData({ nombre: "", email: "", telefono: "", asunto: "", horario: "", mensaje: "" });
    }, 3000);
  };

  return (
    <section id="formulario" className="py-16 md:py-24 bg-black relative overflow-hidden px-4">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 border border-white/20 backdrop-blur">
            <Mail className="w-4 h-4" />
            Formulario de Contacto
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cuéntame más sobre tu <span className="text-[#25D366]">consulta</span>
          </h2>
          
          <p className="text-white/60 text-lg">
            Completa el formulario y me pondré en contacto contigo lo antes posible
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="space-y-6">
            {/* Nombre y Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-semibold mb-3">
                  Nombre <span className="text-[#25D366]">*</span>
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#25D366] focus:bg-white/15 transition-all duration-300"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-semibold mb-3">
                  Email <span className="text-[#25D366]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#25D366] focus:bg-white/15 transition-all duration-300"
                />
              </div>
            </div>

            {/* Teléfono y Asunto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-semibold mb-3">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+51 999 999 999"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#25D366] focus:bg-white/15 transition-all duration-300"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-semibold mb-3">
                  Asunto <span className="text-[#25D366]">*</span>
                </label>
                <input
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  placeholder="Asunto del mensaje"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#25D366] focus:bg-white/15 transition-all duration-300"
                />
              </div>
            </div>

            {/* Horarios disponibles */}
            <div>
              <label className="block text-white text-sm font-semibold mb-3">
                Horario deseado para tus clases <span className="text-[#25D366]">*</span>
              </label>
              <div className="relative rounded-lg overflow-hidden">
                {/* Fondo decorativo izquierdo */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#25D366]/20 to-transparent pointer-events-none z-10" />
                
                {/* Fondo decorativo derecho */}
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#25D366]/20 to-transparent pointer-events-none z-10" />
                
                {/* Grid de horarios */}
                <div className="relative z-20 grid grid-cols-2 md:grid-cols-3 gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
                  {horariosDisponibles.map((hora) => (
                    <button
                      key={hora}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, horario: hora }))}
                      className={`py-2 px-3 rounded-lg font-semibold transition-all duration-300 text-sm ${
                        formData.horario === hora
                          ? "bg-[#25D366] text-black border border-[#25D366] shadow-lg shadow-[#25D366]/50"
                          : "bg-white/10 text-white border border-white/20 hover:border-[#25D366]/50 hover:bg-white/15"
                      }`}
                    >
                      {hora}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-white text-sm font-semibold mb-3">
                Mensaje <span className="text-[#25D366]">*</span>
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Cuéntame tu consulta con todos los detalles..."
                rows={6}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#25D366] focus:bg-white/15 transition-all duration-300 resize-none"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Success Message */}
            {enviado && (
              <div className="p-4 bg-[#25D366]/20 border border-[#25D366] rounded-lg text-[#25D366] text-center font-semibold animate-pulse">
                ✓ ¡Mensaje enviado a WhatsApp! Pronto te responderé.
              </div>
            )}

            {/* Modal de Selección de Número */}
            {mostrarOpciones && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div className="bg-black border border-white/20 rounded-2xl p-8 max-w-md w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">¿A cuál número deseas enviar?</h3>
                  <p className="text-white/60 mb-6">Selecciona la línea por la que prefieres recibir respuesta</p>
                  
                  <div className="space-y-3">
                    <button
                      onClick={() => enviarPorWhatsApp("51993745240")}
                      className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/50"
                    >
                      📱 Línea 1: +51 993 745 240
                    </button>
                    
                    <button
                      onClick={() => enviarPorWhatsApp("51937182708")}
                      className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/50"
                    >
                      📱 Línea 2: +51 937 182 708
                    </button>
                  </div>
                  
                  <button
                    onClick={() => setMostrarOpciones(false)}
                    className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 border border-white/20"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full relative overflow-hidden bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-500 group hover:shadow-2xl hover:shadow-[#25D366]/50 hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <Send className="w-5 h-5 relative" />
              <span className="relative">
                {mostrarOpciones ? "Selecciona un número..." : "Enviar mensaje"}
              </span>
            </button>
          </div>
        </div>

        {/* Info Footer */}
        <div className="mt-12 text-center">
          <p className="text-white/60 mb-4">¿Prefieres contactarme directamente?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/51993745240"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-[#25D366] text-[#25D366] rounded-lg hover:bg-[#25D366]/10 transition-all"
            >
              WhatsApp Línea 1
            </a>
            <a 
              href="https://wa.me/51937182708"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-[#25D366] text-[#25D366] rounded-lg hover:bg-[#25D366]/10 transition-all"
            >
              WhatsApp Línea 2
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FormularioContacto;