export const addToWishlist = (product) => {
	const productListStorage = localStorage.getItem("productList");
	if (productListStorage === null) {
		const productList = [];
		productList.push(product);
		localStorage.setItem("productList", JSON.stringify(productList));
	} else {
		const storageArray = JSON.parse(productListStorage);
		if (
			!storageArray.find((productStorage) => {
				return productStorage.id === product.id;
			})
		) {
			storageArray.push(product);
			localStorage.setItem("productList", JSON.stringify(storageArray));
		}
	}
};

export const addToCart = (product) => {
	const productListStorage = localStorage.getItem("productListCart");
	if (productListStorage === null) {
		const productList = [];
		productList.push(product);
		localStorage.setItem("productListCart", JSON.stringify(productList));
	} else {
		const storageArray = JSON.parse(productListStorage);
		if (
			!storageArray.find((productStorage) => {
				return productStorage.id === product.id;
			})
		) {
			storageArray.push(product);
			localStorage.setItem("productListCart", JSON.stringify(storageArray));
		}
	}
};

export const addTotalAmount = (amount, price, id) => {
	const amountListStorage = localStorage.getItem(`amountList${id}`);
	if (amountListStorage === null) {
		// const amountList = [];
		// amountList.push(amount * price);
		localStorage.setItem(`amountList${id}`, JSON.stringify(amount * price));
	} else {
		const storageArray = JSON.parse(amountListStorage);
		const amountId = id;
		if (amountId === id) {
			// storageArray.splice(0, storageArray.length);
			// storageArray.push(amount * price);
			let storageArray = "";
			storageArray = amount * price;
			localStorage.setItem(`amountList${id}`, JSON.stringify(storageArray));
		} else if (amountId !== id) {
			storageArray.push(amount * price);
			localStorage.setItem(`amountList${id}`, JSON.stringify(storageArray));
		}
	}
};

export const addCalculatedTotalAmount = (totalAmount) => {
	const totalAmountStorage = localStorage.getItem("totalAmountList");
	if (totalAmountStorage === null) {
		localStorage.setItem("totalAmountList", JSON.stringify(totalAmount));
	} else {
		let storageAmount = JSON.parse(totalAmountStorage);

		storageAmount = "";
		storageAmount = totalAmount;
		localStorage.setItem("totalAmountList", JSON.stringify(storageAmount));
	}
};
