import { useState } from "react";
import useValidation from "./useValidation";

const useInput = (initialValue, validations, validationMessages) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const validation = useValidation(value, validations, validationMessages);

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onBlur = () => {
    setIsDirty(true);
  }

  const isInvalid = () => {
    return isDirty && validation.isError();
  }

  return {
    value,
    isDirty,
    onChange,
    onBlur,
    isInvalid,
    validation,
  }
}

export default useInput;