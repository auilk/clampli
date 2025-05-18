import { useEffect, useRef } from "react";

function TextOutline({className, text, fontSize, outlineColor, outlineWidth})
{
    const textRef = useRef(null);
    const svgRef = useRef(null);

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

    }, [text, fontSize, outlineColor, outlineWidth]);

    return(
        <svg
            className={`pb-1 pt-1 ${className}`}
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
        >
            <text
                ref={textRef}
                fontSize={fontSize}
                fill="none"
                stroke={outlineColor}
                strokeWidth={`${outlineWidth}rem`}
            >
                {text}
            </text>

        </svg>
    );
}

export default TextOutline