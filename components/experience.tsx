"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./motion";
import { Calendar, Building2, ArrowRight } from "lucide-react";

const experiences = [
  {
    title: "Desarrolladora de Sistemas",
    badge: "Proyecto de Tesis",
    company: "Carpintería Metálica Santa Ana",
    location: "Lambayeque",
    period: "2025",
    description: [
      "Desarrollo de un sistema web para la gestión de cotizaciones de puertas metálicas",
      "Implementación de un modelo de Machine Learning para predicción de precios basado en dimensiones, material y modelo",
      "Diseño y administración de bases de datos relacionales",
      "Análisis e implementación de reglas de negocio para automatizar el proceso de cotización",
      "Integración de generación de documentos y seguimiento de pedidos",
    ],
    tags: ["Python", "Django", "SQLite", "Scikit-learn", "Machine Learning"],
  },
  {
    title: "Practicante de Sistemas",
    badge: "Control Urbano y Catastro",
    company: "Municipalidad Regional de Lambayeque",
    location: "Lambayeque",
    period: "2025",
    description: [
      "Desarrollo de un sistema para el registro y seguimiento de resoluciones de licencias de construcción",
      "Implementación de control de acceso por roles (Obras y Fiscalización)",
      "Diseño de base de datos para trazabilidad de expedientes y documentos",
      "Generación de reportes y exportación automatizada de datos a Excel",
    ],
    tags: ["Python", "Django", "SQL", "Control de Acceso", "Reportes"],
  },
  {
    title: "Apoyo en Gestión y Operaciones",
    company: "Minimarket Santa Ana",
    location: "Lambayeque",
    period: "2026",
    description: [
      "Apoyo en organización de productos y control básico de inventario",
      "Identificación de oportunidades de mejora en procesos operativos",
      "Participación en iniciativas de digitalización mediante herramientas tecnológicas",
    ],
    tags: ["Gestión", "Inventario", "Digitalización"],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="section-padding section-alt relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border))] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-[hsl(var(--accent))] tracking-[0.2em] uppercase mb-4">
            Trayectoria
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(var(--fg))]">
            Experiencia Relevante
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[hsl(var(--border))] hidden lg:block" />

          <StaggerContainer className="space-y-8" staggerDelay={0.15}>
            {experiences.map((exp, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-8">
                  <div className="hidden lg:flex flex-col items-center pt-7">
                    <div className="w-10 h-10 rounded-full border-2 border-[hsl(var(--accent))] bg-[hsl(var(--bg))] flex items-center justify-center z-10">
                      <div className="w-3 h-3 rounded-full bg-[hsl(var(--accent))]" />
                    </div>
                  </div>

                  <div className="flex-1 card-base rounded-2xl p-7 sm:p-8 group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                          <h3 className="text-lg font-bold text-[hsl(var(--fg))]">
                            {exp.title}
                          </h3>
                          {exp.badge && (
                            <span className="px-2.5 py-0.5 text-[10px] font-semibold text-[hsl(var(--accent))] bg-[hsl(var(--accent-subtle))] rounded-full">
                              {exp.badge}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Building2
                            size={14}
                            className="text-[hsl(var(--fg-muted))]"
                          />
                          <span className="text-sm text-[hsl(var(--fg-muted))]">
                            {exp.company}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[hsl(var(--fg-muted))] shrink-0">
                        <Calendar size={13} />
                        <span className="font-medium">{exp.period}</span>
                        <span className="text-[hsl(var(--border))]">|</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2.5 mb-6">
                      {exp.description.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm">
                          <ArrowRight
                            size={14}
                            className="text-[hsl(var(--accent))] mt-0.5 shrink-0"
                          />
                          <span className="text-[hsl(var(--fg-muted))]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-5 border-t border-[hsl(var(--border))]">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium text-[hsl(var(--accent))] bg-[hsl(var(--accent-subtle))] border border-[hsl(var(--accent)/0.1)] rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
