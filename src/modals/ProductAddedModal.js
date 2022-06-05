import React from "react";

import "./SubscribeModal.css";

const ProductAddedModal = (props) => {
	return (
		<>
			<div className='backdrop'></div>
			<div className='modal_productAdded'>
				<h4>
					<span style={{ color: "#bd8348" }}>{props.titleProductAdded}</span>{" "}
					added
				</h4>
			</div>
		</>
	);
};

export default ProductAddedModal;
