import React from "react";

const Table = (props) => {
	return (
		<tr key={props.products.id}>
			<td style={{ width: "5%" }}>
				<h5
					style={{ cursor: "pointer" }}
					onClick={() => {
						props.onDelete(props.products.id);
					}}>
					X
				</h5>
			</td>
			<td style={{ width: "10%" }}>
				<img src={props.products.image} alt='Product image' />
			</td>
			<td style={{ width: "30%" }}>
				<h4>{props.products.title}</h4>
			</td>
			<td style={{ width: "15%" }}>
				<h4>${props.products.price}</h4>
			</td>
			<td style={{ width: "15%" }}>
				<h4>In Stock</h4>
			</td>
			<td style={{ width: "25%" }}>
				<button
					onClick={() => {
						props.addToCart(props.products);
						props.addTotalAmount(1, props.products.price, props.products.id);
					}}
					style={{
						width: "75%",
						backgroundColor: "#323232",
						color: "#ffffff",
						padding: "10px",
						textAlign: "center",
						fontSize: "10px",
						fontWeight: "bold",
						border: "none",
					}}>
					ADD TO CART
				</button>
			</td>
		</tr>
	);
};

export default Table;
