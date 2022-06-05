import React, { useState, useEffect } from "react";

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	CardImg,
} from "reactstrap";
import HeartImg from "../../assets/heart.png";
import "./Product.css";
import { addToWishlist } from "../../Helpers";
import { Link } from "react-router-dom";
import ProductAddedModal from "../../modals/ProductAddedModal";

const Product = (props) => {
	const [classes, setClasses] = useState(false);

	const [productAdded, setProductAdded] = useState(false);

	const displayedProduct = classes
		? "buttons_product"
		: "buttons_product invalid";

	const onMouseOverHandler = () => {
		setClasses(true);
	};

	const onMouseOutHandler = () => {
		setClasses(false);
	};

	return (
		<>
			<Card
				key={props.products.id}
				className='card_product'
				onMouseOver={onMouseOverHandler}
				onMouseOut={onMouseOutHandler}>
				<Link
					to={"/singleproductpage/" + props.products.id}
					className='card_link'>
					<CardImg className='card_image' src={props.products.image} />
					<CardBody className='card_body'>
						<CardTitle className='card_title' tag='h2'>
							{props.products.title}
						</CardTitle>

						<CardText className='card_description'>
							{props.products.description}
						</CardText>

						<CardSubtitle className='card_price' tag='h4'>
							${props.products.price}
						</CardSubtitle>
					</CardBody>
				</Link>
				<div
					className={displayedProduct}
					onClick={() => {
						addToWishlist(props.products);
						setProductAdded(true);
						setInterval(() => {
							setProductAdded(false);
						}, 1500);
					}}>
					<img className='heart_img' src={HeartImg} />
				</div>

				<div
					className='buttons_productMobile'
					onClick={() => {
						addToWishlist(props.products);
						setProductAdded(true);
						setInterval(() => {
							setProductAdded(false);
						}, 1500);
					}}>
					<img className='heart_img' src={HeartImg} />
				</div>
			</Card>

			{productAdded && (
				<ProductAddedModal titleProductAdded={props.products.title} />
			)}
		</>
	);
};

export default Product;
