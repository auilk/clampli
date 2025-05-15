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

function InputField({label = "label", placeholder = "placeholder", width = 20, textSize = 1, textColor, borderColor})
{
    const [value, SetValue] = useState("");

    return (
        <div className="flex flex-col relative">
            <label className="pl-2 pr-2 text-lg text-white absolute -top-3.5 left-2 bg-graphite-900" htmlFor={label}
                style={{
                    color: borderColor
                }}>{label}</label>
            <input className="pl-3 pr-3 pt-3 pb-3 border-2 rounded-md outline-0 text-6xl text-white" id={label} type="text" value={value} placeholder={placeholder} onChange={(event) => SetValue(event.target.value)}
                style={{
                    width: `${width}rem`,
                    fontSize: `${textSize}rem`,
                    color: textColor,
                    borderColor: borderColor,
                    paddingTop: `${68.18 / 100 * textSize}rem`,
                    paddingBottom: `${68.18 / 100 * textSize}rem`
                }}></input>
        </div>
    )
}

export default InputField;