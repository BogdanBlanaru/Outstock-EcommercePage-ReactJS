import React, { useState } from "react";

import Slider from "../components/Home/Slider/Slider";
import Components from "../components/Home/Categories/Components";
import TrendingProducts from "../components/Home/TrendingProducts/TrendingProducts";
import SaleOf from "../components/Home/SaleOff/SaleOf";
import Footer from "../common/Footer/Footer";
import SubscribeModal from "../modals/SubscribeModal";

const Home = () => {
	const [subscribe, setSubscribe] = useState(true);

	const onCloseHandler = () => {
		setSubscribe(false);
	};

	return (
		<div>
			{subscribe && <SubscribeModal onClose={onCloseHandler} />}
			<Slider />
			<Components />
			<TrendingProducts />
			<SaleOf />
			<Footer />
		</div>
	);
};

export default Home;
