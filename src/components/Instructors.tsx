import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import instructor1 from '@/assets/instructor-1.jpg';
import instructor2 from '@/assets/instructor-2.jpg';
import instructor3 from '@/assets/instructor-3.jpg';
import instructor4 from '@/assets/instructor-4.jpg';


const instructors = [
  {
    id: 1,
    name: 'Alana Maria Pinho de Brito',
    specialty: 'Sócia gerente & instrutora da estação pilates Alana Brito',
    image: instructor1,
    bio: 'Profissional de Educação Física desde 1984, especialista em movimento e longevidade. Experiência comprovada para quem entende que o melhor momento para cuidar da saúde é agora. Com 21 anos de dedicação ao método Pilates, especializei-me em transformar a qualidade de vida do público 30+. Nosso foco é promover um envelecimento ativo, força funcional e bem-estar através de um acompanhamento personalizado. Oferecemos aulas em grupo, duplas ou individuais, adaptadas cada movimento às nescessidades e objetivos de quem busca longevidade com autonomia e vitalidade.',
    credentials: ['CREFITO 12345-F', 'Stott Pilates Certified', 'Especialista em Dor Crônica'],
  },
  {
    id: 2,
    name: ' Ari Falconeri',
    specialty: 'Instrutor de Pilates',
    image: instructor2,
    bio: 'Educador físico com formação em Pilates Clínico e contemporâneo. Formado em treinamento baseado em complexidade. Especialista em exercício Fisíco para grupos especiais com foco em idosos, doenças cardiovasculares, diabetes, pessoas em tratamento ou pós-tratamento oncologico.',
    credentials: ['CREF 67890-G', 'Polestar Pilates', 'Treinamento Funcional'],
  },
  {
    id: 3,
    name: 'Giulianna de Brito Brasil',
    specialty: 'Instrutora de Pilates & Fisioterapeuta',
    image: instructor3,
    bio: 'Formação em Fisioterapia. Formação em Quiropraxia. Formação em Pilates clínico- Clínica Fisios. Formação em Pilates Classico- Breathe Deeply',
    credentials: ['CREFITO 11223-F', 'Pilates na Gestação', 'Saúde Pélvica'],
  },
  {
  id: 4,
  name: 'Juliana Pinto Queiroz',
  specialty: 'Instrutora de Pilates  & Fisioterapeuta',
  image: instructor4,
  bio: 'Formação em fisioterapia. TERAPIA MANUAL. PILATES CONTEMPORÂNEO DOM PILTES. Formação em Pilates Classico- Breathe Deeply',
  credentials: [
    'CREF 44556-G',
    'Pilates Funcional',
    'Mobilidade Articular'
  ],
},

];

const InstructorCard = ({ instructor }: { instructor: typeof instructors[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-1">
          {instructor.name}
        </h3>
        <p className="text-primary font-medium text-sm mb-3">{instructor.specialty}</p>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0 }}
          className="overflow-hidden"
        >
          <p className="text-muted-foreground text-sm mb-4">{instructor.bio}</p>
          <div className="flex flex-wrap gap-2">
            {instructor.credentials.map((cred) => (
              <span
                key={cred}
                className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
              >
                {cred}
              </span>
            ))}
          </div>
        </motion.div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-4 text-primary hover:text-primary/80 hover:bg-primary/5"
        >
          {isExpanded ? (
            <>
              Ver menos <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              Saiba mais <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
};

const Instructors = () => {
  return (
    <section id="professores" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Nossa Equipe
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Profissionais Especializados
          </h2>
          <p className="text-body">
            Conheça nossa equipe de especialistas dedicados a transformar sua saúde 
            e qualidade de vida através do método Pilates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
