import { motion } from "framer-motion";
import { useState } from "react";

import project4 from "../assets/project-4.jpg";
import project5 from "../assets/project-5.jpg";
import project6 from "../assets/project-6.jpg";

const projects = [
  { image: project4, title: "Identidade de Marca", category: "Branding" },
  { image: project5, title: "Material de Marketing", category: "Design Impresso" },
  { image: project6, title: "Embalagem Premium", category: "Embalagem" },
];

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-secondary text-sm tracking-[0.3em] uppercase mb-4">Portfólio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Trabalhos Selecionados</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border-glow"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent transition-opacity duration-300 flex flex-col justify-end p-6 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-secondary text-sm font-medium">{project.category}</p>
                <h3 className="text-foreground text-xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botão Ver Portfólio Completo */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://www.behance.net/jotapdsgn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-primary text-white font-medium hover:opacity-90 transition-opacity glow-purple font-body"
          >
            Ver Portfólio Completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;