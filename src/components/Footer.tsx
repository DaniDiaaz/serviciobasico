import { Mail, Phone, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 sm:py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">¿Tienes dudas? Contáctanos</h3>
          <p className="text-base sm:text-lg opacity-80">
            Estamos aquí para ayudarte a digitalizar tu restaurante
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-primary-foreground" />
            </div>
            <h4 className="font-semibold mb-2">Email</h4>
            <a 
              href="mailto:lebotelier@gmail.com" 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              lebotelier@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-primary-foreground" />
            </div>
            <h4 className="font-semibold mb-2">Teléfono</h4>
            <a 
              href="tel:+34674565394" 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              +34 674 565 394
            </a>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <Instagram className="w-6 h-6 text-primary-foreground" />
            </div>
            <h4 className="font-semibold mb-2">Instagram</h4>
            <a 
              href="https://instagram.com/lebotelier.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              @lebotelier.ai
            </a>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="opacity-60">
            © 2025 Le Botelier. Digitalizamos restaurantes con tecnología que funciona.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;