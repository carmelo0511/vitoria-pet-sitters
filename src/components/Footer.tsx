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
    { icon: Phone, text: "(27) 99263-2281" },
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
                Larissa Brandino
              </span>
            </a>
            <p className="text-card/70 leading-relaxed mb-6 max-w-md">
              Pet Sitter profissional - Cuidados no conforto do seu lar. Médica Veterinária com mais de 10 anos de experiência.
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
            © 2026 Larissa Brandino - Pet Sitter. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <a 
              href="https://www.instagram.com/larissabpetsitting" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-card/50 hover:text-primary transition-colors text-sm flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @larissabpetsitting
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
