import { motion } from "framer-motion";
import { Users, Clock, Scissors, Globe } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: "20+",
    label: "Clientes atendidos",
    subtext: "em diferentes regiões do Brasil."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    value: "5",
    label: "Dias úteis de entrega",
    subtext: "após a aprovação do briefing."
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    value: "100%",
    label: "Projeto personalizado",
    subtext: "sem templates prontos ou cópias."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    value: "BR",
    label: "Todo o Brasil",
    subtext: "Processo 100% online e eficiente."
  }
];

const StatsSection = () => {
  return (
    <section className="py-12 relative border-y border-white/5 bg-white/[0.01]">
      <div className="container px-6 mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-5 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all flex-shrink-0">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white leading-none tracking-tighter">
                    {stat.value === "BR" ? "🇧🇷" : stat.value}
                  </span>
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-tight">
                    {stat.label}
                  </span>
                </div>
                <p className="text-[11px] text-gray-400 font-medium leading-relaxed mt-1">
                  {stat.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
