import TextOutline from "./TextOutline";

/**
 * A unit selector component for choosing between "rem" and "px".
 *
 * @param {Object} props - Component props.
 * @param {string} [props.fontSize="2rem"] - CSS font size for the selector text.
 * @param {string} [props.borderWidth="2px"] - CSS border width around the UnitSelector container (e.g., "1px", "0.5rem").
 * @param {string} props.value - The current selected unit (e.g., "px" or "rem") from Zustand state.
 * @param {(unit: string) => void} props.onSelect - Callback to update the selected unit in Zustand state.
 * @returns {JSX.Element} The rendered unit selector element.
 */
    function UnitSelector({fontSize = "2rem", borderWidth = "2px", value, onSelect})
{
    return (
        <div 
            className="flex justify-between border-white"
            style={{
                borderWidth: `${borderWidth} 0px ${borderWidth} ${borderWidth}`
            }}
        >
            <button 
                className="flex overflow-hidden relative font-bold text-white transition-all duration-500 bg-graphite-900 hover:bg-graphite-500"
                style={{
                    padding: `calc(1.6 * ${fontSize})`,
                    fontSize: fontSize,
                    flex: value === "px" ? "90%" : "10%",
                    borderRightWidth: borderWidth
                }}
                onClick={() => onSelect(value === "px" ? "rem" : "px")}
            >
                <span 
                    className="absolute transition-all duration-500 pointer-events-none z-1"
                    style={{
                        paddingRight: value === "px" ? "0.75rem" : "0rem",
                        top: value === "px" ? "0" : "50%",
                        right: value === "px" ? "0" : "50%",
                        transform: value === "px" ? "translate(0%, 0%)" : "translate(50%, -50%)"
                    }}
                >
                    PX
                </span>

                <div
                    className="absolute -bottom-2 -left-7 transition-all w-fit h-fit"
                    style={{
                        opacity: value === "px" ? "1" : "0",
                        maskImage: 'linear-gradient(to right, black 0%, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0) 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, black 0%, black 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 75%, transparent 100%)'
                    }}
                >
                    <TextOutline
                        text={"UNITS ARE IN PIXELS"} 
                        fontSize={`calc(${fontSize} * 3.2)`}
                        outlineColor={"white"} 
                        outlineWidth={`calc(${fontSize} * 0.1)`}
                    ></TextOutline>
                </div>
            </button>

            <button 
                className="flex overflow-hidden relative font-bold text-white transition-all duration-500 bg-graphite-900 hover:bg-graphite-500"
                style={{
                    padding: `calc(1.6 * ${fontSize})`,
                    fontSize: fontSize,
                    flex: value === "rem" ? "90%" : "10%",
                    borderRightWidth: borderWidth
                }}
                onClick={() => onSelect(value === "px" ? "rem" : "px")}
            >
                <span 
                    className="absolute transition-all duration-500 pointer-events-none z-1"
                    style={{
                        top: value === "rem" ? "0" : "50%",
                        left: value === "rem" ? "10px" : "50%",
                        transform: value === "rem" ? "translate(0%, 0%)" : "translate(-50%, -50%)"
                    }}
                >
                    REM
                </span>

                <div
                    className="absolute -bottom-2 -right-6 transition-all w-fit h-fit"
                    style={{
                        opacity: value === "rem" ? "1" : "0",
                        maskImage: 'linear-gradient(to left, black 0%, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0) 100%)',
                        WebkitMaskImage: 'linear-gradient(to left, black 0%, black 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 75%, transparent 100%)'
                    }}
                >
                    <TextOutline 
                        text={"UNITS ARE IN REM"} 
                        fontSize={`calc(${fontSize} * 3.2)`}
                        outlineColor={"white"} 
                        outlineWidth={`calc(${fontSize} * 0.1)`}
                    ></TextOutline>
                </div>

            </button>
        </div>
    );
}

export default UnitSelector;