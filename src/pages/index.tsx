import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedDivider from "@/components/ui/AnimatedDivider";

const Index = () => {
  return (
    <>
      <Head>
        <title>Jotapdsgn | Desenvolvimento de Landing Page e Website em Itaúna - MG</title>
        <meta name="description" content="Especialista em Desenvolvimento de Landing Page e Criação de Website em Itaúna - MG. Transforme sua presença digital com design de alto impacto e foco em conversão." />
        <meta name="keywords" content="Website em Itaúna - MG, Desenvolvimento de Landing Page, Criação de Sites Itaúna, Web Design Itaúna, Landing Page Alta Conversão, Jotapdsgn" />
        
        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jotapdsgn.com/" />
        <meta property="og:title" content="Jotapdsgn | Desenvolvimento de Landing Page e Website em Itaúna - MG" />
        <meta property="og:description" content="Especialista em Desenvolvimento de Landing Page e Criação de Website em Itaúna - MG. Transforme sua presença digital com design de alto impacto." />
        <meta property="og:image" content="https://www.jotapdsgn.com/preview.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.jotapdsgn.com/" />
        <meta property="twitter:title" content="Jotapdsgn | Desenvolvimento de Landing Page e Website em Itaúna - MG" />
        <meta property="twitter:description" content="Especialista em Desenvolvimento de Landing Page e Criação de Website em Itaúna - MG. Transforme sua presença digital com design de alto impacto." />
        <meta property="twitter:image" content="https://www.jotapdsgn.com/preview.jpg" />
      </Head>
      <div className="min-h-screen bg-background">
        <Navbar />
      
      {/* Seção Hero - Dark Gradient */}
      <Hero />
      
      <AnimatedDivider />
      
      <About />
      
      <AnimatedDivider />

      <Services />

      <AnimatedDivider />

      <Packages />

      <AnimatedDivider />

      <Process />

      <AnimatedDivider />

      <Contact />
      <Footer />
    </div>
    </>
  );
};

export default Index;
