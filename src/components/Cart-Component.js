import React, { useState, useEffect } from "react";

import TableCart from "./TableCart";
import Subscribe from "../common/Subscribe";
import wishlistImg from "../assets/wishlist.jpg";
import "./Wishlist-Component.css";
import { addTotalAmount } from "../Helpers";
import { Link } from "react-router-dom";

const CartComponent = () => {
	const [values, setValues] = useState([]);
	const [value, setValue] = useState(0);

	const onDelete = (id) => {
		const filteredArray = values.filter((product) => {
			return product.id !== id;
		});
		setValues(filteredArray);
		localStorage.setItem("productListCart", JSON.stringify(filteredArray));
	};

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
			<h1 className='title_wishlist'>Cart</h1>
			<table className='table'>
				<caption>My cart on outstock</caption>
				<thead>
					<tr>
						<th style={{ width: "5%" }}></th>
						<th style={{ width: "25%" }}></th>
						<th style={{ width: "25%" }}>Product Name</th>
						<th style={{ width: "15%" }}>Price</th>
						<th style={{ width: "15%" }}>Quantity</th>
						<th style={{ width: "15%" }}>Total</th>
					</tr>
				</thead>
				<tbody>
					{values.length === 0 && (
						<tr>
							<td colSpan={6}>No products added to the cart</td>
						</tr>
					)}
					{values.map((product) => {
						return (
							<TableCart
								products={product}
								key={product.id}
								onDelete={onDelete}
								addTotalAmount={addTotalAmount}
							/>
						);
					})}
				</tbody>
			</table>

			<table className='table_total'>
				<caption>Cart totals</caption>
				<tbody>
					<tr>
						<td>
							<h3>Total</h3>
						</td>
						<td>
							<h3>${value.toFixed(2)}</h3>
						</td>
						<td>
							<button
								onClick={() => {
									const totalAmountStorage =
										localStorage.getItem("totalAmountList");
									if (totalAmountStorage) {
										const totalAmount = JSON.parse(totalAmountStorage);
										setValue(totalAmount);
									}
								}}
								style={{
									width: "100%",
									backgroundColor: "#323232",
									color: "#ffffff",
									padding: "10px",
									textAlign: "center",
									fontSize: "10px",
									fontWeight: "bold",
									border: "none",
								}}>
								UPDATE CART TOTAL
							</button>
						</td>
					</tr>
				</tbody>
			</table>
			<Link to='/checkout'>
				<button className='proceedCheckout_btn'>PROCEED TO CHECKOUT</button>
			</Link>
			<hr style={{ width: "100%", marginTop: "7%" }} />
			<Subscribe />
		</div>
	);
};

export default CartComponent;
