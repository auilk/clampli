import InputField from "./InputField.jsx"
import UnitSelector from "./UnitSelector.jsx";

/**
 * A form component for generating a CSS clamp() expression.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.className] - Optional CSS class for styling the form container.
 * @param {string} props.label01 - Label for the minimum size input.
 * @param {string} props.label02 - Label for the maximum size input.
 * @param {string} [props.gap="5px"] - CSS gap between the InputField components (e.g., "50px", "8rem")
 * @param {string} [props.padX="2rem"] - Horizontal padding of the form.
 * @param {string} [props.padY="4rem"] - Vertical padding of the form.
 * @param {string} [props.borderWidth="2px"] - CSS border width around the Form container (e.g., "1px", "0.5rem").
 * @returns {JSX.Element} The rendered form for clamp() value generation.
 */
function Form({className, label01, label02, gap="50px", padX = "2rem", padY = "4rem", borderWidth = "2px"})
{
    return(
        <form 
            className={`w-fit h-fit ${className}`}
            onSubmit={(event) => event.preventDefault()}
        >
            <UnitSelector 
                fontSize="clamp(0.4rem, 0.355rem + 0.223vw, 0.71rem)"
                borderWidth={borderWidth}
            ></UnitSelector>

            <div 
                className="flex flex-col border-[0px_2px_2px_2px] border-white bg-graphite-900"
                style={{
                    padding: `${padY} ${padX}`,
                    borderWidth: `0px ${borderWidth} ${borderWidth} ${borderWidth}`,
                    gap: gap
                }}
            >
                <InputField
                    label={label01} 
                    width="clamp(8rem, 5.982rem + 10.09vw, 22rem)"
                    fontSize="clamp(0.5rem, 0.399rem + 0.505vw, 1.2rem)"
                    borderWidth={borderWidth}
                ></InputField>

                <InputField
                    label={label02} 
                    width="clamp(8rem, 5.982rem + 10.09vw, 22rem)"
                    fontSize="clamp(0.5rem, 0.399rem + 0.505vw, 1.2rem)"
                    borderWidth={borderWidth}
                ></InputField>
            </div>
        </form>
    );
}

export default Form;