import { useState } from "react";

function UnitSelector({fontSize = 1})
{
    const [selected, SetSelected] = useState("px");

    return (
        <div className="w-full flex justify-between border-t-[2px] border-l-[2px] border-r-[2px] rounded-t-md border-white">
            <button className={`${selected === "px" ? "flex-grow bg-white text-graphite-900" : "pr-3 text-white"} w-fit pl-3 flex justify-start transition-all`} onClick={() => SetSelected("px")}>
                <span className={`h-full font-bold ${selected === "px" ? "rotate-0" : "-rotate-90 -mr-1"}`}
                style={{
                    fontSize: `${selected === "px" ? `calc(1.3rem * ${fontSize}` : `calc(1rem * ${fontSize})`}`,
                    marginRight: `calc(0.25rem * ${-fontSize})`
                }}>PX</span>
            </button>
            <button className={`${selected === "rem" ? "pr-5 flex-grow bg-white text-graphite-900" : "pr-3 text-white"} w-fit pl-3 flex justify-end transition-all`} onClick={() => SetSelected("rem")}>
                <span className={`h-full font-bold ${selected === "rem" ? "rotate-0" : "rotate-90 -ml-3"}`}
                style={{
                    fontSize: `${selected === "rem" ? `calc(1.3rem * ${fontSize}` : `calc(0.8rem * ${fontSize}`}`,
                    marginLeft: `calc(0.75rem * ${-fontSize})`
                }}>REM</span>
            </button>
        </div>
    );
}

export default UnitSelector;