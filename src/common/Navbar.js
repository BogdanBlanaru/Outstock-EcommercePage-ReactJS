import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [values, setValues] = useState([]);
	const [valuesCart, setValuesCart] = useState([]);

	useEffect(() => {
		const productListStorage = localStorage.getItem("productList");
		if (productListStorage) {
			const productArray = JSON.parse(productListStorage);
			setValues(productArray);
		}
	}, []);

	useEffect(() => {
		const productListStorage = localStorage.getItem("productListCart");
		if (productListStorage) {
			const productArray = JSON.parse(productListStorage);
			setValuesCart(productArray);
		}
	}, []);

	return (
		<div className='navbar'>
			<Link className='links' to='/'>
				Home
			</Link>
			<Link className='links' to='/products'>
				Products
			</Link>

			<Link className='links' to='/aboutus'>
				About Us
			</Link>

			<Link className='links' to='/'>
				<img className='style_logo' src={Logo} />
			</Link>

			<Link className='links' to='/wishlist'>
				Wishlist({values.length})
			</Link>
			<Link className='links' to='/cart'>
				Cart({valuesCart.length})
			</Link>
			<Link className='links' to='/checkout'>
				Checkout
			</Link>
		</div>
	);
};

export default Navbar;
