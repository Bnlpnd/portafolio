"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-[128px] animate-pulse-slow [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[128px]" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(0_0%_3%)_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Disponible para trabajar
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Zoila Benel
          <span className="block text-gradient mt-2">Pando</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg sm:text-xl text-zinc-400 mb-4 max-w-2xl mx-auto"
        >
          Analista & Desarrolladora de Sistemas
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-sm sm:text-base text-zinc-500 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Transformo procesos en soluciones digitales inteligentes.
          <br />
          Desarrollo web, bases de datos y Machine Learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contacto"
            className="group flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-violet-600/25"
          >
            <Mail size={16} />
            Contactar
          </a>
          <a
            href="https://www.linkedin.com/in/zoila-benel/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-300 glass rounded-xl glass-hover"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#sobre-mi"
          className="flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors"
        >
          <span className="text-xs">Explorar</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
