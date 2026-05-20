"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, MapPin } from "lucide-react";
import { AnimatedCounter } from "./motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-[hsl(var(--accent)/0.06)] rounded-full blur-[100px]" />
        <div className="absolute bottom-32 left-1/4 w-96 h-96 bg-[hsl(var(--accent)/0.04)] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[hsl(var(--accent))] bg-[hsl(var(--accent-subtle))] border border-[hsl(var(--accent)/0.15)] rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Disponible para trabajar
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          <span className="text-[hsl(var(--fg))]">Zoila </span>
          <span className="text-gradient">Benel Pando</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-block mb-6"
        >
          <div className="px-5 py-2.5 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
            <p className="text-base sm:text-lg font-medium text-[hsl(var(--fg))]">
              Analista & Desarrolladora de Sistemas
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-sm sm:text-base text-[hsl(var(--fg-muted))] mb-3 max-w-lg mx-auto leading-relaxed"
        >
          Transformo procesos en soluciones digitales inteligentes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-2 text-xs text-[hsl(var(--fg-muted))] mb-10"
        >
          <MapPin size={13} />
          <span>Lambayeque, Perú</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#contacto"
            className="group flex items-center gap-2 px-7 py-3.5 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-hover))] text-[hsl(var(--accent-fg))] text-sm font-medium rounded-xl transition-all shadow-lg shadow-[hsl(var(--accent)/0.15)] hover:shadow-xl hover:shadow-[hsl(var(--accent)/0.25)]"
          >
            <Mail size={16} />
            Contactar
          </a>
          <a
            href="https://www.linkedin.com/in/zoila-benel/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-[hsl(var(--fg))] card-base rounded-xl"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="grid grid-cols-3 gap-8 max-w-sm mx-auto"
        >
          {[
            { value: 2, suffix: "+", label: "Proyectos" },
            { value: 6, suffix: "+", label: "Tecnologías" },
            { value: 2025, suffix: "", label: "USAT" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-[hsl(var(--fg))]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-[hsl(var(--fg-muted))] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <a
          href="#sobre-mi"
          className="flex flex-col items-center gap-2 text-[hsl(var(--fg-muted))] hover:text-[hsl(var(--accent))] transition-colors"
        >
          <span className="text-[10px] tracking-widest uppercase">
            Explorar
          </span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
