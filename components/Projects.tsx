import { AiFillProject } from "react-icons/ai";

interface ProjectsContainerProps {
  className?: string;
}

export default function ProjectsContainer({className}: ProjectsContainerProps) {
  return (
    <div className={`w-full flex flex-col justify-center items-center ${className}`}>
      <h2 className="flex text-4xl font-semibold text-neutral-200"><AiFillProject className="me-3" /> Proyectos</h2>
      <div className="">

        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px] mt-3">
          <div className="col-span-1 row-span-2 bg-neutral-100 rounded-2xl p-6">
            
          </div>

          <div className="col-span-2 row-span-1 bg-neutral-100 rounded-2xl p-6">
            Centro arriba
          </div>

          <div className="col-span-1 row-span-2 bg-neutral-100 rounded-2xl p-6">
            Derecha
          </div>

          <div className="col-span-2 row-span-1 bg-neutral-100 rounded-2xl p-6">
            Centro abajo
          </div>
        </div>
      </div>
    </div>
  )
}