"use client";

import useResultStore from "../store/result-store";
import useSelectorStore from "../store/selector-store";
import useToggleStore from "../store/toggle-store";

function useClampGenerator()
{
    const rootFontSize = 16

    const format = useToggleStore((state) => state.format);

    const viewportUnit = useSelectorStore((state) => state.viewportUnit);
    const elementUnit = useSelectorStore((state) => state.elementUnit);
    const resultUnit = useSelectorStore((state) => state.resultUnit);

    let minViewport = useResultStore((state) => state.minViewport);
    let maxViewport = useResultStore((state) => state.maxViewport);
    let minElement = useResultStore((state) => state.minElement);
    let maxElement = useResultStore((state) => state.maxElement);

    if (viewportUnit === "px")
    {
        minViewport /= rootFontSize;
        maxViewport /= rootFontSize;
    }

    if (elementUnit === "px")
    {
        minElement /= rootFontSize;
        maxElement /= rootFontSize;
    }

    const slope = (maxElement - minElement) / (maxViewport - minViewport);
    const offset = minElement - minViewport * slope;

    if (resultUnit === "px")
    {
        if (format === "CSS")
        {
            return `clamp(${minElement * rootFontSize}px, ${(slope * 100).toFixed(4)}vw + ${(offset * rootFontSize).toFixed(4)}px, ${maxElement * rootFontSize}px)`;
        }
        return `[clamp(${minElement * rootFontSize}px,${(slope * 100).toFixed(4)}vw+${(offset * rootFontSize).toFixed(4)}px,${maxElement * rootFontSize}px)]`;
        
    }

    if (format === "TAILWIND")
    {
        return `[clamp(${minElement}rem,${(slope * 100).toFixed(4)}vw+${offset.toFixed(4)}rem,${maxElement}rem)]`;
    }
    return `clamp(${minElement}rem, ${(slope * 100).toFixed(4)}vw + ${offset.toFixed(4)}rem, ${maxElement}rem)`;

}

export default useClampGenerator;