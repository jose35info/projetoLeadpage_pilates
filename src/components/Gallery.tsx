import { motion } from 'framer-motion';
import studio1 from '@/assets/studio-1.jpg';
import studio2 from '@/assets/studio-2.jpg';
import studio3 from '@/assets/studio-3.jpg';
import studio4 from '@/assets/studio-4.jpg';
import studio5 from '@/assets/studio-5.jpg';


const images = [
  { src: studio1, alt: 'Studio de Pilates com equipamentos modernos', span: 'col-span-2 row-span-2' },
  { src: studio2, alt: 'Aula de Pilates em grupo', span: 'col-span-1 row-span-1' },
  { src: studio3, alt: 'Detalhes dos aparelhos de Pilates', span: 'col-span-1 row-span-1' },
  { src: studio4, alt: 'Recepção acolhedora do studio', span: 'col-span-2 row-span-1' },
  { src: studio5, alt: 'Recepção acolhedora do studio', span: 'col-span-2 row-span-1' }
];

const Gallery = () => {
  return (
    <section id="galeria" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Nosso Espaço
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Conheça Nossa Estrutura
          </h2>
          <p className="text-body">
            Um ambiente pensado para seu conforto e bem-estar, com equipamentos 
            de última geração e atmosfera acolhedora.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${image.span} relative overflow-hidden rounded-2xl group`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
