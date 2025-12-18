import { GraduationCap, FileText, RefreshCw, Video, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: GraduationCap,
    title: "Clases Particulares",
    description: "Sesiones personalizadas adaptadas al nivel SL o HL, cubriendo todos los temas del currículo IB.",
    features: ["Matemáticas AA & AI", "Nivel SL y HL", "Todas las unidades"]
  },
  {
    icon: FileText,
    title: "Preparación Exámenes",
    description: "Entrenamiento intensivo para exámenes finales IB con estrategias probadas.",
    features: ["Paper 1, 2 & 3", "Internal Assessment (IA)", "Simulacros"]
  },
  {
    icon: RefreshCw,
    title: "Refuerzo Académico",
    description: "Fortalecimiento de bases matemáticas y trabajo en áreas de dificultad específicas.",
    features: ["Diagnóstico inicial", "Plan personalizado", "Seguimiento continuo"]
  },
  {
    icon: Video,
    title: "Online y Presencial",
    description: "Flexibilidad total para aprender desde cualquier lugar según tu preferencia.",
    features: ["Zoom/Meet", "Pizarra digital", "Grabación de sesiones"]
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-12 md:py-16 lg:py-24 bg-secondary/30 relative px-4">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-48 md:w-64 lg:w-80 h-48 md:h-64 lg:h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-medium mb-4 md:mb-6">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            Servicios
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Soluciones académicas para tu{" "}
            <span className="text-primary">éxito en IB</span>
          </h2>
          
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
            Ofrezco un abanico completo de servicios diseñados para cubrir todas 
            tus necesidades académicas en el programa de Matemáticas IB.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-12">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl lg:rounded-3xl bg-card border border-border hover:border-accent/40 hover:shadow-card transition-all duration-500"
            >
              <div className="flex items-start gap-3 md:gap-4 lg:gap-6">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg md:rounded-xl lg:rounded-2xl bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary-foreground" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base md:text-lg lg:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-1 md:space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs md:text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 px-6 md:px-8 py-4 md:py-6 text-sm md:text-base"
            onClick={() => window.open("https://wa.me/51993745240", "_blank")}
          >
            Consulta disponibilidad
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;