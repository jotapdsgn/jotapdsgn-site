import { motion } from "framer-motion";
import { Globe, Layout, MousePointerClick } from "lucide-react";

const skills = [
  { icon: Globe, label: "Sites Profissionais" },
  { icon: MousePointerClick, label: "Landing Pages" },
  { icon: Layout, label: "UI Design" },
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-subtle">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">

          {/* Foto em retângulo com efeito degradê fundido */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-64 h-80 rounded-xl overflow-hidden shadow-lg backdrop-blur-md bg-gradient-to-tr from-white/10 via-white/5 to-transparent hover:scale-[1.03] transition-all">
              <img
                src="/foto.png"
                alt="João Paulo Nogueira"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl space-y-6"
          >
            <div>
              <p className="text-secondary text-sm tracking-[0.3em] uppercase mb-2 font-bold">
                João Paulo Nogueira
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight tracking-tighter">
                Web Designer & <span className="text-gradient">UI Designer</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Desenvolvo soluções digitais que equilibram design estratégico e performance.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border-glow"
                >
                  <skill.icon className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-foreground">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
