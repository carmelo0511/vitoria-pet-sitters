import { motion } from "framer-motion";
import dogWalkingImg from "@/assets/dog-walking.jpg";
import petSittingImg from "@/assets/pet-sitting.jpg";
import trainingImg from "@/assets/training.jpg";

const services = [
  {
    title: "Pet Sitting",
    description:
      "Cuidados no conforto do seu lar para cães, gatos e pets não convencionais. Vou até sua casa cuidar do seu bichinho com atenção e carinho.",
    image: petSittingImg,
  },
  {
    title: "Relatórios Completos",
    description:
      "Relatórios diários com áudio, fotos e vídeos para você acompanhar como está seu pet mesmo longe de casa.",
    image: dogWalkingImg,
  },
  {
    title: "Tratamento Especializado",
    description:
      "Como Médica Veterinária de formação, ofereço tratamento especializado e cuidados adaptados às necessidades do seu pet.",
    image: trainingImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-8 px-4 md:px-8 bg-background">
      <div className="bg-secondary rounded-2xl py-16 md:py-24 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-[0.2em] text-sm mb-4 block uppercase">
            NOSSOS SERVIÇOS
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
            Soluções sob medida para seus amigos peludos
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto text-lg">
            Oferecemos uma gama completa de serviços especializados em cuidados pet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
