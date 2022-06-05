import React, { useState, useEffect } from "react";
import wishlistImg from "../../assets/wishlist.jpg";
import "./Wishlist-Component.css";

import Table from "./Table";
import Subscribe from "../../common/Subscribe/Subscribe";
import { addToCart, addTotalAmount } from "../../Helpers";

const WishlistComponent = () => {
	const [values, setValues] = useState([]);

	const onDelete = (id) => {
		const filteredArray = values.filter((product) => {
			return product.id !== id;
		});
		setValues(filteredArray);
		localStorage.setItem("productList", JSON.stringify(filteredArray));
	};

	useEffect(() => {
		const productListStorage = localStorage.getItem("productList");
		if (productListStorage) {
			const productArray = JSON.parse(productListStorage);
			setValues(productArray);
		}
	}, []);

	return (
		<div className='wishlist_container'>
			<img className='img_wishlist' src={wishlistImg} alt='Wishlist Image' />
			<h1 className='title_wishlist'>Wishlist</h1>
			<table className='table'>
				<caption>My wishlist on outstock</caption>
				<thead>
					<tr>
						<th style={{ width: "5%" }}></th>
						<th style={{ width: "10%" }}></th>
						<th style={{ width: "30%" }}>Product Name</th>
						<th style={{ width: "15%" }}>Unit Price</th>
						<th style={{ width: "15%" }}>Stock Status</th>
						<th style={{ width: "25%" }}></th>
					</tr>
				</thead>
				<tbody>
					{values.length === 0 && (
						<tr>
							<td colSpan={6}>No products added to the wishlist</td>
						</tr>
					)}
					{values.map((product) => {
						return (
							<Table
								products={product}
								key={product.id}
								onDelete={onDelete}
								addToCart={addToCart}
								addTotalAmount={addTotalAmount}
							/>
						);
					})}
				</tbody>
			</table>
			<Subscribe />
		</div>
	);
};

export default WishlistComponent;
