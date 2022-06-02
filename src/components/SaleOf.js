import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./TrendingProducts.css";
import "./SaleOf.css";

const SaleOf = () => {
	const [products, setProducts] = useState([]);

	const [isLoading, setIsLoading] = useState(false);

	const fetchProductsHandler = async () => {
		setIsLoading(true);
		const response = await fetch("https://fakestoreapi.com/products?limit=5");

		const data = await response.json();

		const loadedProducts = [];
		const product = data.map((data) => {
			return loadedProducts.push(data);
		});

		setProducts(loadedProducts);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchProductsHandler();
	}, []);

	return (
		<div className='saleof_products'>
			<h1 className='title'>Sale Off</h1>
			<hr className='horizontal_line' />
			<p className='description'>
				Mirum est notare quam littera gothica quam nunc putamus parum claram!
			</p>
			{isLoading ? (
				<div
					style={{
						height: "45%",
						width: "100%",
						textAlign: "center",
						fontSize: "2.5rem",
					}}>
					Loading...
				</div>
			) : (
				<div className='list'>
					<div className='container_saleof'>
						{products.map((product) => {
							return <Product products={product} key={product.id} />;
						})}
					</div>
				</div>
			)}
		</div>
	);
};

export default SaleOf;
