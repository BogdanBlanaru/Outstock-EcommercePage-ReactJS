import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./TrendingProducts.css";
import ImgTrending1 from "../assets/imgTrending1.jpg";
import ImgTrending2 from "../assets/imgTrending2.jpg";
import Subscribe from "../common/Subscribe";

const TrendingProducts = () => {
	const [products, setProducts] = useState([]);

	const [isLoading, setIsLoading] = useState(false);

	const fetchProductsHandler = async () => {
		setIsLoading(true);
		const response = await fetch("https://fakestoreapi.com/products?limit=8");

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
		<div className='trending_products'>
			<h1 className='title'>Trending Products</h1>
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
					<div className='container'>
						{products.map((product) => {
							return <Product products={product} key={product.id} />;
						})}
					</div>
				</div>
			)}
			<div className='two_products'>
				<div className='bottles'>
					<h3 className='subtitle_bottles'>Products essentials</h3>
					<h1 className='title_bottles'>Bottle With Wooden Cork</h1>
					<p
						style={{
							fontSize: "13px",
							color: "#7a7c7d",
							position: "relative",
							left: "3%",
						}}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam.
					</p>
					<button className='btn_bottles'>BUY NOW / $196.98</button>

					<img className='img_bottles' src={ImgTrending1} />
				</div>
				<div className='bottles'>
					<h3 className='subtitle_bottles'>Products essentials</h3>
					<h1 className='title_bottles'>Hauteville Plywood Chair</h1>
					<p
						style={{
							fontSize: "13px",
							color: "#7a7c7d",
							position: "relative",
							left: "3%",
						}}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam.
					</p>
					<button className='btn_bottles'>BUY NOW / $196.98</button>

					<img className='img_bottles' src={ImgTrending2} />
				</div>
			</div>
			<Subscribe />
		</div>
	);
};

export default TrendingProducts;
