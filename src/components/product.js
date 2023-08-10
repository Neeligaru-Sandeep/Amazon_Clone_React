import React from "react";
import "./product.css";
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import {useDispatch} from "react-redux";
import {addToBasket} from "../redux/actions";
const Product =({image,rating,title,price,id})=>{
	const dispatch = useDispatch();
	
	const onAddItemToBasket=()=>{
		const item = {
			id,
			title,
			price,
			image,
			rating,
		};
		dispatch(addToBasket({item}));
	};
	
	return(
		<div className="product-container">
			<div className="product">
				<p className="product-info">
					{title}
				</p>
				<p className="product-price">
					<span>$</span>
					<strong>{price}</strong>
				</p>
				
				<p className="product-rating">
					{Array(rating)
						.fill()
						.map((_,i)=>(
						<StarOutlinedIcon key={i}/>
					))
					}
				</p>
				
				<img src={image} className="product-image"/>
				
				<button className="addToBasket" onClick={onAddItemToBasket}>Add To Basket</button>
			</div>
		</div>
	)
}
export default Product;