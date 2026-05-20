"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./motion";
import {
  GraduationCap,
  Briefcase,
  Sparkles,
  Target,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Formación",
    value: "Ing. de Sistemas",
    detail: "Universidad Católica Santo Toribio de Mogrovejo",
  },
  {
    icon: Briefcase,
    title: "Enfoque",
    value: "Análisis & Desarrollo",
    detail: "Sistemas empresariales y automatización",
  },
  {
    icon: Sparkles,
    title: "Especialidad",
    value: "ML & Automatización",
    detail: "Python, Django, Scikit-learn",
  },
  {
    icon: Target,
    title: "Objetivo",
    value: "Entornos Corporativos",
    detail: "Análisis, mantenimiento y mejora de apps",
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border))] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-[hsl(var(--accent))] tracking-[0.2em] uppercase mb-4">
            Sobre mí
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(var(--fg))]">
            Perfil Profesional
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <AnimatedSection variant="slideLeft" className="space-y-6">
            <p className="text-[hsl(var(--fg-muted))] leading-relaxed text-base">
              Bachiller en Ingeniería de Sistemas por la Universidad Católica
              Santo Toribio de Mogrovejo con experiencia práctica en{" "}
              <span className="text-[hsl(var(--fg))] font-medium">
                desarrollo de sistemas web, gestión de bases de datos y
                automatización de procesos
              </span>
              .
            </p>
            <p className="text-[hsl(var(--fg-muted))] leading-relaxed text-base">
              He diseñado e implementado soluciones reales para organizaciones
              — desde{" "}
              <span className="text-[hsl(var(--fg))] font-medium">
                sistemas de cotización con Machine Learning
              </span>{" "}
              hasta{" "}
              <span className="text-[hsl(var(--fg))] font-medium">
                plataformas de gestión documental para entidades públicas
              </span>
              . Mi enfoque combina el análisis de requerimientos con la
              capacidad técnica para llevarlos a producción.
            </p>
            <p className="text-[hsl(var(--fg-muted))] leading-relaxed text-base">
              Busco desarrollarme como{" "}
              <span className="text-[hsl(var(--accent))] font-semibold">
                Analista de Sistemas
              </span>{" "}
              en entornos corporativos, aportando en el análisis,
              mantenimiento y mejora continua de aplicaciones empresariales.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.12}>
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="card-base rounded-2xl p-5 h-full">
                  <div className="w-10 h-10 rounded-xl bg-[hsl(var(--accent-subtle))] flex items-center justify-center mb-4">
                    <item.icon
                      size={18}
                      className="text-[hsl(var(--accent))]"
                    />
                  </div>
                  <p className="text-[10px] text-[hsl(var(--fg-muted))] tracking-widest uppercase mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm font-semibold text-[hsl(var(--fg))] mb-1">
                    {item.value}
                  </p>
                  <p className="text-xs text-[hsl(var(--fg-muted))] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
