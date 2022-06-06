import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleProductPage.css";
import Footer from "../common/Footer/Footer";
import Product from "../components/ProductCard/Product";
import { addToWishlist, addToCart, addTotalAmount } from "../Helpers";
import HeartImg from "../assets/heart.png";
import FacebookImg from "../assets/facebook.png";
import TwitterImg from "../assets/twitter.png";
import YoutubeImg from "../assets/youtube.png";
import InstagramImg from "../assets/instagram.png";
import TiktokImg from "../assets/tiktok.png";
import Subscribe from "../common/Subscribe/Subscribe";

const SinglePageProduct = () => {
	const params = useParams();
	const [products, setProducts] = useState("");
	const [relatedProducts, setRelatedProducts] = useState([]);

	const getProduct = async (productId) => {
		const responseData = await fetch(
			"https://fakestoreapi.com/products/" + productId
		);
		const apiProduct = await responseData.json();
		setProducts(apiProduct);
	};

	useEffect(() => {
		if (params && params.productId) {
			getProduct(params.productId);
		}
	}, [params]);

	const fetchProductsHandler = async () => {
		const response = await fetch(
			`https://fakestoreapi.com/products/category/${products.category}?limit=4`
		);

		const data = await response.json();

		const loadedProducts = [];
		const product = data.map((data) => {
			return loadedProducts.push(data);
		});

		setRelatedProducts(loadedProducts);
	};

	useEffect(() => {
		fetchProductsHandler();
	}, [products]);

	return (
		<div className='singlepage_product'>
			<div className='product_details'>
				<img
					src={products.image}
					alt='Product Image'
					className='singleproduct_image'
				/>
				<div className='singleproduct_informations'>
					<h2 style={{ marginBottom: "3%" }}>{products.title}</h2>
					<p>{products.description}</p>
					<h2 style={{ marginTop: "10%", marginBottom: "4%" }}>
						${products.price}
					</h2>
					<hr
						style={{
							margin: "1% 0",
						}}
					/>
					<div
						style={{
							display: "flex",
							justifyContent: "space-evenly",
							alingItems: "center",
							marginBottom: "5%",
						}}>
						<button
							onClick={() => {
								addToCart(products);
								addTotalAmount(1, products.price, products.id);
							}}
							style={{
								width: "60%",
								backgroundColor: "#323232",
								color: "#ffffff",
								padding: "10px",
								textAlign: "center",
								fontSize: "12px",
								fontWeight: "bold",
								border: "none",
							}}>
							ADD TO CART
						</button>
						<div
							className='buttons_singleproduct'
							onClick={() => {
								addToWishlist(products);
							}}>
							<img className='heart_img' src={HeartImg} />
						</div>
					</div>
					<hr
						style={{
							margin: "1% 0",
						}}
					/>
					<h4>Category: {products.category}</h4>
					<div className='shareProduct_singleProduct'>
						<h4>Share This Product:</h4>
						<div className='social_media_singleProduct'>
							<img src={FacebookImg} alt='Social Media Image' />
							<img src={TwitterImg} alt='Social Media Image' />
							<img src={YoutubeImg} alt='Social Media Image' />
							<img src={InstagramImg} alt='Social Media Image' />
							<img src={TiktokImg} alt='Social Media Image' />
						</div>
					</div>
				</div>
			</div>
			<div className='tabbed_component'>
				<h3>Description</h3>
				{/* <h3>Reviews</h3> */}
			</div>
			<p className='tabbedcomponent_description'>
				{products.description}
				<br></br>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
				augue nec est tristique auctor. Donec non est at libero vulputate
				rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi,
				vulputate adipiscing cursus eu, suscipit id nulla.<br></br>
				Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
				sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce
				ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate,
				sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem
				ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et
				placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis
				mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam
				gravida vehicula tellus, in imperdiet ligula euismod eget.
			</p>

			<h1 className='title_relatedproducts'>Related Products</h1>
			<hr className='line_relatedproducts' />
			<div className='list_relatedproducts'>
				<div className='container_relatedproducts'>
					{relatedProducts.map((product) => {
						return <Product products={product} key={product.id} />;
					})}
				</div>
			</div>
			<Subscribe />
			<Footer />
		</div>
	);
};

export default SinglePageProduct;
