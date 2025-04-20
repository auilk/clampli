import { useState } from "react";


/**
 * @param {Object} props
 * @param {string} props.label
 * @param {string} props.placeholder
 * @param {Number} props.width
 * @param {Number} props.textSize
 * @param {string} props.textColor
 * @param {string} props.labelColor
 * @param {string} props.borderColor
 * @returns {JSX.Element}
 */

function InputField({label, placeholder, width = 20, textSize = 1.1, labelColor, textColor, borderColor})
{
    const [value, SetValue] = useState("");

    return (
        <div className="flex flex-col">
            <label className="text-lg text-white" htmlFor="input"
                style={{
                    color: labelColor
                }}>{label}</label>
            <input className="pl-3 pr-3 pt-3 pb-3 border-2 rounded-md outline-0 text-6xl text-white" id="input" type="text" value={value} placeholder={placeholder} onChange={(event) => SetValue(event.target.value)}
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