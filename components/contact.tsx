"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./motion";
import { Mail, MapPin, Linkedin, Send, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "zoila.benel@gmail.com",
    href: "mailto:zoila.benel@gmail.com",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Lambayeque, Perú",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/zoila-benel",
    href: "https://www.linkedin.com/in/zoila-benel/",
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="section-padding section-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border))] to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[hsl(var(--accent)/0.04)] rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-[hsl(var(--accent))] tracking-[0.2em] uppercase mb-4">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(var(--fg))] mb-4">
            Trabajemos Juntos
          </h2>
          <p className="text-[hsl(var(--fg-muted))] max-w-md mx-auto">
            Estoy disponible de inmediato y abierta a nuevas oportunidades.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="card-base rounded-3xl p-8 sm:p-10 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Clock size={14} className="text-emerald-500" />
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Disponibilidad inmediata
              </span>
              <span className="text-xs text-[hsl(var(--fg-muted))]">
                · Disponible para reubicación en Lima
              </span>
            </div>

            <StaggerContainer
              className="grid sm:grid-cols-3 gap-4 mb-8"
              staggerDelay={0.1}
            >
              {contactInfo.map((item) => {
                const Wrapper = item.href ? "a" : "div";
                const wrapperProps = item.href
                  ? {
                      href: item.href,
                      target: item.href.startsWith("http")
                        ? ("_blank" as const)
                        : undefined,
                      rel: item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined,
                    }
                  : {};

                return (
                  <StaggerItem key={item.label}>
                    <Wrapper
                      {...wrapperProps}
                      className="flex items-center gap-4 p-4 rounded-xl bg-[hsl(var(--bg))] border border-[hsl(var(--border))] hover:border-[hsl(var(--border-hover))] hover:shadow-sm transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[hsl(var(--accent-subtle))] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon
                          size={17}
                          className="text-[hsl(var(--accent))]"
                        />
                      </div>
                      <div>
                        <p className="text-[10px] text-[hsl(var(--fg-muted))] tracking-widest uppercase">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-[hsl(var(--fg))]">
                          {item.value}
                        </p>
                      </div>
                    </Wrapper>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <div className="text-center">
              <a
                href="mailto:zoila.benel@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-hover))] text-[hsl(var(--accent-fg))] text-sm font-medium rounded-xl transition-all shadow-lg shadow-[hsl(var(--accent)/0.15)] hover:shadow-xl hover:shadow-[hsl(var(--accent)/0.25)]"
              >
                <Send size={16} />
                Enviar un mensaje
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
