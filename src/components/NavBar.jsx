import React, { createContext } from "react";

/**
 * @param {Object} props
 * @param {number} [props.gap = 5]
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
                className="flex border-b-2 border-white"
                style={{
                    gap: `${gap}px`,
                }}
            >
                <div 
                    className="p-5 flex justify-center items-center flex-[5%] border-r-2 border-white"
                    style={{
                        gap: `${gap}px`,
                    }}
                >
                    {leftElements}
                </div>

                <div 
                    className="flex justify-center items-center flex-[90%]" 
                    style={{
                        gap: `${gap}px`,
                    }}
                >
                    {centerElements}
                </div>

                <div 
                    className="p-5 flex justify-center items-center flex-[5%] border-l-2 border-white" 
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