import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-pilates.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Venho pelo site. Gostaria de agendar uma aula experimental no Estação Pilates.');
    window.open(`https://wa.me/558597423400?text=${message}`, '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Studio de Pilates moderno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
              Bem-vindo ao Estação Pilates
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-display text-foreground mb-6"
          >
            Você em harmonia com{' '}
            <span className="text-primary">o seu corpo</span> em todas as estações
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body text-lg mb-8 max-w-xl"
          >
            Transforme seu corpo e mente com o método Pilates. Aulas personalizadas 
            com profissionais especializados em um ambiente acolhedor e moderno.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="btn-primary rounded-full px-8 py-6 text-base group"
            >
              Agendar Aula Experimental
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-base border-foreground/20 hover:bg-foreground/5"
            >
              Saiba Mais
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-12 mt-12 pt-12 border-t border-border/50"
          >
            <div>
              <p className="font-display text-3xl font-semibold text-foreground">21+</p>
              <p className="text-sm text-muted-foreground">Anos de experiência</p>
            </div>
            <div>
              <p className="font-display text-3xl font-semibold text-foreground">1000+</p>
              <p className="text-sm text-muted-foreground">Alunos transformados</p>
            </div>
            <div>
              <p className="font-display text-3xl font-semibold text-foreground">5.0</p>
              <p className="text-sm text-muted-foreground">Avaliação Google</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
