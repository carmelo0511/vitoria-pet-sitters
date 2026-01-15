import { motion } from "framer-motion";
import dogWalkingImg from "@/assets/dog-walking.jpg";
import petSittingImg from "@/assets/pet-sitting.jpg";
import trainingImg from "@/assets/training.jpg";

const services = [
  {
    title: "Passeios",
    description:
      "Mantenha seu cãozinho ativo com passeios personalizados que atendem ao nível de energia e preferências dele.",
    image: dogWalkingImg,
  },
  {
    title: "Pet Sitting",
    description:
      "Confie em nossos cuidadores experientes para oferecer atenção personalizada em casa para seus amigos peludos.",
    image: petSittingImg,
  },
  {
    title: "Adestramento",
    description:
      "Ajude seus pets a superar desafios com programas de treinamento personalizados para suas necessidades.",
    image: trainingImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge text-primary">NOSSOS SERVIÇOS</span>
          <h2 className="section-title text-secondary-foreground">
            Soluções sob medida para seus amigos peludos
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto text-lg">
            Oferecemos uma gama completa de serviços especializados em cuidados pet. Nossa equipe é dedicada a garantir o bem-estar e felicidade dos seus companheiros 24/7.
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
              className="service-card group"
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
