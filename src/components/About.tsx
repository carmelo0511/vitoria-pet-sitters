import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";
// Import your personal photos - replace with actual image paths when you add them
// import larissaWithHusky from "@/assets/larissa-husky.jpg";
// import larissaWithCat from "@/assets/larissa-cat.jpg";
import happyDogImg from "@/assets/happy-dog.jpg";

const features = [
  "Cuidados no conforto do seu lar para cães, gatos e pets não convencionais.",
  "Médica Veterinária de formação com tratamento especializado.",
  "Mais de 10 anos de experiência com cuidados animais.",
  "Disponibilidade em tempo integral para atender seu pet.",
  "Relatório completo com áudio, fotos e vídeos diários.",
];

const About = () => {
  return (
    <section id="about" className="py-8 px-4 md:px-8 bg-background">
      <div className="bg-card rounded-2xl py-16 md:py-24 px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-semibold tracking-[0.2em] text-sm mb-4 block uppercase">
              SOBRE MIM
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Larissa Brandino - Pet Sitter Profissional
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Sou Médica Veterinária de formação e ofereço serviços de Pet Sitting há mais de 10 anos. Vou até sua casa cuidar do seu bichinho com todo carinho e atenção que ele merece, garantindo que você tenha tranquilidade durante sua viagem.
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
                  <PawPrint className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="default" size="lg" className="rounded-full">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
