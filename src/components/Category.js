import React from "react";
import "./Category.css";

import { Link } from "react-router-dom";

const Category = (props) => {
	return (
		<div className='components'>
			{props.categories.map((element, index) => {
				return (
					<div className='category' key={Math.random()}>
						<h1 className='element'>{element}</h1>
						<Link className='link_category' to='/products'>
							<p>Discover now</p>
						</Link>
						<img className='img_category' src={props.images[index]} />
					</div>
				);
			})}
		</div>
	);
};

export default Category;
