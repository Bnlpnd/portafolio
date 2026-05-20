"use client";

import { AnimatedSection } from "./motion";
import { GraduationCap, Globe, Award } from "lucide-react";

export default function Education() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <span className="text-xs font-medium text-violet-400 tracking-widest uppercase">
            Formación
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-12">
            Educación
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatedSection delay={0.1}>
            <div className="glass rounded-2xl p-6 glass-hover group h-full">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap size={20} className="text-violet-400" />
              </div>
              <h3 className="text-base font-semibold text-zinc-100 mb-1">
                Bachiller en Ingeniería de Sistemas
              </h3>
              <p className="text-sm text-violet-400 mb-2">
                Universidad Católica Santo Toribio de Mogrovejo
              </p>
              <p className="text-xs text-zinc-500">
                Finalización: 2025
              </p>
              <p className="text-xs text-zinc-500 mt-1">
                Título profesional en trámite
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass rounded-2xl p-6 glass-hover group h-full">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe size={20} className="text-blue-400" />
              </div>
              <h3 className="text-base font-semibold text-zinc-100 mb-1">
                Idiomas
              </h3>
              <div className="space-y-2 mt-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-400">Español</span>
                  <span className="text-xs text-zinc-500 px-2 py-0.5 bg-white/[0.04] rounded-md">
                    Nativo
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-400">Inglés</span>
                  <span className="text-xs text-zinc-500 px-2 py-0.5 bg-white/[0.04] rounded-md">
                    Intermedio
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="glass rounded-2xl p-6 glass-hover group h-full">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award size={20} className="text-emerald-400" />
              </div>
              <h3 className="text-base font-semibold text-zinc-100 mb-1">
                Competencias
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  "Pensamiento analítico",
                  "Resolución de problemas",
                  "Adaptabilidad",
                  "Organización",
                  "Trabajo autónomo",
                ].map((comp) => (
                  <span
                    key={comp}
                    className="px-2.5 py-1 text-xs text-zinc-400 bg-white/[0.03] border border-white/[0.06] rounded-lg"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
