import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CredentialsSection from "@/components/CredentialsSection";
import ServicesSection from "@/components/ServicesSection";
import MethodologySection from "@/components/MethodologySection";
import ContactSection from "@/components/ContactSection";
import VideosSection from "@/components/VideosSection";
import FormularioContacto from "@/components/FormularioContacto";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CredentialsSection />
      <ServicesSection />
      <MethodologySection />
      <ContactSection />
      <VideosSection />
      <FormularioContacto />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;