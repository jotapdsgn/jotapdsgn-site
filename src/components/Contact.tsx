import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState, FormEvent } from "react";
import { FaInstagram, FaBehance, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-secondary text-sm tracking-[0.3em] uppercase mb-6 font-bold">Vamos Começar</p>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tighter">
              Seu concorrente <br />
              já tem um site. <br />
              <span className="text-gradient">Vai ficar pra trás?</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Não deixe mais sua marca invisível no digital. Projetos de alto padrão, 
              focados em conversão e entrega acelerada. Fale comigo agora.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-2xl p-1 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-primary/40 to-indigo-500/20 shadow-2xl"
          >
            <div className="bg-card text-card-foreground p-8 md:p-12 rounded-[inherit] flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-8">Como prefere seguir?</h3>

              <div className="grid sm:grid-cols-2 gap-4 w-full">
                <a
                  href="#pacotes"
                  className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all uppercase text-sm tracking-widest"
                >
                  Escolher Plano
                </a>
                <a
                  href="https://wa.me/5537998623827?text=Olá,%20quero%20um%20site%20profissional!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-primary text-white font-bold hover:scale-[1.02] transition-all shadow-lg uppercase text-sm tracking-widest"
                >
                  <FaWhatsapp size={18} />
                  Chamar Direto
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 w-full flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-2">Email Profissional</span>
                  <a href="mailto:jpegnogueira@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    jpegnogueira@gmail.com
                  </a>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/jotapdsgn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.behance.net/jotapdsgn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <FaBehance className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
