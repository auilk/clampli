import { NavBar } from "./components/NavBar";
import NavLink from "./components/NavLink";
import GitIcon from "./assets/icons/github-icon.png";
import ClampliLogo from "./assets/logos/clampli-logo.png";
import DottedBG from "./components/DottedBG";
import UnitSelector from "./components/UnitSelector";
import Form from "./components/Form";
import ClampFormat from "./components/ClampFormat";
import ClampResult from "./components/ClampResult";


function App()
{
  return (
    <div className="flex flex-col h-dvh">
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

      <div className="p-5 flex-1">
        <DottedBG className="h-full flex justify-center">
          <div className="w-full ml-80 mr-80 flex flex-col justify-center gap-10">
            <div className="flex justify-between">
              <Form></Form>

              <Form></Form>
            </div>

            <div className="flex justify-center">
              <ClampResult></ClampResult>
            </div>
          </div>
        </DottedBG>
      </div>

    </div>
  );
}

export default App;