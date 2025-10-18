import TechScrollLine from "./TechScrollLine";

function AboutTechSTack() {
  return (
    <section className="py-20 px-5 sm:px-10 xl:px-16 backdrop-blur-2xl  overflow-hidden relative">
      <h2
        data-aos="fade-right"
        className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-10 sm:text-start text-gray-900 dark:text-slate-300 "
      >
        My Stack & Strengths<span className="text-purple-700">.</span>
      </h2>

      <div
        data-aos="zoom-in"
        className="space-y-6 mb-10 bg-black/15 dark:bg-white/5 dark:backdrop-blur-md rounded-3xl py-12 dark:border dark:border-white/20 "
      >
        <TechScrollLine
          itemsArray={["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind", "Redux", "Supabase", "Git"]}
          scrollDirection="animate-scroll-left"
        />

        <TechScrollLine
          itemsArray={["Problem Solving", "Creative Thinking", "Team Collaboration", "Adaptability", "Attention to Detail", "Communication"]}
          scrollDirection="animate-scroll-right"
        />

        <TechScrollLine
          itemsArray={["Revolution of Ideas", "Continuous Learning", "Empathy in Design", "Innovation", "Growth Mindset"]}
          scrollDirection="animate-scroll-left"
        />
      </div>
    </section>
  );
}

export default AboutTechSTack;
