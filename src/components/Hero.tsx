import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-8 px-4 md:px-8 bg-background">
      <div
        className="relative min-h-[600px] md:min-h-[700px] rounded-2xl overflow-hidden flex items-center"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 px-8 md:px-16 lg:px-24 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <span className="text-secondary font-semibold tracking-[0.2em] text-sm mb-4 block uppercase">
              Cuidado com Amor
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Seu parceiro de confiança em cuidados pet
            </h1>

            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-lg">
              Entendemos as necessidades do seu companheiro peludo, do seu orçamento e da sua tranquilidade.
            </p>

            <Button variant="cta" className="rounded-full px-8 py-3">
              Entre em Contato
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
