import ContactDetailsSection from "../_components/ContactDetailsSection";
import ContactForm from "../_components/ContactForm";

export const metadata = {
  title: "Contact || Waziri Emmanuel Portfolio",
  description: "Get in touch with Waziri Emmanuel for collaboration, freelance work, or project inquiries. I'm open to new opportunities and ideas.",
  metadataBase: new URL("https://waziri.dev"),
  keywords: [
    "contact Waziri Emmanuel",
    "hire frontend developer",
    "front-end projects",
    "freelance web developer",
    "collaboration",
    "web project inquiry",
  ],
  openGraph: {
    title: "Contact Waziri Emmanuel",
    description: "Reach out to me for collaborations, freelance projects, or any inquiries about web development and design.",
    url: "https://waziri.dev/contact",
  },
};

function page() {
  return (
    <div className=" pt-20 sm:pt-32 lg:pt-36  bg-gradient-to-b from-[#e0e6ef]/70 dark:from-[#06102b]/30 to-transparent">
      <section className="   lg:pb-8 px-5 sm:px-10 lg:px-16 ">
        <h1 data-aos="fade-right" className="text-4xl pt-14 font-extrabold lg:text-7xl text-gray-800 dark:text-slate-300">
          Get In Touch<span className="text-purple-700">.</span>
        </h1>
        <p data-aos="fade-up" className="  leading-relaxed  mt-6 mb-4  text-md lg:text-lg  font-extralight dark:text-slate-400">
          I&apos;m open to collaborations and freelance gigs. Whether you have
          <span className="text-purple-700"> a project idea, need a developer to bring your vision to life</span>, or just want to connect — reach out
          anytime through social media, email, or the contact form below.
        </p>
      </section>

      <ContactDetailsSection />

      <div className="px-5 py-16 pb-32 sm:py-48 md:py-56 backdrop-blur-2xl">
        <ContactForm />
      </div>
    </div>
  );
}

export default page;
