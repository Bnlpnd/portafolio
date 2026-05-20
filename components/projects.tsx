"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./motion";
import {
  Brain,
  FileText,
  BarChart3,
  Database,
  FileSpreadsheet,
  Cpu,
  CheckCircle2,
} from "lucide-react";

const projects = [
  {
    title: "Sistema Inteligente de Cotización de Puertas",
    description:
      "Sistema web que automatiza el proceso de cotización de puertas metálicas utilizando Machine Learning para predecir precios según dimensiones, material y modelo. Incluye generación de documentos y seguimiento de pedidos.",
    icon: Brain,
    features: [
      {
        icon: Cpu,
        text: "Predicción de precios con modelos de ML (Scikit-learn)",
      },
      {
        icon: BarChart3,
        text: "Evaluación de modelos mediante métricas RMSE y R²",
      },
      {
        icon: Database,
        text: "Integración del modelo predictivo en sistema web funcional",
      },
    ],
    tags: ["Python", "Django", "Scikit-learn", "SQLite", "Machine Learning"],
    highlight: "Machine Learning",
  },
  {
    title: "Sistema de Gestión de Resoluciones Municipales",
    description:
      "Plataforma para el registro, filtrado y seguimiento de resoluciones de licencias de construcción. Implementa control de acceso por roles y exportación automatizada de datos para la Municipalidad Regional de Lambayeque.",
    icon: FileText,
    features: [
      {
        icon: CheckCircle2,
        text: "Registro, filtrado y seguimiento de documentos administrativos",
      },
      {
        icon: FileSpreadsheet,
        text: "Exportación automatizada de información a Excel",
      },
      {
        icon: Database,
        text: "Implementación con control de roles para uso institucional",
      },
    ],
    tags: ["Python", "Django", "SQL", "Control de Acceso", "Excel"],
    highlight: "Gestión Pública",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border))] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-[hsl(var(--accent))] tracking-[0.2em] uppercase mb-4">
            Proyectos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(var(--fg))] mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-[hsl(var(--fg-muted))] max-w-xl mx-auto">
            Soluciones reales desarrolladas para organizaciones, combinando
            análisis de requerimientos con implementación técnica.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid md:grid-cols-2 gap-6"
          staggerDelay={0.2}
        >
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <div className="card-base rounded-2xl overflow-hidden h-full flex flex-col group">
                <div className="p-7 sm:p-8 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[hsl(var(--accent-subtle))] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <project.icon
                        size={22}
                        className="text-[hsl(var(--accent))]"
                      />
                    </div>
                    <span className="px-3 py-1 text-[10px] font-semibold text-[hsl(var(--accent))] bg-[hsl(var(--accent-subtle))] rounded-full">
                      {project.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[hsl(var(--fg))] mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[hsl(var(--fg-muted))] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-6 flex-1">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-md bg-[hsl(var(--accent-subtle))] flex items-center justify-center shrink-0 mt-0.5">
                          <feature.icon
                            size={12}
                            className="text-[hsl(var(--accent))]"
                          />
                        </div>
                        <span className="text-xs text-[hsl(var(--fg-muted))] leading-relaxed">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-5 border-t border-[hsl(var(--border))] mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs text-[hsl(var(--fg-muted))] bg-[hsl(var(--bg-alt))] border border-[hsl(var(--border))] rounded-lg"
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
    </section>
  );
}
