import useToggleStore from "../store/toggle-store";
import Toggle from "./Toggle";
import UnitSelector from "./UnitSelector";

/**
 * React component that renders a responsive font size using a CSS clamp() expression.
 *
 * @param {Object} props - Component props.
 * @param {number} [props.fontSize="1rem"] - Base font size in `rem` units used to generate the clamp().
 * @param {string} [props.borderWidth="2px"] - CSS border width around the ClampResult component (e.g., "1px", "0.5rem").
 * @returns {JSX.Element} A rendered element displaying the clamp() expression or styled with it.
 */
function ClampResult({fontSize = "1rem", borderWidth = "2px"})
{
    const format = useToggleStore((state) => (state.format));
    const setFormat = useToggleStore((state) => (state.setFormat));

    return(
        <div className="w-full">
            <UnitSelector 
                fontSize="clamp(0.4rem, 0.355rem + 0.223vw, 0.71rem)"
                borderWidth={borderWidth}
            ></UnitSelector>

            <div 
                className="w-full h-fit flex border-white bg-graphite-900"
                style={{
                    borderWidth: `0px ${borderWidth} ${borderWidth} ${borderWidth}`,
                    padding: "clamp(0.5rem, 0.392rem + 0.541vw, 1.25rem)"
                }}
            >
                <div 
                    className="flex items-center w-full text-white"
                    style={{
                            borderWidth: borderWidth,
                            paddingRight: "clamp(0.5rem, 0.392rem + 0.541vw, 1.25rem)"
                    }}
                >
                    <code 
                        className="flex flex-1 justify-center items-center text-nowrap"
                        style={{
                            fontSize: fontSize,
                        }}
                    >
                        clamp(1rem, 0.679rem + 1.282vw, 1.5rem)
                    </code>

                    <svg
                        className="cursor-pointer"
                        width="clamp(10px, 7.982px + 0.631vw, 24px)" 
                        height="clamp(10px, 7.982px + 0.631vw, 24px)" 
                        viewBox="0 -960 960 960" 
                        fill="#e3e3e3"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
                        />
                    </svg>
                </div>

                <Toggle
                    value={format}
                    onToggle={setFormat}
                    padding="clamp(0.3rem, 0.199rem + 0.505vw, 1rem)"
                    borderWidth={borderWidth}
                    fontSize="clamp(0.5rem, 0.428rem + 0.36vw, 1rem)"
                    firstOption="CSS"
                    secondOption="TAILWIND"
                    vertical={true}
                ></Toggle>
            </div>
        </div>
    );
}

export default ClampResult;

