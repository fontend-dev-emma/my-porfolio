import ProjectCard from "../_components/ProjectCard";

export const metadata = {
  title: "Projects || Waziri Emmanuel Portfolio",
  description:
    "Explore a collection of web development projects by Waziri Emmanuel, showcasing expertise in frontend development, UI/UX design, and interactive web experiences.",
  metadataBase: new URL("https://waziri.dev"),
  keywords: [
    "Waziri Emmanuel projects",
    "portfolio projects",
    "web development projects",
    "UI/UX showcase",
    "React",
    "pro developer",
    "nextjs",
    "JavaScript",
  ],
  openGraph: {
    title: "Waziri Emmanuel Projects",
    description: "Check out my projects, from interactive websites to creative UI/UX solutions, built with modern web technologies.",
    url: "https://waziri.dev/projects",
  },
};

function page() {
  return (
    <div className="pt-20 sm:pt-32 lg:pt-36  bg-gradient-to-b from-[#e0e6ef]/70 dark:from-[#06102b]/30 to-transparent">
      <section className="border-b border-[#b8d4ff]/50 dark:border-gray-700 lg:pb-8 px-5 sm:px-10 lg:px-16 lg:place-items-center ">
        <h1 data-aos="fade-right" className="text-5xl pt-14 font-extrabold lg:text-6xl text-gray-800 dark:text-slate-300">
          My Best <span className="text-purple-700">Creations</span>
        </h1>
        <p data-aos="fade-up" className=" py-6 text-md lg:text-lg dark:text-slate-400 ">
          Crafting modern, performance-driven web experiences with clean design and clear purpose.
        </p>
      </section>

      <section className="  pt-10 backdrop-blur-3xl lg:pt-12">
        <div className="px-6 sm:px-10 font-extrabold lg:px-32">
          <p data-aos="fade-right" className="text-xl  mb-3 font-bold text-purple-700">
            My Work
          </p>
          <h2 data-aos="fade-up" className="text-4xl  text-gray-700 dark:text-slate-300">
            Featured Projects
          </h2>
          <p data-aos="fade-up" className="pt-5  font-light  pb-10 sm:pb-28 dark:text-slate-400   text-md">
            A showcase of projects that reflect my passion for crafting modern, user-focused web experiences.
          </p>
        </div>

        <div className=" px-5 pb-28 sm:pb-32 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-8 lg:gap-x-16 sm:justify-items-center  gap-y-14 sm:gap-y-20 sm:px-28 md:px-8 lg:px-24 xl:px-10 lg:pb-40 ">
          <ProjectCard
            imageSrc="/cineverse.png"
            projectURL="https://emma-cineverse.netlify.app"
            title="Cineverse"
            description="Cineverse is a modern movie discovery platform where users can explore trending and top-rated films, preview trailers, and manage personal watchlists. It also features a “Continue Watching” section that keeps track of movies you’ve started, ensuring a smooth and interactive viewing experience across sessions."
            tools={["Local storage", "JavaScript", "HTML5", "Tailwind CSS", "YOUTUBE API", "TMDB API", "React-hot-toast"]}
          />

          <ProjectCard
            imageSrc="/swift-port.png"
            title="SwiftPort"
            projectURL="https://swiftport.uk"
            description="SwiftPort is a full-stack logistics management platform that simplifies shipment handling through real-time tracking, automated status updates, and invoice downloads, all powered by an intuitive dashboard and robust admin panel for seamless end-to-end control."
            tools={[
              "React",
              "Next.js",
              "Brevo / SMTP",
              "BcryptJs",
              "Tailwind CSS",
              "React Leaflet ",
              "TanStack Query",

              "React-Hot-Toast",
              "Supabase",
              "Html2pdf",
              "SEO",
              "React-hot-toast",
            ]}
          />

          <ProjectCard
            imageSrc="/luxe-habitat.png"
            title="Luxe Habitat"
            projectURL="https://emma-luxe-habitat.netlify.app"
            description="Luxe Habitat is a modern real estate platform that lets users explore high-end properties through immersive image galleries, detailed listings, and a clean, intuitive interface designed for a seamless browsing experience."
            tools={["JavaScript", "HTML5", "Tailwind CSS"]}
          />

          <ProjectCard
            imageSrc="/crypto-view.png"
            title="Crypto View  "
            projectURL="https://crypto-view-emma.netlify.app"
            description="Crypto View is a real-time cryptocurrency tracking platform that provides live market data, interactive charts, and detailed coin insights in a sleek, responsive dashboard built for clarity and performance."
            tools={["Local storage", "JavaScript", "HTML5", "Tailwind CSS", "CoinGecko API", "Chart.js"]}
          />
        </div>
      </section>
    </div>
  );
}

export default page;
