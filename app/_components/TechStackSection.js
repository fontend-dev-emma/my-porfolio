import LanguageBox from "./LanguageBox";

function TechStackSection() {
  return (
    <section className="backdrop-blur-3xl px-4 sm:px-12 py-14 flex  flex-col justify-center text-center md:justify-normal ">
      <h2 className="pb-2 text-3xl sm:text-4xl md:text-[2.5rem] text-start   text-gray-900 dark:text-slate-300 font-semibold">
        Tools & Technologies
      </h2>
      <p className="text-gray-500 dark:text-slate-400 text-start font-light md:text-[1.2rem]  pb-8 sm:pb-16 md:pb-8 text-[0.85rem]">
        The tools I rely on to build <span className="font-bold text-purple-700">powerful</span>,
        <span className="font-bold text-purple-700"> scalable</span>, and
        <span className="font-bold text-purple-700"> visually engaging</span> web applications.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-x-10 place-items-center">
        <LanguageBox icon="devicon-javascript-plain colored" label="JavaScript" />
        <LanguageBox icon="devicon-html5-plain colored " label="HTML 5" />
        <LanguageBox icon="devicon-css3-plain colored" label="CSS3" />
        <LanguageBox icon="devicon-react-original colored" label="React" />
        <LanguageBox icon="devicon-nextjs-plain" label="Next.js" />
        <LanguageBox icon="devicon-tailwindcss-plain colored" label="Tailwind" />
        <LanguageBox icon="devicon-redux-original colored" label="Redux" />
        <LanguageBox icon="devicon-supabase-plain colored" label="Supabase" />
      </div>
    </section>
  );
}

export default TechStackSection;
