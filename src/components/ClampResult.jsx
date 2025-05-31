import useToggleStore from "../store/toggle-store";
import Toggle from "./Toggle";
import UnitSelector from "./UnitSelector";

/**
 * React component that renders a responsive font size using a CSS clamp() expression.
 *
 * @param {Object} props - Component props.
 * @param {number} [props.fontSize="1rem"] - Base font size in `rem` units used to generate the clamp().
 * @returns {JSX.Element} A rendered element displaying the clamp() expression or styled with it.
 */
function ClampResult({fontSize = "1rem"})
{
    const format = useToggleStore((state) => (state.format));
    const setFormat = useToggleStore((state) => (state.setFormat));

    return(
        <div className="w-full">
            <UnitSelector fontSize={0.8}></UnitSelector>

            <div className="w-full h-fit p-10 flex border-[0px_2px_2px_2px] border-white bg-graphite-900">
                <div className="flex gap-5 items-center pr-5 pl-10 w-full text-white border-2">
                    <p 
                        className="flex flex-1 justify-center items-center"
                        style={{
                            fontSize: fontSize
                        }}
                    >
                        EXAMPLE: clamp(1rem, 0.679rem + 1.282vw, 1.5rem)
                    </p>

                    <svg
                        className="cursor-pointer"
                        width="24px" 
                        height="24px" 
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
                    fontSize="1.2rem"
                    firstOption="CSS"
                    secondOption="TAILWIND"
                    vertical={true}
                ></Toggle>
            </div>
        </div>
    );
}

export default ClampResult;

