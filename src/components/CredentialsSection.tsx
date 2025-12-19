import { Award, Users, FileText } from "lucide-react";

const CredentialsSection = () => {
  const licenses = [
    {
      name: "International Coaching Federation",
      logo: "🏆",
      description: "ICF Certified Coach"
    },
    {
      name: "Professional Development Institute",
      logo: "📜",
      description: "Advanced Certification"
    },
    {
      name: "Global Training Standards",
      logo: "✓",
      description: "ISO Certified"
    }
  ];

  const notableStudents = [
    {
      name: "María González",
      title: "Directora de Recursos Humanos",
      company: "Tech Solutions Inc.",
      image: "👤"
    },
    {
      name: "Carlos Rodríguez",
      title: "CEO Startup",
      company: "Innovation Labs",
      image: "👤"
    },
    {
      name: "Elena Martínez",
      title: "Gerente de Proyectos",
      company: "Global Enterprises",
      image: "👤"
    },
    {
      name: "Luis Fernández",
      title: "Consultor Senior",
      company: "Business Consulting",
      image: "👤"
    }
  ];

  const certificates = [
    {
      name: "Master in Executive Coaching",
      issuer: "International Academy",
      year: "2022"
    },
    {
      name: "Advanced Communication Skills",
      issuer: "Professional Institute",
      year: "2021"
    },
    {
      name: "Leadership Development Program",
      issuer: "Global Training Center",
      year: "2023"
    },
    {
      name: "Certified Behavioral Analyst",
      issuer: "Behavioral Sciences Organization",
      year: "2022"
    }
  ];

  return (
    <section id="certificados" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Licencias, Certificados y Alumnos Destacados
          </h2>
          <p className="text-xl text-gray-600">
            Respaldado por las principales organizaciones y reconocido por nuestros alumnos de éxito
          </p>
        </div>

        {/* Licencias */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Licencias Profesionales</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {licenses.map((license, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{license.logo}</div>
                <h4 className="font-bold text-gray-900 mb-2">{license.name}</h4>
                <p className="text-gray-600">{license.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificados Populares */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <FileText className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Certificados Populares</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h4 className="font-bold text-gray-900 mb-2 text-sm">{cert.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Alumnos Destacados */}
        <div>
          <div className="flex items-center mb-8">
            <Users className="w-8 h-8 text-purple-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Alumnos de Prestigio</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {notableStudents.map((student, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-4">{student.image}</div>
                <h4 className="font-bold text-gray-900 mb-1">{student.name}</h4>
                <p className="text-sm text-blue-600 font-semibold mb-2">{student.title}</p>
                <p className="text-sm text-gray-600">{student.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;