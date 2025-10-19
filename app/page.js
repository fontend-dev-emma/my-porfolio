import ContactForm from "./_components/ContactForm";
import CoreDevelopmentFocusSection from "./_components/CoreDevelopmentFocusSection";
import FeaturedProjectsSection from "./_components/FeaturedProjectsSection";
import HeroImageComponent from "./_components/HeroImageComponent";
import HeroTextComponent from "./_components/HeroTextComponent";
import TechStackSection from "./_components/TechStackSection";

export const metadata = {
  title: "Home || Waziri Emmanuel Portfolio",
  description:
    "Waziri Emmanuel — Front-end Developer and Web Designer. Explore my projects, skills, and services for web development, design, and creative solutions.",
  metadataBase: new URL("https://waziri.dev"),
  keywords: [
    "Waziri Emmanuel",
    "portfolio",

    "full-stack developer",
    "frontend developer",
    "web developer",
    "web design",
    "projects",
    "UI/UX",
    "JavaScript",
    "React",
    "nextJs",
    "Tailwind CSS",
  ],
  openGraph: {
    title: "Waziri Emmanuel Portfolio",
    description: "Showcasing my web development projects, responsive designs, and creative solutions.",
    url: "https://waziri.dev",
    siteName: "Waziri Emmanuel Portfolio",
    images: [
      {
        url: "/my-favico.png",
        width: 1200,
        height: 630,
        alt: "Waziri Emmanuel Portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/my-favico.png",
    apple: "/my-favico.png",
  },
};

function page() {
  return (
    <div className="min-h-screen w-full relative ">
      <section className="relative z-10 lg:px-10 xl:px-20 lg:grid lg:grid-cols-2  lg:bg-gradient-to-b lg:from-[#e0e6ef]/80 lg:to-transparent dark:from-[#06102b]/40   ">
        <HeroTextComponent />

        <HeroImageComponent />
      </section>

      <TechStackSection />

      <FeaturedProjectsSection />

      <CoreDevelopmentFocusSection />

      <section className="relative px-5 py-16 pb-32 sm:py-48 md:py-56 backdrop-blur-2xl">
        <ContactForm />
      </section>
    </div>
  );
}

export default page;
