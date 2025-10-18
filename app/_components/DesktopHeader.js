"use client";

import Link from "next/link";
import ModeToggle from "./ModeToggle";
import { usePathname } from "next/navigation";

function DesktopHeader() {
  const pathName = usePathname();

  return (
    <header
      className="hidden sm:block lg:flex fixed top-0 left-0 w-full z-[100] 
      bg-transparent backdrop-blur-md py-1 "
    >
      <div className="w-full flex items-center justify-between px-12 py-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-slate-300">
          <span className="text-purple-700">Waziri</span>.dev
        </h1>

        <nav className="flex border border-[#c5b3ff] px-4 py-1 rounded-2xl items-center gap-10 text-[0.8rem] font-medium text-gray-700 dark:text-slate-300">
          <Link href="/" className={`hover:text-purple-700 transition-colors duration-200 ${pathName === "/" ? "text-purple-700" : ""}`}>
            Home
          </Link>
          <Link
            href="/projects"
            className={`hover:text-purple-700 transition-colors duration-200 ${pathName === "/projects" ? "text-purple-700" : ""}`}
          >
            Projects
          </Link>
          <Link href="/about" className={`hover:text-purple-700 transition-colors duration-200 ${pathName === "/about" ? "text-purple-700" : ""}`}>
            About
          </Link>
          <Link
            href="/contact"
            className={`hover:text-purple-700 transition-colors duration-200 ${pathName === "/contact" ? "text-purple-700" : ""}`}
          >
            Contact
          </Link>
        </nav>

        <ModeToggle />
      </div>
    </header>
  );
}

export default DesktopHeader;
