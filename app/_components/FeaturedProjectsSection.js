import ProjectCard from "./ProjectCard";

function FeaturedProjectsSection() {
  return (
    <section className="backdrop-blur py-24 sm:py-28 px-4 md:px-8 sm:pb-44    ">
      <h2 data-aos="fade-right" className="pb-4 text-4xl sm:text-5xl xl:text-6xl text-gray-700 dark:text-slate-300 sm:px-8 font-extrabold">
        Projects{" "}
      </h2>
      <p data-aos="fade-up" className="text-[0.85rem] sm:text-[0.95rem] xl:text-xl  pb-10 sm:pb-16 sm:px-8  font-light">
        <span> Showcasing projects built with polished design and</span> <span className="text-purple-700">seamless functionality.</span>
      </p>

      <div className=" justify-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-8 lg:gap-x-16  gap-y-14 sm:gap-y-20 sm:px-28 md:px-8 lg:px-24 xl:px-10 ">
        <ProjectCard
          imageSrc="/cineverse.png"
          title="Cineverse"
          projectURL="https://emma-cineverse.netlify.app"
          description="Cineverse lets users explore, preview, and track movies with watchlists and continue-watching features, all through a sleek, interactive interface."
          tools={["Local storage", "javaScript", "HTML5", "Tailwind CSS", "YOUTUBE API", "TMDB API"]}
        />

        <ProjectCard
          imageSrc="/swift-port.png"
          title="Swift Port"
          projectURL="https://swiftport.uk"
          description="SwiftPort helps users manage shipments efficiently with real-time tracking, status updates, and a smooth, intuitive dashboard for seamless logistics management."
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
          ]}
        />

        <ProjectCard
          imageSrc="/luxe-habitat.png"
          title="Luxe Habitat"
          projectURL="https://emma-luxe-habitat.netlify.app"
          description="Luxe Habitat allows users to explore and discover luxury properties with interactive galleries, property details, and an intuitive interface for a seamless real estate experience."
          tools={["javaScript", "HTML5", "Tailwind CSS"]}
        />
      </div>
    </section>
  );
}

export default FeaturedProjectsSection;
