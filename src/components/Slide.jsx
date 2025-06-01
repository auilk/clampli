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
            className="w-dvw absolute z-1 scale-x-101"
            style={{
                top: slide === "How It Works" ? `${yPos}px` : "-2px",
                transition: !isResizing ? "top 0.3s ease-in-out" : "none"
            }}
        >
            <Toggle
                value={slide}
                onToggle={setSlide}
                padding="0.4rem"
                borderWidth="clamp(1px, 0.614px + 0.12vw, 3px)"
                fontSize="clamp(0.5rem, 0.428rem + 0.36vw, 1rem)"
                firstOption="How It Works"
                secondOption="Calculator"
                fullWidth={true}
            ></Toggle>
            
            <div 
                className="flex overflow-scroll flex-col bg-graphite-900 relative"
                style={{
                    height: `${height}px`,
                    padding: "clamp(0.5rem, 0.356rem + 0.721vw, 1.5rem)",
                    gap: "clamp(0.5rem, 0.212rem + 1.441vw, 2.5rem)"
                }}
            >
                <section 
                    className="flex border-white text-white z-1"
                    style={{
                        paddingBottom: "clamp(0.5rem, 0.212rem + 1.441vw, 2.5rem)",
                        borderBottomWidth: "clamp(2px, 1.712px + 0.09vw, 4px)"
                    }}
                >
                    <aside className="flex items-start w-full h-full flex-[40%]">
                        <h1 
                            className="sticky top-0 font-bold pr-3"
                            style={{
                                fontSize: "clamp(1rem, 0.697rem + 1.514vw, 3.1rem)"
                            }}
                        >
                            What is <code>clamp()</code> and Why Use It?
                        </h1>
                    </aside>

                    <article className="flex flex-col flex-[60%]">
                        <p
                            style={{
                                paddingBottom: "clamp(0.5rem, 0.284rem + 1.081vw, 2rem)",
                                fontSize: "clamp(0.6rem, 0.47rem + 0.649vw, 1.5rem)"
                            }}
                        >
                            The CSS <span className="underline underline-offset-2 font-bold">clamp()</span> function allows you to create responsive values that adapt to the user's screen size without relying on <span className="font-bold">media queries</span>. It takes three values:
                        </p>

                        <div 
                            className="border-graphite-300"
                            style={{
                                marginBottom: "clamp(0.5rem, 0.284rem + 1.081vw, 2rem)",
                                borderWidth: "clamp(1px, 0.614px + 0.12vw, 3px)"
                            }}
                        >
                            <h2 
                                className="border-graphite-300 bg-graphite-700"
                                style={{
                                    padding: "clamp(0.3rem, 0.257rem + 0.216vw, 0.6rem)",
                                    fontSize:"clamp(0.3rem, 0.235rem + 0.324vw, 0.75rem)",
                                    borderBottomWidth: "clamp(1px, 0.614px + 0.12vw, 3px)"
                                }}
                            >
                                Clamp() Function
                            </h2>

                            <code 
                                className="block text-xl bg-graphite-800"
                                style={{
                                    padding: "clamp(0.4rem, 0.256rem + 0.721vw, 1.4rem)",
                                    fontSize:"clamp(0.5rem, 0.356rem + 0.721vw, 1.5rem)"
                                }}
                            >
                                clamp(min, preferred, max)
                            </code>
                        </div>

                        <ul 
                            style={{
                                paddingBottom: "clamp(0.5rem, 0.284rem + 1.081vw, 2rem)",
                                paddingLeft: "clamp(0.5rem, 0.356rem + 0.721vw, 1.5rem)",
                                fontSize:"clamp(0.5rem, 0.41rem + 0.45vw, 1.125rem)"
                            }}
                        >
                            <li><span className="font-bold">• min</span>: the smallest value allowed (e.g., <code>16px</code>)</li>
                            <li><span className="font-bold">• preferred</span>: the fluid value, often based on <code>vw</code></li>
                            <li><span className="font-bold">• max</span>: the largest value allowed (e.g., <code>24px</code>)</li>
                        </ul>

                        <p
                            style={{
                                paddingBottom: "clamp(0.5rem, 0.284rem + 1.081vw, 2rem)",
                                fontSize: "clamp(0.6rem, 0.47rem + 0.649vw, 1.5rem)"
                            }}
                        >
                            As the viewport changes, the preferred value adjusts, but it never goes below the min or above the max.
                        </p>
                    </article>
                </section>

                <section 
                    className="flex border-white text-white z-1"
                    style={{
                        paddingBottom: "clamp(0.5rem, 0.212rem + 1.441vw, 2.5rem)",
                        borderBottomWidth: "clamp(2px, 1.712px + 0.09vw, 4px)"
                    }}
                >
                    <aside className="flex items-start w-full h-full flex-[40%]">
                        <h1 
                            className="sticky top-0 font-bold pr-3"
                            style={{
                                fontSize: "clamp(1rem, 0.697rem + 1.514vw, 3.1rem)"
                            }}
                        >
                            Why It's Useful
                        </h1>
                    </aside>

                    <article className="flex flex-col flex-[60%]">
                        <p
                            style={{
                                paddingBottom: "clamp(0.5rem, 0.284rem + 1.081vw, 2rem)",
                                fontSize: "clamp(0.6rem, 0.47rem + 0.649vw, 1.5rem)"
                            }}
                        >
                            Responsive design often means juggling multiple breakpoints with media queries to scale font sizes, spacing, and layout elements.<code className="font-bold"> clamp()</code> simplifies this by:
                        </p>

                        <ul
                            style={{
                                paddingBottom: "clamp(0.5rem, 0.284rem + 1.081vw, 2rem)",
                                paddingLeft: "clamp(0.5rem, 0.356rem + 0.721vw, 1.5rem)",
                                fontSize:"clamp(0.5rem, 0.41rem + 0.45vw, 1.125rem)"
                            }}
                        >
                            <li><span className="font-bold">•</span> Automatically adjusting sizes fluidly between a defined range</li>
                            <li><span className="font-bold">•</span> Reducing or eliminating the need for media queries</li>
                            <li><span className="font-bold">•</span> Keeping your CSS cleaner and easier to maintain</li>
                        </ul>

                        <h2 
                            className="font-bold"
                            style={{
                                fontSize: "clamp(0.8rem, 0.699rem + 0.505vw, 1.5rem)"
                            }}
                        >
                            Example
                        </h2>

                        <div 
                            className="border-graphite-300"
                            style={{
                                marginBottom: "clamp(0.4rem, 0.198rem + 1.009vw, 1.8rem)",
                                borderWidth: "clamp(1px, 0.614px + 0.12vw, 3px)"
                            }}
                        >
                            <h2 
                                className="border-graphite-300 bg-graphite-700"
                                style={{
                                    padding: "clamp(0.3rem, 0.257rem + 0.216vw, 0.6rem)",
                                    fontSize:"clamp(0.3rem, 0.235rem + 0.324vw, 0.75rem)",
                                    borderBottomWidth: "clamp(1px, 0.614px + 0.12vw, 3px)"
                                }}
                            >
                                css
                            </h2>

                            <code 
                                className="block text-xl bg-graphite-800"
                                style={{
                                    padding: "clamp(0.4rem, 0.256rem + 0.721vw, 1.4rem)",
                                    fontSize:"clamp(0.45rem, 0.299rem + 0.757vw, 1.5rem)"
                                }}
                            >
                                font-size: clamp(16px, 2vw, 24px);
                            </code>
                        </div>

                        <p
                            style={{
                                fontSize: "clamp(0.6rem, 0.47rem + 0.649vw, 1.5rem)"
                            }}
                        >
                            This means:
                        </p>

                        <ul
                            style={{
                                paddingBottom: "clamp(0.5rem, 0.284rem + 1.081vw, 2rem)",
                                paddingLeft: "clamp(0.5rem, 0.356rem + 0.721vw, 1.5rem)",
                                fontSize:"clamp(0.5rem, 0.41rem + 0.45vw, 1.125rem)"
                            }}
                        >
                            <li><span className="font-bold">•</span> The text will never be smaller than <code>16px</code></li>
                            <li><span className="font-bold">•</span> It will grow based on <code>2vw</code> as the screen gets larger</li>
                            <li><span className="font-bold">•</span> But it will never exceed <code>24px</code></li>
                        </ul>

                        <p
                            style={{
                                fontSize: "clamp(0.6rem, 0.47rem + 0.649vw, 1.5rem)"
                            }}
                        >
                            You can use <code className="font-bold">clamp()</code> for font sizes, <span className="font-bold">padding, margins, widths, and more</span>. Making it a powerful tool for responsive design.
                        </p>
                    </article>
                </section>

                <section 
                    className="flex pb-10 text-white text-xl z-1"
                    style={{
                        paddingBottom: "clamp(0.5rem, 0.212rem + 1.441vw, 2.5rem)",
                        borderBottomWidth: "clamp(2px, 1.712px + 0.09vw, 4px)"
                    }}
                >
                    <aside className="flex items-start w-full h-full flex-[40%]">
                        <h1 
                            className="sticky top-0 font-bold pr-3"
                            style={{
                                fontSize: "clamp(1rem, 0.697rem + 1.514vw, 3.1rem)"
                            }}
                        >
                            How to Use Clampli
                        </h1>
                    </aside>

                    <article className="flex flex-col flex-[60%]">
                        <p
                            style={{
                                fontSize: "clamp(0.6rem, 0.47rem + 0.649vw, 1.5rem)"
                            }}
                        >
                            Clampli helps you generate the ideal <code>clamp()</code> value based on your design needs. No math and no guesswork.
                        </p>

                        <section>
                            <h2 
                                className="mb-5 font-bold text-2xl"
                                style={{
                                    marginTop: "clamp(0.4rem, 0.277rem + 0.613vw, 1.25rem)",
                                    marginBottom: "clamp(0.4rem, 0.277rem + 0.613vw, 1.25rem)",
                                    fontSize: "clamp(0.7rem, 0.513rem + 0.937vw, 2rem)"
                                }}
                            >
                                1. Set Your Viewport Range
                            </h2>
                            
                            <p
                                style={{
                                    paddingBottom: "clamp(0.5rem, 0.284rem + 1.081vw, 2rem)",
                                    fontSize: "clamp(0.6rem, 0.47rem + 0.649vw, 1.5rem)"
                                }}
                            >
                                Tell Clampli the screen sizes you want to support:
                            </p>

                            <ul
                                style={{
                                    paddingBottom: "clamp(0.5rem, 0.284rem + 1.081vw, 2rem)",
                                    paddingLeft: "clamp(0.5rem, 0.356rem + 0.721vw, 1.5rem)",
                                    fontSize:"clamp(0.5rem, 0.41rem + 0.45vw, 1.125rem)"
                                }}
                            >
                                <li><span className="font-bold">•</span> <span className="font-bold">Minimum Size</span>: the smallest screen size (e.g., <code>320px</code>)</li>
                                <li><span className="font-bold">•</span> <span className="font-bold">Maximum Size</span>: the largest screen size (e.g., <code>1280px</code>)</li>
                            </ul>

                            <p
                                style={{
                                    fontSize: "clamp(0.6rem, 0.47rem + 0.649vw, 1.5rem)"
                                }}
                            >
                                This defines the range over which your value will scale fluidly.
                            </p>
                        </section>

                        <section>
                            <h2 
                                className="mb-5 font-bold text-2xl"
                                style={{
                                    marginTop: "clamp(0.4rem, 0.277rem + 0.613vw, 1.25rem)",
                                    marginBottom: "clamp(0.4rem, 0.277rem + 0.613vw, 1.25rem)",
                                    fontSize: "clamp(0.7rem, 0.513rem + 0.937vw, 2rem)"
                                }}
                            >
                                2. Set Your Size Range
                            </h2>

                            <p
                                style={{
                                    fontSize: "clamp(0.6rem, 0.47rem + 0.649vw, 1.5rem)"
                                }}
                            >
                                Next, enter the desired size range:
                            </p>

                            <ul
                                style={{
                                    paddingBottom: "clamp(0.5rem, 0.284rem + 1.081vw, 2rem)",
                                    paddingLeft: "clamp(0.5rem, 0.356rem + 0.721vw, 1.5rem)",
                                    fontSize:"clamp(0.5rem, 0.41rem + 0.45vw, 1.125rem)"
                                }}
                            >
                                <li><span className="font-bold">•</span> <span className="font-bold">Minimum Size</span>: the smallest your font or element should be (e.g., <code>16px</code>)</li>
                                <li><span className="font-bold">•</span> <span className="font-bold">Maximum Size</span>: the largest it should scale to (e.g., <code>24px</code>)</li>
                            </ul>

                            <p
                                style={{
                                    fontSize: "clamp(0.6rem, 0.47rem + 0.649vw, 1.5rem)"
                                }}
                            >
                                Clampli will calculate a responsive formula that smoothly interpolates between these sizes based on the screen width.
                            </p>
                        </section>

                        <section>
                            <h2 
                                className="mb-5 font-bold text-2xl"
                                style={{
                                    marginTop: "clamp(0.4rem, 0.277rem + 0.613vw, 1.25rem)",
                                    marginBottom: "clamp(0.4rem, 0.277rem + 0.613vw, 1.25rem)",
                                    fontSize: "clamp(0.7rem, 0.513rem + 0.937vw, 2rem)"
                                }}
                            >
                                3. Get Your clamp() Value
                            </h2>

                            <p
                                style={{
                                    fontSize: "clamp(0.6rem, 0.47rem + 0.649vw, 1.5rem)"
                                }}
                            >
                                Click Generate, and Clampli will output the CSS <code>clamp()</code> function you can copy and paste into your code.
                            </p>

                            <p
                                style={{
                                    marginTop: "clamp(0.4rem, 0.277rem + 0.613vw, 1.25rem)",
                                    marginBottom: "clamp(0.4rem, 0.277rem + 0.613vw, 1.25rem)",
                                    fontSize: "clamp(0.6rem, 0.47rem + 0.649vw, 1.5rem)"
                                }}
                            >
                                Example output:
                            </p>

                            <div 
                                className="border-graphite-300"
                                style={{
                                    marginBottom: "clamp(0.4rem, 0.198rem + 1.009vw, 1.8rem)",
                                    borderWidth: "clamp(1px, 0.614px + 0.12vw, 3px)"
                                }}
                            >
                            <h2 
                                className="border-graphite-300 bg-graphite-700"
                                style={{
                                    padding: "clamp(0.3rem, 0.257rem + 0.216vw, 0.6rem)",
                                    fontSize:"clamp(0.3rem, 0.235rem + 0.324vw, 0.75rem)",
                                    borderBottomWidth: "clamp(1px, 0.614px + 0.12vw, 3px)"
                                }}
                            >
                                css
                            </h2>

                            <code 
                                className="block text-xl bg-graphite-800"
                                style={{
                                    padding: "clamp(0.4rem, 0.256rem + 0.721vw, 1.4rem)",
                                    fontSize:"clamp(0.45rem, 0.299rem + 0.757vw, 1.5rem)"
                                }}
                            >
                                font-size: clamp(16px, 1.5vw + 1rem, 24px);
                            </code>
                        </div>
                        </section>
                    </article>
                </section>
            </div>
        </section>
    );
}

export default Slide