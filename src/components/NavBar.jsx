import React, { createContext } from "react";

const NavBarContext = createContext(false);

/**
 * A navigation bar container that arranges its children with a customizable gap.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Elements to be rendered inside the navbar.
 * @param {string} [props.gap="5px"] - CSS gap between children elements (e.g., "5px", "1rem").
 * @param {string} [props.padding="1.25rem"] - CSS padding inside the navbar container (e.g., "1rem", "10px").
 * @returns {JSX.Element} The rendered navigation bar container.
 */
function NavBar({children, gap = "5px", padding = "1.25rem"})
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
                className="flex border-b-2 border-white"
                style={{
                    gap: gap,
                }}
            >
                <div 
                    className="flex justify-center items-center flex-[5%] border-r-2 border-white"
                    style={{
                        gap: gap,
                        padding: padding
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
                    className="flex justify-center items-center flex-[5%] border-l-2 border-white" 
                    style={{
                        gap: gap,
                        padding: padding
                    }}
                >
                    {rightElements}
                </div>
            </nav>
        </NavBarContext.Provider>
    );
}

export { NavBar, NavBarContext };