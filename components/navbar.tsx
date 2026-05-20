"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./theme-provider";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[hsl(var(--bg)/0.85)] backdrop-blur-2xl border-b border-[hsl(var(--border))] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#inicio"
          className="text-lg font-bold tracking-tight text-[hsl(var(--fg))] hover:text-[hsl(var(--accent))] transition-colors"
        >
          ZB<span className="text-[hsl(var(--accent))]">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-[hsl(var(--fg-muted))] hover:text-[hsl(var(--fg))] rounded-lg hover:bg-[hsl(var(--accent-subtle))] transition-all"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="ml-3 p-2 rounded-lg text-[hsl(var(--fg-muted))] hover:text-[hsl(var(--fg))] hover:bg-[hsl(var(--accent-subtle))] transition-all"
            aria-label="Cambiar tema"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggle}
            className="p-2 text-[hsl(var(--fg-muted))] hover:text-[hsl(var(--fg))] transition-colors"
            aria-label="Cambiar tema"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            className="p-2 text-[hsl(var(--fg-muted))] hover:text-[hsl(var(--fg))] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[hsl(var(--bg)/0.95)] backdrop-blur-2xl border-b border-[hsl(var(--border))] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-3 text-sm text-[hsl(var(--fg-muted))] hover:text-[hsl(var(--fg))] rounded-lg hover:bg-[hsl(var(--accent-subtle))] transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
