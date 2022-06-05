import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
	return (
		<div className='subscribe_section'>
			<h1 className='mobile_subscribe_title'>Get Discount Info</h1>
			<p
				style={{ color: "#9aa3b2", width: "50%" }}
				className='mobile_subscribe_description'>
				Subscribe to the Outstock mailing list to receive updates on new
				arrivals, special offers and other discount information.
			</p>
			<input
				type='text'
				placeholder='Subscribe to our newsletter...'
				className='subscribe_input'
			/>
			<hr className='subscribe_line' />
			<button className='subscribe_btn'>SUBSCRIBE!</button>
		</div>
	);
};

export default Subscribe;
