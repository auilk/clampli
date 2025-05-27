import InputField from "./InputField.jsx"
import UnitSelector from "./UnitSelector.jsx";

function Form({className, label01, label02})
{
    return(
        <form 
            className={`w-fit h-fit ${className}`}
            onSubmit={(event) => event.preventDefault()}
        >
            <UnitSelector fontSize={0.8}></UnitSelector>

            <div className="px-10 py-25 flex flex-col gap-20 border-[0px_2px_2px_2px] border-white bg-graphite-900">
                <InputField 
                    label={label01}
                ></InputField>

                <InputField 
                    label={label02}
                ></InputField>
            </div>
        </form>
    );
}

export default Form;