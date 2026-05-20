"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./motion";
import { Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Desarrolladora de Sistemas",
    subtitle: "Proyecto de Tesis",
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
    company: "Municipalidad Regional de Lambayeque",
    subtitle: "Área de Control Urbano y Catastro",
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
    <section id="experiencia" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <span className="text-xs font-medium text-violet-400 tracking-widest uppercase">
            Trayectoria
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-12">
            Experiencia Relevante
          </h2>
        </AnimatedSection>

        <StaggerContainer className="space-y-6" staggerDelay={0.15}>
          {experiences.map((exp, i) => (
            <StaggerItem key={i}>
              <div className="glass rounded-2xl p-6 sm:p-8 glass-hover group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 to-blue-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Building2 size={14} className="text-zinc-500" />
                      <span className="text-sm text-zinc-400">
                        {exp.company}
                      </span>
                    </div>
                    {exp.subtitle && (
                      <p className="text-xs text-zinc-500 mt-1">
                        {exp.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 shrink-0">
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                    <span className="text-zinc-700">·</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-5">
                  {exp.description.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-zinc-400"
                    >
                      <span className="w-1 h-1 rounded-full bg-violet-500/50 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium text-violet-300 bg-violet-500/10 border border-violet-500/15 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
