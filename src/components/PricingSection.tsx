import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, ArrowRight } from "lucide-react";
const PricingSection = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=34674565394&text=Me%20interesa%20saber%20m%C3%A1s%20sobre%20esto...";
  const features = ["Chatbot de menú interactivo completo", "Configuración personalizada de horarios", "Integración con web (integración con WhatsApp Business disponible en niveles superiores)", "Personalización con tu logo y colores", "Instalación profesional en menos de 24h", "Soporte técnico incluido 1 mes"];
  return <section className="py-12 sm:py-16 md:py-20 bg-section-gradient">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Todo lo que necesitas por solo{" "}
            <span className="text-primary">49€</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-3 sm:mb-4">
            Pago único • Sin mensualidades • Sin letra pequeña
          </p>
          <p className="text-base sm:text-lg text-accent font-semibold">
            (Otros cobran +200€ por esto mismo)
          </p>
        </div>

        <Card className="p-6 sm:p-8 md:p-12 shadow-card border-2 border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 sm:px-6 py-1 sm:py-2 rounded-bl-2xl">
            <div className="flex items-center">
              <Star className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
              <span className="font-semibold text-xs sm:text-sm">MEJOR OFERTA</span>
            </div>
          </div>

          <div className="text-center mb-6 sm:mb-8 mt-8 sm:mt-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Menú Digital Completo
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 space-y-2 sm:space-y-0">
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary">49€</span>
              <div className="sm:ml-4 text-center sm:text-left">
                
                
              </div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Pago único • Para siempre • Sin sorpresas
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 mb-6 sm:mb-8">
            {features.map((feature, index) => <div key={index} className="flex items-start space-x-3 min-h-[40px]">
                <div className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-primary-foreground" />
                </div>
                <span className="text-sm sm:text-base text-foreground leading-tight">{feature}</span>
              </div>)}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-glow animate-pulse-glow w-full sm:w-auto max-w-full" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <span className="truncate">Sí, quiero mi menú digital ahora</span>
                <ArrowRight className="ml-2 flex-shrink-0" />
              </a>
            </Button>
            <p className="text-xs sm:text-sm text-muted-foreground mt-4">
              ⚡ Instalación en menos de 24 horas garantizada
            </p>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-accent/10 px-6 py-3 rounded-full border border-accent/20">
            <span className="text-accent font-semibold">🔥 OFERTA LIMITADA:</span>
            <span className="text-foreground">Solo para los primeros 20 restaurantes</span>
          </div>
        </div>
      </div>
    </section>;
};
export default PricingSection;