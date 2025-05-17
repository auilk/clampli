import { useState } from "react";

function ClampFormat({fontSize = 1, horizontalPadding = 2.5})
{
    const [format, SetFormat] = useState("css");

    return (
        <button className="w-fit h-fit flex bg-white" onClick={() => SetFormat(format === "css" ? "tailwind" : "css")}>
            <div className="w-fit h-fit text-graphite-900 font-bold leading-normal relative perspective-dramatic"
            style={{
                padding: `0px ${horizontalPadding}rem`,
                fontSize: `${fontSize}rem`
            }}>
                <span className="opacity-">TAILWIND</span>
                <span className="absolute left-1/2 top-1/2 -translate-1/2 origin-[center_center_-20px] backface-hidden transition-transform duration-500"
                style={{
                    transform: format === "tailwind" ? "rotateX(180deg)" : "rotateX(0deg)"
                }}>TAILWIND</span>
                <span className="absolute left-1/2 top-1/2 -translate-1/2 origin-[center_center_-20px] backface-hidden transition-transform duration-500"
                style={{
                    transform: format === "tailwind" ? "rotateX(0deg)" : "rotateX(-180deg)"
                }}>CSS</span>
            </div>
            <svg viewBox="0 0 100 100" fill="#0E0E0E" xmlns="http://www.w3.org/2000/svg" className="h-full relative transition-transform duration-500"
            style={{
                transform: format === "tailwind" ? "rotateX(0deg)" : "rotateX(-180deg)"
            }}>
                <path d="M20 60 L50 32 80 60 Z" stroke="#0E0E0E" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    );
}
export default ClampFormat;