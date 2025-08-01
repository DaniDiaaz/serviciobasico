import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, Download, ArrowRight } from "lucide-react";
import ebookReservas from "@/assets/ebook-reservas.jpg";
import guiaMenus from "@/assets/guia-menus.jpg";
import ebookWhatsapp from "@/assets/ebook-whatsapp.jpg";

const BonusSection = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=34674565394&text=Me%20interesa%20saber%20m%C3%A1s%20sobre%20esto...";

  const bonuses = [
    {
      image: ebookReservas,
      title: "7 errores que están matando tus reservas",
      subtitle: "(y cómo evitarlos)",
      description: "Descubre los errores más comunes que cometen los restauradores y cómo solucionarlos inmediatamente.",
      value: "29€"
    },
    {
      image: guiaMenus,
      title: "Menús que convierten",
      subtitle: "Guía visual completa",
      description: "Aprende a diseñar cartas que realmente generen más ventas con técnicas de psicología aplicada.",
      value: "39€"
    },
    {
      image: ebookWhatsapp,
      title: "Clientes llenos, mesas vacías",
      subtitle: "Cómo vender más usando Web",
      description: "Estrategias probadas para convertir tu web en tu mejor vendedor y llenar tu restaurante.",
      value: "29€"
    }
  ];

  const totalValue = bonuses.reduce((sum, bonus) => sum + parseInt(bonus.value), 0);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
            <Gift className="w-10 sm:w-12 h-10 sm:h-12 text-accent mb-2 sm:mb-0 sm:mr-4" />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
              Bonus <span className="text-accent">GRATIS</span> incluidos
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 leading-relaxed">
            Cuando pides tu menú digital hoy, también te llevas estos recursos premium
          </p>
          <div className="inline-flex flex-col sm:flex-row items-center bg-accent/10 px-4 sm:px-6 py-3 rounded-full border border-accent/20">
            <span className="text-xl sm:text-2xl font-bold text-accent">+{totalValue}€</span>
            <span className="text-foreground sm:ml-2 text-sm sm:text-base">de valor agregado</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-card transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={bonus.image} 
                  alt={bonus.title}
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-accent text-accent-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  Valor: {bonus.value}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                  {bonus.title}
                </h3>
                <p className="text-accent font-semibold mb-3 text-sm sm:text-base">
                  {bonus.subtitle}
                </p>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed">
                  {bonus.description}
                </p>
                <div className="flex items-center text-primary">
                  <Download className="w-4 h-4 mr-2" />
                  <span className="text-xs sm:text-sm font-semibold">Descarga inmediata</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center bg-accent/5 rounded-2xl p-6 sm:p-8 border border-accent/20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
            Menú Digital (49€) + Bonus ({totalValue}€) = 
            <span className="text-accent block mt-2">¡TODO GRATIS con tu pedido!</span>
          </h3>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6">
            Solo pagas el menú digital, los bonus van de regalo
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto max-w-full"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <span className="truncate">Quiero todos los bonus incluidos</span>
              <ArrowRight className="ml-2 flex-shrink-0" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;