/**
 * Toggle component that switches between two options on click.
 * Uses Zustand for internal state management (`value` and `onToggle`).
 *
 * @param {Object} props - Component props.
 * @param {string} [props.fontSize="1rem"] - CSS font size of the toggle text.
 * @param {string} [props.padding="1rem"] - CSS padding inside the toggle button.
 * @param {string} [props.borderWidth="2px"] - CSS border width around the Toggle container (e.g., "1px", "0.5rem").
 * @param {string} [props.firstOption="option01"] - Label for the first toggle option.
 * @param {string} [props.secondOption="option02"] - Label for the second toggle option.
 * @param {boolean} [props.vertical=false] - If true, toggle displays vertically; otherwise horizontally.
 * @param {boolean} [props.fullWidth=false] - If true, toggle stretches to fill the container width.
 * @returns {JSX.Element} The rendered toggle button component.
 */
function Toggle({fontSize = "1rem", padding = "1rem", borderWidth = "2px", firstOption = "option01", secondOption = "option02", vertical = false, fullWidth = false, value, onToggle})
{    
    const longest = firstOption.length > secondOption.length ? firstOption : secondOption;

    return (
        <button
            className="w-fit h-fit flex justify-center items-center bg-white border-[2px_2px_2px_0px] border-white  transition-all duration-500 cursor-pointer"
            onClick={() => onToggle(value === firstOption ? secondOption : firstOption)}
            style={{
                width: fullWidth ? "100%" : "fit-content",
                flexDirection: vertical ? "column" : "row",
                padding: padding,
                borderWidth: `${borderWidth} ${borderWidth} ${borderWidth} 0`
            }}
        >
            <svg
                className="relativew-6 h-6 transition-transform duration-500"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    width: `calc(${fontSize} * 1.5)`,
                    height: `calc(${fontSize} * 1.5)`,
                    transform: value === firstOption ? vertical ? "rotateZ(0deg) rotateY(0deg)" : "rotateZ(90deg) rotateY(0deg)"  : vertical ? "rotateZ(0deg) rotateY(-180deg)" : "rotateZ(90deg) rotateY(-180deg)",
                }}
            >
                <path
                    d="M20 50 L70 20 70 80 Z"
                    stroke="#0A0A0A"
                    fill="#0A0A0A"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            <div
                className="relative font-bold leading-normal text-graphite-900 w-fit h-fit"
                style={{
                    padding: vertical ? `${padding} 0px` : `0px ${padding}`,
                    fontSize: fontSize,
                    perspective: `calc(${fontSize} * 4)`,
                    writingMode: vertical ? "sideways-rl" : "horizontal-tb"
                }}
            >
                <span className="opacity-0">{longest}</span>

                <span
                    className="absolute top-1/2 left-1/2 transition-transform duration-500 w-fit text-nowrap -translate-1/2 backface-hidden"
                    style={{
                        transform: value === firstOption ? vertical ? "rotateY(0deg)" : "rotateX(0deg)" : vertical ? "rotateY(180deg)" : "rotateX(180deg)",
                        transformOrigin: `center center calc(-0.5 * ${fontSize})`
                    }}
                >
                    {firstOption}
                </span>

                <span
                    className="absolute top-1/2 left-1/2 transition-transform duration-500 w-fit text-nowrap -translate-1/2 backface-hidden"
                    style={{
                        transform: value === secondOption ? vertical ? "rotateY(0deg)" : "rotateX(0deg)" : vertical ? "rotateY(-180deg)" : "rotateX(-180deg)",
                        transformOrigin: `center center calc(-0.5 * ${fontSize})`
                    }}
                >
                    {secondOption}
                </span>
            </div>

            <svg
                className="relative w-6 h-6 transition-transform duration-500"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    width: `calc(${fontSize} * 1.5)`,
                    height: `calc(${fontSize} * 1.5)`,
                    transform: value === firstOption ? vertical ? "rotateZ(0deg) rotateY(0deg)" : "rotateZ(90deg) rotateY(0deg)"  : vertical ? "rotateZ(0deg) rotateY(-180deg)" : "rotateZ(90deg) rotateY(-180deg)",
                }}
            >
                <path
                    d="M20 50 L70 20 70 80 Z"
                    stroke="#0A0A0A"
                    fill="#0A0A0A"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}

export default Toggle;