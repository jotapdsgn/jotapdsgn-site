import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
// import logo from "@/assets/logo-jotapdsgn.png";

const navLinks = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Planos", href: "#pacotes" },
  { label: "Serviços", href: "#services" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : ""
      }`}
    >
      <div className="container px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="/logo-jotapdsgn.png"
            alt="JotaPDsgn Logo"
            className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* CTA INDIGO GRADIENT */}
          <a
            href="#pacotes"
            className="ml-4 px-5 py-2 rounded-lg text-white text-sm font-medium transition-all hover:scale-[1.03] shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, var(--indigo-main), var(--indigo-light))",
            }}
          >
            Ver Planos
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="container px-6 py-4 flex flex-col gap-4">

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* CTA MOBILE INDIGO */}
            <a
              href="#pacotes"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-5 py-3 rounded-lg text-white text-sm font-medium text-center shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, var(--indigo-main), var(--indigo-light))",
              }}
            >
              Ver Planos
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;