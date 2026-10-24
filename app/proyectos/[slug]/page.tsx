import {ArrowLeft,ArrowUpRight,CheckCircle2} from "lucide-react";
const cases={
 "cotizacion-puertas":{
 eyebrow:"Investigación aplicada · 2025",title:"Sistema inteligente de cotización de puertas",client:"Carpintería Metálica Santa Ana",
 challenge:"La cotización de puertas metálicas requiere considerar dimensiones, materiales, modelos y reglas de negocio. El proyecto buscó apoyar ese proceso mediante una herramienta digital.",
 role:"Proyecto de tesis: análisis de requerimientos, modelado de datos, desarrollo web e integración de un modelo predictivo.",
 approach:["Identificación de variables y reglas necesarias para cotizar puertas.","Diseño de una aplicación web para registrar información y gestionar cotizaciones.","Exploración de modelos de aprendizaje automático para estimar precios.","Integración de funciones de generación documental y seguimiento de pedidos."],
 tech:"Python · Django · SQLite · Scikit-learn",result:"Se desarrolló una solución web como proyecto académico. No se publican cifras de ahorro ni resultados comerciales sin documentación que los respalde.",next:"Agregar capturas del sistema, arquitectura, criterios de evaluación y resultados verificados de la tesis."
 },
 "gestion-municipal":{
 eyebrow:"Sector público · 2025",title:"Sistema de gestión de resoluciones municipales",client:"Municipalidad de Lambayeque",
 challenge:"El registro y la consulta de resoluciones vinculadas con licencias de construcción requieren información organizada y trazabilidad para facilitar el trabajo administrativo.",
 role:"Proyecto durante prácticas: análisis del flujo de información, desarrollo del sistema, diseño de roles y reportes.",
 approach:["Organización de la información de resoluciones y expedientes.","Diseño de pantallas para registro, filtrado y consulta.","Implementación de accesos diferenciados según roles.","Generación de reportes y exportación de datos a Excel."],
 tech:"Django · SQL · Excel",result:"Se desarrolló un sistema orientado al registro y seguimiento documental. Su grado de adopción institucional y métricas de impacto están pendientes de verificación.",next:"Incorporar capturas autorizadas y un diagrama del proceso, sin divulgar datos internos o personales."
 }
} as const;
type Slug=keyof typeof cases;
export function generateStaticParams(){return Object.keys(cases).map(slug=>({slug}));}
export default async function CasePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 const item=cases[slug as Slug];
 if(!item)return <main className="p-10">Proyecto no encontrado. <a href="/" className="underline">Volver</a></main>;
 return <main className="min-h-screen bg-[#f8f7f3] text-[#1e2929]">
 <header className="border-b border-[#20302c]/10"><div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6"><a href="/" className="font-serif text-2xl font-bold">Zoila Benel<span className="text-[#52796f]">.</span></a><a href="/#proyectos" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"><ArrowLeft size={15}/> Proyectos</a></div></header>
 <article className="mx-auto max-w-5xl px-6 pb-24 pt-20"><p className="mb-7 text-xs font-bold uppercase tracking-[.2em] text-[#52796f]">{item.eyebrow}</p><h1 className="max-w-4xl font-serif text-5xl leading-tight tracking-tight md:text-7xl">{item.title}</h1><p className="mt-8 text-lg text-[#53615e]">{item.client}</p>
 <div className="mt-16 grid gap-12 border-t border-[#c7d6ce] pt-12 md:grid-cols-[.3fr_1fr]"><h2 className="text-xs font-bold uppercase tracking-widest text-[#52796f]">El desafío</h2><p className="text-xl leading-relaxed">{item.challenge}</p></div>
 <div className="mt-14 grid gap-12 border-t border-[#c7d6ce] pt-12 md:grid-cols-[.3fr_1fr]"><h2 className="text-xs font-bold uppercase tracking-widest text-[#52796f]">Mi participación</h2><p className="text-lg leading-relaxed text-[#53615e]">{item.role}</p></div>
 <div className="mt-14 grid gap-12 border-t border-[#c7d6ce] pt-12 md:grid-cols-[.3fr_1fr]"><h2 className="text-xs font-bold uppercase tracking-widest text-[#52796f]">Enfoque y solución</h2><ol className="space-y-5">{item.approach.map((step,i)=><li key={step} className="flex gap-5 text-base leading-relaxed"><span className="font-serif text-2xl text-[#52796f]">0{i+1}</span><span>{step}</span></li>)}</ol></div>
 <div className="mt-14 grid gap-12 border-t border-[#c7d6ce] pt-12 md:grid-cols-[.3fr_1fr]"><h2 className="text-xs font-bold uppercase tracking-widest text-[#52796f]">Tecnologías</h2><p className="text-lg">{item.tech}</p></div>
 <div className="mt-14 grid gap-12 border-t border-[#c7d6ce] pt-12 md:grid-cols-[.3fr_1fr]"><h2 className="text-xs font-bold uppercase tracking-widest text-[#52796f]">Resultado documentado</h2><div><p className="text-lg leading-relaxed">{item.result}</p><div className="mt-8 border-l-2 border-[#52796f] bg-[#e9eee9] p-6"><p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#52796f]">Próxima actualización</p><p className="text-sm leading-relaxed">{item.next}</p></div></div></div>
 <a href="/#contacto" className="mt-16 inline-flex items-center gap-3 rounded-full bg-[#1e2929] px-7 py-4 text-sm font-semibold text-white">Conversemos <ArrowUpRight size={16}/></a>
 </article><footer className="border-t border-[#c7d6ce] px-6 py-8 text-center text-xs text-[#53615e]">Zoila Benel · Portafolio profesional</footer></main>;
}
