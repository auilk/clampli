import { useEffect } from "react";
import useResultStore from "../store/result-store";
import useClampGenerator from "../hook/clamp-generator";

/**
 * A styled input field component with customizable label and appearance.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.label="label"] - Text label for the input field.
 * @param {string} [props.width="20px"] - CSS width of the input (e.g., "200px", "20rem", "50%").
 * @param {string} [props.fontSize="1rem"] - CSS font size for the input text.
 * @param {string} [props.textColor] - CSS text color.
 * @param {string} [props.borderColor] - CSS border color.
 * @param {string} props.unit - The current selected unit (e.g., "px" or "rem") from Zustand state.
 * @param {number} props.value - The current viewport/element size from Zustand state.
 * @param {(value: number) => void} props.setValue - Callback to update the current viewport/element size in Zustand state.
 * @returns {JSX.Element} The rendered input field element.
 */
function InputField({label = "label", width = "20rem", fontSize = "1rem", textColor, borderColor, borderWidth = "2px", unit, value, setValue})
{
    const HandleChange = (event) =>
    {
        if (!isNaN(event.target.value))
        {
            setValue(event.target.value);
        }
    };

    const generator = useClampGenerator();
    const setClampResult = useResultStore((state) => state.setClampResult);
    
    useEffect(() =>
    {
        setClampResult(generator);
    }, [generator]);

    return (
        <div className="flex">
            <div className="flex relative flex-col">
                <label 
                    className="text-lg text-white bg-graphite-900 absolute top-1/2 left-1 -translate-y-1/2 transition-all cursor-text"
                    htmlFor={label}
                    style={{
                        color: borderColor,
                        top: "-2px",
                        fontSize: `calc(${fontSize} * 0.75)`,
                        paddingLeft: "clamp(0.2rem, 0.085rem + 0.577vw, 1rem)",
                        paddingRight: "clamp(0.2rem, 0.085rem + 0.577vw, 1rem)"
                    }}
                >
                    {label}
                </label>
                
                <input
                    className="text-white outline-0" 
                    id={label} 
                    type="text" 
                    value={value}
                    onChange={HandleChange}
                    style={{
                        width: width,
                        fontSize: fontSize,
                        color: textColor,
                        borderColor: borderColor,
                        paddingLeft: `calc(${fontSize} * 0.5)`,
                        paddingTop: `calc(60.18 / 100 * ${fontSize})`,
                        paddingBottom: `calc(60.18 / 100 * ${fontSize})`,
                        borderWidth: borderWidth
                    }}
                />
            </div>
            <div
                className="flex justify-center items-center bg-white border-white overflow-hidden relative"
                style={{
                    borderWidth: ` ${borderWidth} ${borderWidth} ${borderWidth} 0px`
                }}
            >
                <span className="opacity-0 px-0">REM</span>
                <span 
                    className="text-graphite-900 font-bold absolute left-1/2 -translate-1/2 transition-[top] duration-500"
                    style={{
                        top: unit === "px" ? "50%" : "150%",
                        fontSize: `calc(${fontSize} * 0.8)`
                    }}
                >PX</span>

                <span 
                    className="text-graphite-900 font-bold absolute left-1/2 -translate-1/2 transition-[top] duration-500"
                    style={{
                        top: unit === "rem" ? "50%" : "150%",
                        fontSize: `calc(${fontSize} * 0.8)`
                    }}
                >REM</span>
            </div>
        </div>
    )
}

export default InputField;