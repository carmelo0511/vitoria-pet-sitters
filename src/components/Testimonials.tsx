import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Muito obrigada, Larissa, por cuidar tão bem das minhas preciosidades!! Você é uma cat(pet)sitter sensacional ❤️",
    author: "brunellabonde",
    role: "Tutora",
  },
  {
    quote:
      "Que coisa mas linda Larissa, grata pelo carinhos, os meninos ficaram muito bem, cheguei e os dois estavam super tranquilos. Obrigada por tudo e até breve",
    author: "@eloisaccarvalho",
    role: "Tutora",
  },
  {
    quote:
      "❤️ Gostaria de agradecer a Larissa, pelos cuidados com a minha 'Pituquinha 🐶 ou oficialmente Belinha'! Viajar sempre foi a nossa preocupação, com quem deixar a minha cachorra e saber que ela está sendo tratada com amor, mas tive a grata satisfação e tranquilidade, quando deixei com você Larissa, eu era presenteado por várias vezes durante o dia com fotos ou vídeos da Belinha e era notório que ela estava muito feliz e isso resultou em uma viagem tranquila e agradável, sem preocupações!! Obrigado Larissa!!!!!",
    author: "DELMA",
    role: "Tutora de Belinha",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-8 px-4 md:px-8 bg-background">
      <div className="bg-background py-16 md:py-24 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-[0.2em] text-sm mb-4 block uppercase">
            DEPOIMENTOS
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Conheça as experiências de tutores que confiaram seus pets à Larissa Brandino.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-primary/15 shadow-sm"
            >
              <Quote className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                {testimonial.author}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
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
