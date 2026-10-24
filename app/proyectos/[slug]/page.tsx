import {ArrowLeft,ArrowUpRight} from "lucide-react";
const cases={
 "cotizacion-puertas":{
 eyebrow:"Investigación aplicada · 2025",title:"Sistema inteligente de cotización de puertas",client:"Carpintería Metálica Santa Ana",
 challenge:"El proceso manual de cotización de puertas metálicas podía tomar entre 24 y 48 horas, con variaciones en los precios y dependencia del propietario para preparar las propuestas. El objetivo fue organizar y digitalizar el proceso comercial.",
 role:"Proyecto de tesis: análisis del proceso comercial y requerimientos, diseño y desarrollo de la aplicación web, modelado de datos e integración y evaluación del modelo predictivo.",
 approach:["Análisis del flujo comercial, variables de precio y requerimientos de los distintos usuarios.","Desarrollo de galería de puertas, solicitudes, bandeja de proformas y configuración de cotizaciones.","Comparación de Árbol de Decisión, Random Forest y XGBoost; selección de Árbol de Decisión para estimar precios.","Integración del envío de proformas por correo y la generación de contratos."],
 tech:"Python · Django · SQLite · Bootstrap · Scikit-learn · Árbol de Decisión",result:"En la evaluación académica de la tesis se reportó una reducción aproximada del 70 % en el tiempo de cotización. El modelo final fue Árbol de Decisión, elegido por su rendimiento, interpretabilidad y eficiencia computacional tras compararlo con Random Forest y XGBoost. Los indicadores de evaluación del modelo fueron R² = 0.9966 y RMSE = 146.91 en prueba; no representan una garantía de precisión comercial futura.",next:"Incorporar capturas pertinentes del manual (páginas 3 a 9), verificando antes que no expongan información personal de clientes."
 },
 "gestion-municipal":{
 eyebrow:"Sector público · 2025",title:"Sistema de gestión de resoluciones municipales",client:"Municipalidad Provincial de Lambayeque",
 challenge:"El registro y la consulta de resoluciones vinculadas con licencias de construcción requieren información organizada y trazabilidad para facilitar el trabajo administrativo.",
 role:"Prácticas preprofesionales en Control Urbano y Catastro (260 horas): levantamiento del proceso, análisis de documentos, diseño de datos, desarrollo, pruebas y documentación.",
 approach:["Análisis de documentos y del flujo de resoluciones de licencias de edificación.","Diseño del modelo de datos y de pantallas para registro, edición, consulta y filtros.","Implementación de accesos diferenciados para Obras y Fiscalización.","Exportación a Excel, pruebas funcionales y elaboración del manual de usuario."],
 tech:"Django · SQL · Excel",result:"Se desarrolló y probó un sistema de registro y seguimiento documental durante las prácticas. El informe recomienda su implementación formal como paso posterior; no se atribuyen métricas de impacto ni despliegue institucional no documentados.",next:"Incorporar capturas autorizadas y un diagrama del proceso, sin divulgar datos internos o personales."
 }
} as const;
const gallery:Record<string,{src:string;caption:string}[]>={
"cotizacion-puertas":[
{src:"/proyectos/cotizacion-puertas/panel-proformas.webp",caption:"Panel de gestión de proformas"},
{src:"/proyectos/cotizacion-puertas/detalle-proforma.webp",caption:"Detalle de una proforma"},
{src:"/proyectos/cotizacion-puertas/estimacion-precios.webp",caption:"Estimación y comparación de opciones de precio"},
{src:"/proyectos/cotizacion-puertas/generacion-contrato.webp",caption:"Generación de contratos"}
],
"gestion-municipal":[
{src:"/proyectos/gestion-municipal/panel-obras.webp",caption:"Panel del perfil Obras"},
{src:"/proyectos/gestion-municipal/panel-seguimiento.webp",caption:"Panel de seguimiento de resoluciones"},
{src:"/proyectos/gestion-municipal/modelo-datos.webp",caption:"Modelo de datos del sistema"},
{src:"/proyectos/gestion-municipal/panel-fiscalizacion.webp",caption:"Panel de Fiscalización"}
]
};
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
 <section className="mt-16 border-t border-[#c7d6ce] pt-12"><p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#52796f]">Evidencias del sistema</p><h2 className="mb-8 font-serif text-3xl md:text-4xl">El trabajo, en imágenes.</h2><div className="grid gap-7 md:grid-cols-2">{gallery[slug]?.map((shot)=><figure key={shot.src} className="overflow-hidden border border-[#c7d6ce] bg-white"><a href={shot.src} target="_blank" rel="noopener noreferrer" aria-label={"Ampliar: "+shot.caption}><img src={shot.src} alt={shot.caption} loading="lazy" className="aspect-[4/3] w-full object-contain p-3"/></a><figcaption className="border-t border-[#c7d6ce] px-4 py-3 text-sm text-[#53615e]">{shot.caption}</figcaption></figure>)}</div><p className="mt-4 text-xs text-[#53615e]">Capturas tomadas de la documentación del proyecto. Seleccionadas para mostrar funcionalidades y estructura sin publicar expedientes completos.</p></section>
 <div className="mt-14 grid gap-12 border-t border-[#c7d6ce] pt-12 md:grid-cols-[.3fr_1fr]"><h2 className="text-xs font-bold uppercase tracking-widest text-[#52796f]">Tecnologías</h2><p className="text-lg">{item.tech}</p></div>
 <div className="mt-14 grid gap-12 border-t border-[#c7d6ce] pt-12 md:grid-cols-[.3fr_1fr]"><h2 className="text-xs font-bold uppercase tracking-widest text-[#52796f]">Resultado documentado</h2><div><p className="text-lg leading-relaxed">{item.result}</p><div className="mt-8 border-l-2 border-[#52796f] bg-[#e9eee9] p-6"><p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#52796f]">Próxima actualización</p><p className="text-sm leading-relaxed">{item.next}</p></div></div></div>
 <a href="/#contacto" className="mt-16 inline-flex items-center gap-3 rounded-full bg-[#1e2929] px-7 py-4 text-sm font-semibold text-white">Conversemos <ArrowUpRight size={16}/></a>
 </article><footer className="border-t border-[#c7d6ce] px-6 py-8 text-center text-xs text-[#53615e]">Zoila Benel · Portafolio profesional</footer></main>;
}
