import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/larissa-cat.jpg";

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-8 px-4 md:px-8 bg-background">
      <div
        className="relative min-h-[600px] md:min-h-[700px] rounded-2xl overflow-hidden flex items-center"
        style={{ 
          backgroundImage: `linear-gradient(135deg, hsl(175, 85%, 23%) 0%, hsl(175, 60%, 35%) 100%), url(${heroBg})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Teal Overlay matching promotional materials */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(175,85%,23%)]/80 to-[hsl(175,60%,35%)]/60" />

        {/* Content */}
        <div className="relative z-10 px-8 md:px-16 lg:px-24 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <span className="text-secondary font-semibold tracking-[0.2em] text-sm mb-4 block uppercase">
              VAI VIAJAR?
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              EU CUIDO DO SEU BICHINHO NO CONFORTO DO SEU LAR!
            </h1>

            <p className="text-lg text-white/90 mb-4 leading-relaxed max-w-lg">
              Cuidados personalizados realizados por uma profissional veterinária. Relatórios diários com fotos e vídeos do seu pet.
            </p>
            <p className="text-white/80 mb-8 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium">Atendimento: Vitória, Vila Velha e Cariacica</span>
            </p>

            <a 
              href="https://wa.me/5527992632281" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="cta" className="rounded-full px-8 py-3">
                Entre em Contato
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
