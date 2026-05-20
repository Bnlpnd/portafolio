"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./motion";
import {
  Brain,
  FileText,
  BarChart3,
  Database,
  FileSpreadsheet,
  Cpu,
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
    accent: "violet",
  },
  {
    title: "Sistema de Gestión de Resoluciones Municipales",
    description:
      "Plataforma para el registro, filtrado y seguimiento de resoluciones de licencias de construcción. Implementa control de acceso por roles y exportación automatizada de datos para la Municipalidad Regional de Lambayeque.",
    icon: FileText,
    features: [
      {
        icon: Database,
        text: "Registro, filtrado y seguimiento de documentos administrativos",
      },
      {
        icon: FileSpreadsheet,
        text: "Exportación automatizada de información a Excel",
      },
      {
        icon: Cpu,
        text: "Implementación local para uso institucional con control de roles",
      },
    ],
    tags: ["Python", "Django", "SQL", "Control de Acceso", "Excel"],
    accent: "blue",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <span className="text-xs font-medium text-violet-400 tracking-widest uppercase">
            Proyectos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-zinc-500 max-w-xl mb-12">
            Soluciones reales desarrolladas para organizaciones, combinando
            análisis de requerimientos con implementación técnica.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <div className="glass rounded-2xl p-6 sm:p-8 glass-hover group h-full flex flex-col">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
                    project.accent === "violet"
                      ? "bg-violet-500/10 text-violet-400"
                      : "bg-blue-500/10 text-blue-400"
                  }`}
                >
                  <project.icon size={22} />
                </div>

                <h3 className="text-lg font-semibold text-zinc-100 mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6 flex-1">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <feature.icon
                        size={14}
                        className="text-zinc-600 mt-0.5 shrink-0"
                      />
                      <span className="text-xs text-zinc-500">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/[0.04]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs text-zinc-400 bg-white/[0.03] border border-white/[0.06] rounded-lg"
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
