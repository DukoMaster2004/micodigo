import { Play, Video } from "lucide-react";
import { useState } from "react";

interface VideoType {
  id: string;
  titulo: string;
  thumbnail: string;
  duracion: string;
}

const VideosSection = () => {
  const [tab, setTab] = useState<"presencial" | "virtual">("presencial");
  const [videoSeleccionado, setVideoSeleccionado] = useState<string | null>(null);

  const videosPresencial: VideoType[] = [
    {
      id: "1",
      titulo: "Clase Presencial - Introducción",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f70a504f0?w=400&h=225&fit=crop",
      duracion: "12:45"
    },
    {
      id: "2",
      titulo: "Sesión Presencial - Matemáticas",
      thumbnail: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=225&fit=crop",
      duracion: "18:30"
    },
    {
      id: "3",
      titulo: "Taller Presencial - Prácticas",
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=225&fit=crop",
      duracion: "15:20"
    },
    {
      id: "4",
      titulo: "Clase Presencial - Avanzada",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-8ea1c3b4be17?w=400&h=225&fit=crop",
      duracion: "22:15"
    }
  ];

  const videosVirtual: VideoType[] = [
    {
      id: "5",
      titulo: "Clase Virtual - Zoom",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop",
      duracion: "45:00"
    },
    {
      id: "6",
      titulo: "Sesión Online - Meet",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-adf4e5e5c2b9?w=400&h=225&fit=crop",
      duracion: "38:15"
    },
    {
      id: "7",
      titulo: "Tutoría Virtual - Resolución",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=225&fit=crop",
      duracion: "28:50"
    },
    {
      id: "8",
      titulo: "Webinar - Lección Magistral",
      thumbnail: "https://images.unsplash.com/photo-1491841573634-28fb1df32e3f?w=400&h=225&fit=crop",
      duracion: "55:30"
    }
  ];

  const videosActuales = tab === "presencial" ? videosPresencial : videosVirtual;

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden px-4">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 border border-white/20 backdrop-blur">
            <Video className="w-4 h-4" />
            Galería de Videos
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mira nuestras <span className="text-[#25D366]">clases en acción</span>
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explora videos de nuestras clases presenciales y virtuales. Conoce nuestro método de enseñanza.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-12 justify-center">
          <button
            onClick={() => setTab("presencial")}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              tab === "presencial"
                ? "bg-[#25D366] text-black shadow-lg shadow-[#25D366]/50"
                : "bg-white/10 text-white border border-white/20 hover:border-[#25D366]/50"
            }`}
          >
            📍 Clases Presenciales
          </button>
          <button
            onClick={() => setTab("virtual")}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              tab === "virtual"
                ? "bg-[#25D366] text-black shadow-lg shadow-[#25D366]/50"
                : "bg-white/10 text-white border border-white/20 hover:border-[#25D366]/50"
            }`}
          >
            💻 Clases Virtuales
          </button>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {videosActuales.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
              onClick={() => setVideoSeleccionado(video.id)}
            >
              <div className="relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/20">
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#25D366]/50">
                      <Play className="w-8 h-8 text-black fill-black ml-1" />
                    </div>
                  </div>
                  {/* Duración */}
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white font-semibold">
                    {video.duracion}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-[#25D366] transition-colors">
                    {video.titulo}
                  </h3>
                  <div className="flex items-center gap-2 text-[#25D366] text-sm font-medium">
                    <Play className="w-4 h-4" />
                    Ver video
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Video */}
        {videoSeleccionado && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-4xl">
              {/* Cerrar */}
              <button
                onClick={() => setVideoSeleccionado(null)}
                className="absolute -top-10 right-0 text-white hover:text-[#25D366] transition-colors text-2xl font-bold"
              >
                ✕
              </button>

              {/* Video Player */}
              <div className="relative bg-black rounded-xl overflow-hidden border border-white/20">
                <div className="aspect-video bg-black flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#25D366]/50">
                      <Play className="w-10 h-10 text-black fill-black ml-1" />
                    </div>
                    <p className="text-white font-semibold mb-2">
                      {videosActuales.find(v => v.id === videoSeleccionado)?.titulo}
                    </p>
                    <p className="text-white/60 text-sm">
                      Video de demostración - Duración: {videosActuales.find(v => v.id === videoSeleccionado)?.duracion}
                    </p>
                    <p className="text-white/40 text-xs mt-4">
                      (Aquí iría el reproductor de video real)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </section>
  );
};

export default VideosSection;