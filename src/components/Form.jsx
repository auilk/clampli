import InputField from "./InputField.jsx"
import UnitSelector from "./UnitSelector.jsx";

function Form({className})
{
    return(
        <form 
            className={`w-fit h-fit ${className}`}
            onSubmit={(event) => event.preventDefault()}
        >
            <UnitSelector fontSize={0.8}></UnitSelector>

            <div className="pl-10 pr-10 pt-25 pb-25 flex flex-col gap-20 border-[0px_2px_2px_2px] border-white bg-graphite-900">
                <InputField 
                    label="Enter Min Viewport size" 
                ></InputField>

                <InputField 
                    label="Enter Max Viewport size" 
                ></InputField>
            </div>
        </form>
    );
}

export default Form;