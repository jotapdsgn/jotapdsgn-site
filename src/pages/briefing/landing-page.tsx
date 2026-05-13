import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Monitor, Zap, Plus, ArrowLeft, HelpCircle, Download } from "lucide-react";
import { jsPDF } from "jspdf";
import Link from "next/link";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import logo from "@/assets/logo-jotapdsgn.png";

// Definições de Preços
const PLAN_SIMPLES_PRICE = 499;
const PLAN_COMPLETA_PRICE = 699;

const EXTRAS = [
  { id: "copywriting", label: "Copywriting profissional", price: 200, icon: <Zap className="w-5 h-5 text-yellow-500" />, desc: "Textos persuasivos criados estrategicamente para maximizar as conversões da sua oferta." },
  { id: "seo", label: "SEO avançado", price: 200, icon: <Monitor className="w-5 h-5 text-blue-500" />, desc: "Otimização técnica para ajudar a página a ranquear organicamente no topo das buscas do Google." },
  { id: "automacao", label: "Integração com automação", price: 150, icon: <Plus className="w-5 h-5 text-green-500" />, desc: "Conecta seu formulário automaticamente a planilhas, email marketing ou CRM que você utilize." },
];

const ConfiguratorLandingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<"simples" | "completa">("simples");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  // Força o scroll pro topo ao abrir a página
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as any });
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    empresa: "",
    objetivo: "",
    referencias: "",
    concorrentes: "",
    publicoAlvo: "",
    prazo: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Calcula Preço Total
  const basePrice = selectedPlan === "simples" ? PLAN_SIMPLES_PRICE : PLAN_COMPLETA_PRICE;
  const extrasPrice = selectedExtras.reduce((total, extraId) => {
    const foundExtra = EXTRAS.find(e => e.id === extraId);
    return total + (foundExtra?.price || 0);
  }, 0);
  const totalPrice = basePrice + extrasPrice;

  // Lógica de envio por WhatsApp/Email
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const planName = selectedPlan === "simples" ? "Landing Page Simples" : "Landing Page Completa";
      const extrasNames = selectedExtras.map(id => EXTRAS.find(e => e.id === id)?.label).join(", ") || "Nenhum";

      const text = `Plano: ${planName}\nExtras: ${extrasNames}\nTOTAL: R$ ${totalPrice},00`;

      // Envio Silencioso via API Gratuita do FormSubmit
      fetch("https://formsubmit.co/ajax/jpegnogueira@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Assunto: "Novo Pedido de Landing Page",
          ...formData,
          Detalhes_do_Pedido: text
        })
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const toggleExtra = (id: string) => {
    setSelectedExtras(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };



  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // CORES (RGB)
    const primaryIndigo = [120, 96, 255];
    const bgColor = [3, 3, 3];
    const cardColor = [15, 12, 18];
    const textWhite = [255, 255, 255];
    const textGray = [160, 160, 160];

    // BACKGROUND TOTAL
    doc.setFillColor(bgColor[0], bgColor[1], bgColor[2]);
    doc.rect(0, 0, pageWidth, pageHeight, "F");

    // HEADER - BARRA INDIGO
    doc.setFillColor(primaryIndigo[0], primaryIndigo[1], primaryIndigo[2]);
    doc.rect(0, 0, pageWidth, 45, "F");

    // LOGO/TITLE
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(26);
    doc.text("JOTAPDSGN", pageWidth / 2, 22, { align: "center" });
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    // Subtítulo removido conforme solicitação

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("ORÇAMENTO DE PROJETO", pageWidth / 2, 40, { align: "center" });

    let currentY = 65;

    // --- SEÇÃO RESUMO DO PROJETO ---
    doc.setTextColor(textWhite[0], textWhite[1], textWhite[2]);
    doc.setFontSize(12);
    doc.text("RESUMO DO PROJETO", 20, currentY);
    currentY += 8;

    // Card de Resumo
    doc.setFillColor(cardColor[0], cardColor[1], cardColor[2]);
    if (typeof (doc as any).roundedRect === 'function') {
      (doc as any).roundedRect(20, currentY, pageWidth - 40, 35, 3, 3, "F");
      doc.setDrawColor(primaryIndigo[0], primaryIndigo[1], primaryIndigo[2]);
      doc.setLineWidth(0.1);
      (doc as any).roundedRect(20, currentY, pageWidth - 40, 35, 3, 3, "S");
    } else {
      doc.rect(20, currentY, pageWidth - 40, 35, "F");
      doc.setDrawColor(primaryIndigo[0], primaryIndigo[1], primaryIndigo[2]);
      doc.rect(20, currentY, pageWidth - 40, 35, "S");
    }

    doc.setFontSize(10);
    doc.setTextColor(textGray[0], textGray[1], textGray[2]);
    doc.text("SERVIÇO", 30, currentY + 12);
    doc.text("TIPO ESCOLHIDO", 110, currentY + 12);

    doc.setTextColor(textWhite[0], textWhite[1], textWhite[2]);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("Landing Page Profissional", 30, currentY + 20);
    const planName = selectedPlan === "simples" ? "Design Simples" : "Design Completo";
    doc.text(planName, 110, currentY + 20);

    currentY += 48;

    // --- SEÇÃO DETALHES / EXTRAS ---
    if (selectedExtras.length > 0) {
      doc.setFontSize(12);
      doc.text("DIFERENCIAIS SELECIONADOS", 20, currentY);
      currentY += 10;

      selectedExtras.forEach(id => {
        const extra = EXTRAS.find(e => e.id === id);
        doc.setFillColor(primaryIndigo[0], primaryIndigo[1], primaryIndigo[2]);
        doc.circle(26, currentY - 1, 1.5, "F");
        doc.setTextColor(textWhite[0], textWhite[1], textWhite[2]);
        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.text(`${extra?.label}`, 32, currentY);
        currentY += 8;
      });
      currentY += 12;
    }

    // --- SEÇÃO INVESTIMENTO (CARD DESTAQUE) ---
    doc.setFillColor(cardColor[0], cardColor[1], cardColor[2]);
    if (typeof (doc as any).roundedRect === 'function') {
      (doc as any).roundedRect(20, currentY, pageWidth - 40, 60, 4, 4, "F");
      doc.setLineWidth(0.8);
      doc.setDrawColor(primaryIndigo[0], primaryIndigo[1], primaryIndigo[2]);
      (doc as any).roundedRect(20, currentY, pageWidth - 40, 60, 4, 4, "S");
    } else {
      doc.rect(20, currentY, pageWidth - 40, 60, "F");
      doc.setLineWidth(0.8);
      doc.setDrawColor(primaryIndigo[0], primaryIndigo[1], primaryIndigo[2]);
      doc.rect(20, currentY, pageWidth - 40, 60, "S");
    }

    doc.setTextColor(textGray[0], textGray[1], textGray[2]);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("INVESTIMENTO TOTAL DO PROJETO", pageWidth / 2, currentY + 18, { align: "center" });

    doc.setTextColor(textWhite[0], textWhite[1], textWhite[2]);
    doc.setFontSize(38);
    doc.setFont("helvetica", "bold");
    doc.text(`R$ ${totalPrice},00`, pageWidth / 2, currentY + 38, { align: "center" });

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(primaryIndigo[0], primaryIndigo[1], primaryIndigo[2]);
    doc.text(`Entrada de R$ ${totalPrice / 2},00 + 50% na aprovação`, pageWidth / 2, currentY + 50, { align: "center" });

    currentY += 82;

    // --- SEÇÃO CONDIÇÕES DE PAGAMENTO ---
    doc.setTextColor(textWhite[0], textWhite[1], textWhite[2]);
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text("CONDIÇÕES DE PAGAMENTO", 20, currentY);
    currentY += 10;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(textGray[0], textGray[1], textGray[2]);
    doc.text("• 50% de entrada para reserva de agenda e início imediato do projeto.", 20, currentY);
    currentY += 7;
    doc.text("• 50% restantes pagos apenas na entrega e aprovação final do design.", 20, currentY);
    currentY += 7;
    doc.text("• Aceitamos PIX, Cartão de Crédito, Débito e Boleto Bancário.", 20, currentY);
    currentY += 7;
    doc.text("• Condições flexíveis: parcele no cartão para o seu maior conforto.", 20, currentY);

    currentY += 20;

    // --- ASSINATURA ---
    doc.setFont("helvetica", "italic");
    doc.setFontSize(16);
    doc.setTextColor(primaryIndigo[0], primaryIndigo[1], primaryIndigo[2]);
    doc.text("João Paulo", 20, currentY);
    currentY += 6;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(textWhite[0], textWhite[1], textWhite[2]);
    doc.text("Jotapdsgn", 20, currentY);
    doc.setFont("helvetica", "normal");
    doc.text("Responsável pelo Projeto", 20, currentY + 5);

    // --- FOOTER ---
    doc.setFillColor(cardColor[0], cardColor[1], cardColor[2]);
    doc.rect(0, pageHeight - 25, pageWidth, 25, "F");
    doc.setTextColor(textGray[0], textGray[1], textGray[2]);
    doc.setFontSize(8);
    doc.text("Este orçamento é válido por 3 dias úteis.", 20, pageHeight - 12);
    doc.text("WhatsApp: (37) 99862-3827  |  Email: jpegnogueira@gmail.com", pageWidth - 20, pageHeight - 12, { align: "right" });

    doc.save(`proposta-jotapdsgn-${selectedPlan}.pdf`);
  };

  return (
    <>
      <Head>
        <title>Orçamento de Landing Page | Jotapdsgn</title>
        <meta name="description" content="Simule e solicite o orçamento para o desenvolvimento da sua Landing Page. Especialista na criação de sites e landing pages em Itaúna - MG." />
        <meta name="keywords" content="Orçamento Landing Page, Website em Itaúna - MG, Desenvolvimento de Landing Page, Criação de Sites Itaúna" />
        
        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jotapdsgn.com/briefing/landing-page" />
        <meta property="og:title" content="Orçamento de Landing Page | Jotapdsgn" />
        <meta property="og:description" content="Simule e solicite o orçamento para o desenvolvimento da sua Landing Page." />
        <meta property="og:image" content="https://www.jotapdsgn.com/preview.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.jotapdsgn.com/briefing/landing-page" />
        <meta property="twitter:title" content="Orçamento de Landing Page | Jotapdsgn" />
        <meta property="twitter:description" content="Simule e solicite o orçamento para o desenvolvimento da sua Landing Page." />
        <meta property="twitter:image" content="https://www.jotapdsgn.com/preview.jpg" />
      </Head>
      <div className="min-h-screen bg-background">
        {/* HEADER SIMPLES */}
        <header className="bg-card border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao site
          </Link>
          <img src="/logo-jotapdsgn.png" alt="JotaPDsgn Logo" className="h-10 sm:h-12 w-auto object-contain" />
          <div className="w-[100px] hidden md:block"></div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* LADO ESQUERDO: OPÇÕES */}
          <div className="lg:col-span-8 space-y-12">

            <section>
              <div className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Landing Page Profissional</h1>
                <p className="mt-4 text-lg text-gray-400">Escolha como você quer sua página e configure de acordo com a sua necessidade.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelectedPlan("simples")}
                  className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${selectedPlan === "simples"
                      ? "border-primary bg-primary/10 shadow-[0_0_15px_rgba(120,96,255,0.1)]"
                      : "border-white/10 bg-card hover:border-white/20"
                    }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-xl text-white">Simples</h3>
                      <p className="text-sm text-gray-400 mt-1">Ideal para captar leads rápidos e validações de ofertas.</p>
                    </div>
                    {selectedPlan === "simples" && (
                      <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_10px_rgba(120,96,255,0.4)]">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  <div className="mt-6">
                    <span className="text-3xl font-bold tracking-tight text-white">R$ {PLAN_SIMPLES_PRICE}</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelectedPlan("completa")}
                  className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${selectedPlan === "completa"
                      ? "border-primary bg-primary/10 shadow-[0_0_15px_rgba(120,96,255,0.1)]"
                      : "border-white/10 bg-card hover:border-white/20"
                    }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-xl text-white">Completa</h3>
                      <p className="text-sm text-gray-400 mt-1">Alta conversão com seções avançadas, ideal para lançamentos.</p>
                    </div>
                    {selectedPlan === "completa" && (
                      <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_10px_rgba(120,96,255,0.4)]">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  <div className="mt-6">
                    <span className="text-3xl font-bold tracking-tight text-white">R$ {PLAN_COMPLETA_PRICE}</span>
                  </div>
                </motion.div>
              </div>
            </section>

            <section>
              <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-white">Extras opcionais</h2>
                <p className="text-sm text-gray-400 mt-1">Potencialize os resultados da sua Landing Page</p>
              </div>

              <div className="space-y-3">
                {EXTRAS.map((extra) => {
                  const isSelected = selectedExtras.includes(extra.id);
                  return (
                    <motion.div
                      key={extra.id}
                      whileHover={{ scale: 1.005 }}
                      whileTap={{ scale: 0.995 }}
                      onClick={() => toggleExtra(extra.id)}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${isSelected
                          ? "border-primary bg-primary/10 shadow-[0_0_15px_rgba(120,96,255,0.1)]"
                          : "border-white/10 bg-card hover:border-white/20"
                        }`}
                    >
                      <div className="flex items-center">
                        <div className={`flex flex-shrink-0 items-center justify-center h-10 w-10 rounded-lg ${isSelected ? 'bg-primary/20' : 'bg-white/5'} mr-4`}>
                          {extra.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className={`font-medium ${isSelected ? 'text-primary' : 'text-white'}`}>{extra.label}</p>
                            <div className="group relative flex items-center">
                              <HelpCircle className="w-4 h-4 text-gray-500 hover:text-gray-300 transition-colors cursor-help" />
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-gray-900 border border-white/10 text-xs text-gray-300 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 text-center shadow-xl">
                                {extra.desc}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-400">+ R$ {extra.price}</p>
                        </div>
                      </div>
                      <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? 'border-primary bg-primary text-white shadow-[0_0_8px_rgba(120,96,255,0.4)]' : 'border-white/20 bg-transparent'
                        }`}>
                        {isSelected && <Check className="h-3 w-3" />}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            <div className="lg:hidden">
              <SummaryCard
                selectedPlan={selectedPlan}
                totalPrice={totalPrice}
                basePrice={basePrice}
                selectedExtras={selectedExtras}
                handleDownloadPDF={handleDownloadPDF}
              />
            </div>

            <section className="bg-card rounded-2xl border border-white/10 p-6 md:p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-white">Briefing</h2>
                <p className="text-sm text-gray-400 mt-1">Preencha os detalhes para um projeto impecável</p>
              </div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center"
                >
                  <div className="h-12 w-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Pedido recebido!</h3>
                  <p className="text-green-300">
                    Em até 1 hora entrarei em contato via WhatsApp.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 text-left">
                      <label className="text-sm font-medium text-gray-300">Nome completo *</label>
                      <Input required value={formData.nome} onChange={e => setFormData({ ...formData, nome: e.target.value })} placeholder="Seu nome" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500" />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-sm font-medium text-gray-300">Email *</label>
                      <Input type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="seu@email.com" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500" />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-sm font-medium text-gray-300">WhatsApp *</label>
                      <Input required value={formData.whatsapp} onChange={e => setFormData({ ...formData, whatsapp: e.target.value })} placeholder="(00) 00000-0000" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500" />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-sm font-medium text-gray-300">Nome da Empresa</label>
                      <Input value={formData.empresa} onChange={e => setFormData({ ...formData, empresa: e.target.value })} placeholder="Sua marca" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/5 pt-6">
                    <div className="space-y-2 text-left">
                      <label className="text-sm font-medium text-gray-300">Referências visuais</label>
                      <Input value={formData.referencias} onChange={e => setFormData({ ...formData, referencias: e.target.value })} placeholder="Ex: apple.com, tesla.com..." className="bg-white/5 border-white/10 text-white placeholder:text-gray-500" />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-sm font-medium text-gray-300">Concorrentes</label>
                      <Input value={formData.concorrentes} onChange={e => setFormData({ ...formData, concorrentes: e.target.value })} placeholder="Quem são seus concorrentes?" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500" />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-sm font-medium text-gray-300">Público-alvo *</label>
                      <Input required value={formData.publicoAlvo} onChange={e => setFormData({ ...formData, publicoAlvo: e.target.value })} placeholder="Para quem é o site?" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500" />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-sm font-medium text-gray-300">Prazo desejado</label>
                      <Input value={formData.prazo} onChange={e => setFormData({ ...formData, prazo: e.target.value })} placeholder="Ex: 15 dias, 1 mês..." className="bg-white/5 border-white/10 text-white placeholder:text-gray-500" />
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-white/5 pt-6 text-left">
                    <label className="text-sm font-medium text-gray-300">Objetivo do projeto *</label>
                    <Textarea required value={formData.objetivo} onChange={e => setFormData({ ...formData, objetivo: e.target.value })} placeholder="Descreva brevemente o que você espera alcançar..." className="min-h-[100px] bg-white/5 border-white/10 text-white placeholder:text-gray-500" />
                  </div>

                  <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-lg">
                    <p className="text-sm text-gray-400 text-center font-medium">
                      Após o envio, entrarei em contato para validar os detalhes e iniciar seu projeto.
                    </p>
                  </div>

                  <Button type="submit" disabled={isSubmitting} size="lg" className="w-full text-lg h-14 mt-6 hover:shadow-[0_0_20px_rgba(120,96,255,0.4)] transition-shadow">
                    {isSubmitting ? "Enviando..." : "Enviar pedido"}
                    {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
                  </Button>
                </form>
              )}
            </section>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-24">
              <SummaryCard
                selectedPlan={selectedPlan}
                totalPrice={totalPrice}
                basePrice={basePrice}
                selectedExtras={selectedExtras}
                handleDownloadPDF={handleDownloadPDF}
              />
            </div>
          </div>

        </div>
      </main>
    </div>
    </>
  );
};

const SummaryCard = ({ selectedPlan, totalPrice, basePrice, selectedExtras, handleDownloadPDF }: any) => (
  <div className="bg-card rounded-2xl border border-white/10 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
    <h3 className="text-lg font-bold text-white mb-6 text-left">Resumo do pedido</h3>

    <div className="space-y-4">
      <div className="flex justify-between items-start">
        <div className="text-left">
          <p className="font-medium text-white">
            {selectedPlan === "simples" ? "Landing Page Simples" : "Landing Page Completa"}
          </p>
          <p className="text-xs text-gray-400 mt-1">Alta conversão e performance</p>
        </div>
        <p className="font-medium text-white">R$ {basePrice}</p>
      </div>

      {selectedExtras.length > 0 && (
        <>
          <div className="h-px w-full bg-white/10 my-4" />
          <div className="space-y-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-left">Extras</p>
            {selectedExtras.map((id: string) => {
              const extra = EXTRAS.find(e => e.id === id);
              return (
                <div key={id} className="flex justify-between items-center">
                  <p className="text-sm text-gray-400">{extra?.label}</p>
                  <p className="text-sm font-medium text-white">+ R$ {extra?.price}</p>
                </div>
              );
            })}
          </div>
        </>
      )}

      <div className="h-px w-full bg-white/10 my-4" />

      <div className="flex justify-between items-center">
        <p className="text-base font-semibold text-white">Total a investir</p>
        <p className="text-2xl font-bold text-white">R$ {totalPrice}</p>
      </div>

      <Button
        onClick={handleDownloadPDF}
        variant="outline"
        className="w-full mt-6 bg-transparent border-white/20 text-white hover:bg-white/10 transition-colors"
      >
        <Download className="w-4 h-4 mr-2" />
        Baixar orçamento em PDF
      </Button>

      <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <p className="text-xs text-center text-primary/80">
          Envie o briefing para análise e receba um retorno em até 1 hora.
        </p>
      </div>
    </div>
  </div>
);

export default ConfiguratorLandingPage;
