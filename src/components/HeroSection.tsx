import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";
import whatsappMockup from "@/assets/whatsapp-menu-mockup.jpg";

const HeroSection = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=34674565394&text=Me%20interesa%20saber%20m%C3%A1s%20sobre%20esto...";

  return (
    <section className="min-h-screen bg-hero-gradient flex items-center justify-center px-4 py-12 sm:py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Tu restaurante con{" "}
              <span className="text-yellow-300">menú digital</span>{" "}
              en menos de 24h
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
              Automatiza las consultas de tu carta por Web y multiplica tus reservas.
              <strong className="block mt-2 text-base sm:text-lg md:text-xl">Solo 49€ • Pago único • Sin mensualidades</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-yellow-50 text-lg px-8 py-4 shadow-glow animate-pulse-glow"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Smartphone className="mr-2" />
                  Quiero mi menú digital ya
                  <ArrowRight className="ml-2" />
                </a>
              </Button>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start sm:space-x-4 lg:space-x-6 text-white/80 text-sm sm:text-base space-y-2 sm:space-y-0">
              <div className="flex items-center justify-center lg:justify-start">
                <span className="text-green-300 mr-2">✓</span>
                Instalación en 24h
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <span className="text-green-300 mr-2">✓</span>
                Sin conocimientos técnicos
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <span className="text-green-300 mr-2">✓</span>
                Garantía total
              </div>
            </div>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <img 
                src={whatsappMockup} 
                alt="Menú digital por Web" 
                className="max-w-xs sm:max-w-md w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold animate-bounce">
                ¡En vivo!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;