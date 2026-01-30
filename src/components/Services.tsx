import { motion } from 'framer-motion';
import { User, Users, Heart, Calendar, Baby, Activity } from 'lucide-react';

const services = [
  {
    icon: User,
    title: 'Pilates Individual',
    description: 'Aulas personalizadas com atenção exclusiva para suas necessidades específicas e objetivos.',
  },
  {
    icon: Users,
    title: 'Aulas em Grupo',
    description: 'Turmas reduzidas de até 3 alunos para garantir qualidade e acompanhamento adequado.',
  },
 
  // {
  //   icon: Baby,
  //   title: 'Gestantes & Pós-parto',
  //   description: 'Programa especializado para cada fase da gestação e recuperação pós-parto.',
  // },
  
  {
    icon: Calendar,
    title: 'Agendamento Online',
    description: 'Marque suas aulas de forma prática pelo WhatsApp ou formulário de contato.',
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Soluções para Cada Objetivo
          </h2>
          <p className="text-body">
            Oferecemos um método completo e integrado, com aulas estruturadas exclusivamente para as suas necessidades: seja para recuperar a mobilidade, fortalecer o corpo ou promover uma vida ativa e sem dores.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
