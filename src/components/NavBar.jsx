import React, { createContext } from "react";

/**
 * @param {Object} props
 * @param {number} [props.gap = 5] - Gap in pixels
 */

const NavBarContext = createContext(false);

function NavBar({children, gap = 5})
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
                className="m-2 flex border-t-3 border-b-3 border-white"
                style={{
                    gap: `${gap}px`,
                }}
            >
                <div 
                    className="pl-10 pr-10 pt-3 pb-3 ml-8 flex justify-center items-center border-l-3 border-r-3 border-white"
                    style={{
                        gap: `${gap}px`,
                    }}
                >
                    {leftElements}
                </div>

                <div 
                    className="flex justify-center items-center flex-grow" 
                    style={{
                        gap: `${gap}px`,
                    }}
                >
                    {centerElements}
                </div>

                <div 
                    className="pr-10 pl-10 pt-3 pb-3 mr-8 flex justify-center items-center border-r-3 border-l-3 border-white" 
                    style={{
                        gap: `${gap}px`,
                    }}
                >
                    {rightElements}
                </div>
            </nav>
        </NavBarContext.Provider>
    );
}

export { NavBar, NavBarContext };