import { useState } from "react";

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
 * @returns {JSX.Element} The rendered input field element.
 */
function InputField({label = "label", width = "20rem", fontSize = "1rem", textColor, borderColor, borderWidth = "2px", unit})
{
    const [value, SetValue] = useState("");
    const [isFocused, SetIsFocused] = useState(false);

    const HandleChange = (event) =>
    {
        if (!isNaN(event.target.value))
        {
            SetValue(event.target.value);
        }
    };

    return (
        <div className="flex">
            <div className="flex relative flex-col">
                <label 
                    className="text-lg text-white bg-graphite-900 absolute top-1/2 left-1 -translate-y-1/2 transition-all cursor-text"
                    htmlFor={label}
                    style={{
                        color: borderColor,
                        top: isFocused === true ? "-2px" : "50%",
                        fontSize: isFocused === true ? `calc(${fontSize} * 0.75)` : fontSize,
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
                    onFocus={() => SetIsFocused(true)}
                    onBlur={() => SetIsFocused(false)}
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
            <div className="flex justify-center items-center border-[2px_2px_2px_0px] border-white overflow-hidden relative">
                <span className="opacity-0 px-1">REM</span>
                <span 
                    className="text-white font-bold absolute left-1/2 -translate-1/2 transition-[top] duration-500"
                    style={{
                        top: unit === "px" ? "50%" : "150%"
                    }}
                >PX</span>

                <span 
                    className="text-white font-bold absolute left-1/2 -translate-1/2 transition-[top] duration-500"
                    style={{
                        top: unit === "rem" ? "50%" : "150%"
                    }}
                >REM</span>
            </div>
        </div>
    )
}

export default InputField;