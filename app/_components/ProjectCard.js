"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({ imageSrc, title, description, tools, projectURL }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-aos="fade-up"
      className="group w-full max-w-sm  rounded-xl shadow shadow-gray-300   overflow-hidden cursor-pointer hover:scale-[1.02]  transition-transform duration-300"
    >
      <Link href={projectURL} rel="noopener noreferrer" target="_blank" className="block group ">
        <div className="overflow-hidden h-52 relative">
          <Image
            src={imageSrc}
            alt={title}
            width={800}
            height={1000}
            className={`object-cover w-full h-auto transition-transform duration-1000 ease-in-out ${inView ? "-translate-y-1/2" : "translate-y-0"}`}
          />
        </div>

        <div className="p-4 font-light">
          <h3 className="text-xl text-purple-700 font-semibold mb-2">{title}</h3>
          <p className="text-gray-500 dark:text-slate-400 font-light  text-sm mb-4">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span key={tool} className="bg-[#eff3f7] dark:bg-slate-800 text-gray-800 dark:text-slate-200 text-[0.65rem] px-3 py-1 rounded-xl">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
