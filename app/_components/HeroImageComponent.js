import Image from "next/image";

function HeroImageComponent() {
  return (
    <div data-aos="fade-up" className="pt-6  backdrop-blur-3xl  px-6   lg:place-items-end  lg:backdrop-blur-none lg:pt-20  xl:pt-28  ">
      <div className="flex justify-center items-center mt-10 ">
        <div className="rounded-full border-2  border-purple-700 p-8 mb-6">
          <Image
            src="/portfolio-img.webp"
            className="rounded-full  sm:w-80 sm:h-80 lg:w-64 lg:h-64 xl:w-80 xl:h-80"
            width={250}
            height={250}
            priority
            alt="Portfolio photo"
          />
        </div>
      </div>

      <div data-aos="fade-up" className="flex flex-col pb-10 sm:pb-28 items-center">
        <p className="text-[0.75rem] sm:text-[0.85rem] font-light mb-2.5 lg:mb-3">current favourite tech stack/tools:</p>
        <div className="flex flex-wrap items-center text-[1.7rem] sm:text-[1.9rem] lg:text-[2.1rem] gap-4 md:text-4xl  ">
          <i className="devicon-react-original transition-all duration-300 hover:text-[#61DAFB] hover:scale-110"></i>
          <i className="devicon-nextjs-plain transition-all duration-300 dark:hover:text-slate-300 hover:text-black hover:scale-110"></i>
          <i className="devicon-tailwindcss-plain transition-all duration-300 hover:text-[#38BDF8] hover:scale-110"></i>
          <i className="devicon-redux-original transition-all duration-300 hover:text-[#764ABC] hover:scale-110"></i>
          <i className="devicon-github-original transition-all duration-300 hover:text-[#181717] dark:hover:text-slate-300 hover:scale-110"></i>
          <i className="devicon-vscode-plain transition-all duration-300 hover:text-[#0078D7] hover:scale-110"></i>
        </div>
      </div>
    </div>
  );
}

export default HeroImageComponent;
