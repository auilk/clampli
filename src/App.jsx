import { NavBar } from "./components/NavBar";
import NavLink from "./components/NavLink";
import GitIcon from "./assets/icons/github-icon.png";
import LinkedinIcon from "./assets/icons/linkedin-icon.png";
import ClampliLogo from "./assets/logos/clampli-logo.png";
import DottedBG from "./components/DottedBG";
import Form from "./components/Form";
import ClampResult from "./components/ClampResult";
import Slide from "./components/Slide";

function App()
{
  return (
    <>
      <header className="flex flex-col">
        <NavBar 
          gap="clamp(5px, 4.286px + 0.223vw, 10px)"
          padding="clamp(0.5rem, 0.393rem + 0.536vw, 1.25rem)"
        >
          <NavLink 
            position="right" 
            link="https://github.com/auilk" 
            text="GitHub" 
            fontSize="clamp(0.4rem, 0.329rem + 0.357vw, 0.9rem)"
            icon={GitIcon}
            iconSize="clamp(1rem, 0.886rem + 0.571vw, 1.8rem)"
          ></NavLink>

          <NavLink 
            position="right" 
            link="https://github.com/auilk" 
            text="LinkedIn" 
            fontSize="clamp(0.4rem, 0.329rem + 0.357vw, 0.9rem)"
            icon={LinkedinIcon}
            iconSize="clamp(1rem, 0.886rem + 0.571vw, 1.8rem)"
          ></NavLink>

          <p 
            position="center"
            className="text-white"
            style={{
              fontSize: "clamp(0.7rem, 0.545rem + 0.775vw, 1.785rem)"
            }}
          >
            Fluid type & layout—no math, just magic
          </p>

          <div 
            className="mx-1.5 h-10 scale-170 bg-cover bg-center bg-no-repeat"
            position="left"
            style={{
              minWidth: "clamp(2.5rem, 2.286rem + 1.071vw, 4rem)",
              backgroundImage: `url(${ClampliLogo})`,
            }}
          ></div>
        </NavBar>
      </header>

      <main className="flex relative flex-col flex-grow min-h-0">
        <section className="flex flex-grow pb-11 min-h-0">
          <div className="w-full h-full flex-[5%] border-r-2 border-white">
            <DottedBG></DottedBG>
          </div>
          
          <div className="flex flex-col justify-around h-full px-60 flex-[90%]">
            <div className="flex justify-between">
              <Form 
                label01="Min Font Size" 
                label02="Max Font Size"
              ></Form>

              <Form 
                label01="Min Viewport Size" 
                label02="Max Viewport Size"
              ></Form>
            </div>

            <ClampResult fontSize="1.4rem"></ClampResult>
          </div>

          <div className="w-full h-full flex-[5%] border-l-2 border-white">
            <DottedBG></DottedBG>
          </div>
        </section>

        <Slide></Slide>
      </main>
    </>
  );
}

export default App;