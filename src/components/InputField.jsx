import { useState } from "react";

/**
 * @param {Object} props
 * @param {string} [props.label="label"]
 * @param {string} [props.placeholder="placeholder"]
 * @param {number} [props.width=20]
 * @param {number} [props.textSize=1]
 * @param {string} [props.textColor]
 * @param {string} [props.borderColor]
 * @returns {JSX.Element}
 */

function InputField({label = "label", width = 20, textSize = 1, textColor, borderColor})
{
    const [value, SetValue] = useState("");
    const [isFocused, SetIsFocused] = useState(false);

    return (
        <div className="flex flex-col relative">
            <label 
                className="pl-2 pr-2 text-lg text-white bg-graphite-900 absolute top-1/2 left-1 -translate-y-1/2 transition-all"
                htmlFor={label}
                style={{
                    color: borderColor,
                    top: isFocused === true ? "-2px" : "50%"
                }}
            >
                {label}
            </label>
            
            <input 
                className="pl-3 pr-3 pt-3 pb-3 border-2 outline-0 text-6xl text-white" 
                id={label} 
                type="text" 
                value={value} 
                onChange={(event) => SetValue(event.target.value)}
                onFocus={() => SetIsFocused(true)}
                onBlur={() => SetIsFocused(false)}
                on
                style={{
                    width: `${width}rem`,
                    fontSize: `${textSize}rem`,
                    color: textColor,
                    borderColor: borderColor,
                    paddingTop: `${68.18 / 100 * textSize}rem`,
                    paddingBottom: `${68.18 / 100 * textSize}rem`
                }}
            />
        </div>
    )
}

export default InputField;