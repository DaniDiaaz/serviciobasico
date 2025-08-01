import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Shield, ArrowRight, AlertTriangle } from "lucide-react";

const UrgencySection = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=34674565394&text=Me%20interesa%20saber%20m%C3%A1s%20sobre%20esto...";

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary to-accent text-white">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <AlertTriangle className="w-12 sm:w-16 h-12 sm:h-16 text-yellow-300 animate-pulse" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
            Cada día sin esto son{" "}
            <span className="text-yellow-300">clientes que pierdes</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 leading-relaxed">
            Mientras lees esto, tus competidores ya están automatizando sus restaurantes
            y robándote clientes que podrían ser tuyos
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 mb-8 sm:mb-12">
          <Card className="bg-white/10 backdrop-blur border-white/20 p-6 sm:p-8">
            <div className="flex items-center mb-4">
              <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-300 mr-3" />
              <h3 className="text-lg sm:text-2xl font-bold">Instalación en 24h</h3>
            </div>
            <p className="text-base sm:text-lg opacity-90">
              No esperes semanas. Mañana por la noche ya tendrás tu menú digital 
              funcionando y ahorrándote tiempo.
            </p>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 p-6 sm:p-8">
            <div className="flex items-center mb-4">
              <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-green-300 mr-3" />
              <h3 className="text-lg sm:text-2xl font-bold">Garantía total</h3>
            </div>
            <p className="text-base sm:text-lg opacity-90">
              Si no funciona como prometemos, te devolvemos tu dinero. 
              Sin preguntas, sin complicaciones.
            </p>
          </Card>
        </div>

        <div className="text-center bg-white/10 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/20 mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
            🔥 Solo para los primeros 20 restaurantes
          </h3>
          <p className="text-base sm:text-lg opacity-90">
            Después de estas 20 plazas, el precio sube a 149€
          </p>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-yellow-50 text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 shadow-2xl animate-pulse-glow transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Sí, quiero mi menú digital ahora
              <ArrowRight className="ml-2 sm:ml-3 w-5 sm:w-6 h-5 sm:h-6" />
            </a>
          </Button>
          <p className="text-sm sm:text-lg mt-4 sm:mt-6 opacity-90">
            ⚡ Respuesta en menos de 1 hora • Instalación garantizada en 24h
          </p>
        </div>

        <div className="mt-12 text-center border-t border-white/20 pt-8">
          <p className="text-xl font-semibold mb-2">
            "El mejor momento para plantar un árbol fue hace 20 años. 
            El segundo mejor momento es ahora."
          </p>
          <p className="opacity-75">
            No dejes que pase otro día perdiendo clientes por métodos anticuados
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;