"use client";

import { useContext } from "react";
import { NavBarContext } from "./NavBar";

/**
 * Renders a styled navigation link with optional icon and custom content.
 *
 * @param {Object} props - Component properties.
 * @param {"left" | "center" | "right"} [props.position="center"] - Alignment of the link.
 * @param {string} props.link - Destination URL.
 * @param {string} [props.text="click"] - Display text for the link.
 * @param {string} [props.textColor="white"] - CSS color value for the text.
 * @param {string} [props.fontSize="1rem"] - Font size of the text (e.g., "1rem", "16px").
 * @param {string} props.icon - URL or path to the icon.
 * @param {string} [props.iconSize="1.25rem"] - CSS size of the icon (e.g., "1.25rem", "20px").
 * @returns {JSX.Element} The rendered navigation link.
 */

function NavLink({position = "center", link, text = "click", textColor = "white", fontSize = "1rem", icon, iconSize = "1.25rem"})
{
    const context = useContext(NavBarContext);

    if (!context)
    {
        throw new Error("<NavLink> can only be used within <NavBar>.");
    }

    return (
        <a 
            className="flex flex-col justify-center items-center cursor-pointer" 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <div
                className="relative"
                style={{
                    width: iconSize,
                    height: iconSize,
                }}
            >
                <img
                    src={icon}
                    alt="icon"
                    className="w-full h-full object-cover"
                ></img>
            </div>

            <p 
                className="font-bold"
                style={{
                    color: textColor,
                    fontSize: fontSize
                }}
            >
                {text}
            </p>
        </a>
    );
}

export default NavLink;