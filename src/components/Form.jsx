import useSelectorStore from "../store/selector-store.js";
import InputField from "./InputField.jsx"
import UnitSelector from "./UnitSelector.jsx";

/**
 * A form component for generating a CSS clamp() expression.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.className] - Optional CSS class for styling the form container.
 * @param {string} props.label01 - Label for the minimum size input.
 * @param {string} props.label02 - Label for the maximum size input.
 * @param {number} props.value01 - Zustand state for the first input.
 * @param {number} props.value02 - Zustand state for the second input.
 * @param {(value01: number) => void} props.setValue01 - Callback to update the current value01 in Zustand state.
 * @param {(value02: number) => void} props.setValue02 - Callback to update the current value02 size in Zustand state.
 * @param {string} [props.gap="5px"] - CSS gap between the InputField components (e.g., "50px", "8rem")
 * @param {string} [props.padX="2rem"] - Horizontal padding of the form.
 * @param {string} [props.padY="4rem"] - Vertical padding of the form.
 * @param {string} [props.borderWidth="2px"] - CSS border width around the Form container (e.g., "1px", "0.5rem").
 * @param {string} props.unit - The current selected unit (e.g., "px" or "rem") from Zustand state.
 * @param {(unit: string) => void} props.onUnitChange - Callback to update the selected unit in Zustand state.
 * @returns {JSX.Element} The rendered form for clamp() value generation.
 */
function Form({className, label01, label02, value01, value02, setValue01, setValue02, gap="50px", padX = "2rem", padY = "4rem", borderWidth = "2px", unit, onUnitChange})
{
    return(
        <form 
            className={`w-fit h-fit ${className}`}
            onSubmit={(event) => event.preventDefault()}
        >
            <UnitSelector 
                fontSize="clamp(0.4rem, 0.355rem + 0.223vw, 0.71rem)"
                borderWidth={borderWidth}
                value={unit}
                onSelect={onUnitChange}
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
                    unit={unit}
                    value={value01}
                    setValue={setValue01}
                ></InputField>

                <InputField
                    label={label02} 
                    width="clamp(8rem, 5.982rem + 10.09vw, 22rem)"
                    fontSize="clamp(0.5rem, 0.399rem + 0.505vw, 1.2rem)"
                    borderWidth={borderWidth}
                    unit={unit}
                    value={value02}
                    setValue={setValue02}
                ></InputField>
            </div>
        </form>
    );
}

export default Form;