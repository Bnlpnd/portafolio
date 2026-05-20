import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Zoila Benel — Analista & Desarrolladora de Sistemas",
  description:
    "Portafolio profesional de Zoila Benel Pando. Bachiller en Ingeniería de Sistemas con experiencia en desarrollo web, bases de datos, Machine Learning y automatización de procesos.",
  keywords: [
    "Analista de Sistemas",
    "Desarrolladora",
    "Python",
    "Django",
    "Machine Learning",
    "SQL",
    "Oracle",
    "Ingeniería de Sistemas",
    "Perú",
  ],
  authors: [{ name: "Zoila Benel Pando" }],
  openGraph: {
    title: "Zoila Benel — Analista & Desarrolladora de Sistemas",
    description:
      "Bachiller en Ingeniería de Sistemas. Desarrollo web, bases de datos, ML y automatización de procesos.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('theme');
                if (t === 'dark') document.documentElement.classList.add('dark');
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
