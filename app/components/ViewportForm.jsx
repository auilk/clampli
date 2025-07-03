"use client";

import useResultStore from "../store/result-store";
import useSelectorStore from "../store/selector-store";
import Form from "./Form";

/**
 * ViewportForm component renders a form to input viewport-related size values.
 * Typically used to capture viewport width or breakpoint values for responsive CSS calculations.
 *
 * @returns {JSX.Element} The rendered form component for viewport inputs.
 */
function ViewportForm()
{
    const viewportUnit = useSelectorStore((state) => state.viewportUnit);
    const setViewportUnit = useSelectorStore((state) => state.setViewportUnit);

    const minViewport = useResultStore((state) => state.minViewport);
    const setMinViewport = useResultStore((state) => state.setMinViewport);

    const maxViewport = useResultStore((state) => state.maxViewport);
    const setMaxViewport = useResultStore((state) => state.setMaxViewport);

    return(
        <Form 
            label01="Min Viewport Size" 
            label02="Max Viewport Size"
            value01={minViewport}
            value02={maxViewport}
            setValue01={setMinViewport}
            setValue02={setMaxViewport}
            gap="clamp(20px, 12.793px + 2.252vw, 70px)"
            padX="clamp(1rem, 0.784rem + 1.081vw, 2.5rem)"
            padY="clamp(2rem, 1.036rem + 4.819vw, 7rem)"
            borderWidth="clamp(1px, 0.614px + 0.12vw, 3px)"
            unit={viewportUnit}
            onUnitChange={(unit) => 
            {
            if (unit === viewportUnit) return;

            setViewportUnit(unit);

            if (unit === "rem")
            {
                setMinViewport(minViewport / 16);
                setMaxViewport(maxViewport / 16);
            }
            else
            {
                setMinViewport(minViewport * 16);
                setMaxViewport(maxViewport * 16);
            }
            }}
        ></Form>
    );
}

export default ViewportForm;