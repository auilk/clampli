import { useState } from "react";

function UnitSelector()
{
    const [selected, SetSelected] = useState("px");

    return (
        <div className="w-full pt-1 pb-1 flex justify-between gap-1 bg-white">
            <button className={`${selected === "px" ? "flex-grow" : "auto"} pl-5 pr-5 flex justify-start bg-red-500 transition-all`} onClick={() => SetSelected("px")}>
                <span className="text-2xl font-bold">PX</span>
            </button>
            <button className={`${selected === "rem" ? "flex-grow" : "auto"} pl-5 pr-5 flex justify-end bg-green-500 transition-all`} onClick={() => SetSelected("rem")}>
                <span className="text-2xl font-bold">REM</span>
            </button>
        </div>
    );
}

export default UnitSelector;