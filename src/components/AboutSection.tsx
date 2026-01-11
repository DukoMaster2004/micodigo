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
    <section id="sobre-mi" className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-slate-600 to-slate-700 relative overflow-hidden px-4">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-64 md:h-96 bg-gradient-to-l from-slate-500/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 md:w-96 h-64 md:h-96 bg-gradient-to-r from-slate-500/20 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 text-white text-xs md:text-sm font-medium mb-4 md:mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Conoce al Profesor
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6">
            Transformando el aprendizaje de las{" "}
            <span className="text-yellow-400">Matemáticas IB</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Professor Card */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800 border border-slate-600 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:shadow-white/10 transition-all duration-300 sticky top-24 md:top-28 lg:top-32">
              {/* Photo Section */}
              <div className="relative h-64 md:h-80 lg:h-96 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center overflow-hidden">
                <img 
                  src="public/assets/img/perfil.jpg" 
                  alt="Profesor de Matemáticas IB" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent" />
              </div>
              
              {/* Info Section */}
              <div className="p-4 md:p-6 lg:p-8">
                <h3 className="font-display text-lg md:text-xl lg:text-2xl font-bold text-white mb-1">Profesor IB</h3>
                <p className="text-yellow-400 font-semibold text-xs md:text-sm mb-4 md:mb-6">Matemáticas Bachillerato Internacional</p>
                
                {/* Stats */}
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 pb-6 md:pb-8 border-b border-slate-600">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-400">Experiencia</div>
                      <div className="font-semibold text-xs md:text-sm text-white">10+ Años</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-400">Estudiantes</div>
                      <div className="font-semibold text-xs md:text-sm text-white">500+ Graduados</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-400">Tasa de Éxito</div>
                      <div className="font-semibold text-xs md:text-sm text-white">95% Aprobados</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-400">Ubicación</div>
                      <div className="font-semibold text-xs md:text-sm text-white">Banda Zeta, Trujillo</div>
                    </div>
                  </div>
                </div>

                {/* Brief Bio */}
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  Especialista en matemáticas del programa IB con formación internacional. Dedicado a transformar la educación matemática mediante metodologías innovadoras y mentoría personalizada.
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-2">
            <div className="mb-8 md:mb-10">
              <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6">
                Mi Compromiso con la Excelencia
              </h3>
              
              <p className="text-sm md:text-base lg:text-lg text-slate-200 mb-4 md:mb-6 leading-relaxed">
                Como profesor especializado en Matemáticas del Bachillerato Internacional, 
                mi misión es guiar a cada estudiante hacia el dominio de las matemáticas 
                a través de un enfoque riguroso pero accesible.
              </p>
              
              <p className="text-xs md:text-sm lg:text-base text-slate-200 mb-4 md:mb-8 leading-relaxed">
                Creo firmemente que todo estudiante puede alcanzar la excelencia matemática 
                con la guía adecuada. Mi metodología combina el rigor académico del programa IB 
                con técnicas pedagógicas modernas, creando un ambiente de aprendizaje donde 
                los estudiantes desarrollan confianza y habilidades duraderas.
              </p>

              <p className="text-xs md:text-sm lg:text-base text-slate-200 leading-relaxed">
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
                  className="group p-4 md:p-6 rounded-lg md:rounded-2xl bg-slate-700/50 backdrop-blur border border-slate-600 hover:border-yellow-400/50 hover:bg-slate-700/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-400/10 flex items-center justify-center mb-3 md:mb-4 group-hover:from-yellow-400/30 group-hover:to-yellow-400/20 transition-all">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                  </div>
                  <h4 className="font-semibold text-sm md:text-base text-white mb-1 md:mb-2 group-hover:text-yellow-400 transition-colors">{feature.title}</h4>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">{feature.description}</p>
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