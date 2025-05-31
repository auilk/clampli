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
 * @returns {JSX.Element} The rendered input field element.
 */
function InputField({label = "label", width = "20rem", fontSize = "1rem", textColor, borderColor})
{
    const [value, SetValue] = useState("");
    const [isFocused, SetIsFocused] = useState(false);

    return (
        <div className="flex relative flex-col">
            <label 
                className="pl-2 pr-2 text-lg text-white bg-graphite-900 absolute top-1/2 left-1 -translate-y-1/2 transition-all cursor-text"
                htmlFor={label}
                style={{
                    color: borderColor,
                    top: isFocused === true ? "-2px" : "50%",
                    fontSize: isFocused === true ? `calc(${fontSize} * 0.75)` : fontSize
                }}
            >
                {label}
            </label>
            
            <input
                className="pt-3 pr-3 pb-3 pl-3 text-6xl text-white border-2 outline-0" 
                id={label} 
                type="text" 
                value={value} 
                onChange={(event) => SetValue(event.target.value)}
                onFocus={() => SetIsFocused(true)}
                onBlur={() => SetIsFocused(false)}
                style={{
                    width: width,
                    fontSize: fontSize,
                    color: textColor,
                    borderColor: borderColor,
                    paddingTop: `${68.18 / 100 * parseFloat(fontSize)}rem`,
                    paddingBottom: `${68.18 / 100 * parseFloat(fontSize)}rem`
                }}
            />
        </div>
    )
}

export default InputField;