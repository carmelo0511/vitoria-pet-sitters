import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="section-badge text-secondary">
            CUIDE DO SEU PET
          </span>
          <h2 className="section-title text-primary-foreground">
            Eleve os cuidados do seu pet
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
            Pronto para dar ao seu amigo peludo o melhor cuidado possível? A PetCare Vitória oferece serviços premium adaptados às suas necessidades. Seja um passeador, pet sitter ou adestrador, temos tudo coberto. Entre em contato agora para agendar uma consulta.
          </p>
          <Button variant="cta" size="lg">
            Entre em Contato
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
