import useResultStore from "../store/result-store";
import useSelectorStore from "../store/selector-store";
import useToggleStore from "../store/toggle-store";
import ClipBoard from "./ClipBoard";
import Toggle from "./Toggle";
import UnitSelector from "./UnitSelector";

/**
 * React component that renders a responsive font size using a CSS clamp() expression.
 *
 * @param {Object} props - Component props.
 * @param {number} [props.fontSize="1rem"] - Base font size in `rem` units used to generate the clamp().
 * @param {string} [props.borderWidth="2px"] - CSS border width around the ClampResult component (e.g., "1px", "0.5rem").
 * @returns {JSX.Element} A rendered element displaying the clamp() expression or styled with it.
 */
function ClampResult({fontSize = "1rem", borderWidth = "2px"})
{
    const format = useToggleStore((state) => (state.format));
    const setFormat = useToggleStore((state) => (state.setFormat));

    const resultUnit = useSelectorStore((state) => (state.resultUnit));
    const setResultUnit = useSelectorStore((state) => (state.setResultUnit));

    const clampResult = useResultStore((state) => state.clampResult);

    return(
        <div className="w-full">
            <UnitSelector 
                fontSize="clamp(0.4rem, 0.355rem + 0.223vw, 0.71rem)"
                borderWidth={borderWidth}
                value={resultUnit}
                onSelect={setResultUnit}
            ></UnitSelector>

            <div 
                className="w-full h-fit flex border-white bg-graphite-900"
                style={{
                    borderWidth: `0px ${borderWidth} ${borderWidth} ${borderWidth}`,
                    padding: "clamp(0.5rem, 0.392rem + 0.541vw, 1.25rem)"
                }}
            >
                <div 
                    className="flex items-center w-full text-white"
                    style={{
                            borderWidth: borderWidth,
                            paddingRight: "clamp(0.5rem, 0.392rem + 0.541vw, 1.25rem)"
                    }}
                >
                    <code 
                        className="flex flex-1 justify-center items-center text-nowrap"
                        style={{
                            fontSize: fontSize,
                        }}
                    >
                        {clampResult}
                    </code>

                    <ClipBoard textToCopy={clampResult}></ClipBoard>
                </div>

                <Toggle
                    padding="clamp(0.3rem, 0.199rem + 0.505vw, 1rem)"
                    borderWidth={borderWidth}
                    fontSize="clamp(0.5rem, 0.428rem + 0.36vw, 1rem)"
                    firstOption="CSS"
                    secondOption="TAILWIND"
                    vertical={true}
                    value={format}
                    onToggle={setFormat}
                ></Toggle>
            </div>
        </div>
    );
}

export default ClampResult;

