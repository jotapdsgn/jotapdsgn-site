import { motion } from "framer-motion";
import { Globe, Layout, MousePointerClick, Search } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Criação de Sites Profissionais",
    description:
      "Desenvolvimento de sites modernos, rápidos e responsivos, pensados para transmitir profissionalismo e funcionar bem em qualquer dispositivo.",
  },
  {
    icon: MousePointerClick,
    title: "Landing Pages",
    description:
      "Páginas focadas em conversão, ideais para campanhas e captação de clientes, com estrutura estratégica e navegação objetiva.",
  },
  {
    icon: Layout,
    title: "UI Design (Layout de Sites)",
    description:
      "Criação de interfaces organizadas, intuitivas e visualmente consistentes, garantindo uma experiência clara para o usuário.",
  },
  {
    icon: Search,
    title: "Otimização e SEO Básico",
    description:
      "Configuração inicial para melhorar a presença do site no Google, com ajustes de estrutura, desempenho e boas práticas de SEO.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-gradient-subtle">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-secondary text-sm tracking-[0.3em] uppercase mb-4 font-bold">
            Serviços
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tighter leading-tight">
            O Que Eu Faço
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-xl bg-card border-glow hover:glow-purple transition-shadow duration-500 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              <h3 className="text-foreground text-lg font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
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