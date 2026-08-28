import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import NavMain from "@/components/layout/NavMain";
import HomeBackground from "@/components/layout/HomeBackground";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Portafolio de Isaac - Desarrollador web Jr.",
  description: "Portafolio de presentación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col p-2 relative">
        <HomeBackground />
        <NavMain />
        <div className="px-5 mt-2">{children}</div>
      </body>
    </html>
  );
}
