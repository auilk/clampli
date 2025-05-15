import { useState } from "react";

function UnitSelector()
{
    const [selected, SetSelected] = useState("px");

    return (
        <div className="w-full flex justify-between border-4 border-white">
            <button className={`${selected === "px" ? "pl-5 flex-grow bg-white text-graphite-900" : "pr-2 text-white [writing-mode:sideways-lr]"} w-fit pl-2 flex justify-start transition-all`} onClick={() => SetSelected("px")}>
                <span className={`${selected === "px" ? "text-2xl" : "text-xl"} h-full font-bold`}>PX</span>
            </button>
            <button className={`${selected === "rem" ? "pr-5 flex-grow bg-white text-graphite-900" : "pr-3 text-white [writing-mode:sideways-rl]"} w-fit pl-3 flex justify-end transition-all`} onClick={() => SetSelected("rem")}>
                <span className={`${selected === "rem" ? "text-2xl" : "text-sm"} h-full font-bold`}>REM</span>
            </button>
        </div>
    );
}

export default UnitSelector;