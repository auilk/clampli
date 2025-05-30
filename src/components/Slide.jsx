import { useLayoutEffect, useRef, useState } from "react";
import useToggleStore from "../store/toggle-store";
import Toggle from "./Toggle";

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
                <section className="flex pb-10 border-b-4 border-b-white text-white text-xl z-1">
                    <div className="flex items-start w-full h-full flex-[40%]">
                        <h1 className="sticky top-0 left-0 text-4xl font-bold">What is <span className="underline underline-offset-8">clamp()</span> and Why Use It?</h1>
                    </div>

                    <div className="flex-[60%]">
                        <p className="text-xl text-white flex-[60%]">The CSS <span className="underline underline-offset-2 font-bold">clamp()</span> function allows you to create responsive values that adapt to the user's screen size without relying on <span className="font-bold">media queries</span>. It takes three values:</p>

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

                <section className="flex pb-10 border-b-4 border-b-white text-white text-xl z-1">
                    <div className="flex items-start w-full h-full flex-[40%]">
                        <h1 className="sticky top-0 left-0 text-4xl font-bold">Why It's Useful</h1>
                    </div>

                    <div className="flex-[60%]">
                        <p className="mb-5">Responsive design often means juggling multiple breakpoints with media queries to scale font sizes, spacing, and layout elements. clamp() simplifies this by:</p>
                    
                        <div className="mb-5 text-lg">
                            <p><span className="font-bold pr-5">•</span>Automatically adjusting sizes fluidly between a defined range</p>

                            <p><span className="font-bold pr-5">•</span>Reducing or eliminating the need for media queries</p>

                            <p><span className="font-bold pr-5">•</span>Keeping your CSS cleaner and easier to maintain</p>
                        </div>

                        <h3 className="text-2xl font-bold">Example</h3>

                        <div className="my-5 border-2 border-graphite-300">
                            <h5 className="p-2 text-xs border-b-2 border-b-graphite-300 bg-graphite-700">css</h5>

                            <p className="p-5 text-xl bg-graphite-800">font-size: clamp(16px, 2vw, 24px);</p>
                        </div>

                        <p>This means:</p>

                        <div className="my-5 text-lg">
                            <p><span className="font-bold pr-5">•</span>The text will never be smaller than 16px</p>

                            <p><span className="font-bold pr-5">•</span>It will grow based on 2vw as the screen gets larger</p>

                            <p><span className="font-bold pr-5">•</span>But it will never exceed 24px</p>
                        </div>

                        <p>You can use clamp() for font sizes, <span className="font-bold">padding, margins, widths, and more</span>. Making it a powerful tool for responsive design.</p>
                    </div>
                </section>

                <section className="flex pb-10 text-white text-xl z-1">
                    <div className="flex items-start w-full h-full flex-[40%]">
                        <h1 className="sticky top-0 left-0 text-4xl font-bold">How to Use Clampli</h1>
                    </div>

                    <div className="flex-[60%]">
                        <p className="mb-5">Clampli helps you generate the ideal clamp() value based on your design needs — no math, no guesswork.</p>

                        <h3 className="font-bold text-2xl mb-5">1. Set Your Viewport Range</h3>

                        <p className="mb-5">Tell Clampli the screen sizes you want to support:</p>
                    
                        <div className="mb-5 text-lg indent-5">
                            <p><span className="font-bold pr-5">•</span><span className="font-bold">Minimum Size</span>: the smallest screen size (e.g., 320px)</p>

                            <p><span className="font-bold pr-5">•</span><span className="font-bold">Maximum size</span>: the largest screen size (e.g., 1280px)</p>
                        </div>

                        <p className="mb-5">This defines the range over which your value will scale fluidly.</p>

                        <h3 className="font-bold text-2xl mb-5">2. Set Your Size Range</h3>

                        <p className="mb-5">Next, enter the desired size range:</p>
                    
                        <div className="mb-5 text-lg indent-5">
                            <p><span className="font-bold pr-5">•</span><span className="font-bold">Minimum Size</span>: the smallest your font or element should be (e.g., 16px)</p>

                            <p><span className="font-bold pr-5">•</span><span className="font-bold">Maximum size</span>: the largest it should scale to (e.g., 24px)</p>
                        </div>

                        <p className="mb-5">Clampli will calculate a responsive formula that smoothly interpolates between these sizes based on the screen width.</p>
                    
                        <h3 className="font-bold text-2xl mb-5">Get Your clamp() Value</h3>

                        <p>Click Generate, and Clampli will output the CSS clamp() function you can copy and paste into your code.</p>

                        <p>Example output:</p>

                        <div className="my-5 border-2 border-graphite-300">
                            <h5 className="p-2 text-xs border-b-2 border-b-graphite-300 bg-graphite-700">css</h5>

                            <p className="p-5 text-xl bg-graphite-800">font-size: clamp(16px, 1.5vw + 1rem, 24px);</p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Slide