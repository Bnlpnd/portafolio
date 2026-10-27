import {ArrowLeft,ArrowUpRight} from "lucide-react";
const cases={
 "cotizacion-puertas":{
 eyebrow:"Investigación aplicada · 2025",title:"Sistema inteligente de cotización de puertas",client:"Carpintería Metálica Santa Ana",
 challenge:"El proceso manual de cotización de puertas metálicas podía tomar entre 24 y 48 horas, con variaciones en los precios y dependencia del propietario para preparar las propuestas. El objetivo fue organizar y digitalizar el proceso comercial.",
 role:"Proyecto de tesis: análisis del proceso comercial y requerimientos, diseño y desarrollo de la aplicación web, modelado de datos e integración y evaluación del modelo predictivo.",
 approach:["Análisis del flujo comercial, variables de precio y requerimientos de los distintos usuarios.","Desarrollo de galería de puertas, solicitudes, bandeja de proformas y configuración de cotizaciones.","Comparación de Árbol de Decisión, Random Forest y XGBoost; selección de Árbol de Decisión para estimar precios.","Integración del envío de proformas por correo y la generación de contratos."],
 tech:"Python · Django · SQLite · Bootstrap · Scikit-learn · Árbol de Decisión",result:"En la evaluación académica de la tesis se reportó una reducción aproximada del 70 % en el tiempo de cotización. El modelo final fue Árbol de Decisión, elegido por su rendimiento, interpretabilidad y eficiencia computacional tras compararlo con Random Forest y XGBoost. Los indicadores técnicos se documentaron en la tesis; no representan una garantía de precisión comercial futura."
 },
 "gestion-municipal":{
 eyebrow:"Sector público · 2025",title:"Sistema de gestión de resoluciones municipales",client:"Municipalidad Provincial de Lambayeque",
 challenge:"El registro y la consulta de resoluciones vinculadas con licencias de construcción requieren información organizada y trazabilidad para facilitar el trabajo administrativo.",
 role:"Prácticas preprofesionales en Control Urbano y Catastro (260 horas): levantamiento del proceso, análisis de documentos, diseño de datos, desarrollo, pruebas y documentación.",
 approach:["Análisis de documentos y del flujo de resoluciones de licencias de edificación.","Diseño del modelo de datos y de pantallas para registro, edición, consulta y filtros.","Implementación de accesos diferenciados para Obras y Fiscalización.","Exportación a Excel, pruebas funcionales y elaboración del manual de usuario."],
 tech:"Django · SQL · Excel",result:"Se desarrolló y probó un sistema de registro y seguimiento documental durante las prácticas. El informe recomienda su implementación formal como paso posterior; no se atribuyen métricas de impacto ni despliegue institucional no documentados."
 }
} as const;
const gallery:Record<string,{src:string;caption:string;description:string}[]>={
"cotizacion-puertas":[
{src:"/proyectos/cotizacion-puertas/diagrama_flujo.webp",caption:"01 · Diagnóstico del proceso original",description:"El flujo manual evidencia la dependencia del jefe para consultar materiales, calcular precios y comunicar cotizaciones; fue el punto de partida para analizar oportunidades de mejora."},
{src:"/proyectos/cotizacion-puertas/proforma_datos_protegidos.webp",caption:"02 · Proforma generada",description:"Documento comercial que permite visualizar la información producida durante el proceso de cotización, con datos sensibles protegidos."},
{src:"/proyectos/cotizacion-puertas/panel-proformas.webp",caption:"03 · Gestión de solicitudes",description:"Bandeja que centraliza las solicitudes y permite al personal gestionar el trabajo de cotización."},
{src:"/proyectos/cotizacion-puertas/prediccion_ia_figuras.webp",caption:"04 · Integración de la predicción IA",description:"Evidencia técnica de la incorporación del valor estimado por el modelo al formulario; conecta la evaluación predictiva con la interfaz del sistema."},
{src:"/proyectos/cotizacion-puertas/estimacion-precios.webp",caption:"05 · Estimación y configuración de precios",description:"Pantalla utilizada para configurar la cotización y apoyar la preparación de propuestas comerciales."},
{src:"/proyectos/cotizacion-puertas/generacion-contrato.webp",caption:"06 · Generación de contratos",description:"Funcionalidad que da continuidad al proceso comercial después de la cotización."},
{src:"/proyectos/cotizacion-puertas/proforma_correo.webp",caption:"07 · Proforma enviada por correo",description:"Evidencia del envío de la proforma en PDF al cliente, como parte de la comunicación de la propuesta."}
],
"gestion-municipal":[
{src:"/proyectos/gestion-municipal/diagrama_flujo.webp",caption:"01 · Diagrama de flujo del proceso",description:"Representación del proceso administrativo estudiado para comprender las actividades y necesidades de información."},
{src:"/proyectos/gestion-municipal/modelo-datos.webp",caption:"02 · Modelo de datos",description:"Diseño de la estructura de información que sustenta el registro y consulta de resoluciones."},
{src:"/proyectos/gestion-municipal/panel-fiscalizacion.webp",caption:"03 · Panel de Fiscalización",description:"Interfaz correspondiente a un perfil de acceso diferenciado según las tareas del área."},
{src:"/proyectos/gestion-municipal/ver_resolucion.webp",caption:"04 · Consulta de resolución",description:"Consulta de información registrada, organizada para facilitar su revisión administrativa."},
{src:"/proyectos/gestion-municipal/resolucion_datos_difuminados.webp",caption:"05 · Detalle de resolución con datos protegidos",description:"Vista de información principal, estado y detalle técnico de una resolución; los datos sensibles aparecen difuminados."},
{src:"/proyectos/gestion-municipal/exportar_resoluciones.webp",caption:"06 · Exportación de resoluciones",description:"Salida de información a Excel para apoyar la consulta y elaboración de reportes."}
]
};
const phases:Record<string,{title:string;detail:string}[]>={
"cotizacion-puertas":[
{title:"01 · Contexto y diagnóstico",detail:"Se documentó el proceso manual de atención: solicitud del cliente, consulta de materiales, cálculo de precios por el jefe y comunicación de la cotización. La espera y la dependencia de cálculos manuales justificaron analizar una alternativa digital."},
{title:"02 · Análisis de requerimientos",detail:"Se identificaron necesidades para clientes y personal: registrar solicitudes, gestionar proformas, configurar precios, comunicar propuestas y generar contratos. Estas necesidades guiaron las funcionalidades del sistema."},
{title:"03 · Diseño de la solución",detail:"Se estructuraron datos y pantallas para conectar solicitudes, cotizaciones y documentos comerciales. Se estudió cómo integrar la estimación de precios al formulario de cotización."},
{title:"04 · Implementación",detail:"Se desarrolló una aplicación web con Django y se integró un modelo de Árbol de Decisión, además de las funcionalidades de gestión de proformas, envío de PDF por correo y generación de contratos."},
{title:"05 · Validación y resultados",detail:"En la evaluación académica de la tesis se reportó una reducción aproximada del 70 % en el tiempo de cotización. Es un resultado del estudio, no una medición continua de operación comercial."}
],
"gestion-municipal":[
{title:"01 · Contexto y diagnóstico",detail:"Durante las prácticas en Control Urbano y Catastro se analizaron documentos y actividades relacionadas con las resoluciones de licencias de edificación y sus necesidades de registro y consulta."},
{title:"02 · Requerimientos y actores",detail:"Se identificaron operaciones de registro, edición, búsqueda y seguimiento de resoluciones, con accesos diferenciados para los perfiles de Obras y Fiscalización."},
{title:"03 · Diseño de información",detail:"Se elaboró el modelo de datos y se diseñaron las pantallas para estructurar la información administrativa y facilitar su consulta."},
{title:"04 · Implementación",detail:"Se desarrollaron vistas de consulta, filtros, control de acceso por perfiles y exportación a Excel, con documentación de uso."},
{title:"05 · Pruebas y alcance",detail:"El sistema se desarrolló y probó durante las prácticas preprofesionales. El informe recomienda la implementación formal posterior; no se atribuye un despliegue institucional ni ahorros no verificados."}
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
 <article className="mx-auto max-w-5xl px-6 pb-24 pt-20"><p className="mb-7 text-xs font-bold uppercase tracking-[.2em] text-[#52796f]">{item.eyebrow}</p><h1 className="max-w-4xl font-serif text-5xl leading-tight tracking-tight md:text-7xl">{item.title}</h1><p className="mt-8 text-lg text-[#53615e]">{item.client}</p><div className="mt-8 flex flex-wrap gap-2">{(slug==="cotizacion-puertas"?["Sector privado","Diagnóstico del proceso","Requerimientos","Modelo predictivo","Evaluación académica"]:["Sector público","Análisis documental","Modelo de datos","Roles de acceso","Pruebas funcionales"]).map(tag=><span key={tag} className="rounded-full border border-[#c7d6ce] px-3 py-2 text-xs font-semibold text-[#52796f]">{tag}</span>)}</div>
 <div className="mt-16 grid gap-12 border-t border-[#c7d6ce] pt-12 md:grid-cols-[.3fr_1fr]"><h2 className="text-xs font-bold uppercase tracking-widest text-[#52796f]">El desafío</h2><p className="text-xl leading-relaxed">{item.challenge}</p></div>
 <div className="mt-14 grid gap-12 border-t border-[#c7d6ce] pt-12 md:grid-cols-[.3fr_1fr]"><h2 className="text-xs font-bold uppercase tracking-widest text-[#52796f]">Mi participación</h2><p className="text-lg leading-relaxed text-[#53615e]">{item.role}</p></div>
 <section className="mt-14 border-t border-[#c7d6ce] pt-12"><p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#52796f]">Proceso de trabajo</p><h2 className="mb-9 font-serif text-3xl md:text-4xl">Del problema a la solución.</h2><div className="grid gap-5 md:grid-cols-2">{phases[slug]?.map(phase=><div key={phase.title} className="border-l-2 border-[#a8bcb1] bg-white/60 p-6"><h3 className="font-serif text-xl text-[#1e2929]">{phase.title}</h3><p className="mt-3 text-sm leading-relaxed text-[#53615e]">{phase.detail}</p></div>)}</div></section>
 <section className="mt-16 border-t border-[#c7d6ce] pt-12"><p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#52796f]">Evidencias del sistema</p><h2 className="mb-8 font-serif text-3xl md:text-4xl">Del diagnóstico a la solución.</h2><div className="grid gap-7 md:grid-cols-2">{gallery[slug]?.map((shot)=><figure key={shot.src} className="overflow-hidden border border-[#c7d6ce] bg-white"><a href={shot.src} target="_blank" rel="noopener noreferrer" aria-label={"Ampliar: "+shot.caption}><img src={shot.src} alt={shot.caption} loading="lazy" className="aspect-[4/3] w-full object-contain p-3"/></a><figcaption className="border-t border-[#c7d6ce] px-4 py-4 text-sm text-[#53615e]"><strong className="block font-semibold text-[#1e2929]">{shot.caption}</strong><span className="mt-2 block leading-relaxed">{shot.description}</span></figcaption></figure>)}</div><p className="mt-4 text-xs text-[#53615e]">Evidencias seleccionadas de la documentación del proyecto. Las descripciones explican qué parte del análisis, diseño o implementación representa cada imagen.</p></section>
 <div className="mt-14 grid gap-12 border-t border-[#c7d6ce] pt-12 md:grid-cols-[.3fr_1fr]"><h2 className="text-xs font-bold uppercase tracking-widest text-[#52796f]">Tecnologías</h2><p className="text-lg">{item.tech}</p></div>
 <div className="mt-14 grid gap-12 border-t border-[#c7d6ce] pt-12 md:grid-cols-[.3fr_1fr]"><h2 className="text-xs font-bold uppercase tracking-widest text-[#52796f]">Resultado documentado</h2><div><p className="text-lg leading-relaxed">{item.result}</p></div></div>
 <a href="https://wa.me/51942025999" target="_blank" rel="noopener noreferrer" className="mt-16 inline-flex items-center gap-3 rounded-full bg-[#1e2929] px-7 py-4 text-sm font-semibold text-white">Conversemos por WhatsApp <ArrowUpRight size={16}/></a>
 </article><footer className="border-t border-[#c7d6ce] px-6 py-8 text-center text-xs text-[#53615e]">Zoila Benel · Portafolio profesional</footer></main>;
}
