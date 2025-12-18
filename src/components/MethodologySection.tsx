import { Lightbulb, Brain, Heart, TrendingUp } from "lucide-react";

const methodologySteps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Aprendizaje Basado en Comprensión",
    description: "No memorización, sino entendimiento profundo. Cada concepto se explica desde sus fundamentos para construir conocimiento sólido y duradero.",
    color: "from-blue-deep to-blue-medium"
  },
  {
    number: "02",
    icon: Brain,
    title: "Desarrollo del Pensamiento Crítico",
    description: "Formación de habilidades analíticas que van más allá de las matemáticas. Aprenderás a abordar problemas complejos con metodología y creatividad.",
    color: "from-accent to-gold-light"
  },
  {
    number: "03",
    icon: Heart,
    title: "Mentoría Constante y Personalizada",
    description: "Acompañamiento continuo adaptado a tu ritmo. Identificamos fortalezas y áreas de mejora para diseñar un plan de estudio efectivo.",
    color: "from-blue-medium to-primary"
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Enfoque en el Éxito IB",
    description: "Preparación estratégica orientada a los criterios de evaluación del IB. Maximizamos tu potencial para obtener las mejores calificaciones.",
    color: "from-gold-dark to-accent"
  }
];

const MethodologySection = () => {
  return (
    <section id="metodologia" className="py-12 md:py-16 lg:py-24 bg-background relative overflow-hidden px-4">
      {/* Background Pattern - hidden on small screens */}
      <div className="absolute inset-0 opacity-5 hidden md:block">
        <div className="absolute top-1/4 left-1/4 text-6xl md:text-7xl lg:text-9xl font-display text-foreground">∮</div>
        <div className="absolute bottom-1/4 right-1/4 text-6xl md:text-7xl lg:text-9xl font-display text-foreground">∞</div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Metodología IB
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Un enfoque que{" "}
            <span className="text-gradient-gold">transforma</span>
          </h2>
          
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
            Mi metodología está diseñada específicamente para el éxito en el 
            Bachillerato Internacional, combinando rigor académico con pedagogía moderna.
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto mb-12 md:mb-16">
          {methodologySteps.map((step) => (
            <div 
              key={step.title}
              className="relative group"
            >
              {/* Card */}
              <div className="p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl lg:rounded-3xl bg-card border border-border hover:border-accent/30 transition-all duration-300 h-full">
                {/* Number Badge */}
                <div className={`absolute -top-2 md:-top-3 lg:-top-4 -left-2 md:-left-3 lg:-left-4 w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-lg md:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-primary-foreground font-bold text-xs md:text-sm lg:text-sm">{step.number}</span>
                </div>

                <div className="pt-2 md:pt-4">
                  {/* Icon */}
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg md:rounded-xl lg:rounded-2xl bg-secondary flex items-center justify-center mb-3 md:mb-4 lg:mb-6 group-hover:bg-accent/10 transition-colors">
                    <step.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary group-hover:text-accent transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-base md:text-lg lg:text-xl font-semibold text-foreground mb-2 md:mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center">
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-base md:text-lg lg:text-2xl font-display italic text-foreground/80 mb-3 md:mb-4">
              "Las matemáticas no son sobre números, ecuaciones o algoritmos: 
              son sobre entender."
            </p>
            <cite className="text-xs md:text-sm text-muted-foreground">— William Paul Thurston</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;