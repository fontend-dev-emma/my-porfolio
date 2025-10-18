import AboutImageComponent from "../_components/AboutImageComponent";
import AboutStorySection from "../_components/AboutStorySection";
import AboutTechSTack from "../_components/AboutTechSTack";

export const metadata = {
  title: "About || Waziri Emmanuel Portfolio",
  description:
    "Learn more about Waziri Emmanuel, a front-end developer passionate about building clean, responsive, and high-performance web applications.",
  keywords: ["about Waziri Emmanuel", "front-end developer", "web development journey", "skills", "experience"],
  openGraph: {
    title: "About Waziri Emmanuel",
    description: "Discover my journey, skills, and expertise in front-end development and web design.",
    url: "https://waziri.dev/about",
  },
};

function page() {
  return (
    <div className=" pt-20 sm:pt-32 lg:pt-36  bg-gradient-to-b from-[#e0e6ef]/70 dark:from-[#06102b]/50 to-transparent">
      <section className="  lg:pb-8 px-5 sm:px-10 lg:px-16 ">
        <h1 data-aos="fade-right" className="text-5xl pt-14 font-extrabold lg:text-7xl text-gray-800 dark:text-slate-300">
          About me<span className="text-purple-700">.</span>
        </h1>
        <p
          data-aos="fade-up"
          className=" border-l-5 border-purple-700 leading-relaxed  my-6 pl-2 text-md lg:text-lg  font-extralight dark:text-slate-400 "
        >
          I&apos;m Waziri Emmanuel, a front-end developer dedicated to crafting modern, interactive, and visually engaging web experiences. I love
          transforming ideas into responsive digital products that are both beautiful and flawlessly functional across all devices.
        </p>
      </section>

      <AboutImageComponent />

      <AboutTechSTack />

      <AboutStorySection />
    </div>
  );
}

export default page;
