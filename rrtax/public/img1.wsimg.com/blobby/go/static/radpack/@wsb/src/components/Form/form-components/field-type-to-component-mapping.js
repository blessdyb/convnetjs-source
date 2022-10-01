import InputField from "./input-field";
import TextArea from "./textarea-field";
import SubmitButton from "./submit-btn";
import FileInput from "./file-input";

export default {
  SINGLE_LINE: InputField,
  MULTI_LINE: TextArea,
  EMAIL: InputField,
  SUBMIT: SubmitButton,
  PHONE: InputField,
  ATTACHMENT: FileInput,
  propTypes: {
    ...InputField.propTypes,
    ...TextArea.propTypes,
    ...SubmitButton.propTypes,
    ...FileInput.propTypes,
  },
};
