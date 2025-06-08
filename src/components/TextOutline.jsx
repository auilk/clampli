import { useEffect, useRef, useState } from "react";

/**
 * Renders text with an outlined stroke effect.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.className] - Optional CSS class for the container.
 * @param {string} props.text - The text content to display.
 * @param {string} [props.fontSize="1rem"] - CSS font size (e.g., "1rem", "20px").
 * @param {string} [props.outlineColor="black"] - CSS color of the text outline.
 * @param {string | number} [props.outlineWidth="1px"] - Width of the outline stroke.
 * @returns {JSX.Element} The rendered outlined text element.
 */
function TextOutline({className, text, fontSize = "1rem", outlineColor = "black", outlineWidth = "1px"})
{
    const textRef = useRef(null);
    const svgRef = useRef(null);

    const [isResizing, SetIsResizing] = useState(false);

    useEffect(() =>
    {
        const text = textRef.current;
        const svg = svgRef.current;

        let bbox = text.getBBox();

        svg.setAttribute('width', bbox.width);
        svg.setAttribute('height', bbox.height);
        svg.setAttribute('viewBox', `0 0 ${bbox.width} ${bbox.height}`);

        text.setAttribute('x', -bbox.x);
        text.setAttribute('y', "0");

        bbox = text.getBBox();
        text.setAttribute('y', `${-bbox.y}`);

        const ResizeCallback = () =>
        {
            SetIsResizing(!isResizing); // this just a hack to fix the font size    
        }

        window.addEventListener("resize", ResizeCallback);

        return () =>
        {
            window.removeEventListener("resize", ResizeCallback);
        }

    }, [text, fontSize, outlineColor, outlineWidth, isResizing]);

    return(
        <svg
            className={`py-1 ${className}`}
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
        >
            <text
                ref={textRef}
                fill="none"
                stroke={outlineColor}
                strokeWidth={outlineWidth}
                style={{
                    fontSize: fontSize
                }}
            >
                {text}
            </text>

        </svg>
    );
}

export default TextOutline