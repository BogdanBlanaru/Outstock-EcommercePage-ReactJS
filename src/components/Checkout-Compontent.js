import React, { useState, useEffect } from "react";
import wishlistImg from "../assets/wishlist.jpg";
import "./Wishlist-Component.css";
import "./Checkout-Component.css";
import useInput from "../Hooks/use-input";
import Subscribe from "../common/Subscribe";
import { countryList } from "../assets/AllCountries";

const CheckoutComponent = () => {
	const [country, setCountry] = useState("Romania");

	const [countryIsTouched, setCountryValueIsTouched] = useState(false);

	const [createAccount, setCreateAccount] = useState(false);

	const [values, setValues] = useState([]);

	const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

	const alpha = Array.from(Array(26)).map((e, i) => i + 65);
	const alphabet = alpha.map((x) => String.fromCharCode(x));

	const {
		value: enteredFirstName,
		isValid: enteredFirstNameIsValid,
		hasError: enteredFirstNameIsNotValid,
		valueChangeHandler: firstNameChangeHandler,
		valueBlurHandler: firstNameBlurHandler,
		reset: resetFirstNameInput,
	} = useInput((value) => value.trim() !== "");

	const {
		value: enteredLastName,
		isValid: enteredLastNameIsValid,
		hasError: enteredLastNameIsNotValid,
		valueChangeHandler: lastNameChangeHandler,
		valueBlurHandler: lastNameBlurHandler,
		reset: resetLastNameInput,
	} = useInput((value) => value.trim() !== "");

	const {
		value: enteredCompanyName,
		valueChangeHandler: companyNameChangeHandler,
		reset: resetCompanyNameInput,
	} = useInput((value) => value);

	const {
		value: enteredApartmentNumber,
		valueChangeHandler: apartmentNumberChangeHandler,
		reset: resetApartmentNumberInput,
	} = useInput((value) => value);

	const {
		value: enteredAdress,
		isValid: enteredAdressIsValid,
		hasError: enteredAdressIsNotValid,
		valueChangeHandler: adressChangeHandler,
		valueBlurHandler: adressBlurHandler,
		reset: resetAdressInput,
	} = useInput((value) => value.trim() !== "");

	const {
		value: enteredCity,
		isValid: enteredCityIsValid,
		hasError: enteredCityIsNotValid,
		valueChangeHandler: cityChangeHandler,
		valueBlurHandler: cityBlurHandler,
		reset: resetCityInput,
	} = useInput((value) => value.trim() !== "");

	const {
		value: enteredPostcode,
		isValid: enteredPostcodeIsValid,
		hasError: enteredPostcodeIsNotValid,
		valueChangeHandler: postcodeChangeHandler,
		valueBlurHandler: postcodeBlurHandler,
		reset: resetPostcodeInput,
	} = useInput(
		(value) =>
			allNumbers.find((element) => {
				return value.includes(element);
			}) &&
			value.length <= 7 &&
			alphabet.find((element) => {
				return !value.includes(element);
			})
	);

	const {
		value: enteredPhone,
		isValid: enteredPhoneIsValid,
		hasError: enteredPhoneIsNotValid,
		valueChangeHandler: phoneChangeHandler,
		valueBlurHandler: phoneBlurHandler,
		reset: resetPhoneInput,
	} = useInput(
		(value) =>
			allNumbers.find((element) => {
				return value.includes(element);
			}) &&
			value.length <= 10 &&
			alphabet.find((element) => {
				return !value.includes(element);
			})
	);

	const {
		value: enteredEmailAdress,
		isValid: enteredEmailAdressIsValid,
		hasError: enteredEmailAdressIsNotValid,
		valueChangeHandler: emailAdressChangeHandler,
		valueBlurHandler: emailAdressBlurHandler,
		reset: resetEmailAdressInput,
	} = useInput((value) => value.includes("@"));

	const {
		value: enteredPassword,
		isValid: enteredPasswordIsValid,
		hasError: enteredPasswordIsNotValid,
		valueChangeHandler: passwordChangeHandler,
		valueBlurHandler: passwordBlurHandler,
		reset: resetPasswordInput,
	} = useInput((value) => value.trim() !== "" && value.length >= 7);

	const selectedCountry = (e) => {
		setCountry(e.target.value);
	};

	const countryBlurHandler = () => {
		setCountryValueIsTouched(true);
	};

	const enteredCountryIsValid = country !== "Select a country";

	const enteredCountryIsNotValid = !enteredCountryIsValid && countryIsTouched;

	let isValid = false;

	if (
		enteredFirstNameIsValid &&
		enteredLastNameIsValid &&
		enteredEmailAdressIsValid &&
		enteredCountryIsValid &&
		enteredCityIsValid &&
		enteredPostcodeIsValid &&
		enteredPhoneIsValid &&
		enteredAdressIsValid
	) {
		isValid = true;
	}

	const formSubmitHandler = (e) => {
		e.preventDefault();

		setCountryValueIsTouched(true);

		if (!enteredFirstNameIsValid) {
			return;
		}

		if (!enteredLastNameIsValid) {
			return;
		}
		if (!enteredCountryIsValid) {
			return;
		}
		if (!enteredAdressIsValid) {
			return;
		}
		if (!enteredCityIsValid) {
			return;
		}
		if (!enteredPostcodeIsValid) {
			return;
		}
		if (!enteredPhoneIsValid) {
			return;
		}
		if (!enteredEmailAdressIsValid) {
			return;
		}
		if (createAccount && !enteredPasswordIsValid) {
			return;
		}

		resetFirstNameInput();

		resetLastNameInput();

		resetEmailAdressInput();

		resetCompanyNameInput();

		setCountry("Select a country");
		setCountryValueIsTouched(false);

		resetAdressInput();

		resetApartmentNumberInput();

		resetCityInput();

		resetPostcodeInput();

		resetPhoneInput();

		resetPasswordInput();
	};

	const firstNameInputClasses = enteredFirstNameIsNotValid
		? "invalid_input"
		: "form-control_input";

	const lastNameInputClasses = enteredLastNameIsNotValid
		? "invalid_input"
		: "form-control_input";

	const countryInputClasses = enteredCountryIsNotValid
		? "invalid_input"
		: "form-control_input";

	const adressInputClasses = enteredAdressIsNotValid
		? "invalid_input"
		: "form-control_input";

	const cityInputClasses = enteredCityIsNotValid
		? "invalid_input"
		: "form-control_input";

	const postcodeInputClasses = enteredPostcodeIsNotValid
		? "invalid_input"
		: "form-control_input";

	const phoneInputClasses = enteredPhoneIsNotValid
		? "invalid_input"
		: "form-control_input";

	const emailAdressInputClasses = enteredEmailAdressIsNotValid
		? "invalid_input"
		: "form-control_input";

	const passwordInputClasses = enteredPasswordIsNotValid
		? "invalid_input"
		: "form-control_input";

	useEffect(() => {
		const productListStorage = localStorage.getItem("productListCart");
		if (productListStorage) {
			const productArray = JSON.parse(productListStorage);
			setValues(productArray);
		}
	}, []);

	return (
		<div className='wishlist_container'>
			<img className='img_wishlist' src={wishlistImg} alt='Wishlist Image' />
			<h1 className='title_wishlist'>Checkout</h1>
			<div className='two_components'>
				<div className='form_checkout' style={{ marginBottom: "7%" }}>
					<h2 style={{ marginLeft: "3%" }}>Biling Details</h2>
					<hr className='line_formcheckout' />
					<form onSubmit={formSubmitHandler} className='form_body'>
						<div className='control-group'>
							<div className='name_inputs'>
								<div className='form-control' style={{ width: "42%" }}>
									<label htmlFor='first_name' className='form-control_label'>
										First Name <span style={{ color: "red" }}>*</span>
									</label>
									<input
										type='text'
										id='fname'
										onChange={firstNameChangeHandler}
										onBlur={firstNameBlurHandler}
										value={enteredFirstName}
										className={firstNameInputClasses}
									/>
									{enteredFirstNameIsNotValid && (
										<p className='error-text'>First name must not be empty.</p>
									)}
								</div>
								<div className='form-control' style={{ width: "42%" }}>
									<label htmlFor='last_name' className='form-control_label'>
										Last Name <span style={{ color: "red" }}>*</span>
									</label>
									<input
										type='text'
										id='lname'
										onChange={lastNameChangeHandler}
										onBlur={lastNameBlurHandler}
										value={enteredLastName}
										className={lastNameInputClasses}
									/>
									{enteredLastNameIsNotValid && (
										<p className='error-text'>Last name must not be empty.</p>
									)}
								</div>
							</div>
							<div className='form-control'>
								<label htmlFor='company_name' className='form-control_label'>
									Company name (optional)
								</label>
								<input
									type='text'
									id='company_name'
									onChange={companyNameChangeHandler}
									value={enteredCompanyName}
									className='form-control_input'
								/>
							</div>

							<div className='form-control'>
								<label htmlFor='country' className='form-control_label'>
									Country / Region <span style={{ color: "red" }}>*</span>
								</label>
								<select
									className={countryInputClasses}
									onBlur={countryBlurHandler}
									onChange={selectedCountry}
									value={country}>
									<option value='Select a country'>Select a country</option>
									{countryList.map((country) => {
										return (
											<option value={country} key={country}>
												{country}
											</option>
										);
									})}
								</select>
								{enteredCountryIsNotValid && (
									<p className='error-text'>Please select your country</p>
								)}
							</div>

							<div className='form-control'>
								<label htmlFor='adress' className='form-control_label'>
									Street address <span style={{ color: "red" }}>*</span>
								</label>
								<input
									type='text'
									id='streetName'
									placeholder='House number and street name'
									onChange={adressChangeHandler}
									onBlur={adressBlurHandler}
									value={enteredAdress}
									className={adressInputClasses}
								/>

								{enteredAdressIsNotValid && (
									<p className='error-text'>Please enter a valid adress</p>
								)}
								<input
									type='text'
									id='apartmentNumber'
									placeholder='Apartment, suite, unit, etc. (optional)'
									onChange={apartmentNumberChangeHandler}
									value={enteredApartmentNumber}
									className='form-control_input'
									style={{ marginTop: "2%" }}
								/>
							</div>

							<div className='form-control'>
								<label htmlFor='city' className='form-control_label'>
									Town / City <span style={{ color: "red" }}>*</span>
								</label>
								<input
									type='text'
									id='city'
									onChange={cityChangeHandler}
									onBlur={cityBlurHandler}
									value={enteredCity}
									className={cityInputClasses}
								/>

								{enteredCityIsNotValid && (
									<p className='error-text'>Please enter a valid town / city</p>
								)}
							</div>

							<div className='form-control'>
								<label htmlFor='postcode' className='form-control_label'>
									Postcode / ZIP <span style={{ color: "red" }}>*</span>
								</label>
								<input
									type='text'
									id='postcode'
									onChange={postcodeChangeHandler}
									onBlur={postcodeBlurHandler}
									value={enteredPostcode}
									className={postcodeInputClasses}
								/>

								{enteredPostcodeIsNotValid && (
									<p className='error-text'>
										Please enter a valid Postcode / ZIP
									</p>
								)}
							</div>

							<div className='form-control'>
								<label htmlFor='phone' className='form-control_label'>
									Phone <span style={{ color: "red" }}>*</span>
								</label>
								<input
									type='text'
									id='phone'
									onChange={phoneChangeHandler}
									onBlur={phoneBlurHandler}
									value={enteredPhone}
									className={phoneInputClasses}
								/>

								{enteredPhoneIsNotValid && (
									<p className='error-text'>
										Please enter a valid phone number
									</p>
								)}
							</div>

							<div className='form-control'>
								<label htmlFor='email' className='form-control_label'>
									E-Mail Address <span style={{ color: "red" }}>*</span>
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
									<p className='error-text'>
										Please enter a valid e-mail adress
									</p>
								)}
							</div>

							<button
								onClick={() => {
									setCreateAccount((prevCreateAccount) => !prevCreateAccount);
								}}
								style={{
									width: "30%",
									backgroundColor: "#323232",
									color: "#ffffff",
									padding: "1%",
									textAlign: "center",
									fontSize: "0.8rem",
									fontWeight: "bold",
									border: "none",
									marginTop: "4%",
								}}>
								Create an account?
							</button>

							{createAccount && (
								<div className='form-control'>
									<label htmlFor='password' className='form-control_label'>
										Create account password{" "}
										<span style={{ color: "red" }}>*</span>
									</label>
									<input
										type='password'
										id='password'
										placeholder='Password'
										onChange={passwordChangeHandler}
										onBlur={passwordBlurHandler}
										value={enteredPassword}
										className={passwordInputClasses}
									/>

									{enteredPasswordIsNotValid && (
										<p className='error-text'>Please enter a valid password</p>
									)}
								</div>
							)}
						</div>

						<div className='form-actions'>
							<button disabled={!isValid} style={{ fontSize: "1rem" }}>
								SUBMIT
							</button>
						</div>
					</form>
				</div>
				<div className='form_checkout'>
					<h2 style={{ marginLeft: "3%" }}>Your order</h2>
					<hr className='line_formcheckout' />

					<ul className='list_totals'>
						<li>
							<h3>Product</h3>
							<h3>Subtotal</h3>
						</li>
						{values.map((product) => {
							return (
								<li key={product.id}>
									<h4 style={{ marginLeft: "2%", color: "#6c6c6c" }}>
										{product.title}
									</h4>
									<h4 style={{ color: "#eebb82" }}>
										${localStorage.getItem(`amountList${product.id}`)}
									</h4>
								</li>
							);
						})}
						<li>
							<h3>Total</h3>
							<h3 style={{ color: "#eebb82" }}>
								${localStorage.getItem("totalAmountList")}
							</h3>
						</li>
					</ul>
				</div>
			</div>
			<hr style={{ width: "100%" }} />
			<Subscribe />
		</div>
	);
};

export default CheckoutComponent;
