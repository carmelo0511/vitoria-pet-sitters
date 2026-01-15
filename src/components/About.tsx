import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";
import happyDogImg from "@/assets/happy-dog.jpg";

const features = [
  "Planos de cuidado personalizados para as necessidades do seu pet.",
  "Profissionais treinados e dedicados ao bem-estar do seu animal.",
  "Tranquilidade sabendo que seus pets estão em mãos confiáveis.",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">SOBRE NÓS</span>
            <h2 className="section-title">
              Oferecendo cuidados pet confiáveis em Vitória
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Na PetCare Vitória, oferecemos soluções de cuidados 24/7 adaptadas às suas necessidades. Nossa equipe de profissionais altamente qualificados entrega serviço de primeira qualidade, garantindo o bem-estar e felicidade dos seus companheiros peludos. Conosco, você tem serviço de excelência a preços acessíveis, incluindo atendimento de emergência 24/7 para situações urgentes.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <PawPrint className="h-5 w-5 paw-icon flex-shrink-0 mt-1" />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="default" size="lg">
              Entre em Contato
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={happyDogImg}
                alt="Cachorro feliz em um campo de flores"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-primary/20 rounded-2xl hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
