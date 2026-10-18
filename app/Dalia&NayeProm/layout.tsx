import type { Metadata } from "next";
import "@/app/prom.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import PromBackground from "@/components/layout/PromBackground";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Dalia & Naye Graduation",
  description: "Dalia & Naye.",
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
        <PromBackground />

        <div className="px-5 mt-2">{children}</div>
      </body>
    </html>
  );
}
