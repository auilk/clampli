import { useState } from "react";

/**
 * @param {Object} props
 * @param {string} [props.label="label"]
 * @param {string} [props.placeholder="placeholder"]
 * @param {number} [props.width=20]
 * @param {number} [props.fontSize=1]
 * @param {string} [props.textColor]
 * @param {string} [props.borderColor]
 * @returns {JSX.Element}
 */

function InputField({label = "label", width = 20, fontSize = 1, textColor, borderColor})
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
                    fontSize: isFocused === true ? `${fontSize * 0.75}rem` : `${fontSize}rem`
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
                    width: `${width}rem`,
                    fontSize: `${fontSize}rem`,
                    color: textColor,
                    borderColor: borderColor,
                    paddingTop: `${68.18 / 100 * fontSize}rem`,
                    paddingBottom: `${68.18 / 100 * fontSize}rem`
                }}
            />
        </div>
    )
}

export default InputField;