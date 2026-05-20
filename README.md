# Zoila Benel — Portafolio Profesional

Portafolio personal de **Zoila Benel Pando**, Analista & Desarrolladora de Sistemas.

## Tech Stack

- **Next.js 15** (App Router, Static Export)
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion** — animaciones de scroll y transiciones
- **Lucide React** — iconografía

## Secciones

- **Hero** — presentación con estado de disponibilidad
- **Sobre mí** — perfil profesional y highlights
- **Experiencia** — trayectoria con detalles y tecnologías
- **Proyectos** — sistema de cotización con ML y gestión municipal
- **Habilidades** — stack técnico con niveles por categoría
- **Educación** — formación, idiomas y competencias
- **Contacto** — información de contacto y CTA

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Deploy

El proyecto usa `output: "export"` para generar un sitio estático compatible con Vercel.

```bash
npm run build
```

Los archivos estáticos se generan en `/out`.

## Estructura

```
app/
├── layout.tsx          # Metadata + fonts
├── page.tsx            # Composición de secciones
└── globals.css         # Tailwind + custom styles
components/
├── motion.tsx          # Utilidades de animación (InView, Stagger)
├── navbar.tsx          # Navegación sticky con blur
├── hero.tsx            # Hero con gradientes y CTA
├── about.tsx           # Perfil profesional
├── experience.tsx      # Timeline de experiencia
├── projects.tsx        # Proyectos destacados
├── skills.tsx          # Stack técnico con barras de progreso
├── education.tsx       # Formación y competencias
├── contact.tsx         # Información de contacto
└── footer.tsx          # Footer con enlaces sociales
lib/
└── utils.ts            # cn() utility (clsx + tailwind-merge)
```
