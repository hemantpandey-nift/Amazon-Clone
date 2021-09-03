import { useState } from "react";
const useInputValidation = (validateInput) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validateInput(inputValue);
  const inputHasError = !inputIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setInputValue("");
    setIsTouched(false);
  };

  return {
    inputValue: inputValue,
    inputIsValid: inputIsValid,
    inputHasError: inputHasError,
    inputChangeHandler: inputChangeHandler,
    inputBlurHandler: inputBlurHandler,
    resetInput: resetInput,
  };
};

export default useInputValidation;
