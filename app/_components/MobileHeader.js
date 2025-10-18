"use client";

import { Equal, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ModeToggle from "./ModeToggle";
import { usePathname } from "next/navigation";

function MobileHeader() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const pathName = usePathname();

  return (
    <header
      className={`lg:hidden w-full  bg-transparent backdrop-blur-md 
     fixed top-0 left-0 z-50 `}
    >
      <div className="flex justify-between items-center px-6 py-5 ">
        <h1 className="text-xl font-bold text-gray-800 dark:text-slate-300">
          <span className="text-purple-700">Waziri</span>.dev
        </h1>

        <button onClick={() => setMenuIsOpen(!menuIsOpen)} className="text-gray-800  hover:rounded-lg hover:p-1 hover:bg-white/10 dark:text-sky-100 ">
          {menuIsOpen ? <X size={30} /> : <Equal size={30} />}
        </button>
      </div>

      <nav
        className={`flex flex-col gap-3 items-center text-[1.25rem] font-medium text-gray-700 dark:text-slate-300 px-10  overflow-hidden transition-all duration-300 ${
          menuIsOpen ? "max-h-96 py-8 shadow-2xl bg-white/30 dark:bg-[#06102b]/60" : "max-h-0 py-0"
        }`}
      >
        <Link href="/" onClick={() => setMenuIsOpen(false)} className={`${pathName === "/" ? "text-purple-700" : ""}`}>
          Home
        </Link>
        <Link href="/projects" onClick={() => setMenuIsOpen(false)} className={`${pathName === "/projects" ? "text-purple-700" : ""}`}>
          Projects
        </Link>
        <Link href="/about" onClick={() => setMenuIsOpen(false)} className={`${pathName === "/about" ? "text-purple-700" : ""}`}>
          About
        </Link>
        <Link href="/contact" onClick={() => setMenuIsOpen(false)} className={`${pathName === "/contact" ? "text-purple-700" : ""}`}>
          Get In Touch
        </Link>

        <ModeToggle />
      </nav>
    </header>
  );
}

export default MobileHeader;
