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
            className="absolute w-full z-1"
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
                className="flex justify-center items-center bg-graphite-900"
                style={{
                    height: `${height}px`
                }}
            >
                <h1 className="text-9xl font-bold text-white">SLIDE CONTENT HERE</h1>
            </div>
        </section>
    );
}

export default Slide