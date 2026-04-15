import { motion } from "framer-motion";
import {
  Award,
  Clock,
  TrendingUp,
  Zap,
  Smartphone,
} from "lucide-react";

const benefits = [
  { icon: Award, text: "Mais profissionalismo para sua empresa" },
  { icon: Clock, text: "Presença online 24 horas por dia" },
  { icon: TrendingUp, text: "Mais clientes pelo Google e WhatsApp" },
  { icon: Zap, text: "Carregamento rápido e otimizado" },
  { icon: Smartphone, text: "Funciona perfeitamente em qualquer dispositivo" },
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-32 pb-52">
      <div className="container px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-secondary text-sm tracking-[0.3em] uppercase mb-4">
            Benefícios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Por que ter um site profissional?
          </h2>
        </motion.div>

        {/* CARDS EM 2 COLUNAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">

          {benefits.map((b, i) => {
            const Icon = b.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:scale-[1.03] transition-transform"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--indigo-main), var(--indigo-light))",
                  }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <p className="text-foreground text-sm font-medium leading-relaxed">
                  {b.text}
                </p>
              </motion.div>
            );
          })}

        </div>

        {/* CTA FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24 flex flex-col items-center text-center text-muted-foreground"
        >
          <p className="text-sm mb-2">
            Conheça os planos
          </p>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-secondary"
          >
            ↓
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}