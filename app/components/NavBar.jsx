"use client";

import React, { createContext } from "react";

const NavBarContext = createContext(false);

/**
 * A navigation bar container that arranges its children with a customizable gap.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Elements to be rendered inside the navbar.
 * @param {string} [props.gap="5px"] - CSS gap between children elements (e.g., "5px", "1rem").
 * @param {string} [props.padding="1.25rem"] - CSS padding inside the navbar container (e.g., "1rem", "10px").
 * @param {string} [props.borderWidth="2px"] - CSS border width around the navbar container (e.g., "1px", "0.5rem").
 * @returns {JSX.Element} The rendered navigation bar container.
 */
function NavBar({children, gap = "5px", padding = "1.25rem", borderWidth = "2px"})
{
    const leftElements = []
    const centerElements = []
    const rightElements = []

    React.Children.forEach(children, (child) =>
    {
        if (!React.isValidElement(child)) return;

        switch (child.props.position)
        {
            case "left":
                leftElements.push(child)
                break;
            case "center":
                centerElements.push(child);
                break;
            case "right":
                rightElements.push(child);
                break;
            default:
                centerElements.push(child);
                break;
        }
    });

    return(
        <NavBarContext.Provider value={true}>
            <nav 
                className="flex border-white"
                style={{
                    gap: gap,
                    borderBottomWidth: borderWidth
                }}
            >
                <div 
                    className="flex justify-center items-center flex-[5%] border-white"
                    style={{
                        gap: gap,
                        padding: padding,
                        borderRightWidth: borderWidth
                    }}
                >
                    {leftElements}
                </div>

                <div 
                    className="flex justify-center items-center flex-[90%]" 
                    style={{
                        gap: gap
                    }}
                >
                    {centerElements}
                </div>

                <div 
                    className="flex justify-center items-center flex-[5%] border-white" 
                    style={{
                        gap: gap,
                        padding: padding,
                        borderLeftWidth: borderWidth
                    }}
                >
                    {rightElements}
                </div>
            </nav>
        </NavBarContext.Provider>
    );
}

export { NavBar, NavBarContext };