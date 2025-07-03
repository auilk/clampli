import Image from "next/image";
import { NavBar } from "./components/NavBar";
import NavLink from "./components/NavLink";
import Background from "./components/Background";
import ElementForm from "./components/ElementForm";
import ViewportForm from "./components/ViewportForm";

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
              alt="Websit logo"
              fill
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
            </div>
          </div>

          <div className="w-full h-full flex-[6%] xs:flex-[5%] border-l-2 border-white">
            <Background></Background>
          </div>
        </section>
      </main>
    </>
  );
}
