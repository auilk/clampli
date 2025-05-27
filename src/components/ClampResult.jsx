import ClampFormat from "./ClampFormat";
import UnitSelector from "./UnitSelector";

function ClampResult({fontSize = 1})
{
    return(
        <div className="w-full">
            <UnitSelector fontSize={0.8}></UnitSelector>

            <div className="w-full h-fit p-10 flex border-[0px_2px_2px_2px] border-white bg-graphite-900">
                <div className="flex gap-5 items-center pr-5 pl-10 w-full text-white border-2">
                    <p 
                        className="flex flex-1 justify-center items-center"
                        style={{
                            fontSize:`${fontSize}rem`
                        }}
                    >
                        EXAMPLE: clamp(1rem, 0.679rem + 1.282vw, 1.5rem)
                    </p>

                    <svg
                        className="cursor-pointer"
                        width="24px" 
                        height="24px" 
                        viewBox="0 -960 960 960" 
                        fill="#e3e3e3"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
                        />
                    </svg>
                </div>

                <ClampFormat fontSize={1.2}></ClampFormat>
            </div>
        </div>
    );
}

export default ClampResult;

