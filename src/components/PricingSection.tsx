import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, ArrowRight } from "lucide-react";

const PricingSection = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=34674565394&text=Me%20interesa%20saber%20m%C3%A1s%20sobre%20esto...";

  const features = [
    "Chatbot de menú interactivo completo",
    "Configuración personalizada de horarios",
    "Integración con web (integración con WhatsApp Business disponible en niveles superiores)",
    "Personalización con tu logo y colores",
    "Instalación profesional en menos de 24h",
    "Soporte técnico incluido por 3 meses"
  ];

  return (
    <section className="py-20 bg-section-gradient">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Todo lo que necesitas por solo{" "}
            <span className="text-primary">49€</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Pago único • Sin mensualidades • Sin letra pequeña
          </p>
          <p className="text-lg text-accent font-semibold">
            (Otros cobran +200€ por esto mismo)
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-card border-2 border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-6 py-2 rounded-bl-2xl">
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              <span className="font-semibold">MEJOR OFERTA</span>
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Menú Digital Completo
            </h3>
            <div className="flex items-center justify-center mb-4">
              <span className="text-5xl md:text-6xl font-bold text-primary">49€</span>
              <div className="ml-4 text-left">
                <div className="text-sm text-muted-foreground line-through">
                  Valor real: 249€
                </div>
                <div className="text-sm font-semibold text-destructive">
                  Ahorro: 200€
                </div>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Pago único • Para siempre • Sin sorpresas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 shadow-glow animate-pulse-glow"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Sí, quiero mi menú digital ahora
                <ArrowRight className="ml-2" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
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
    </section>
  );
};

export default PricingSection;