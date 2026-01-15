import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-8 px-4 md:px-8 bg-background">
      <div className="bg-primary rounded-2xl py-16 md:py-24 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-secondary font-semibold tracking-[0.2em] text-sm mb-4 block uppercase">
            CUIDE DO SEU PET
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Vai viajar? Conte comigo!
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
            Para mais informações sobre meus serviços de Pet Sitting, entre em contato via WhatsApp ou Instagram. Estou pronta para cuidar do seu bichinho no conforto do seu lar!
          </p>
          <Button variant="cta" size="lg" className="rounded-full">
            Entre em Contato
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
