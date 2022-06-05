import React, { useState } from "react";
import MastercardImg from "../assets/mastercard.svg";
import VisaImg from "../assets/visa.svg";
import AmexImg from "../assets/amex.svg";
import PaypalImg from "../assets/paypal.svg";
import KlarnaImg from "../assets/klarna.svg";
import GiftCardImg from "../assets/gift-card.svg";
import DHLLogoImg from "../assets/DHL_logo.svg";
import RelaisColisImg from "../assets/relais-colis_logo.svg";
import { Link } from "react-router-dom";

import "./Footer.css";
import useInput from "../Hooks/use-input";

const Footer = () => {
	const [active1, setActive1] = useState(false);
	const [active2, setActive2] = useState(false);
	const [active3, setActive3] = useState(false);
	const [active4, setActive4] = useState(false);
	const [active5, setActive5] = useState(false);

	const [backdrop, setBackdrop] = useState(false);

	const displayClasses1 = (classes) => {
		const classesActive1 = active1
			? `${classes} active_footer`
			: `${classes} hidden`;
		return classesActive1;
	};

	const displayClasses2 = (classes) => {
		const classesActive2 = active2
			? `${classes} active_footer`
			: `${classes} hidden`;
		return classesActive2;
	};

	const displayClasses3 = (classes) => {
		const classesActive3 = active3
			? `${classes} active_footer`
			: `${classes} hidden`;
		return classesActive3;
	};

	const displayClasses4 = (classes) => {
		const classesActive4 = active4
			? `${classes} active_footer`
			: `${classes} hidden`;
		return classesActive4;
	};

	const displayClasses5 = (classes) => {
		const classesActive5 = active5
			? `${classes} active_footer`
			: `${classes} hidden`;
		return classesActive5;
	};

	const onMouseOverHandler1 = () => {
		setActive1(true);
		setActive2(false);
	};
	const onMouseOutHandler1 = () => {
		setActive1(false);
	};

	const onMouseOverHandler2 = () => {
		setActive2(true);
		setActive1(false);
		setActive3(false);
	};
	const onMouseOutHandler2 = () => {
		setActive2(false);
	};

	const onMouseOverHandler3 = () => {
		setActive3(true);
		setActive2(false);
		setActive4(false);
	};
	const onMouseOutHandler3 = () => {
		setActive3(false);
	};

	const onMouseOverHandler4 = () => {
		setActive4(true);
		setActive3(false);
		setActive5(false);
	};
	const onMouseOutHandler4 = () => {
		setActive4(false);
	};

	const onMouseOverHandler5 = () => {
		setActive5(true);
		setActive4(false);
	};
	const onMouseOutHandler5 = () => {
		setActive5(false);
	};

	const {
		value: enteredEmailAdress,
		isValid: enteredEmailAdressIsValid,
		hasError: enteredEmailAdressIsNotValid,
		valueChangeHandler: emailAdressChangeHandler,
		valueBlurHandler: emailAdressBlurHandler,
		reset: resetEmailAdressInput,
	} = useInput((value) => value.includes("@"));

	let isValid = false;

	if (enteredEmailAdressIsValid) {
		isValid = true;
	}

	const emailAdressInputClasses = enteredEmailAdressIsNotValid
		? "invalid_input"
		: "form-control_input";

	const onClickHandler1 = () => {
		setActive1((prevActive1) => !prevActive1);
		setActive2(false);
		setActive3(false);
		setActive4(false);
		setActive5(false);
		setBackdrop(true);
	};

	const onClickHandler2 = () => {
		setActive2((prevActive2) => !prevActive2);
		setActive1(false);
		setActive3(false);
		setActive4(false);
		setActive5(false);
		setBackdrop(true);
	};

	const onClickHandler3 = () => {
		setActive3((prevActive3) => !prevActive3);
		setActive1(false);
		setActive2(false);
		setActive4(false);
		setActive5(false);
		setBackdrop(true);
	};

	const onClickHandler4 = () => {
		setActive4((prevActive4) => !prevActive4);
		setActive1(false);
		setActive2(false);
		setActive3(false);
		setActive5(false);
		setBackdrop(true);
	};

	const onClickHandler5 = () => {
		setActive5((prevActive5) => !prevActive5);
		setActive1(false);
		setActive2(false);
		setActive3(false);
		setActive4(false);
		setBackdrop(true);
	};

	const onClickHandlerBackdrop = () => {
		setActive1(false);
		setActive2(false);
		setActive3(false);
		setActive4(false);
		setActive5(false);
		setBackdrop(false);
	};

	return (
		<>
			<footer className='footer'>
				<div className='footer_element' onMouseOver={onMouseOverHandler1}>
					FOLLOW US
				</div>
				<div className='footer_element' onMouseOver={onMouseOverHandler2}>
					CORPORATE
				</div>
				<div className='footer_element' onMouseOver={onMouseOverHandler3}>
					NEWSLETTER
				</div>
				<div className='footer_element' onMouseOver={onMouseOverHandler4}>
					CUSTOMER SERVICE
				</div>
				<div className='footer_element' onMouseOver={onMouseOverHandler5}>
					LEGAL AREA
				</div>
			</footer>
			<div
				className={displayClasses1("follow_us")}
				onMouseOver={onMouseOverHandler1}
				onMouseOut={onMouseOutHandler1}>
				<p>FOLLOW US ON OUR SOCIAL NETWORKS!</p>
			</div>

			<div
				className={displayClasses2("corporate")}
				onMouseOver={onMouseOverHandler2}
				onMouseOut={onMouseOutHandler2}>
				<ul className='corporate'>
					<li style={{ cursor: "pointer" }}>Stores</li>
					<li style={{ cursor: "pointer" }}>Careers</li>
					<li style={{ cursor: "pointer" }}>Investor Relations</li>
				</ul>
				<ul>
					<Link
						style={{
							cursor: "pointer",
							color: "#323232",
							textDecoration: "none",
						}}
						to='/aboutus'>
						<li style={{ cursor: "pointer" }}>Outstock Family</li>
					</Link>
					<li style={{ cursor: "pointer" }}>Outstock Journal</li>
					<li style={{ cursor: "pointer" }}>Soustainability</li>
				</ul>
				<ul>
					<Link
						style={{
							cursor: "pointer",
							color: "#323232",
							textDecoration: "none",
						}}
						to='/'>
						<li>Outstock</li>
					</Link>
					<Link
						style={{
							cursor: "pointer",
							color: "#323232",
							textDecoration: "none",
						}}
						to='/'>
						<li style={{ cursor: "pointer" }}>Outstock Home</li>
					</Link>
					<Link
						style={{
							cursor: "pointer",
							color: "#323232",
							textDecoration: "none",
						}}
						to='/products'>
						<li style={{ cursor: "pointer" }}>Outstock Originals</li>
					</Link>
				</ul>
			</div>

			<div
				className={displayClasses3("newsletter_footer")}
				onMouseOver={onMouseOverHandler3}
				onMouseOut={onMouseOutHandler3}>
				<p>SIGN UP TO NEWSLETTER</p>

				<div className='input_newsletterFooter'>
					<input
						type='text'
						id='email'
						placeholder='E-Mail Adress'
						onChange={emailAdressChangeHandler}
						onBlur={emailAdressBlurHandler}
						value={enteredEmailAdress}
						className={emailAdressInputClasses}
					/>
				</div>
				<button
					onClick={() => {
						if (isValid) {
							resetEmailAdressInput();
						}
					}}
					className='newsletter_footerbtn'>
					{">"}
				</button>
			</div>

			<div
				className={displayClasses4("customer_service")}
				onMouseOver={onMouseOverHandler4}
				onMouseOut={onMouseOutHandler4}>
				<ul className='customer_service'>
					<li style={{ cursor: "pointer" }}>My Account</li>
					<li style={{ cursor: "pointer" }}>My Orders</li>
				</ul>
				<ul>
					<li style={{ cursor: "pointer" }}>Need help?</li>
					<li style={{ cursor: "pointer" }}>Register your return</li>
				</ul>
				<div className='customer_service_images'>
					<img
						src={MastercardImg}
						className='customer_service_img'
						alt='Customer Service Image'
					/>
					<img
						src={VisaImg}
						className='customer_service_img'
						alt='Customer Service Image'
					/>
					<img
						src={AmexImg}
						className='customer_service_img'
						alt='Customer Service Image'
					/>
					<img
						src={PaypalImg}
						className='customer_service_img'
						alt='Customer Service Image'
					/>
					<img
						src={KlarnaImg}
						className='customer_service_img'
						alt='Customer Service Image'
					/>
					<img
						src={GiftCardImg}
						className='customer_service_img'
						alt='Customer Service Image'
					/>
					<img
						src={DHLLogoImg}
						className='customer_service_img'
						alt='Customer Service Image'
					/>
					<img
						src={RelaisColisImg}
						className='customer_service_img'
						alt='Customer Service Image'
					/>
				</div>
			</div>

			<div
				className={displayClasses5("legal_area")}
				onMouseOver={onMouseOverHandler5}
				onMouseOut={onMouseOutHandler5}>
				<ul>
					<li style={{ cursor: "pointer" }}>Privacy and Cookie Policy</li>
				</ul>
				<ul>
					<li style={{ cursor: "pointer" }}>Terms and Conditions</li>
				</ul>
			</div>

			<footer className='footer_mobile'>
				<div className='footer_element' onClick={onClickHandler1}>
					FOLLOW US
				</div>
				<div className='footer_element' onClick={onClickHandler2}>
					CORPORATE
				</div>
				<div className='footer_element' onClick={onClickHandler3}>
					NEWSLETTER
				</div>
				<div className='footer_element' onClick={onClickHandler4}>
					CUSTOMER SERVICE
				</div>
				<div className='footer_element' onClick={onClickHandler5}>
					LEGAL AREA
				</div>
			</footer>
			{backdrop && (
				<div className='backdrop_footer' onClick={onClickHandlerBackdrop}></div>
			)}
		</>
	);
};

export default Footer;
