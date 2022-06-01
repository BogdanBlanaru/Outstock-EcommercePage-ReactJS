import React, { useState } from "react";

import "./Footer.css";

const Footer = () => {
	const [active1, setActive1] = useState(false);
	const [active2, setActive2] = useState(false);

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
	};
	const onMouseOutHandler2 = () => {
		setActive2(false);
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
				<div className='footer_element'>NEWSLETTER</div>
				<div className='footer_element'>CUSTOMER SERVICE</div>
				<div className='footer_element'>LEGAL AREA</div>
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
					<li>Stores</li>
					<li>Careers</li>
					<li>Investor Relations</li>
				</ul>
				<ul>
					<li>Outstock Family</li>
					<li>Outstock Journal</li>
					<li>Soustainability</li>
				</ul>
				<ul>
					<li>Outstock</li>
					<li>Outstock Home</li>
					<li>Outstock Originals</li>
				</ul>
			</div>
		</>
	);
};

export default Footer;
