import { NavBar } from "./components/NavBar";
import NavLink from "./components/NavLink";
import GitIcon from "./assets/icons/github-icon.png";
import LinkedinIcon from "./assets/icons/linkedin-icon.png";
import ClampliLogo from "./assets/logos/clampli-logo.png";
import DottedBG from "./components/DottedBG";
import Form from "./components/Form";
import ClampResult from "./components/ClampResult";
import Toggle from "./components/Toggle";


function App()
{
  return (
    <>
      <header className="flex flex-col">
        <NavBar gap={10}>
          <NavLink 
            position="right" 
            link="https://github.com/auilk" 
            text="GitHub" 
            fontSize={0.6} 
            icon={GitIcon}
          ></NavLink>

          <NavLink 
            position="right" 
            link="https://github.com/auilk" 
            text="LinkedIn" 
            fontSize={0.6} 
            icon={LinkedinIcon}
          ></NavLink>

          <p 
            className="text-lg text-white" 
            position="center"
          >
            Fluid type & layout—no math, just magic
          </p>

          <div 
            className="min-w-16 mr-1.5 h-10 scale-160 bg-cover bg-center bg-no-repeat"
            position="left"
            style={{
              backgroundImage: `url(${ClampliLogo})`,
            }}
          ></div>
        </NavBar>
      </header>

      <main className="flex flex-grow min-h-0">
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

          <ClampResult fontSize={1.4}></ClampResult>
        </div>

        <div className="w-full h-full flex-[5%] border-l-2 border-white">
          <DottedBG></DottedBG>
        </div>
      </main>

      <footer className="flex relative h-fit min-h-10">
        <Toggle
          firstOption="How It Works"
          secondOption="Calculator"
          padding={0}
          vertical={false}
          fullWidth={true}
        ></Toggle>
      </footer>
    </>
  );
}

export default App;