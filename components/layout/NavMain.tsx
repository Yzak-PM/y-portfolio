
type LinkItem = {
  title: string
  href: string
}

const navLinks: LinkItem[] = [
  {
    title: 'Experiencia',
    href: '/experiencia/'
  },
  {
    title: 'Proyectos',
    href: '/proyectos/'
  },
  {
    title: 'Sobre mi',
    href: '/about/'
  },
  {
    title: 'Contacto',
    href: '/contact/'
  }
]

export default function NavMain() {
  return (
    <>
      <nav className="w-full x-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="w-full block" id="navbar">
            <ul className="font-medium flex gap-2 md:gap-7 align-middle justify-center">
              { navLinks.map(navLink => (
                <li key={navLink.href}
                  className="
                    bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl
                    px-3 py-0.5 cursor-pointer text-gray-300 text-center
                    shadow-lg
                    transition-all duration-300
                    hover:bg-blue-600/80
                    hover:shadow-[6px_6px_14px_rgba(0,0,30,0.35),-4px_-4px_10px_rgba(255,255,255,0.15),inset_2px_2px_3px_rgba(255,255,255,0.25),inset_-2px_-2px_3px_rgba(0,0,0,0.25)]
                    active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.35),inset_-2px_-2px_4px_rgba(255,255,255,0.15)]
                  ">
                  <a href="">{navLink.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}