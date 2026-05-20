"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./motion";
import { GraduationCap, Globe, Award, Heart } from "lucide-react";

const competencies = [
  "Pensamiento analítico",
  "Resolución de problemas",
  "Adaptabilidad tecnológica",
  "Organización de información",
  "Trabajo autónomo",
];

export default function Education() {
  return (
    <section className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border))] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-[hsl(var(--accent))] tracking-[0.2em] uppercase mb-4">
            Formación
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(var(--fg))]">
            Educación & Competencias
          </h2>
        </AnimatedSection>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          staggerDelay={0.1}
        >
          <StaggerItem>
            <div className="card-base rounded-2xl p-6 h-full">
              <div className="w-11 h-11 rounded-xl bg-[hsl(var(--accent-subtle))] flex items-center justify-center mb-5">
                <GraduationCap
                  size={20}
                  className="text-[hsl(var(--accent))]"
                />
              </div>
              <h3 className="text-sm font-bold text-[hsl(var(--fg))] mb-1">
                Bachiller en Ingeniería de Sistemas
              </h3>
              <p className="text-xs text-[hsl(var(--accent))] font-medium mb-3">
                USAT
              </p>
              <p className="text-xs text-[hsl(var(--fg-muted))] leading-relaxed">
                Universidad Católica Santo Toribio de Mogrovejo. Finalización
                2025.
              </p>
              <div className="mt-3 px-2.5 py-1 inline-block text-[10px] font-medium text-[hsl(var(--accent))] bg-[hsl(var(--accent-subtle))] rounded-md">
                Título en trámite
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="card-base rounded-2xl p-6 h-full">
              <div className="w-11 h-11 rounded-xl bg-[hsl(var(--accent-subtle))] flex items-center justify-center mb-5">
                <Globe size={20} className="text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-sm font-bold text-[hsl(var(--fg))] mb-4">
                Idiomas
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[hsl(var(--fg-muted))]">
                    Español
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] font-semibold text-[hsl(var(--accent))] bg-[hsl(var(--accent-subtle))] rounded-md">
                    Nativo
                  </span>
                </div>
                <div className="h-px bg-[hsl(var(--border))]" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[hsl(var(--fg-muted))]">
                    Inglés
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] font-semibold text-[hsl(var(--fg-muted))] bg-[hsl(var(--bg-alt))] rounded-md">
                    Intermedio
                  </span>
                </div>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="card-base rounded-2xl p-6 h-full">
              <div className="w-11 h-11 rounded-xl bg-[hsl(var(--accent-subtle))] flex items-center justify-center mb-5">
                <Award size={20} className="text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-sm font-bold text-[hsl(var(--fg))] mb-4">
                Competencias
              </h3>
              <div className="flex flex-wrap gap-2">
                {competencies.map((comp) => (
                  <span
                    key={comp}
                    className="px-2.5 py-1 text-xs text-[hsl(var(--fg-muted))] bg-[hsl(var(--bg-alt))] border border-[hsl(var(--border))] rounded-lg"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="card-base rounded-2xl p-6 h-full">
              <div className="w-11 h-11 rounded-xl bg-[hsl(var(--accent-subtle))] flex items-center justify-center mb-5">
                <Heart size={20} className="text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-sm font-bold text-[hsl(var(--fg))] mb-4">
                Intereses
              </h3>
              <div className="space-y-2">
                {[
                  "Sistemas empresariales",
                  "Bases de datos",
                  "Optimización de procesos",
                  "Inteligencia Artificial",
                ].map((interest) => (
                  <div
                    key={interest}
                    className="flex items-center gap-2 text-sm text-[hsl(var(--fg-muted))]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))]" />
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
