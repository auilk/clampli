import { useContext } from "react";
import { NavBarContext } from "./NavBar";

/**
 * @param {Object} props
 * @param {"left" | "center" | "right"} [props.position = "center"]
 * @param {string} props.link
 * @param {string} [props.text = "click"]
 * @param {string} [props.textColor = "white"]
 * @param {number} [props.fontSize = 1] - Font size is in rem
 * @param {string} props.icon - Icon path
 * @param {number} props.iconScale - Icon path
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */

function NavLink({position = "center", link, text = "click", textColor = "white", fontSize = 1, icon, iconScale = 1})
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
                className="bg-center bg-no-repeat bg-contain rounded-full"
                style={{
                    width: `${1.25 * iconScale}rem`,
                    height: `${1.25 * iconScale}rem`,
                    backgroundImage: `url(${icon})`,
                }}
            ></div>

            <p 
                className="font-bold"
                style={{
                    color: textColor,
                    fontSize: `${fontSize}rem`
                }}
            >
                {text}
            </p>
        </a>
    );
}

export default NavLink;