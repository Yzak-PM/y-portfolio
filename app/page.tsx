import ExperiencePage from "@/components/experience";
import GradientText from "@/components/GradientText";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { LuMailPlus } from "react-icons/lu";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="lg:max-w-3/4 ">
        <div className="flex flex-col-reverse md:flex-row md:justify-between text-gray-200 lg:mt-25 mb-12 lg:mb-35">
          <div className="lg:max-w-2/3 lg:pe-4 flex flex-col justify-center">
            <h1 className="text-5xl lg:text-7xl font-medium">
              Hola, soy <GradientText
              colors={["blue","skyblue","#BDDDFF"]}
              animationSpeed={8}
              showBorder={false}
              className="inline"
            >
              Isaac Peña
            </GradientText>
            </h1>
            
            <h3 className="text-xl lg:text-3xl mt-4 mb-4">
              <span className="text-teal-400">Desarrollador web Jr </span>
              con +2 a&ntilde;os de experiencia en desarrollo de aplicaciones ERP web para empresas l&iacute;deres en la industria.
            </h3>
            <div className="flex justify-center gap-6">
              <FaGithub size={30} className="cursor-pointer animate-pulse hover:animate-none text-white" /> 
              <FaLinkedin size={30} className="cursor-pointer animate-pulse hover:animate-none text-blue-400" /> 
              <FaFilePdf size={30} className="cursor-pointer animate-pulse hover:animate-none text-red-400" /> 
              <LuMailPlus size={30} className="cursor-pointer animate-pulse hover:animate-none text-green-400" /> 
            </div>
          </div>
          <div className="justify-items-center mb-4 lg:mb-0">
            <Image 
              src="/me.jpg" 
              alt="Me" 
              width={400} 
              height={400}
              sizes="(max-width: 768px) 200px, 400px" 
              className="rounded-4xl w-40 h-40 md:w-[300px] md:h-[300px]" />
          </div>
        </div> 
        <ExperiencePage />
      </div>
    </div>
  );
}