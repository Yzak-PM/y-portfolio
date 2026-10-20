"use client";
import CurvedLoop from "@/components/CurvedLoop";
import { FaMapLocationDot } from "react-icons/fa6";
import Image from "next/image";

export default function DnFestPage() {
  return (
    <main className="flex flex-col items-center w-full text-center text-gray-200">
      {/* 1. Invitación */}
      <section className="mt-60 w-full md:max-w-4/5 xl:max-w-3/4 flex flex-col justify-center items-center gap-10 pb-10">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl mb-4">
            Est&aacute;s invitado a nuestra
          </h3>
          <h2 className="text-7xl md:text-6xl lg:text-7xl font-medium">
            Graduation
          </h2>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-yellow-200">
            PARTY
          </h1>
        </div>

        {/* Fecha y hora */}
        <div className="flex flex-row gap-4 justify-center items-center text-font">
          <div className="w-30 border-y-2">
            <p className="text-xl">S&aacute;bado</p>
          </div>
          <div className="flex flex-col text-yellow-100">
            <p className="text-6xl font-bold">14</p>
            <p className="text-2xl">Noviembre</p>
          </div>
          <div className="w-30 border-y-2">
            <p className="text-xl">9:00 PM</p>
          </div>
        </div>

        {/* 2. Ubicación */}
        <a
          href="https://maps.app.goo.gl/USzTX4o2Xgx6jznT8"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-blue-300/60 bg-blue-400/10 px-6 py-3 text-2xl font-medium text-blue-200 backdrop-blur-sm shadow-[0_0_20px_rgba(96,165,250,0.35)] transition-all duration-300 hover:scale-105 hover:bg-blue-400/20 hover:text-white hover:shadow-[0_0_35px_rgba(96,165,250,0.7)]"
        >
          <FaMapLocationDot className="transition-transform duration-300 group-hover:-rotate-12" />
          Ver ubicaci&oacute;n
        </a>
      </section>

      {/* 3. Texto curvo, ancho completo */}
      <section className="w-screen overflow-hidden">
        <CurvedLoop
          marqueeText="Graduadas"
          shape="arc"
          speed={2}
          curveAmount={-300}
          direction="left"
          fontSize={150}
          fontWeight={700}
          letterSpacing={-1}
          separator="—"
          outline={false}
          scrollBoost={1.4}
          edgeFade={0.01}
          interactive
          pauseOnHover={false}
          separatorColor="#ccbe74"
        />
      </section>
      <div className="flex">
        <div className="w-1/2">
        <Image
          src="/dalia.png"
          alt="Bola disco"
          width={600}
          height={600}
          className=""
        />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <h3 className="text-3xl">Dalia Rodr&iacute;guez</h3>
        </div>
      </div>
      <div className="flex mt-8">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <h3 className="text-3xl">Nayelli Antunez</h3>
        </div>
        <div className="w-1/2">
          <Image
            src="/naye.png"
            alt="Bola disco"
            width={600}
            height={600}
            className=""
          />
        </div>
      </div>
      <h4 className="mt-20 text-4xl text-shadow-yellow-800">Dress code opcional:</h4>
      <h4 className="text-6xl text-amber-100">Vaquero</h4>
      <div className="flex flex-col">
        {/* <Image
          src="/boot.webp"
          alt="Bola disco"
          width={600}
          height={600}
          className=""
        /> */}
        <Image
          src="/hat2.webp"
          alt="Bola disco"
          width={600}
          height={600}
          className="my-12"
        />
      </div>

      <div className="flex flex-col text-2xl mb-7">
        <p className="">Trae tu consumo</p>
        <p className="">No botellas de vidrio</p>
        {/* <p className="">Persona extra cover $150</p> */}
      </div>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeU-JjZmQGJ13E-UzpCaoqMDd1lPLhWl2RZPHQ0DZh7YyqCxw/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="group shadow shadow-amber-100 inline-flex mb-10 items-center gap-2 rounded-full border border-yellow-300/60 bg-yellow-400/10 px-6 py-3 text-3xl font-medium text-yellow-200 backdrop-blur-sm shadow-[0_0_20px_rgba(96,165,250,0.35)] transition-all duration-300 hover:scale-105 hover:bg-yellow-400/20 hover:text-white hover:shadow-[0_0_35px_rgba(96,165,250,0.7)]"
      >
        Confirmar asistencia
      </a>
    </main>
  );
}