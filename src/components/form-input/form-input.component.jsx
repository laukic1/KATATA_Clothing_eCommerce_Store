//import styled components for styling
import { FormInputLabel, Input, Group } from "./form-input.styles.jsx";

//Component represents each of the for input and conditionaly adds and removes the effect based on the otherProps.value.length(When user is typing information)
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
        shrink={otherProps.value.length}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
