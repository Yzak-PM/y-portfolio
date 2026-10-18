"use client";

import Galaxy from "@/components/Galaxy";
import Image from "next/image";

export default function PromBackground() {
  return (
    <>
      {/* Galaxia: fija al viewport */}
      <div className="fixed inset-0 -z-10">
        <Galaxy
          density={1}
          glowIntensity={0.3}
          flareIntensity={1}
          starSpeed={0.1}
          mouseRepulsion={false}
          clickWarp={false}
          starColors={[]}
          hueShift={140}
          saturation={0}
          starSize={0.5}
          twinkleIntensity={0.3}
          speed={0.5}
          rotationSpeed={0.05}
          layers={4}
          direction="forward"
          repulsionStrength={2}
          mouseInteraction={false}
          intro
          lightMode={false}
        />
      </div>

      {/* Bolas disco: ancladas arriba de la página, se van con el scroll */}
      <div className="absolute top-0 left-0 w-full h-screen -z-10 overflow-hidden pointer-events-none">
        {/* 1. Grande izquierda */}
        <Image
          src="/discoball1.jpg"
          alt="Bola disco"
          width={600}
          height={600}
          className="absolute brightness-75 top-4 -left-16 md:top-16 md:-left-32 w-56 h-56 md:w-[480px] md:h-[480px] object-cover aspect-square rounded-full -rotate-40"
        />

        {/* 2. Chica */}
        <Image
          src="/discoball1.jpg"
          alt="Bola disco"
          width={700}
          height={700}
          className="absolute brightness-60 -top-10 left-[14%] md:top-4 md:left-[27%] w-30 h-30 md:w-36 md:h-36 object-cover aspect-square rounded-full"
        />

        {/* 3. La más grande */}
        <Image
          src="/discoball1.jpg"
          alt="Bola disco"
          width={800}
          height={800}
          className="absolute brightness-80 -top-16 left-[25%] md:-top-72 md:left-[31%] w-72 h-72 md:w-[640px] md:h-[640px] object-cover aspect-square rounded-full"
        />

        {/* 6. Grande derecha */}
        <Image
          src="/discoball1.jpg"
          alt="Bola disco"
          width={600}
          height={600}
          className="absolute brightness-50 top-4 -right-16 md:top-16 md:-right-28 w-44 h-44 md:w-96 md:h-96 object-cover aspect-square rounded-full -rotate-320"
        />
      </div>
    </>
  );
}