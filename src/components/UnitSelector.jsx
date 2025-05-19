import { useState } from "react";
import TextOutline from "./TextOutline";

function UnitSelector({fontSize = 2})
{
    const [selected, SetSelected] = useState("px");

    return (
        <div className="flex justify-between border-b-2 border-white">
            <button 
                className={`p-15 flex font-bold text-white border-r-1 relative overflow-hidden transition-all duration-500 ${selected === "px" ? "" : "hover:bg-graphite-500"}`}
                style={{
                    fontSize: `${fontSize}rem`,
                    flex: selected === "px" ? "90%" : "10%",
                }}
                onClick={() => SetSelected("px")}
            >
                <span 
                    className="pr-3 underline underline-offset-5 absolute transition-all z-1 duration-500 pointer-events-none"
                    style={{
                        top: selected === "px" ? "0" : "50%",
                        right: selected === "px" ? "0" : "50%",
                        transform: selected === "px" ? "translate(0%, 0%)" : "translate(50%, -50%)"
                    }}
                >
                    PX
                </span>

                <div
                    className={`w-fit h-fit absolute -left-8 -top-6 transition-all ${selected === "px" ? "hover:bg-graphite-500" : ""}`}
                    style={{
                        opacity: selected === "px" ? "1" : "0",
                        maskImage: 'linear-gradient(to right, black 0%, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0) 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, black 0%, black 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 75%, transparent 100%)'
                    }}
                >
                    <TextOutline 
                        text={"UNITS ARE IN PIXELS"} 
                        fontSize={"8rem"} 
                        outlineColor={"white"} 
                        outlineWidth={0.1}
                    ></TextOutline>
                </div>
            </button>

            <button 
                className={`p-15 flex font-bold text-white border-r-1 relative overflow-hidden transition-all duration-500 ${selected === "rem" ? "" : "hover:bg-graphite-500"}`}
                style={{
                    fontSize: `${fontSize}rem`,
                    flex: selected === "rem" ? "90%" : "10%"
                }}
                onClick={() => SetSelected("rem")}
            >
                <span 
                    className="pr-3 underline underline-offset-5 absolute transition-all z-1 duration-500 pointer-events-none"
                    style={{
                        top: selected === "rem" ? "0" : "50%",
                        left: selected === "rem" ? "10px" : "50%",
                        transform: selected === "rem" ? "translate(0%, 0%)" : "translate(-50%, -50%)"
                    }}
                >
                    REM
                </span>

                <div
                    className={`w-fit h-fit absolute -right-8 -top-6 transition-all ${selected === "rem" ? "hover:bg-graphite-500" : ""}`}
                    style={{
                        opacity: selected === "rem" ? "1" : "0",
                        maskImage: 'linear-gradient(to left, black 0%, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0) 100%)',
                        WebkitMaskImage: 'linear-gradient(to left, black 0%, black 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 75%, transparent 100%)'
                    }}
                >
                    <TextOutline 
                        text={"UNITS ARE IN REM"} 
                        fontSize={"8rem"} 
                        outlineColor={"white"} 
                        outlineWidth={0.1}
                    ></TextOutline>
                </div>

            </button>
        </div>
    );
}

export default UnitSelector;