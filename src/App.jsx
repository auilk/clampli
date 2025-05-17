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
      <ClampResult></ClampResult>
      <ClampFormat></ClampFormat>
    </div>
  );
}

export default App;