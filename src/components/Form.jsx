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

            <div className="pl-10 pr-10 pt-25 pb-25 flex flex-col gap-20 border-[2px] rounded-b-md border-white bg-graphite-900">
                <InputField 
                    label="Min Viewport size" 
                    placeholder="Enter your value..."
                ></InputField>

                <InputField 
                    label="Max Viepowrt size" 
                    placeholder="Enter your value..."
                ></InputField>
            </div>
        </form>
    );
}

export default Form;