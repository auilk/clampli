import { useState } from "react";

function ClampFormat()
{
    const [format, SetFormat] = useState("css");

    return (
        <button className="w-fit h-fit flex bg-white" onClick={() => SetFormat(format === "css" ? "tailwind" : "css")}>
            <div className="w-fit h-fit text-5xl text-graphite-900 font-bold leading-normal relative">
                <span className="pl-10 pr-10 items-center"
                style={{
                    opacity: format === "tailwind" ? 1 : 0
                }}>TAILWIND</span>
                <span className="pl-10 pr-10 items-center absolute left-1/2 top-1/2 -translate-1/2"
                style={{
                    opacity: format === "css" ? 1 : 0
                }}>CSS</span>
            </div>
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full">
                    <path d={format === "css" ? "M20 43 L50 68 80 43" : "M20 57 L50 32 80 57"} stroke="#0E0E0E" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    );
}
export default ClampFormat;