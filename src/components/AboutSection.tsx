import { Award, BookOpen, Users, Target, GraduationCap, MapPin } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Excelencia Académica",
    description: "Formación especializada en el currículo IB con años de experiencia en educación de alto nivel."
  },
  {
    icon: BookOpen,
    title: "Pensamiento Lógico",
    description: "Desarrollo del razonamiento matemático y la capacidad de resolver problemas complejos."
  },
  {
    icon: Users,
    title: "Acompañamiento Personal",
    description: "Mentoría individualizada adaptada al ritmo y necesidades de cada estudiante."
  },
  {
    icon: Target,
    title: "Enfoque en Resultados",
    description: "Estrategias probadas para alcanzar las mejores calificaciones en el programa IB."
  }
];

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden px-4">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-64 md:h-96 bg-gradient-to-l from-accent/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 md:w-96 h-64 md:h-96 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-medium mb-4 md:mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Conoce al Profesor
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 md:mb-6">
            Transformando el aprendizaje de las{" "}
            <span className="text-gradient-gold">Matemáticas IB</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Professor Card */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:shadow-accent/20 transition-all duration-300 sticky top-24 md:top-28 lg:top-32">
              {/* Photo Section */}
              <div className="relative h-48 md:h-56 lg:h-64 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center overflow-hidden">
                <img 
                  src="/assets/img/profesor.jpg" 
                  alt="Profesor de Matemáticas IB" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              
              {/* Info Section */}
              <div className="p-4 md:p-6 lg:p-8">
                <h3 className="font-display text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-1">Profesor IB</h3>
                <p className="text-accent font-semibold text-xs md:text-sm mb-4 md:mb-6">Matemáticas Bachillerato Internacional</p>
                
                {/* Stats */}
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 pb-6 md:pb-8 border-b border-border">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">Experiencia</div>
                      <div className="font-semibold text-xs md:text-sm text-foreground">10+ Años</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">Estudiantes</div>
                      <div className="font-semibold text-xs md:text-sm text-foreground">500+ Graduados</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">Tasa de Éxito</div>
                      <div className="font-semibold text-xs md:text-sm text-foreground">95% Aprobados</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">Ubicación</div>
                      <div className="font-semibold text-xs md:text-sm text-foreground">Banda Zeta, Trujillo</div>
                    </div>
                  </div>
                </div>

                {/* Brief Bio */}
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Especialista en matemáticas del programa IB con formación internacional. Dedicado a transformar la educación matemática mediante metodologías innovadoras y mentoría personalizada.
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-2">
            <div className="mb-8 md:mb-10">
              <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-6">
                Mi Compromiso con la Excelencia
              </h3>
              
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                Como profesor especializado en Matemáticas del Bachillerato Internacional, 
                mi misión es guiar a cada estudiante hacia el dominio de las matemáticas 
                a través de un enfoque riguroso pero accesible.
              </p>
              
              <p className="text-xs md:text-sm lg:text-base text-muted-foreground mb-4 md:mb-8 leading-relaxed">
                Creo firmemente que todo estudiante puede alcanzar la excelencia matemática 
                con la guía adecuada. Mi metodología combina el rigor académico del programa IB 
                con técnicas pedagógicas modernas, creando un ambiente de aprendizaje donde 
                los estudiantes desarrollan confianza y habilidades duraderas.
              </p>

              <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                Durante mis años trabajando en educación internacional, he desarrollado un 
                sistema probado que no solo ayuda a los estudiantes a aprobar exámenes, sino 
                que cultiva un amor genuino por las matemáticas.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature) => (
                <div 
                  key={feature.title}
                  className="group p-4 md:p-6 rounded-lg md:rounded-2xl bg-card/50 backdrop-blur border border-border hover:border-accent/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-3 md:mb-4 group-hover:from-accent/30 group-hover:to-accent/20 transition-all">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-sm md:text-base text-foreground mb-1 md:mb-2 group-hover:text-accent transition-colors">{feature.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;