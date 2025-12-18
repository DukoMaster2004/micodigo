import { Award, BookOpen, Users, Target } from "lucide-react";

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
    <section id="sobre-mi" className="py-12 md:py-16 lg:py-24 bg-background relative overflow-hidden px-4">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Text Content - Left side */}
          <div className="lg:col-span-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-medium mb-4 md:mb-6">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Sobre el Profesor
            </div>
            
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
              Transformando el aprendizaje de las{" "}
              <span className="text-primary">Matemáticas IB</span>
            </h2>
            
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              Como profesor especializado en Matemáticas del Bachillerato Internacional, 
              mi misión es guiar a cada estudiante hacia el dominio de las matemáticas 
              a través de un enfoque riguroso pero accesible.
            </p>
            
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Creo firmemente que todo estudiante puede alcanzar la excelencia matemática 
              con la guía adecuada. Mi metodología combina el rigor académico del programa IB 
              con técnicas pedagógicas modernas.
            </p>

            <div className="flex items-center gap-3 md:gap-4">
              <img 
                src="/assets/img/logo.png" 
                alt="IB Logo" 
                className="h-12 md:h-14 w-auto"
              />
              <div>
                <div className="font-semibold text-sm md:text-base text-foreground">IB MATH – Banda Z</div>
                <div className="text-xs md:text-sm text-muted-foreground">Profesor de Matemáticas IB</div>
              </div>
            </div>
          </div>

          {/* Features Grid - Right side */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature) => (
                <div 
                  key={feature.title}
                  className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-accent/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base text-foreground mb-2">{feature.title}</h3>
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