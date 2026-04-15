import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link"; // Adicionado Link

const packages = [
  {
    id: "landing-page",
    name: "Landing Page",
    price: "R$ 499+",
    desc: "Página estratégica focada em conversão e impacto rápido.",
    popular: false,
    route: "/briefing/landing-page", // Nova rota configurador
    features: [
      "1 página responsiva",
      "Seções estratégicas",
      "Integração com WhatsApp",
      "SEO básico",
      "Domínio configurado",
      "Otimização mobile",
    ],
  },
  {
    id: "site-institucional",
    name: "Site Institucional",
    price: "R$ 899+",
    desc: "Presença digital completa com estrutura profissional.",
    popular: true,
    route: "/briefing/site-institucional", // Nova rota configurador
    features: [
      "Até 5 páginas",
      "Design premium personalizado",
      "SEO otimizado",
      "Integração completa",
      "Google Maps",
      "Performance avançada",
    ],
  },
];

const Packages = () => {
  return (
    <section id="pacotes" className="py-32 bg-gradient-subtle">
      <div className="container px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-secondary text-sm tracking-[0.3em] uppercase mb-4 font-bold">
            Pacotes
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tighter leading-tight">
            Escolha sua <span className="text-gradient">presença digital</span>
          </h2>
        </motion.div>

        {/* GRID DE PACOTES */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {packages.map((pkg, index) => {
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-full pt-4 sm:pt-0"
              >
                {/* Badge Flutuante (Por fora do card) */}
                {pkg.popular && (
                  <div className="absolute top-4 sm:top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-max inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold text-white bg-gradient-primary shadow-lg border border-white/10">
                    <Star size={10} className="fill-white" /> Mais escolhido
                  </div>
                )}
                
                <Link
                  href={pkg.route}
                  className="flex flex-col p-8 rounded-xl bg-card border-glow hover:glow-purple transition-all duration-500 group cursor-pointer h-full relative"
                >
                  {/* Título e descrição */}
                  <h3 className="text-lg font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.desc}</p>

                  {/* Preço */}
                  <p className="text-xl font-semibold text-foreground mb-6">{pkg.price}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((f) => (
                      <div key={f} className="flex items-center gap-6">
                        <div className="w-4 h-4 rounded-full bg-gradient-primary flex items-center justify-center">
                          <Check size={8} className="text-primary-foreground" />
                        </div>
                        <span className="text-sm text-muted-foreground">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Botão de Escolha */}
                  <div className="mt-auto pt-6 border-t border-border">
                    <div className="w-full py-3 rounded-lg text-white font-semibold text-center hover:scale-[1.03] shadow-lg transition-all" style={{ background: "linear-gradient(135deg, var(--indigo-main), var(--indigo-light))" }}>
                      Escolher plano
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Nota de instrução */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Escolha seu plano e receba seu orçamento na hora.
        </p>
      </div>
    </section>
  );
};

export default Packages;
