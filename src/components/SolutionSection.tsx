import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Menu, Clock, ArrowRight } from "lucide-react";

const SolutionSection = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=34674565394&text=Me%20interesa%20saber%20m%C3%A1s%20sobre%20esto...";

  const steps = [
    {
      number: "1",
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      title: "El cliente ve el botón del asistente en tu página web",
      description: "En tu web, redes sociales o tarjeta de visita aparece el botón para contactar contigo"
    },
    {
      number: "2",
      icon: <Menu className="w-8 h-8 text-primary" />,
      title: "Escribe y recibe el menú automáticamente",
      description: "Al escribir, recibe instantly tu carta completa con precios, descripciones y disponibilidad"
    },
    {
      number: "3",
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "El restaurante atiende solo cuando toca",
      description: "Solo interviene cuando hay una consulta específica o quiere hacer una reserva real"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            La solución es más{" "}
            <span className="text-primary">simple</span>{" "}
            de lo que imaginas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            En solo 3 pasos automatizas completamente la consulta de tu menú y liberas tiempo para atender de verdad
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 text-center hover:shadow-card transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  <div className="flex justify-center mb-4">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center bg-primary/5 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿El resultado?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">80%</div>
              <p className="text-muted-foreground">Menos consultas repetitivas</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Atención automática</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">+40%</div>
              <p className="text-muted-foreground">Más reservas efectivas</p>
            </div>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Quiero automatizar mi restaurante
              <ArrowRight className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;