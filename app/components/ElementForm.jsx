"use client";

import useResultStore from "../store/result-store";
import useSelectorStore from "../store/selector-store";
import Form from "./Form";

/**
 * ElementForm component renders a form to input minimum and maximum size values.
 * These values are intended for generating a CSS clamp() function for responsive sizing.
 *
 * @returns {JSX.Element} The rendered form component for size inputs.
 */
function ElementForm()
{
    const minElement = useResultStore((state) => state.minElement);
    const setMinElement = useResultStore((state) => state.setMinElement);

    const maxElement = useResultStore((state) => state.maxElement);
    const setMaxElement = useResultStore((state) => state.setMaxElement);

    const elementUnit = useSelectorStore((state) => state.elementUnit);
    const setElementUnit = useSelectorStore((state) => state.setElementUnit);

    return(
        <Form
            label01="Min Element Size" 
            label02="Max Element Size"
            value01={minElement}
            value02={maxElement}
            setValue01={setMinElement}
            setValue02={setMaxElement}
            gap="clamp(20px, 12.793px + 2.252vw, 70px)"
            padX="clamp(1rem, 0.784rem + 1.081vw, 2.5rem)"
            padY="clamp(2rem, 1.036rem + 4.819vw, 7rem)"
            borderWidth="clamp(1px, 0.614px + 0.12vw, 3px)"
            unit={elementUnit}
            onUnitChange={(unit) => 
            {
            if (unit === elementUnit) return;

            setElementUnit(unit);

            if (unit === "rem") {
                setMinElement(minElement / 16);
                setMaxElement(maxElement / 16);
            } else {
                setMinElement(minElement * 16);
                setMaxElement(maxElement * 16);
            }
            }}
        ></Form>
    );
}

export default ElementForm;