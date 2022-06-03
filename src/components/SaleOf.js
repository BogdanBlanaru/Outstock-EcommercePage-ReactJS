import React, { useEffect, useState } from "react";
import Product from "./Product";
import Brand1Img from "../assets/brand-01.png";
import Brand2Img from "../assets/brand-02.png";
import Brand3Img from "../assets/brand-03.png";
import Brand4Img from "../assets/brand-04.png";
import Brand5Img from "../assets/brand-05.png";
import Brand6Img from "../assets/brand-06.png";
import "./TrendingProducts.css";
import "./SaleOf.css";
import Subscribe from "../common/Subscribe";

const SaleOf = () => {
	const [products, setProducts] = useState([]);

	const [isLoading, setIsLoading] = useState(false);

	const [changingImg1, setChangingImg1] = useState(Brand1Img);
	const [changingImg2, setChangingImg2] = useState(Brand2Img);
	const [changingImg3, setChangingImg3] = useState(Brand3Img);
	const [changingImg4, setChangingImg4] = useState(Brand4Img);
	const [changingImg5, setChangingImg5] = useState(Brand5Img);

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

	useEffect(() => {
		let imgs1 = [Brand1Img, Brand2Img];

		let i1 = 0;

		const changeImg1 = function () {
			if (++i1 >= imgs1.length) i1 = 0;
			setChangingImg1(imgs1[i1]);
		};

		setInterval(changeImg1, 3000);

		let imgs2 = [Brand2Img, Brand3Img];

		let i2 = 0;

		const changeImg2 = function () {
			if (++i2 >= imgs2.length) i2 = 0;
			setChangingImg2(imgs2[i2]);
		};

		setInterval(changeImg2, 3000);

		let imgs3 = [Brand3Img, Brand4Img];

		let i3 = 0;

		const changeImg3 = function () {
			if (++i3 >= imgs3.length) i3 = 0;
			setChangingImg3(imgs3[i3]);
		};

		setInterval(changeImg3, 3000);

		let imgs4 = [Brand4Img, Brand5Img];

		let i4 = 0;

		const changeImg4 = function () {
			if (++i4 >= imgs4.length) i4 = 0;
			setChangingImg4(imgs4[i4]);
		};

		setInterval(changeImg4, 3000);

		let imgs5 = [Brand5Img, Brand6Img];

		let i5 = 0;

		const changeImg5 = function () {
			if (++i5 >= imgs5.length) i5 = 0;
			setChangingImg5(imgs5[i5]);
		};

		setInterval(changeImg5, 3000);
	}, []);

	return (
		<div className='saleof_products'>
			<h1 className='title_saleoff'>Sale Off</h1>
			<hr className='horizontal_line_saleoff' />
			<p className='description_saleoff'>
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
				<div className='list_saleof'>
					<div className='container_saleof'>
						{products.map((product) => {
							return <Product products={product} key={product.id} />;
						})}
					</div>
				</div>
			)}
			<div className='saleoff_brands'>
				<img
					src={changingImg1}
					alt='Brand Image'
					className='saleoff_brandImg'
				/>
				<img
					src={changingImg2}
					alt='Brand Image'
					className='saleoff_brandImg'
				/>
				<img
					src={changingImg3}
					alt='Brand Image'
					className='saleoff_brandImg'
				/>
				<img
					src={changingImg4}
					alt='Brand Image'
					className='saleoff_brandImg'
				/>
				<img
					src={changingImg5}
					alt='Brand Image'
					className='saleoff_brandImg'
				/>
			</div>
			<Subscribe />
		</div>
	);
};

export default SaleOf;
