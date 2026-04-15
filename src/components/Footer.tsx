// import logo from "@/assets/logo-jotapdsgn.png";
import { ShieldCheck, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img src="/logo-jotapdsgn.png" alt="jotapdsgn" className="h-16" />
          </a>

          {/* Links */}
          <div className="flex gap-8">
            {[
              { label: "Início", href: "#home" },
              { label: "Sobre", href: "#about" },
              { label: "Serviços", href: "#services" },
              { label: "Planos", href: "#pacotes" },
              { label: "Contato", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center md:text-right">
            © 2026 João Paulo Nogueira. Todos os direitos reservados.
          </p>
        </div>

        {/* Segurança / confiança */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Site protegido</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4" />
            <span>Conexão segura (SSL)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;