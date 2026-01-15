import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="section-badge text-primary mb-4 block">
            CUIDADO COM AMOR
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-card leading-tight mb-6">
            Seu parceiro de confiança em cuidados pet
          </h1>

          <p className="text-lg md:text-xl text-card/90 mb-8 leading-relaxed max-w-xl">
            Entendemos as necessidades do seu companheiro peludo, do seu orçamento e da sua tranquilidade. Serviços premium de pet sitting em Vitória - ES.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg">
              Agende uma Visita
            </Button>
            <Button variant="heroOutline" size="lg">
              Conheça Nossos Serviços
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
