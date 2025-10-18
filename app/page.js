import ContactForm from "./_components/ContactForm";
import CoreDevelopmentFocusSection from "./_components/CoreDevelopmentFocusSection";
import FeaturedProjectsSection from "./_components/FeaturedProjectsSection";
import HeroImageComponent from "./_components/HeroImageComponent";
import HeroTextComponent from "./_components/HeroTextComponent";
import TechStackSection from "./_components/TechStackSection";

export const metadata = {
  title: "Home || My porfolio",
  description: "Track your shipments in real-time and enjoy smooth delivery worldwide and beyond with SwiftPort Logistics.",
  keywords: ["SwiftPort", "swift", "port", "logistics", "shipping", "delivery", "cargo", "freight", "tracking"],
  openGraph: {
    title: "SwiftPort Logistics",
    description: "Reliable international shipping and real-time cargo tracking.",
    url: "https://swiftport.uk",
    siteName: "SwiftPort Logistics",
    images: [
      {
        url: "/my-favico.png",
        width: 1200,
        height: 630,
        alt: "SwiftPort Logistics preview",
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
