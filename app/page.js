import Image from "next/image";
import { NavBar } from "./components/NavBar";
import NavLink from "./components/NavLink";
import Background from "./components/Background";
import ElementForm from "./components/ElementForm";
import ViewportForm from "./components/ViewportForm";
import ClampResult from "./components/ClampResult";
import Slide from "./components/Slide";

export const metadata = {
  title: "CLAMPLI",
  description: "CLAMPLI helps web developers create fluid, responsive CSS clamp() values for typography, spacing, and layout; no media queries required.",
  icons: {
    icon: "https://auilk.github.io/Clampli/favicon/favicon.svg",
    apple: "https://auilk.github.io/Clampli/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "CLAMPLI",
    description: "CLAMPLI helps web developers create fluid, responsive CSS clamp() values for typography, spacing, and layout; no media queries required.",
    url: "https://auilk.github.io/Clampli/",
    siteName: "CLAMPLI",
    images: [
      {
        url: "https://auilk.github.io/Clampli/banner.jpg",
        width: 1200,
        height: 630,
        alt: "CLAMPLI Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CLAMPLI",
    description: "CLAMPLI helps web developers create fluid, responsive CSS clamp() values for typography, spacing, and layout; no media queries required.",
    images: ["https://auilk.github.io/Clampli/banner.jpg"],
  },
};

export const viewport = {
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0A0A0A",
};

export default function Home()
{
  return (
    <>
      <header className="flex flex-col">
        <NavBar 
          gap="clamp(5px, 4.286px + 0.223vw, 10px)"
          padding="clamp(0.1rem, 0.028rem + 0.36vw, 0.6rem)"
          borderWidth="clamp(1px, 0.614px + 0.12vw, 3px)"
        >
          <NavLink 
            position="right" 
            link="https://github.com/auilk" 
            text="GitHub" 
            fontSize="clamp(0.35rem, 0.283rem + 0.337vw, 0.7rem)"
            icon="/icons/github-icon.png"
            iconSize="clamp(0.75rem, 0.625rem + 0.627vw, 1.4rem)"
          ></NavLink>

          <NavLink 
            position="right" 
            link="https://github.com/auilk" 
            text="LinkedIn" 
            fontSize="clamp(0.35rem, 0.283rem + 0.337vw, 0.7rem)"
            icon="/icons/linkedin-icon.png"
            iconSize="clamp(0.75rem, 0.625rem + 0.627vw, 1.4rem)"
          ></NavLink>

          <p 
            position="center"
            className="text-white"
            style={{
              fontSize: "clamp(0.6rem, 0.465rem + 0.675vw, 1.3rem)"
            }}
          >
            Fluid type & layout—no math, just magic
          </p>

          <div 
            className="mx-1.5 h-10 relative"
            position="left"
            style={{
              width: "clamp(2.5rem, 1.825rem + 3.373vw, 6rem)",
            }}
          >
            <Image
              src="/logos/clampli-logo.png"
              alt="Website logo"
              fill={true}
              sizes="10vw"
              className="object-cover"
            ></Image>
          </div>
        </NavBar>
      </header>

      <main className="flex relative flex-col flex-grow min-h-0">
        <section className="flex flex-grow pb-6.5 min-h-0">
          <div className="w-full h-full flex-[6%] xs:flex-[5%] border-r-2 border-white">
            <Background></Background>
          </div>
          
          <div className="flex flex-col items-center justify-around h-full flex-[90%]">
            <div 
              className="w-[90%] flex flex-col items-center justify-center"
              style={{
                gap: "clamp(1.25rem, 0.709rem + 2.703vw, 5rem)"
              }}
            >
              <div 
                className="flex xs:flex-row flex-col justify-center"
                style={{
                  gap: "clamp(20px, -49.189px + 21.622vw, 500px)"
                }}
              >
                <ElementForm></ElementForm>

                <ViewportForm></ViewportForm>
              </div>

              <ClampResult
                fontSize="clamp(0.4rem, 0.256rem + 0.721vw, 1.4rem)"
                borderWidth="clamp(1px, 0.614px + 0.12vw, 3px)"
              ></ClampResult>
            </div>
          </div>

          <div className="w-full h-full flex-[6%] xs:flex-[5%] border-l-2 border-white">
            <Background></Background>
          </div>
        </section>

        <Slide></Slide>
      </main>
    </>
  );
}
