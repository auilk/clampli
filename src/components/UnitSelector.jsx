import { useState } from "react";
import TextOutline from "./TextOutline";

function UnitSelector({fontSize = 2})
{
    const [selected, SetSelected] = useState("px");

    return (
        <div className="flex justify-between border-[2px_0px_2px_2px] border-white">
            <button 
                className="flex overflow-hidden relative font-bold text-white transition-all duration-500 border-r-1 bg-graphite-900 hover:bg-graphite-500"
                style={{
                    padding: `${1.875 * fontSize}rem`,
                    fontSize: `${fontSize}rem`,
                    flex: selected === "px" ? "90%" : "10%",
                }}
                onClick={() => SetSelected("px")}
            >
                <span 
                    className="absolute transition-all duration-500 pointer-events-none z-1"
                    style={{
                        paddingRight: selected === "px" ? "0.75rem" : "0rem",
                        top: selected === "px" ? "0" : "50%",
                        right: selected === "px" ? "0" : "50%",
                        transform: selected === "px" ? "translate(0%, 0%)" : "translate(50%, -50%)"
                    }}
                >
                    PX
                </span>

                <div
                    className="absolute -bottom-2 -left-7 transition-all w-fit h-fit"
                    style={{
                        opacity: selected === "px" ? "1" : "0",
                        maskImage: 'linear-gradient(to right, black 0%, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0) 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, black 0%, black 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 75%, transparent 100%)'
                    }}
                >
                    <TextOutline
                        text={"UNITS ARE IN PIXELS"} 
                        fontSize={`${3 * fontSize}rem`}
                        outlineColor={"white"} 
                        outlineWidth={`${0.05 * fontSize}rem`}
                    ></TextOutline>
                </div>
            </button>

            <button 
                className="flex overflow-hidden relative font-bold text-white transition-all duration-500 border-r-1 bg-graphite-900 hover:bg-graphite-500"
                style={{
                    padding: `${1.875 * fontSize}rem`,
                    fontSize: `${fontSize}rem`,
                    flex: selected === "rem" ? "90%" : "10%",
                }}
                onClick={() => SetSelected("rem")}
            >
                <span 
                    className="absolute transition-all duration-500 pointer-events-none z-1"
                    style={{
                        top: selected === "rem" ? "0" : "50%",
                        left: selected === "rem" ? "10px" : "50%",
                        transform: selected === "rem" ? "translate(0%, 0%)" : "translate(-50%, -50%)"
                    }}
                >
                    REM
                </span>

                <div
                    className="absolute -bottom-2 -right-6 transition-all w-fit h-fit"
                    style={{
                        opacity: selected === "rem" ? "1" : "0",
                        maskImage: 'linear-gradient(to left, black 0%, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0) 100%)',
                        WebkitMaskImage: 'linear-gradient(to left, black 0%, black 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 75%, transparent 100%)'
                    }}
                >
                    <TextOutline 
                        text={"UNITS ARE IN REM"} 
                        fontSize={`${3 * fontSize}rem`}
                        outlineColor={"white"} 
                        outlineWidth={`${0.05 * fontSize}rem`}
                    ></TextOutline>
                </div>

            </button>
        </div>
    );
}

export default UnitSelector;