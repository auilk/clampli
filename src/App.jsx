import { NavBar } from "./components/NavBar";
import NavLink from "./components/NavLink";
import GitIcon from "./assets/icons/github-icon.png";
import LinkedinIcon from "./assets/icons/linkedin-icon.png";
import ClampliLogo from "./assets/logos/clampli-logo.png";
import Background from "./components/Background";
import Form from "./components/Form";
import ClampResult from "./components/ClampResult";
import Slide from "./components/Slide";
import useSelectorStore from "./store/selector-store";
import useResultStore from "./store/result-store";

function App()
{
  const viewportUnit = useSelectorStore((state) => state.viewportUnit);
  const setViewportUnit = useSelectorStore((state) => state.setViewportUnit);

  const elementUnit = useSelectorStore((state) => state.elementUnit);
  const setElementUnit = useSelectorStore((state) => state.setElementUnit);

  const minViewport = useResultStore((state) => state.minViewport);
  const setMinViewport = useResultStore((state) => state.setMinViewport);

  const maxViewport = useResultStore((state) => state.maxViewport);
  const setMaxViewport = useResultStore((state) => state.setMaxViewport);
  
  const minElement = useResultStore((state) => state.minElement);
  const setMinElement = useResultStore((state) => state.setMinElement);

  const maxElement = useResultStore((state) => state.maxElement);
  const setMaxElement = useResultStore((state) => state.setMaxElement);

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
            icon={GitIcon}
            iconSize="clamp(0.75rem, 0.625rem + 0.627vw, 1.4rem)"
          ></NavLink>

          <NavLink 
            position="right" 
            link="https://github.com/auilk" 
            text="LinkedIn" 
            fontSize="clamp(0.35rem, 0.283rem + 0.337vw, 0.7rem)"
            icon={LinkedinIcon}
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
            className="mx-1.5 h-10 bg-cover bg-center bg-no-repeat"
            position="left"
            style={{
              width: "clamp(2.5rem, 1.825rem + 3.373vw, 6rem)",
              backgroundImage: `url(${ClampliLogo})`,
            }}
          ></div>
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
                <Form 
                  label01="Min Font Size" 
                  label02="Max Font Size"
                  value01={minElement}
                  value02={maxElement}
                  setValue01={setMinElement}
                  setValue02={setMaxElement}
                  gap="clamp(20px, 12.793px + 2.252vw, 70px)"
                  padX="clamp(1rem, 0.784rem + 1.081vw, 2.5rem)"
                  padY="clamp(2rem, 1.036rem + 4.819vw, 7rem)"
                  borderWidth="clamp(1px, 0.614px + 0.12vw, 3px)"
                  unit={elementUnit}
                  onUnitChange={(unit) => 
                  {
                    if (unit === elementUnit) return; // no-op if unchanged

                    setElementUnit(unit);

                    if (unit === "rem") {
                      setMinElement(minElement / 16);
                      setMaxElement(maxElement / 16);
                    } else {
                      setMinElement(minElement * 16);
                      setMaxElement(maxElement * 16);
                    }
                  }}
                ></Form>

                <Form 
                  label01="Min Viewport Size" 
                  label02="Max Viewport Size"
                  value01={minViewport}
                  value02={maxViewport}
                  setValue01={setMinViewport}
                  setValue02={setMaxViewport}
                  gap="clamp(20px, 12.793px + 2.252vw, 70px)"
                  padX="clamp(1rem, 0.784rem + 1.081vw, 2.5rem)"
                  padY="clamp(2rem, 1.036rem + 4.819vw, 7rem)"
                  borderWidth="clamp(1px, 0.614px + 0.12vw, 3px)"
                  unit={viewportUnit}
                  onUnitChange={(unit) => 
                  {
                    if (unit === viewportUnit) return;

                    setViewportUnit(unit);

                    if (unit === "rem")
                    {
                      setMinViewport(minViewport / 16);
                      setMaxViewport(maxViewport / 16);
                    }
                    else
                    {
                      setMinViewport(minViewport * 16);
                      setMaxViewport(maxViewport * 16);
                    }
                  }}
                ></Form>
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

export default App;