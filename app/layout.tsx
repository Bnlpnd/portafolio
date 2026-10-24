import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
 title: "Zoila Benel | Procesos, sistemas y soluciones digitales",
 description: "Portafolio profesional de Zoila Benel Pando. Análisis de procesos, sistemas y soluciones digitales. Oportunidades remotas o híbridas y colaboraciones.",
 metadataBase: new URL("https://zoila-benel.vercel.app"),
 openGraph: { title: "Zoila Benel | Procesos y soluciones digitales", description: "Entre los problemas y las soluciones.", type: "website", locale: "es_PE" }
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="es"><body className={inter.className}>{children}</body></html>}
