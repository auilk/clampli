import { useLayoutEffect, useRef, useState } from "react";
import useToggleStore from "../store/toggle-store";
import Toggle from "./Toggle";
import DottedBG from "./DottedBG";

function Slide()
{
    const slide = useToggleStore((state) => (state.slide));
    const setSlide = useToggleStore((state) => (state.setSlide));

    const [yPos, setYPos] = useState(0);
    const [height, setHeight] = useState(0);
    const [isResizing, setIsResizing] = useState(false);

    const slideRef = useRef(null);
    
    useLayoutEffect(() => 
    {
        let timeoutID;
        
        const ResizeCallback = () => 
        {
            if (!slideRef.current) return;

            setIsResizing(true);

            const parent = slideRef.current.parentElement;
            const firstChild = slideRef.current.firstChild;

            if (parent && firstChild)
            {
                setYPos(parent.offsetHeight - firstChild.offsetHeight);
                setHeight(parent.offsetHeight);
            }

            clearTimeout(timeoutID);
            timeoutID = setTimeout(() => setIsResizing(false), 1);
        };

        window.addEventListener("resize", ResizeCallback);
        ResizeCallback();

        return () => 
        {
            window.removeEventListener("resize", ResizeCallback);
            clearTimeout(timeoutID);
        }
    }, []);

    return(
        <section 
            ref={slideRef}
            className="absolute z-1"
            style={{
                top: slide === "How It Works" ? `${yPos}px` : "0",
                transition: !isResizing ? "top 0.3s ease-in-out" : "none"
            }}
        >
            <Toggle
                value={slide}
                onToggle={setSlide}
                firstOption="How It Works"
                secondOption="Calculator"
                padding={0}
                vertical={false}
                fullWidth={true}
            ></Toggle>
            
            <div 
                className="flex overflow-scroll flex-col gap-10 p-6 bg-graphite-900 relative"
                style={{
                    height: `${height}px`
                }}
            >
                <section className="flex pb-10 border-b-4 border-b-white text-white text-xl indent-5 z-1">
                    <div className="flex items-start w-full h-full flex-[40%]">
                        <h1 className="sticky top-0 left-0 text-4xl font-bold">What is <span className="underline underline-offset-8">clamp()</span> and Why Use It?</h1>
                    </div>

                    <div className="flex-[60%]">
                        <p className="text-xl text-white flex-[60%] indent-5"><span className="pr-5 font-bold">•</span>The CSS <span className="underline underline-offset-2 font-bold">clamp()</span> function allows you to create responsive values that adapt to the user's screen size without relying on <span className="font-bold">media queries</span>. It takes three values:</p>

                        <div className="my-5 border-2 border-graphite-300">
                            <h5 className="p-2 text-xs border-b-2 border-b-graphite-300 bg-graphite-700">Clamp() Function</h5>

                            <p className="p-5 text-xl bg-graphite-800">clamp(min, preferred, max)</p>
                        </div>

                        <div className="mb-5 text-lg">
                            <p><span className="font-bold pr-5">•</span><span className="font-bold">min</span>: the smallest value allowed (e.g., 16px)</p>

                            <p><span className="font-bold pr-5">•</span><span className="font-bold">preferred</span>: the fluid value, often based on vw (viewport width)</p>

                            <p><span className="font-bold pr-5">•</span><span className="font-bold">max</span>: the largest value allowed (e.g., 24px)</p>
                        </div>

                        <p>As the viewport changes, the preferred value adjusts, but it never goes below the min or above the max.</p>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Slide