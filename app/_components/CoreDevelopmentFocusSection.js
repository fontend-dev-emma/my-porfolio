import { Code2, Eye, MonitorSmartphone, Rocket, Smile, Users } from "lucide-react";
import FocusCard from "./FocusCard";

function CoreDevelopmentFocusSection() {
  return (
    <section className=" ">
      <div className=" px-4 sm:px-12 lg:px-16 pb-8 sm:pb-14 md:pb-24 backdrop-blur-2xl  ">
        <h2 data-aos="fade-right" className="text-md sm:text-2xl  text-purple-700 font-extrabold mb-2">
          My Focus
        </h2>
        <h3 data-aos="fade-left" className="text-2xl sm:text-3xl md:text-4xl text-gray-700 dark:text-slate-300   font-extrabold mb-3">
          Detail-focused with a creative edge.
        </h3>
        <p data-aos="fade-up" className="text-gray-500 dark:text-slate-400 text-[0.85rem] sm:text-md md:text-lg font-light ">
          I build fast, responsive, and user-friendly web apps with clean, maintainable code and modern design.
        </p>
      </div>

      <div className="  md:px-5   grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 sm:gap-y-8   px-4 sm:px-14 lg:px-18    border-t  relative z-10 border-gray-300 dark:border-gray-700 bg-gradient-to-b from-[#e5ebf2] dark:from-[#1f2840]/60 to-transparent">
        <FocusCard
          Icon={MonitorSmartphone}
          heading="responsive design"
          description=" Every layout adapts smoothly across all screen sizes and devices."
        />

        <FocusCard
          Icon={Rocket}
          heading="Performance optimization"
          description=" Fast, optimized, and reliable applications built for seamless user experiences."
        />

        <FocusCard Icon={Smile} heading="User Experience (UX)" description=" Clean, intuitive interfaces that make interaction effortless." />

        <FocusCard Icon={Eye} heading="Accessibility" description=" I design with inclusivity in mind, ensuring everyone can interact with ease." />

        <FocusCard Icon={Code2} heading="Code Quality" description=" Structured, maintainable code that scales with growth." />

        <FocusCard
          Icon={Users}
          heading="Collaboration"
          description=" I value teamwork, Git workflows and clear communication for smooth project flow."
        />
      </div>
    </section>
  );
}

export default CoreDevelopmentFocusSection;
