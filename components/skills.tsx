"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./motion";
import { Database, Code2, Brain, Wrench, BookOpen } from "lucide-react";

const skillCategories = [
  {
    title: "Bases de Datos",
    icon: Database,
    skills: [
      { name: "SQL", level: 75 },
      { name: "PL/SQL", level: 55 },
      { name: "Oracle Database", level: 60 },
      { name: "Oracle SQL Developer", level: 60 },
      { name: "Oracle Forms & Reports", level: 40 },
      { name: "SQLite", level: 70 },
    ],
  },
  {
    title: "Desarrollo",
    icon: Code2,
    skills: [
      { name: "Python", level: 80 },
      { name: "Django", level: 75 },
      { name: "HTML & CSS", level: 70 },
      { name: "APIs REST", level: 60 },
      { name: "Lógica de Negocio", level: 75 },
    ],
  },
  {
    title: "Análisis de Datos e IA",
    icon: Brain,
    skills: [
      { name: "Pandas", level: 65 },
      { name: "Scikit-learn", level: 65 },
      { name: "Machine Learning", level: 60 },
      { name: "ChatGPT & Claude", level: 80 },
      { name: "GitHub Copilot", level: 70 },
    ],
  },
  {
    title: "Herramientas",
    icon: Wrench,
    skills: [
      { name: "Excel Avanzado", level: 85 },
      { name: "Power BI", level: 50 },
      { name: "Git", level: 55 },
    ],
  },
  {
    title: "Conocimientos",
    icon: BookOpen,
    skills: [
      { name: "Análisis de Requerimientos", level: 80 },
      { name: "Modelado de BD", level: 70 },
      { name: "Optimización de Procesos", level: 75 },
      { name: "Automatización", level: 70 },
      { name: "Documentación Técnica", level: 75 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-[hsl(var(--fg-muted))] group-hover:text-[hsl(var(--fg))] transition-colors">
          {name}
        </span>
        <span className="text-[10px] font-semibold text-[hsl(var(--accent))]">
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-[hsl(var(--bg-alt))] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)))`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="habilidades" className="section-padding section-alt relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border))] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-[hsl(var(--accent))] tracking-[0.2em] uppercase mb-4">
            Habilidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(var(--fg))] mb-4">
            Stack Técnico
          </h2>
          <p className="text-[hsl(var(--fg-muted))] max-w-xl mx-auto">
            Tecnologías y herramientas que utilizo para analizar, diseñar e
            implementar soluciones.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.1}
        >
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="card-base rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[hsl(var(--accent-subtle))] flex items-center justify-center">
                    <category.icon
                      size={18}
                      className="text-[hsl(var(--accent))]"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-[hsl(var(--fg))]">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
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
