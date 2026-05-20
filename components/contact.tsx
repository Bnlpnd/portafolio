"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./motion";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "zoila.benel@gmail.com",
    href: "mailto:zoila.benel@gmail.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+51 942 025 999",
    href: "tel:+51942025999",
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
    value: "linkedin.com/in/zoila-benel",
    href: "https://www.linkedin.com/in/zoila-benel/",
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimatedSection className="text-center mb-12">
          <span className="text-xs font-medium text-violet-400 tracking-widest uppercase">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Trabajemos Juntos
          </h2>
          <p className="text-zinc-500 max-w-md mx-auto">
            Estoy disponible de inmediato y abierta a nuevas oportunidades.
            No dudes en contactarme.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
          staggerDelay={0.1}
        >
          {contactInfo.map((item) => {
            const Wrapper = item.href ? "a" : "div";
            const wrapperProps = item.href
              ? {
                  href: item.href,
                  target: item.href.startsWith("http")
                    ? "_blank"
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
                  className="glass rounded-2xl p-5 glass-hover group block text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <item.icon size={18} className="text-violet-400" />
                  </div>
                  <p className="text-xs text-zinc-500 mb-1">{item.label}</p>
                  <p className="text-sm text-zinc-300 font-medium break-all">
                    {item.value}
                  </p>
                </Wrapper>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection className="mt-10 text-center" delay={0.4}>
          <a
            href="mailto:zoila.benel@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-violet-600/25"
          >
            <Send size={16} />
            Enviar un mensaje
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
