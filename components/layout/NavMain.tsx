"use client";
import { useEffect, useRef, useState } from "react";
import { TiThMenu } from "react-icons/ti";

type LinkItem = {
  title: string;
  href: string;
};

const navLinks: LinkItem[] = [
  {
    title: "Experiencia",
    href: "#experience",
  },
  {
    title: "Proyectos",
    href: "#projects",
  },
  {
    title: "Sobre mi",
    href: "#about",
  },
  {
    title: "Contacto",
    href: "#contact",
  },
];

export default function NavMain() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <nav className="w-full x-20 top-0 start-0" ref={ref}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex flex-row md:hidden justify-end w-full">
            <div
              className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <TiThMenu className="text-white" size={24} />
            </div>
            {isOpen && (
              <div className="absolute right-5 z-10 top-18 min-w-47 bg-neutral-50 border border-neutral-400 rounded-xl shadow-2xl">
                <ul
                  className="p-2 text-sm font-medium"
                  aria-labelledby="avatarButton"
                >
                  {navLinks.map((navLink) => (
                    <li
                      key={navLink.href}
                      className="flex gap-1 cursor-pointer rounded-md hover:bg-blue-50"
                    >
                      <a
                        href={navLink.href}
                        onClick={(e) => handleNavClick(e, navLink.href)}
                        className="p-2 w-full"
                      >
                        {navLink.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="w-full hidden md:block" id="navbar">
            <ul className="font-medium flex gap-2 md:gap-7 align-middle justify-center">
              {navLinks.map((navLink) => (
                <li
                  key={navLink.href}
                  className="
                    bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl
                    cursor-pointer text-gray-300 text-center
                    shadow-lg
                    transition-all duration-300
                    hover:bg-blue-600/80
                    hover:shadow-[6px_6px_14px_rgba(0,0,30,0.35),-4px_-4px_10px_rgba(255,255,255,0.15),inset_2px_2px_3px_rgba(255,255,255,0.25),inset_-2px_-2px_3px_rgba(0,0,0,0.25)]
                    active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.35),inset_-2px_-2px_4px_rgba(255,255,255,0.15)]
                  "
                >
                  <a
                    href={navLink.href}
                    className="px-3 py-0.5 h-full w-full"
                    onClick={(e) => handleNavClick(e, navLink.href)}
                  >
                    {navLink.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
