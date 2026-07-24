import { FaBriefcase } from "react-icons/fa"

type JobInfo = {
  date: string;
  position: string;
  company: string;
  description: JobDescription[] | string;
}

type JobDescription = {
  title: string;
  comment: string;
}

const jobs: JobInfo[] = [
  {
    date: "Abril 2024 - actualidad",
    position: "Desarrollador Web Jr.",
    company: "Entheospace",
    description: [
      {
        title: "Migración de stack legacy a moderno",
        comment: "PHP/MySQL → Django/PostgreSQL + React."
      },
      {
        title: "Optimización de performance",
        comment: "Reduje tiempos de carga de 5s a 1.7s consolidando lógica en el backend."
      },
      {
        title: "Arquitectura de búsqueda unificada",
        comment: "Sistema reutilizable con filtros multi-columna y scroll infinito, reemplazando múltiples funciones redundantes."
      },
      {
        title: "Refactorización frontend",
        comment: "Eliminación de duplicación de código (modales, funciones, queries) mejorando mantenibilidad."
      },
      {
        title: "Desarrollo de APIs REST",
        comment: "Para módulos internos y módulos CRUD completos en producción."
      },
      {
        title: "Trabajo en equipo Scrum",
        comment: "De 5 desarrolladores, con resolución de bugs en producción y comunicación directa con clientes."
      },
    ]
  },
  {
    date: "Junio 2023 - Abril 2024",
    position: "Practicante de sistemas",
    company: "Regal Rexnord",
    description: `
      Soporte técnico integral a usuarios internos, cubriendo hardware, software y redes. 
      Experiencia en diagnóstico y resolución de incidencias, instalación y configuración de sistemas operativos y 
      herramientas empresariales, así como mantenimiento preventivo y correctivo de equipos de cómputo.`
  },
  {
    date: "Abril 2022",
    position: "Practicante de sistemas",
    company: "PowerSonic",
    description: `
      Desarrollé un dashboard ejecutivo en Power BI, consolidando información clave de múltiples departamentos 
      (producción, recursos humanos y enfermería) a partir de la base de datos existente de la empresa. 
      El dashboard centralizaba métricas como PNs terminados, piezas en scrap, faltas de personal y atenciones 
      registradas en enfermería, mediante consultas SQL, facilitando el acceso a información relevante para la 
      toma de decisiones.
    `
  },
]

export default function ExperiencePage() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:max-w-2/3">
        <h2 className="flex text-4xl font-semibold text-neutral-200"><FaBriefcase className="me-3" /> Experiencia laboral</h2>

        <ol className="relative border-s border-neutral-600 text-white mt-3">
            {jobs.map(job => (
              <li key={job.date} className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-cyan-400 rounded-full mt-1.5 -start-1.5"></div>
                  <div className="absolute w-3 h-3 bg-cyan-400 rounded-full mt-1.5 -start-1.5 animate-ping"></div>
                  <time className="text-sm md:text-md font-normal leading-none text-gray-50/80">{job.date}</time>
                  <h3 className="text-lg md:text-xl font-semibold text-heading mt-2 text-yellow-300">{job.position}</h3>
                  <h3 className="text-md md:text-lg font-semibold text-heading mb-2">{job.company}</h3>
                  {/* <p className="mb-4 font-normal text-body md:text-lg">Description</p> */}
                  {Array.isArray(job.description) ? (
                    <ul className="list-disc ps-10">
                      {
                        job.description.map(item => (
                          <li key={item.title} className="mb-4 md:text-lg">
                            <span className="font-bold text-sky-300">{item.title}:</span> {item.comment}
                          </li>
                        ))
                      }
                    </ul>
                  ) : (
                    <p className="md:text-lg ps-8">{job.description}</p>
                  )}
              </li>
            ))}
        </ol>
      </div>
    </div>
  )
}