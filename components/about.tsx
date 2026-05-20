"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./motion";
import { MapPin, GraduationCap, Briefcase, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    label: "Formación",
    value: "Ing. de Sistemas",
    detail: "USAT",
  },
  {
    icon: Briefcase,
    label: "Enfoque",
    value: "Análisis & Desarrollo",
    detail: "Sistemas empresariales",
  },
  {
    icon: Sparkles,
    label: "Especialidad",
    value: "ML & Automatización",
    detail: "Python + Django",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Lambayeque, Perú",
    detail: "Disponible para Lima",
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <span className="text-xs font-medium text-violet-400 tracking-widest uppercase">
            Sobre mí
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
            Perfil Profesional
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <AnimatedSection className="lg:col-span-3 space-y-5" delay={0.1}>
            <p className="text-zinc-400 leading-relaxed">
              Bachiller en Ingeniería de Sistemas por la Universidad Católica
              Santo Toribio de Mogrovejo con experiencia práctica en{" "}
              <span className="text-zinc-200">
                desarrollo de sistemas web, gestión de bases de datos y
                automatización de procesos
              </span>
              .
            </p>
            <p className="text-zinc-400 leading-relaxed">
              He diseñado e implementado soluciones reales para organizaciones —
              desde{" "}
              <span className="text-zinc-200">
                sistemas de cotización con Machine Learning
              </span>{" "}
              hasta{" "}
              <span className="text-zinc-200">
                plataformas de gestión documental para entidades públicas
              </span>
              . Mi enfoque combina el análisis de requerimientos con la
              capacidad técnica para llevarlos a producción.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Busco desarrollarme como{" "}
              <span className="text-violet-400 font-medium">
                Analista de Sistemas
              </span>{" "}
              en entornos corporativos, aportando en el análisis, mantenimiento
              y mejora continua de aplicaciones empresariales.
            </p>
          </AnimatedSection>

          <StaggerContainer
            className="lg:col-span-2 grid grid-cols-2 gap-3"
            staggerDelay={0.1}
          >
            {highlights.map((item) => (
              <StaggerItem key={item.label}>
                <div className="glass rounded-2xl p-4 glass-hover group">
                  <item.icon
                    size={18}
                    className="text-violet-400 mb-3 group-hover:scale-110 transition-transform"
                  />
                  <p className="text-xs text-zinc-500 mb-0.5">{item.label}</p>
                  <p className="text-sm font-medium text-zinc-200">
                    {item.value}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">{item.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
