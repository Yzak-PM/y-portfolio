import Image from "next/image";
import { AiFillProject } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";

interface ProjectsContainerProps {
  className?: string;
}

export default function ProjectsContainer({
  className,
}: ProjectsContainerProps) {
  return (
    <div
      className={`w-full flex flex-col justify-center items-center ${className}`}
    >
      <h2 className="flex text-4xl font-semibold text-neutral-200 mb-3">
        <AiFillProject className="me-3" /> Proyectos
      </h2>
      <div className="flex flex-col">
        <div className="flex gap-5">
          <Image
            src="/projects/wallet.png"
            alt="Wallet app"
            width={200}
            height={200}
            className="rounded-2xl w-250 h-200 md:w-[450px] md:h-[400px]"
          />
          <div className="text-white">
            <h1>Wallet app</h1>
            <h3>
              Aplicación web full-stack para el control de finanzas personales,
              con seguimiento de transacciones (ingresos, gastos y movimientos),
              cuentas, categorías y etiquetas, además de visualización de datos
              mediante gráficas.{" "}
            </h3>
            <div className="flex">
              <FaReact />
              <SiDjango />
              <BiLogoPostgresql />
              <IoLogoJavascript />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
