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
                className="flex overflow-hidden relative font-bold text-white transition-all duration-500 bg-graphite-900 hover:bg-graphite-500 cursor-pointer"
                style={{
                    padding: `calc(1.6 * ${fontSize})`,
                    fontSize: fontSize,
                    flex: value === "px" ? "90%" : "10%",
                    borderRightWidth: borderWidth,
                    backgroundColor: value === "px" ? "white" : "#0A0A0A"

                }}
                onClick={() => onSelect("px")}
            >
                <span 
                    className="absolute transition-all duration-500 pointer-events-none z-1"
                    style={{
                        paddingRight: value === "px" ? "0.75rem" : "0rem",
                        top: value === "px" ? "0" : "50%",
                        right: value === "px" ? "0" : "50%",
                        transform: value === "px" ? "translate(0%, 0%)" : "translate(50%, -50%)",
                        color: value === "px" ? "#0A0A0A" : "white"

                    }}
                >
                    PX
                </span>

                <div
                    className="absolute -bottom-2 -left-7 transition-all w-fit h-fit"
                    style={{
                        opacity: value === "px" ? "1" : "0",
                    }}
                >
                    <TextOutline
                        text={"UNITS ARE IN PIXELS"} 
                        fontSize={`calc(${fontSize} * 3.2)`}
                        outlineColor={"#0A0A0A"} 
                        outlineWidth={`calc(${fontSize} * 0.15)`}
                    ></TextOutline>
                </div>
            </button>

            <button 
                className="flex overflow-hidden relative font-bold text-white transition-all duration-500 bg-graphite-900 cursor-pointer"
                style={{
                    padding: `calc(1.6 * ${fontSize})`,
                    fontSize: fontSize,
                    flex: value === "rem" ? "90%" : "10%",
                    borderRightWidth: borderWidth,
                    backgroundColor: value === "rem" ? "white" : "#0A0A0A"
                }}
                onClick={() => onSelect("rem")}
            >
                <span 
                    className="absolute transition-all duration-500 pointer-events-none z-1"
                    style={{
                        top: value === "rem" ? "0" : "50%",
                        left: value === "rem" ? "10px" : "50%",
                        transform: value === "rem" ? "translate(0%, 0%)" : "translate(-50%, -50%)",
                        color: value === "rem" ? "#0A0A0A" : "white"
                    }}
                >
                    REM
                </span>

                <div
                    className="absolute -bottom-2 -right-6 transition-all w-fit h-fit"
                    style={{
                        opacity: value === "rem" ? "1" : "0",
                    }}
                >
                    <TextOutline 
                        text={"UNITS ARE IN REM"} 
                        fontSize={`calc(${fontSize} * 3.2)`}
                        outlineColor={"#0A0A0A"} 
                        outlineWidth={`calc(${fontSize} * 0.15)`}
                    ></TextOutline>
                </div>

            </button>
        </div>
    );
}

export default UnitSelector;