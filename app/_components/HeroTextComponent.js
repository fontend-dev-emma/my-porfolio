import Link from "next/link";

function HeroTextComponent() {
  return (
    <div className="  pt-32 sm:pt-32 md:pt-40 lg:pt-44 xl:pt-54 px-4   md:place-items-start  sm:px-8  bg-gradient-to-b from-[#e0e6ef] dark:[#1f2840]/80 to-transparent lg:bg-none lg:px-0  dark:bg-none   ">
      <p data-aos="fade-right" className=" my-2 lg:my-4  text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-white/80  ">
        hi, i&apos;m Waziri 👋🏻
      </p>
      <p
        data-aos="fade-up"
        className="text-6xl sm:text-[3.2rem] md:text-6xl lg:text-[4.6rem] xl:text-8xl  sm:flex sm:flex-row lg:flex-col  sm:gap-2 font-extrabold  leading-leading-[1.1]"
      >
        <span className="block">
          <span className="text-purple-700  ">Front</span>
          <span className="text-gray-800 dark:text-slate-300">end</span>
        </span>

        <span className="block text-gray-800 dark:text-slate-300">Developer</span>
      </p>
      <h1 data-aos="fade-up" className="text-[0.95rem] lg:text-[1rem] font-medium  text-gray-600 dark:text-slate-400 mt-4 sm:mt-6 xl:mt-8">
        I craft scalable, fast, and visually engaging web applications, covering everything from UI design to deployment.
      </h1>

      <div className="  pt-6 xl:pt-8  flex flex-row gap-4 backdrop-blur-3xl">
        <Link
          data-aos="zoom-out"
          href="/contact"
          className="px-4 lg:px-6 text-[0.85rem] lg:text-md py-2  bg-purple-700 text-white/90 rounded-lg capitalize"
        >
          Get in Touch
        </Link>
        <Link
          data-aos="zoom-out"
          href="/"
          className="px-4 lg:px-6 border border-gray-400 text-[0.85rem] lg:text-md py-2  text-gray-600 dark:text-slate-400 rounded-lg  capitalize font-bold"
        >
          📂 RESUME
        </Link>
      </div>
    </div>
  );
}

export default HeroTextComponent;
