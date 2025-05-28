function Toggle({fontSize = 1, padding = 1, value, onToggle, firstOption = "option01", secondOption = "option02", vertical = false, fullWidth = false})
{    
    const longest = firstOption.length > secondOption.length ? firstOption : secondOption;

    return (
        <button
            className="p-2 w-fit h-fit flex justify-center items-center bg-graphite-900 border-[2px_2px_2px_0px] border-white hover:bg-graphite-500 transition-all duration-500 cursor-pointer"
            onClick={() => onToggle(value === firstOption ? secondOption : firstOption)}
            style={{
                width: fullWidth ? "100%" : "fit-content",
                flexDirection: vertical ? "column" : "row"
            }}
        >
            <svg
                className="relative mx-1 w-6 h-6 transition-transform duration-500"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    width: `${fontSize * 1.5}rem`,
                    height: `${fontSize * 1.5}rem`,
                    transform: value === firstOption ? vertical ? "rotateZ(0deg) rotateY(0deg)" : "rotateZ(90deg) rotateY(0deg)"  : vertical ? "rotateZ(0deg) rotateY(-180deg)" : "rotateZ(90deg) rotateY(-180deg)",
                }}
            >
                <path
                    d="M20 50 L70 20 70 80 Z"
                    stroke="white"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            <div
                className="relative font-bold leading-normal text-white w-fit h-fit"
                style={{
                    padding: vertical ? `${padding}rem 0px` : `0px ${padding}rem`,
                    fontSize: `${fontSize}rem`,
                    perspective: `${fontSize * 100}px`,
                    writingMode: vertical ? "sideways-rl" : "horizontal-tb"
                }}
            >
                <span className="opacity-0">{longest}</span>

                <span
                    className="absolute top-1/2 left-1/2 transition-transform duration-500 w-fit text-nowrap -translate-1/2 backface-hidden"
                    style={{
                        transform: value === firstOption ? vertical ? "rotateY(0deg)" : "rotateX(0deg)" : vertical ? "rotateY(180deg)" : "rotateX(180deg)",
                        transformOrigin: `center center ${-10 * fontSize}px`
                    }}
                >
                    {firstOption}
                </span>

                <span
                    className="absolute top-1/2 left-1/2 transition-transform duration-500 w-fit text-nowrap -translate-1/2 backface-hidden"
                    style={{
                        transform: value === secondOption ? vertical ? "rotateY(0deg)" : "rotateX(0deg)" : vertical ? "rotateY(-180deg)" : "rotateX(-180deg)",
                        transformOrigin: `center center ${-10 * fontSize}px` 
                    }}
                >
                    {secondOption}
                </span>
            </div>

            <svg
                className="relative mx-1 w-6 h-6 transition-transform duration-500"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    width: `${fontSize * 1.5}rem`,
                    height: `${fontSize * 1.5}rem`,
                    transform: value === firstOption ? vertical ? "rotateZ(0deg) rotateY(0deg)" : "rotateZ(90deg) rotateY(0deg)"  : vertical ? "rotateZ(0deg) rotateY(-180deg)" : "rotateZ(90deg) rotateY(-180deg)",
                }}
            >
                <path
                    d="M20 50 L70 20 70 80 Z"
                    stroke="white"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}

export default Toggle;