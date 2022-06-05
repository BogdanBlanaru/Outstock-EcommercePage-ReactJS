import React from "react";
import wishlistImg from "../assets/wishlist.jpg";
import LocationImg from "../assets/location.png";
import EmailImg from "../assets/mail.png";
import PhoneImg from "../assets/phone.png";
import Team1Img from "../assets/aboutus1.jpg";
import Team2Img from "../assets/aboutus2.jpg";
import Team3Img from "../assets/aboutus3.jpg";
import Team4Img from "../assets/aboutus4.jpg";
import "./Wishlist-Component.css";
import "./Checkout-Component.css";
import "./AboutUsComponent.css";
import "../assets/CircularDiagrams.css";
import useInput from "../Hooks/use-input";
import Subscribe from "../common/Subscribe";

const AboutUsComponent = () => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: enteredNameIsNotValid,
		valueChangeHandler: nameChangeHandler,
		valueBlurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== "");

	const {
		value: enteredEmailAdress,
		isValid: enteredEmailAdressIsValid,
		hasError: enteredEmailAdressIsNotValid,
		valueChangeHandler: emailAdressChangeHandler,
		valueBlurHandler: emailAdressBlurHandler,
		reset: resetEmailAdressInput,
	} = useInput((value) => value.includes("@"));

	const {
		value: enteredSubject,
		valueChangeHandler: subjectChangeHandler,
		reset: resetSubjectInput,
	} = useInput((value) => value);

	const {
		value: enteredMessage,
		valueChangeHandler: messageChangeHandler,
		reset: resetMessageInput,
	} = useInput((value) => value);

	let isValid = false;

	if (enteredNameIsValid && enteredEmailAdressIsValid) {
		isValid = true;
	}

	const formSubmitHandler = (e) => {
		e.preventDefault();

		if (!enteredNameIsValid) {
			return;
		}

		if (!enteredEmailAdressIsValid) {
			return;
		}

		resetNameInput();

		resetEmailAdressInput();

		resetSubjectInput();

		resetMessageInput();
	};

	const nameInputClasses = enteredNameIsNotValid
		? "invalid_input"
		: "form-control_input";

	const emailAdressInputClasses = enteredEmailAdressIsNotValid
		? "invalid_input"
		: "form-control_input";

	return (
		<>
			<div className='wishlist_container'>
				<img className='img_wishlist' src={wishlistImg} alt='Wishlist Image' />
				<h1 className='title_wishlist'>About Us</h1>
				<div className='two_components'>
					<div className='form_checkout'>
						<h2 style={{ marginLeft: "3%" }}>Find us here.</h2>
						<div className='findUs'>
							<img
								className='findUs_img'
								src={LocationImg}
								alt='Location Image'
							/>
							<div>
								<h4>Address:</h4>
								<p>1234 Heaven Stress, Beverly Hill, Melbourne, USA.</p>
							</div>
						</div>
						<div className='findUs'>
							<img className='findUs_img' src={EmailImg} alt='Email Image' />
							<div>
								<h4>Email:</h4>
								<p>Contact@erentheme.com</p>
							</div>
						</div>
						<div className='findUs'>
							<img className='findUs_img' src={PhoneImg} alt='Phone Image' />
							<div>
								<h4>Number Phone:</h4>
								<p>(800) 123 456 789, (800) 987 654 321</p>
							</div>
						</div>

						<p style={{ color: "#6c6c6c", margin: "5% 5%" }}>
							Outstock is a premium Templates theme with advanced admin module.
							It’s extremely customizable, easy to use and fully responsive and
							retina ready. Vel illum dolore eu feugiat nulla facilisis at vero
							eros et accumsan et iusto odio dignissim qui blandit praesent
							luptatum zzril delenit augue duis dolore te feugait nulla
							facilisi.
						</p>
					</div>

					<div className='form_checkout'>
						<h2 style={{ marginLeft: "3%" }}>Contact us</h2>
						<form onSubmit={formSubmitHandler} className='form_body'>
							<div className='control-group'>
								<div className='form-control'>
									<label
										htmlFor='name'
										className='form-control_label'
										style={{ color: "#6c6c6c" }}>
										Your Name (required)
									</label>
									<input
										type='text'
										id='name_aboutUs'
										onChange={nameChangeHandler}
										onBlur={nameBlurHandler}
										value={enteredName}
										className={nameInputClasses}
									/>
									{enteredNameIsNotValid && (
										<p className='error-text'>Name must not be empty.</p>
									)}
								</div>

								<div className='form-control'>
									<label
										htmlFor='email'
										className='form-control_label'
										style={{ color: "#6c6c6c" }}>
										Your Email (required)
									</label>
									<input
										type='text'
										id='email_aboutUs'
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
								<div className='form-control'>
									<label
										htmlFor='subject'
										className='form-control_label'
										style={{ color: "#6c6c6c" }}>
										Subject
									</label>
									<input
										type='text'
										id='subject_aboutUs'
										onChange={subjectChangeHandler}
										value={enteredSubject}
										className='form-control_input'
									/>
								</div>

								<div className='form-control'>
									<label
										htmlFor='message'
										className='form-control_label'
										style={{ color: "#6c6c6c" }}>
										Your Message
									</label>
									<textarea
										rows='5'
										cols='60'
										id='message_aboutUs'
										onChange={messageChangeHandler}
										value={enteredMessage}
										className='form-control_input'></textarea>{" "}
								</div>

								<div className='form-actions_aboutUs'>
									<button disabled={!isValid} style={{ fontSize: "1rem" }}>
										SEND
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>

				<div className='team'>
					<h1 style={{ marginTop: "6%" }}>MEET AWESOME TEAM</h1>
					<p style={{ color: "#686c6d" }}>
						Profesional and Outstanding Ideas of our passionate team makes us
						unique in every sense.
					</p>
					<div className='team_images' style={{ margin: "5% 0% 10% 0%" }}>
						<div className='member_container'>
							<img src={Team1Img} alt='Team Image' />
							<h3 style={{ width: "100%", margin: "2%" }}>JASON FORD</h3>
							<p style={{ color: "#686c6d" }}>Designer</p>
						</div>
						<div className='member_container'>
							<img src={Team2Img} alt='Team Image' />
							<h3 style={{ width: "100%", margin: "2%" }}>MICHAEL ANDREWS</h3>
							<p style={{ color: "#686c6d" }}>SEO Specialist</p>
						</div>
						<div className='member_container'>
							<img src={Team3Img} alt='Team Image' />
							<h3 style={{ width: "100%", margin: "2%" }}>SAMUEL BANKS</h3>
							<p style={{ color: "#686c6d" }}>Developer</p>
						</div>
						<div className='member_container'>
							<img src={Team4Img} alt='Team Image' />
							<h3 style={{ width: "100%", margin: "2%" }}>PIXEL CREATIVE</h3>
							<p style={{ color: "#686c6d" }}>Photography</p>
						</div>
					</div>
				</div>

				<div
					className='team'
					style={{ backgroundColor: "#ffffff", marginBottom: "5%" }}>
					<h1>OUR SKILLS</h1>
					<p style={{ color: "#686c6d", margin: "2% 0" }}>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</p>
					<div className='outside_measure'>
						<div className='progress-circle p90'>
							<span>90%</span>
							<div className='left-half-clipper'>
								<div className='first90-bar'></div>
								<div className='value-bar'></div>
							</div>
							<h3 className='competences'>HTML/CSS</h3>
						</div>
						<div className='progress-circle p85'>
							<span>85%</span>
							<div className='left-half-clipper'>
								<div className='first85-bar'></div>
								<div className='value-bar'></div>
							</div>
							<h3 className='competences'>JAVASCRIPT</h3>
						</div>
						<div className='progress-circle p70'>
							<span>70%</span>
							<div className='left-half-clipper'>
								<div className='first70-bar'></div>
								<div className='value-bar'></div>
							</div>
							<h3 className='competences'>REACT</h3>
						</div>
						<div className='progress-circle p60'>
							<span>60%</span>
							<div className='left-half-clipper'>
								<div className='first60-bar'></div>
								<div className='value-bar'></div>
							</div>
							<h3 className='competences'>NODEJS</h3>
						</div>
						<div className='progress-circle p50'>
							<span>50%</span>
							<div className='left-half-clipper'>
								<div className='first50-bar'></div>
								<div className='value-bar'></div>
							</div>
							<h3 className='competences'>ANGULAR</h3>
						</div>
					</div>
				</div>
			</div>
			<hr style={{ width: "100%" }} />
			<Subscribe />
		</>
	);
};

export default AboutUsComponent;
