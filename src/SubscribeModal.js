import React from "react";

import "./SubscribeModal.css";
import useInput from "./Hooks/use-input";

const SubscribeModal = (props) => {
	const {
		value: enteredEmailAdress,
		isValid: enteredEmailAdressIsValid,
		hasError: enteredEmailAdressIsNotValid,
		valueChangeHandler: emailAdressChangeHandler,
		valueBlurHandler: emailAdressBlurHandler,
	} = useInput((value) => value.includes("@"));

	let isValid = false;

	if (enteredEmailAdressIsValid) {
		isValid = true;
	}

	const emailAdressInputClasses = enteredEmailAdressIsNotValid
		? "invalid_input"
		: "form-control_input";

	return (
		<>
			<div className='backdrop' onClick={props.onClose}></div>
			<div className='modal'>
				<h2>Get Our Email Letter</h2>

				<p
					style={{ width: "60%", color: "#7a6e6c" }}
					className='description_subscribeModal'>
					Subscribe to the Outstock mailing list to receive updates on new
					arrivals, special offers and other discount information.
				</p>

				<div className='input_subscribeModal'>
					<label htmlFor='email' className='labelInput_subscribeModal'>
						E-mail Address
					</label>
					<input
						type='text'
						id='email'
						onChange={emailAdressChangeHandler}
						onBlur={emailAdressBlurHandler}
						value={enteredEmailAdress}
						className={emailAdressInputClasses}
					/>

					{enteredEmailAdressIsNotValid && (
						<p className='error-text'>Please enter a valid e-mail adress</p>
					)}
				</div>

				<button
					onClick={props.onClose}
					disabled={!isValid}
					style={{
						width: "30%",
						backgroundColor: "#323232",
						color: "#ffffff",
						padding: "10px",
						textAlign: "center",
						fontSize: "12px",
						fontWeight: "bold",
						border: "none",
					}}>
					SUBSCRIBE!
				</button>
				<button className='close_button' onClick={props.onClose}>
					X
				</button>
			</div>
		</>
	);
};

export default SubscribeModal;
