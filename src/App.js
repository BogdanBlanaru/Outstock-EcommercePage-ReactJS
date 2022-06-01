import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Products from "./views/Products";
import AboutUs from "./views/AboutUs";
import Wishlist from "./views/Wishlist";
import Cart from "./views/Cart";
import Checkout from "./views/Checkout";
import SinglePageProduct from "./views/SingleProductPage";
import Navbar from "./common/Navbar";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/products' element={<Products />}></Route>
					<Route path='/aboutus' element={<AboutUs />}></Route>
					<Route path='/wishlist' element={<Wishlist />}></Route>
					<Route path='/cart' element={<Cart />}></Route>
					<Route path='/checkout' element={<Checkout />}></Route>
					<Route
						path='/singleproductpage/:productId'
						element={<SinglePageProduct />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
