import { PawPrint, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { label: "Início", href: "#hero" },
    { label: "Serviços", href: "#services" },
    { label: "Sobre", href: "#about" },
    { label: "Depoimentos", href: "#testimonials" },
  ];

  const contactInfo = [
    { icon: Mail, text: "contato@petcarevitoria.com.br" },
    { icon: Phone, text: "(27) 99999-9999" },
    { icon: MapPin, text: "Vitória, ES - Brasil" },
  ];

  return (
    <footer id="contact" className="py-8 px-4 md:px-8 bg-background">
      <div className="bg-foreground rounded-2xl text-card py-16 px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 max-w-7xl mx-auto">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <PawPrint className="h-8 w-8 text-primary transition-transform group-hover:rotate-12" />
              <span className="font-display text-2xl font-bold text-card">
                PetCare
              </span>
            </a>
            <p className="text-card/70 leading-relaxed mb-6 max-w-md">
              Seu parceiro de confiança em soluções de cuidados pet. Serviços personalizados para pets felizes e tutores satisfeitos.
            </p>
            <Button variant="cta" size="lg" className="rounded-full">
              Agendar Visita
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-card mb-4 uppercase tracking-wide">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-card/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold text-card mb-4 uppercase tracking-wide">
              Contato
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-card/70">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
          <p className="text-card/50 text-sm">
            © 2026 PetCare Vitória. Todos os direitos reservados.
          </p>
          <p className="text-card/50 text-sm">
            Feito com ❤️ para os pets de Vitória
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
