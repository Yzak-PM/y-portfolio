"use client";

import { usePathname } from "next/navigation";
import LiquidEther from "@/components/LiquidEther";

export default function HomeBackground() {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <div
      className="absolute top-0 left-0 w-full -z-10 h-screen"
    >
      <LiquidEther
        // colors={['#2e3172', '#597eca', '#374c7a']}
        colors={['#2e3172', '#597eca', '#374c7a']}
        mouseForce={20}
        cursorSize={100}
        isViscous
        viscous={38}
        iterationsViscous={5}
        iterationsPoisson={14}
        resolution={0.3}
        isBounce={false}
        autoDemo
        autoSpeed={0.5}
        autoIntensity={0.7}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
    </div>
  );
}