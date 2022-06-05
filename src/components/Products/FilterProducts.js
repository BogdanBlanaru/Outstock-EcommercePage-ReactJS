import React, { useState, useEffect } from "react";
import "./FilterProducts.css";
import Product from "../ProductCard/Product";
import Subscribe from "../../common/Subscribe/Subscribe";

const FilterProducts = () => {
	const [filter, setFilter] = useState([]);
	const [products, setProducts] = useState([]);
	const [categoryToSet, setCategoryToSet] = useState(null);
	const [displayCategory, setDisplayCategory] = useState(false);
	const [inputValue, setInputValue] = useState(null);
	const [inputOptionValue, setInpuOptionValue] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isLoadingCategories, setIsLoadingCategories] = useState(false);

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

		setFilter(loadedCategories);
		setIsLoadingCategories(false);
	};

	useEffect(() => {
		fetchCategoriesHandler();
	}, []);

	const fetchProductsHandler = async () => {
		setIsLoading(true);
		const response = await fetch("https://fakestoreapi.com/products");

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

	const filterByCategory = (arrayProducts, categoryClicked) => {
		return arrayProducts.filter((product) => {
			if (product.category === categoryClicked) return true;
		});
	};

	const filterByName = (arrayProducts, productSearched) => {
		if (productSearched === null) return arrayProducts;

		return arrayProducts.filter((product) => {
			if (
				product.title
					.toLowerCase()
					.includes(productSearched.toLowerCase().trim())
			)
				return true;
		});
	};

	const inputOptionHandler = (e) => {
		setInpuOptionValue(e.target.value);
	};

	const sortedLowHigh = (arrayProducts) => {
		return arrayProducts.sort((a, b) => {
			return a.price - b.price;
		});
	};

	const sortedHighLow = (arrayProducts) => {
		return arrayProducts.sort((a, b) => {
			return b.price - a.price;
		});
	};

	if (inputOptionValue === "low to high") {
		sortedLowHigh(products);
	} else if (inputOptionValue === "high to low") {
		sortedHighLow(products);
	}

	return (
		<>
			<div className='filter_products'>
				<div className='tools_mobile'>
					<input
						style={{ padding: "1%", width: "80%" }}
						type='text'
						placeholder='Search...'
						onChange={(e) => {
							setInputValue(e.target.value);
						}}
					/>
					<form action='/action_page.php' className='input_select'>
						<select
							style={{ padding: "1%", width: "80%" }}
							onChange={inputOptionHandler}>
							<option value='default sorting'>Default sorting</option>
							<option value='low to high'>Sort by price: low to high</option>
							<option value='high to low'>Sort by price: high to low</option>
						</select>
					</form>
				</div>

				<div className='filters'>
					<h3>Product Categories</h3>
					{isLoadingCategories ? (
						<div
							style={{
								width: "100%",
								textAlign: "left",
								fontSize: "1rem",
								marginTop: "5%",
								marginLeft: "30%",
							}}>
							Loading...
						</div>
					) : (
						<ul className='filter_categories'>
							<li
								onClick={() => {
									setDisplayCategory(false);
								}}>
								All products
							</li>
							{filter.map((category) => {
								return (
									<li
										key={Math.random()}
										onClick={() => {
											setCategoryToSet(category);
											setDisplayCategory(true);
										}}>
										{category}
									</li>
								);
							})}
						</ul>
					)}
				</div>
				<div className='list_products'>
					<div className='tools'>
						<input
							style={{ padding: "1%", width: "30%" }}
							type='text'
							placeholder='Search...'
							onChange={(e) => {
								setInputValue(e.target.value);
							}}
						/>
						<form action='/action_page.php' className='input_select'>
							<select
								style={{ padding: "1.5%", width: "30%" }}
								onChange={inputOptionHandler}>
								<option value='default sorting'>Default sorting</option>
								<option value='low to high'>Sort by price: low to high</option>
								<option value='high to low'>Sort by price: high to low</option>
							</select>
						</form>
					</div>
					{isLoading ? (
						<div
							style={{
								width: "100%",
								textAlign: "center",
								fontSize: "2rem",
								margin: "5% 0",
							}}>
							Loading...
						</div>
					) : (
						<div className='container_filtered'>
							{displayCategory
								? filterByName(
										filterByCategory(products, categoryToSet),
										inputValue
								  ).map((product) => {
										return <Product products={product} key={product.id} />;
								  })
								: filterByName(products, inputValue).map((product) => {
										return <Product products={product} key={product.id} />;
								  })}
						</div>
					)}
				</div>
			</div>
			<hr style={{ width: "100%" }} />
			<Subscribe />
		</>
	);
};

export default FilterProducts;
