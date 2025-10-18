import Link from "next/link";

function Footer() {
  return (
    <footer className=" relative   bg-gradient-to-t from-[#e5ebf2]/90 dark:from-[#1f2840]/50 to-transparent   pt-4 md:pt-12">
      <div className="max-w-6xl mx-auto px-6  lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex flex-col space-y-2 text-gray-700 dark:text-slate-400 text-sm lg:text-lg">
          <h3 className="text-lg lg:text-2xl font-bold  mb-2 pt-3 lg:mb-8">Quick Navigation</h3>
          <Link href="/" className="hover:underline text-gray-600 dark:text-slate-500 transition">
            Home
          </Link>
          <Link href="/projects" className="hover:underline text-gray-600 dark:text-slate-500 transition">
            Projects
          </Link>
          <Link href="/about" className="hover:underline text-gray-600 dark:text-slate-500 transition">
            About
          </Link>
          <Link href="/contact" className="hover:underline text-gray-600 dark:text-slate-500 transition">
            Contact
          </Link>
        </div>

        <div className="text-gray-700 dark:text-slate-400 mt-6 sm:mt-4 ">
          <h3 className="text-sm lg:text-xl font-extrabold  mb-3 lg:mb-6">About Me</h3>
          <p className="text-sm font-light dark:text-slate-500 mb-2">
            I&apos;m Waziri Emmanuel, a <span className="font-bold">front-end developer & UI enthusiast</span> who loves intuitive, clean, modern UI
            design.
          </p>
        </div>

        <div className="flex -mb-2 sm:mt-8 md:pt-6 md:pl-10 xl:pl-32  flex-row space-x-4 xl:space-x-8  text-gray-700 dark:text-slate-400 ">
          <a href="#" className="hover:text-purple-300 transition">
            <i className="devicon-github-original  text-xl lg:text-4xl"></i>
          </a>
          <a href="#" className="hover:text-purple-300 transition">
            <i className="devicon-linkedin-plain text-xl lg:text-4xl"></i>
          </a>
          <a href="#" className="hover:text-purple-300 transition">
            <i className="devicon-twitter-original text-xl lg:text-4xl"></i>
          </a>
        </div>
      </div>

      <div className="border-t flex justify-center font-medium border-gray-200 dark:border-gray-600 mt-10 px-4 py-5  text-[0.8rem] text-gray-700 dark:text-slate-500">
        &copy; 2025 Waziri Emmanuel. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
