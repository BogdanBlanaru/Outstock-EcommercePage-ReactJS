import React, { useState, useEffect } from "react";
import { addCalculatedTotalAmount } from "../Helpers";

const TableCart = (props) => {
	const [amount, setAmount] = useState(1);

	let totalArray = [];
	const total = (price) => {
		const total = (price * amount).toFixed(2);
		totalArray.push(total);

		return total;
	};

	useEffect(() => {
		const totalAmounts = [];
		for (let i = 0; i <= 20; i++) {
			if (localStorage.getItem(`amountList${i}`) !== null) {
				totalAmounts.push(JSON.parse(localStorage.getItem(`amountList${i}`)));
			}
		}
		const sumAmounts = totalAmounts.reduce((a, b) => a + b, 0);
		addCalculatedTotalAmount(sumAmounts);
	}, [amount]);

	return (
		<tr key={props.products.id}>
			<td style={{ width: "5%" }}>
				<h5
					style={{ cursor: "pointer" }}
					onClick={() => {
						props.onDelete(props.products.id);
						localStorage.removeItem(`amountList${props.products.id}`);
					}}>
					X
				</h5>
			</td>
			<td style={{ width: "25%" }}>
				<img src={props.products.image} alt='Product image' />
			</td>
			<td style={{ width: "25%" }}>
				<h4>{props.products.title}</h4>
			</td>
			<td style={{ width: "15%" }}>
				<h4>${props.products.price}</h4>
			</td>
			<td style={{ width: "15%" }}>
				<h4>
					<input
						type='number'
						min='1'
						placeholder='1'
						style={{ padding: "10%", textAlign: "center", width: "50%" }}
						onChange={(e) => {
							setAmount(e.target.value);
							props.addTotalAmount(
								e.target.value,
								props.products.price,
								props.products.id
							);
						}}
					/>
				</h4>
			</td>
			<td style={{ width: "15%" }}>
				<h4>${total(props.products.price)}</h4>
			</td>
		</tr>
	);
};

export default TableCart;
