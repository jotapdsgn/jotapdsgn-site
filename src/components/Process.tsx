import { motion } from "framer-motion";
import { FileText, PenTool, Code, Rocket, ArrowDown } from "lucide-react"; // <-- Importei ArrowDown

const steps = [
  {
    icon: FileText,
    title: "Briefing e Planejamento",
  },
  {
    icon: PenTool,
    title: "Criação do Layout",
  },
  {
    icon: Code,
    title: "Desenvolvimento",
  },
  {
    icon: Rocket,
    title: "Entrega e Publicação",
  },
];

const Process = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <p className="text-secondary text-sm tracking-[0.3em] uppercase mb-4 font-bold">
            Fluxo de Trabalho
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight tracking-tighter">
            Do Zero ao Lançamento
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Linha Conectora (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group relative"
                >
                  {/* Círculo do Ícone */}
                  <div className="relative mb-8">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                    
                    <div className="w-20 h-20 rounded-2xl bg-card border border-white/10 flex items-center justify-center relative z-10 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_20px_rgba(79,70,229,0.2)] transition-all">
                      <Icon className="w-8 h-8 text-indigo-400 group-hover:text-white transition-colors" />
                    </div>

                    {/* Número do Passo */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-400 flex items-center justify-center text-xs font-bold text-white shadow-lg border-2 border-[#030303] z-20">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Textos */}
                  <div className="relative px-4">
                    <h3 className="text-white text-xl font-bold mb-3 tracking-tighter group-hover:text-indigo-300 transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  {/* Seta indicativa para Mobile/Tablet (entre itens) */}
                  {index < steps.length - 1 && (
                    <div className="absolute -bottom-8 lg:hidden text-indigo-500/20">
                      <ArrowDown size={24} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[300px] bg-indigo-500/5 blur-[120px] pointer-events-none" />
    </section>
  );
};

export default Process;