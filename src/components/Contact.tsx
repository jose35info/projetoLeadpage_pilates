import { useForm } from '@formspree/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

/* =========================
   Validação com Zod
========================= */
const contactSchema = z.object({
  name: z.string().trim().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  phone: z.string().trim().min(10, 'Telefone inválido'),
  message: z.string().trim().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

const Contact = () => {
  const { toast } = useToast();

  // Formspree
  const [state, handleFormspreeSubmit] = useForm('mlgjyjgg');

  // Estados do formulário
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  /* =========================
     Handle Change
  ========================= */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  /* =========================
     Handle Submit
  ========================= */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

      result.error.errors.forEach((err) => {
        const field = err.path[0];
        if (field) {
          fieldErrors[field.toString()] = err.message;
        }
      });

      setErrors(fieldErrors);
      return;
    }

    // Envio Formspree
    await handleFormspreeSubmit(e);

    if (state.succeeded) {
      setIsSubmitted(true);

      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve.',
      });

      setFormData({
        name: '',
        phone: '',
        message: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  /* =========================
     JSX
  ========================= */
  return (
    <section id="contato" className="section-padding  bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase mb-4 block">
            Contato
          </span>
          <h2 className="heading-section mb-4">
            Solicite sua Aula Avaliativa 


          </h2>
          <p className="text-body">
            Preencha o formulário abaixo ou entre em contato pelo WhatsApp.
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Mensagem Enviada!
                </h3>
                <p className="text-muted-foreground">
                  Entraremos em contato em breve.
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-6">
                  {/* Nome */}
                  <div>
                    <label className="block text-sm mb-2">Nome</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className={errors.name ? 'border-destructive' : ''}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Telefone */}
                  <div>
                    <label className="block text-sm mb-2">
                      Telefone / WhatsApp
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(85) 99999-9999"
                      className={errors.phone ? 'border-destructive' : ''}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label className="block text-sm mb-2">Mensagem</label>
                    <Textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-nos sobre seus objetivos..."
                      className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full mt-8">
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
