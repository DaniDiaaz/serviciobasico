import { X, Clock, MessageCircle, Users, Smartphone, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProblemSection = () => {
  const problems = [
    {
      icon: <X className="w-8 h-8 text-destructive" />,
      title: "Sin carta digital",
      description: "Los clientes no pueden ver tu menú antes de ir"
    },
    {
      icon: <Clock className="w-8 h-8 text-destructive" />,
      title: "Pierdes reservas",
      description: "No respondes a tiempo y los clientes van a la competencia"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-destructive" />,
      title: "Responder siempre lo mismo",
      description: "Gastas tiempo explicando precios y horarios una y otra vez"
    },
    {
      icon: <Users className="w-8 h-8 text-destructive" />,
      title: "Clientes confundidos",
      description: "No saben qué platos tienes ni los precios actualizados"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-destructive" />,
      title: "Redes sociales poco efectivas",
      description: "Tu Instagram no convierte seguidores en clientes reales"
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-destructive" />,
      title: "Ventas estancadas",
      description: "No aprovechas la tecnología para crecer tu negocio"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-section-gradient">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            ¿Te suena familiar? 
            <span className="block text-destructive mt-2">Estos problemas están matando tu negocio</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada día que pasa sin un sistema moderno de atención, pierdes clientes que van a restaurantes más innovadores
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 p-2 bg-destructive/10 rounded-lg">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {problem.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 p-6 sm:p-8 bg-destructive/5 rounded-2xl border border-destructive/20">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-destructive mb-2">
            "Cada día sin esto son clientes que pierdes"
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Mientras tú sigues con métodos tradicionales, tu competencia ya está usando tecnología para robar tus clientes
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;