import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import BurgerMenu from "../../assets/burgerMenu.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [values, setValues] = useState([]);
	const [valuesCart, setValuesCart] = useState([]);

	const [showBurgerMenu, setShowBurgerMenu] = useState(false);

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
		<>
			<div className='navbar'>
				<Link className='links responsive_linksleft' to='/'>
					Home
				</Link>
				<Link className='links responsive_linksleft' to='/products'>
					Products
				</Link>

				<Link className='links responsive_linksleft' to='/aboutus'>
					About Us
				</Link>

				<Link className='links responsive_logo' to='/'>
					<img className='style_logo' src={Logo} />
				</Link>

				<Link className='links responsive_linksright' to='/wishlist'>
					Wishlist({values.length})
				</Link>
				<Link className='links responsive_linksright' to='/cart'>
					Cart({valuesCart.length})
				</Link>
				<Link className='links responsive_linksright' to='/checkout'>
					Checkout
				</Link>
			</div>

			<div className='mobile_nav'>
				<Link className='mobile_logo' to='/'>
					<img className='style_logo' src={Logo} />
				</Link>
				<img
					src={BurgerMenu}
					alt='Burger Menu'
					className='burger_menu'
					onClick={() => {
						setShowBurgerMenu((prevShowBurgerMenu) => !prevShowBurgerMenu);
					}}
				/>
			</div>

			{showBurgerMenu && (
				<div className='mobile_menu'>
					<Link
						className='links'
						to='/'
						onClick={() => {
							setShowBurgerMenu(false);
						}}>
						Home
					</Link>
					<Link
						className='links'
						to='/products'
						onClick={() => {
							setShowBurgerMenu(false);
						}}>
						Products
					</Link>

					<Link
						className='links'
						to='/aboutus'
						onClick={() => {
							setShowBurgerMenu(false);
						}}>
						About Us
					</Link>

					<Link
						className='links'
						to='/wishlist'
						onClick={() => {
							setShowBurgerMenu(false);
						}}>
						Wishlist({values.length})
					</Link>
					<Link
						className='links'
						to='/cart'
						onClick={() => {
							setShowBurgerMenu(false);
						}}>
						Cart({valuesCart.length})
					</Link>
					<Link
						className='links'
						to='/checkout'
						onClick={() => {
							setShowBurgerMenu(false);
						}}>
						Checkout
					</Link>
				</div>
			)}
		</>
	);
};

export default Navbar;
