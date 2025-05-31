import InputField from "./InputField.jsx"
import UnitSelector from "./UnitSelector.jsx";

/**
 * A form component for generating a CSS clamp() expression.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.className] - Optional CSS class for styling the form container.
 * @param {string} props.label01 - Label for the minimum size input.
 * @param {string} props.label02 - Label for the maximum size input.
 * @returns {JSX.Element} The rendered form for clamp() value generation.
 */

function Form({className, label01, label02})
{
    return(
        <form 
            className={`w-fit h-fit ${className}`}
            onSubmit={(event) => event.preventDefault()}
        >
            <UnitSelector fontSize="0.8rem"></UnitSelector>

            <div className="px-10 py-25 flex flex-col gap-20 border-[0px_2px_2px_2px] border-white bg-graphite-900">
                <InputField label={label01}></InputField>

                <InputField label={label02}></InputField>
            </div>
        </form>
    );
}

export default Form;