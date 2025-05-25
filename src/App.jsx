import { NavBar } from "./components/NavBar";
import NavLink from "./components/NavLink";
import GitIcon from "./assets/icons/github-icon.png";
import ClampliLogo from "./assets/logos/clampli-logo.png";
import DottedBG from "./components/DottedBG";
import Form from "./components/Form";
import ClampResult from "./components/ClampResult";


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

          <p 
            className="text-white text-lg" 
            position="center"
          >
            Fluid type & layout—no math, just magic
          </p>

          <div 
            className="w-15 mr-1.5 h-10 scale-160 bg-cover bg-center bg-no-repeat"
            position="left"
            style={{
              backgroundImage: `url(${ClampliLogo})`,
            }}
          ></div>
        </NavBar>
      </header>

      <main className="min-h-0 flex flex-grow">
        <div className="w-full h-full flex-[5%] border-r-2 border-white">
          <DottedBG></DottedBG>
        </div>
        
        <div className="flex flex-col justify-around h-full px-60 flex-[90%]">
          <div className="flex justify-between">
            <Form></Form>

            <Form></Form>
          </div>

          <ClampResult></ClampResult>
        </div>

        <div className="w-full h-full flex-[5%] border-l-2 border-white">
          <DottedBG></DottedBG>
        </div>
      </main>

      <footer className="min-h-10 h-10 flex border-t-2 border-white">
        <button className="w-full h-full text-xl text-white font-bold flex items-center justify-center cursor-pointer bg-black hover:bg-graphite-500 transition-all duration-500">
          <span className="px-10">⮝</span>
          
          <span>How It Works</span>
          
          <span className="px-10">⮝</span> 
        </button>
      </footer>
    </>
  );
}

export default App;