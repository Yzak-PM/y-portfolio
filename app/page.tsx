import AboutContainer from "@/components/About";
import ExperiencePage from "@/components/Experience";
import GradientText from "@/components/GradientText";
import ProjectsContainer from "@/components/Projects";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { LuMailPlus } from "react-icons/lu";
import SpecularButton from "@/components/SpecularButton";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="md:max-w-4/5 xl:max-w-3/4">
        <div className="h-screen flex flex-col justify-center items-center pb-20 md:pb-0">
          <div className="flex flex-col-reverse justify-center items-center md:flex-row md:justify-between text-gray-200 ">
            <div className="lg:max-w-2/3 lg:pe-4 flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium">
                Hola, soy{" "}
                <GradientText
                  colors={["blue", "skyblue", "#BDDDFF"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="inline"
                >
                  Isaac Peña
                </GradientText>
              </h1>

              <h3 className="text-2xl md:text-3xl lg:text-3xl mt-4 mb-4">
                <span className="text-teal-400">Desarrollador web Jr </span>
                con +2 a&ntilde;os de experiencia en desarrollo de aplicaciones
                ERP web para empresas l&iacute;deres en la industria.
              </h3>
              <div className="flex justify-center gap-8">
                <FaGithub
                  size={30}
                  className="cursor-pointer animate-pulse hover:animate-none text-white"
                />
                <FaLinkedin
                  size={30}
                  className="cursor-pointer animate-pulse hover:animate-none text-blue-400"
                />
                <FaFilePdf
                  size={30}
                  className="cursor-pointer animate-pulse hover:animate-none text-red-400"
                />
                <LuMailPlus
                  size={30}
                  className="cursor-pointer animate-pulse hover:animate-none text-green-400"
                />
              </div>
            </div>
            <div className="flex justify-items-center items-center mb-5 lg:mt-1 shrink-0">
              <Image
                src="/me.jpg"
                alt="Me"
                width={400}
                height={400}
                sizes="(max-width: 768px) 200px, 400px"
                className="rounded-4xl w-40 h-40 md:w-[300px] md:h-[300px] object-cover aspect-square shrink-0"
              />
            </div>
          </div>
          <div className="flex justify-center mt-15 md:mt-30">
            <SpecularButton autoAnimate={true} tint="white" lineColor="#00D1AB">
              Ver experiencia
            </SpecularButton>
          </div>
        </div>
        <ExperiencePage />
        <ProjectsContainer className="mb-10"/>
        <AboutContainer />
      </div>
    </div>
  );
}
