import React, { useState } from "react";

const useInput = (validateValue) => {
	const [enteredValue, setEnteredValue] = useState("");

	const [enteredValueIsTouched, setEnteredValueIsTouched] = useState(false);

	const enteredValueIsValid = validateValue(enteredValue);

	const enteredValueIsNotValid = !enteredValueIsValid && enteredValueIsTouched;

	const valueChangeHandler = (e) => {
		setEnteredValue(e.target.value);
	};

	const valueBlurHandler = () => {
		setEnteredValueIsTouched(true);
	};

	const reset = () => {
		setEnteredValueIsTouched(false);
		setEnteredValue("");
	};

	return {
		value: enteredValue,
		isValid: enteredValueIsValid,
		hasError: enteredValueIsNotValid,
		valueChangeHandler,
		valueBlurHandler,
		reset,
	};
};

export default useInput;
