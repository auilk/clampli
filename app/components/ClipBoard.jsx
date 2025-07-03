/**
 * A React component that renders a button which, when clicked,
 * copies the provided text to the user's clipboard.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.textToCopy - The text that will be copied to the clipboard.
 * @returns {JSX.Element} The rendered button element.
 */
function ClipBoard({textToCopy})
{
    const HandleCopy = async () =>
    {
        try 
        {
            await navigator.clipboard.writeText(textToCopy);
        } 
        catch (err)
        {
            console.error("Failed to copy: ", err);
        }
    };

    return(
        <button
            className="p-5 opacity-50 hover:opacity-100 cursor-pointer h-full transition-opacity"
            onClick={HandleCopy}>
            <svg
                width="clamp(15px, 0.8929vw + 12.1429px, 35px)" 
                height="clamp(15px, 0.8929vw + 12.1429px, 35px)" 
                viewBox="0 -960 960 960" 
                fill="#e3e3e3"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
                />
            </svg>
        </button>
    );
}

export default ClipBoard;