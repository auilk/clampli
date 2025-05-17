import { useState } from "react";

function ClampFormat({fontSize = 1, horizontalPadding = 1})
{
    const [format, SetFormat] = useState("css");

    return (
        <button
            className="w-fit h-fit bg-white"
            onClick={() => SetFormat(format === "css" ? "tailwind" : "css")}
        >
            <div
                className="w-fit h-fit [writing-mode:sideways-rl] text-graphite-900 font-bold leading-normal relative"
                style={{
                    padding: `${horizontalPadding}rem 0px`,
                    fontSize: `${fontSize}rem`,
                    perspective: `${fontSize * 100}px`
                }}
            >
                <span className="opacity-0">TAILWIND</span>

                <span
                    className="absolute left-1/2 top-1/2 -translate-1/2 backface-hidden transition-transform duration-500"
                    style={{
                        transform: format === "tailwind" ? "rotateY(180deg)" : "rotateY(0deg)",
                        transformOrigin: `center center ${-10 * fontSize}px`
                    }}
                >
                    TAILWIND
                </span>

                <span
                    className="absolute left-1/2 top-1/2 -translate-1/2 backface-hidden transition-transform duration-500"
                    style={{
                        transform: format === "tailwind" ? "rotateY(0deg)" : "rotateY(-180deg)",
                        transformOrigin: `center center ${-10 * fontSize}px` 
                    }}
                >
                    CSS
                </span>
            </div>

            <svg
                className="w-6 h-6 relative transition-transform duration-500"
                viewBox="0 0 100 100"
                fill="#0E0E0E"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    width: `${fontSize * 1.5}rem`,
                    height: `${fontSize * 1.5}rem`,
                    transform: format === "tailwind" ? "rotateY(0deg)" : "rotateY(-180deg)",
                }}
            >
                <path
                    d="M20 50 L70 20 70 80 Z"
                    stroke="#0E0E0E"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}

export default ClampFormat;