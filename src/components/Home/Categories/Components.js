import React, { useState, useEffect } from "react";
import "./Category.css";

import imgCategory1 from "../../../assets/imgCategory1.jpg";
import imgCategory2 from "../../../assets/imgCategory2.jpg";
import imgCategory3 from "../../../assets/imgCategory3.jpg";
import imgCategory4 from "../../../assets/imgCategory4.jpg";
import Category from "./Category";

const Components = () => {
	const [component, setComponent] = useState([]);
	const [isLoadingCategories, setIsLoadingCategories] = useState(false);
	const images = [imgCategory1, imgCategory2, imgCategory3, imgCategory4];

	const fetchCategoriesHandler = async () => {
		setIsLoadingCategories(true);
		const response = await fetch(
			"https://fakestoreapi.com/products/categories"
		);
		const data = await response.json();

		const loadedCategories = [];
		const categories = data.map((category) => {
			return loadedCategories.push(category);
		});

		setComponent(loadedCategories);
		setIsLoadingCategories(false);
	};

	useEffect(() => {
		fetchCategoriesHandler();
	}, []);

	return (
		<div>
			{isLoadingCategories ? (
				<div
					style={{
						height: "10%",
						width: "100%",
						textAlign: "center",
						fontSize: "2.5rem",
					}}>
					Loading...
				</div>
			) : (
				<Category categories={component} images={images} />
			)}
		</div>
	);
};

export default Components;
