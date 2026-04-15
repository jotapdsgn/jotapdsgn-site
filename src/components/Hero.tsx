import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Shield, Smartphone, Globe, Headphones, Users, Cloud } from "lucide-react";
// import logoBanner from "@/assets/logo-banner.png";

const particles = Array.from({ length: 60 }).map(() => ({
  size: Math.random() * 2 + 0.5,
  x: Math.random() * 100,
  y: Math.random() * 100,
  moveY: Math.random() * -200 - 50,
  duration: 4 + Math.random() * 4,
  delay: Math.random() * 5,
  opacity: Math.random() * 0.6 + 0.2,
}));

const words = ["Landing Pages", "Websites", "UI Design", "E-commerce"];

const benefits = [
  { icon: <Cloud size={14} />, text: "Hospedagem Inclusa" },
  { icon: <Headphones size={14} />, text: "Suporte Garantido" },
  { icon: <Globe size={14} />, text: "Todo o Brasil" },
  { icon: <Users size={14} />, text: "+20 Clientes" },
  { icon: <Shield size={14} />, text: "Site Seguro (SSL)" },
  { icon: <Smartphone size={14} />, text: "Mobile First" },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-transparent pt-40 pb-0">
      {/* Partículas */}
      <div className="absolute inset-0 pointer-events-none">
        {mounted && particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              opacity: p.opacity,
            }}
            animate={{
              y: [0, p.moveY],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Luz focal superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center flex-grow justify-center">
        {/* Logo */}
        <img
          src="/logo-banner.png"
          className="w-64 md:w-80 mx-auto mb-10"
        />

        {/* Headline com Typing */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tight max-w-5xl"
        >
          <div className="text-white text-xl sm:text-2xl md:text-3xl mb-4 font-medium opacity-80">
            Desenvolvimento de
          </div>
          <div className="relative inline-block px-4 py-2 bg-white/[0.01] min-w-[280px] sm:min-w-[400px] md:min-w-[600px] rounded-2xl border border-white/5 backdrop-blur-md shadow-2xl">
            <div className="text-indigo-400 min-h-[1.2em]">
              <span className="text-gradient">
                {words[index].substring(0, subIndex)}
              </span>
              <span className="animate-pulse ml-1">|</span>
            </div>
          </div>
        </motion.h1>

        {/* Subtexto */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl"
        >
          Sua marca online.
        </motion.p>

        {/* Botão */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-10"
        >
          <a
            href="#pacotes"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-400 text-white font-bold text-sm hover:scale-[1.05] transition-all shadow-[0_0_20px_rgba(120,96,255,0.3)] inline-block"
          >
            Escolher Plano
          </a>

          {/* Seta animada */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="mt-8 text-indigo-400/50 flex flex-col items-center"
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee Ticker */}
      <div className="w-full relative py-3 bg-white/[0.01] border-y border-white/[0.03] overflow-hidden whitespace-nowrap mt-auto">
        <div className="flex animate-marquee">
          {[...benefits, ...benefits, ...benefits, ...benefits].map((b, i) => (
            <div key={i} className="flex items-center gap-2 px-4 md:px-8 text-gray-400 text-[10px] md:text-xs font-medium uppercase tracking-widest">
              <span className="text-indigo-500">{b.icon}</span>
              {b.text}
              <span className="ml-4 md:ml-8 w-1 h-1 rounded-full bg-indigo-500/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;