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
  );
};

export default Index;
