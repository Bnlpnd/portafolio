"use client";

import { Linkedin, Mail, Heart } from "lucide-react";
import { AnimatedSection } from "./motion";

const footerLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[hsl(var(--border))]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-8 items-start mb-10">
            <div>
              <a
                href="#inicio"
                className="text-xl font-bold text-[hsl(var(--fg))] hover:text-[hsl(var(--accent))] transition-colors"
              >
                ZB<span className="text-[hsl(var(--accent))]">.</span>
              </a>
              <p className="text-xs text-[hsl(var(--fg-muted))] mt-2 leading-relaxed max-w-xs">
                Analista & Desarrolladora de Sistemas. Transformando procesos en
                soluciones digitales inteligentes.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-[hsl(var(--fg))] tracking-widest uppercase mb-3">
                Navegación
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-xs text-[hsl(var(--fg-muted))] hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-[hsl(var(--fg))] tracking-widest uppercase mb-3">
                Redes
              </p>
              <div className="flex gap-3">
                <a
                  href="mailto:zoila.benel@gmail.com"
                  className="w-9 h-9 rounded-lg bg-[hsl(var(--accent-subtle))] flex items-center justify-center text-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-fg))] transition-all"
                  aria-label="Email"
                >
                  <Mail size={15} />
                </a>
                <a
                  href="https://www.linkedin.com/in/zoila-benel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[hsl(var(--accent-subtle))] flex items-center justify-center text-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-fg))] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={15} />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="pt-6 border-t border-[hsl(var(--border))] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[hsl(var(--fg-muted))]">
            &copy; {new Date().getFullYear()} Zoila Benel Pando. Todos los
            derechos reservados.
          </p>
          <p className="flex items-center gap-1 text-xs text-[hsl(var(--fg-muted))]">
            Hecho con{" "}
            <Heart
              size={11}
              className="text-[hsl(var(--accent))] fill-[hsl(var(--accent))]"
            />{" "}
            en Perú
          </p>
        </div>
      </div>
    </footer>
  );
}
