import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Os serviços de passeio da PetCare foram uma salvação para mim. Viajo muito e eles cuidam do meu cachorro perfeitamente. A atenção e carinho são incomparáveis.",
    author: "Maria Clara",
    role: "Tutora de Golden Retriever",
  },
  {
    quote:
      "O programa de adestramento da PetCare transformou o comportamento do meu pet. Não poderia estar mais feliz com os resultados! A expertise e dedicação deles fizeram toda diferença.",
    author: "Pedro Santos",
    role: "Tutor de Labrador",
  },
  {
    quote:
      "A PetCare foi uma mudança total para mim. Os pet sitters são confiáveis, carinhosos e realmente amam o que fazem. Tenho paz de espírito sabendo que meus gatos estão bem cuidados.",
    author: "Ana Beatriz",
    role: "Tutora de 2 Gatos",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge">DEPOIMENTOS</span>
          <h2 className="section-title">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Conheça as experiências de tutores que confiaram seus companheiros peludos à PetCare. Descubra por que eles escolhem nossos serviços confiáveis e carinhosos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="testimonial-card"
            >
              <Quote className="h-10 w-10 text-secondary mb-4" />
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-4">
                {testimonial.author}
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">
                {testimonial.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
