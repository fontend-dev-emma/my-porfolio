import { Geist, Geist_Mono, Inter, Manrope, Montserrat, Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./_styles/globals.css";
import "devicon/devicon.min.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { ThemeProvider } from "next-themes";
import ClientLayoutWrapper from "./_components/ClientLayoutWrapper";
import { Toaster } from "react-hot-toast";
import AOSWrapper from "./_components/AOSWrapper";

const PlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["500"],
});

export const metadata = {
  title: "Home || Waziri Emmanuel Portfolio",
  description:
    "Waziri Emmanuel — Front-end Developer and Web Designer. Explore my projects, skills, and services for web development, design, and creative solutions.",
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
  twitter: {
    card: "summary_large_image",
    site: "@mullar_pro_dev",
    creator: "@mullar_pro_dev",
    title: "Waziri Emmanuel | Frontend Developer",
    description: "Building fast, elegant, and responsive web experiences.",
    images: ["https://waziri.dev/portfolio-img.WEBP"],
  },

  icons: {
    icon: "/my-favico.png",
    apple: "/my-favico.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${PlusJakartaSans.className}  text-gray-600 bg-white/35 font-medium min-h-screen w-full relative transition-colors duration-300 dark:bg-[#06102b]/80 dark:text-slate-300   `}
      >
        <ClientLayoutWrapper>
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
      linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
    `,
              backgroundSize: "12px 12px",
              maskImage: `
      repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)
    `,
              WebkitMaskImage: `
      repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)
    `,
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          ></div>

          <Header />
          <main className="relative z-10 mx-auto min-h-screen overflow-y-auto  ">
            <AOSWrapper>{children}</AOSWrapper>

            <Toaster
              position="top-center"
              gutter={12}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 5000,
                },
                className: "text-base max-w-md px-4 py-3 bg-white text-gray-700 shadow-lg rounded-lg sm:max-w-lg w-[90%] sm:w-auto z-[9999]",
                style: {
                  marginTop: "4rem",
                },
              }}
            />
          </main>
          <Footer />
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
