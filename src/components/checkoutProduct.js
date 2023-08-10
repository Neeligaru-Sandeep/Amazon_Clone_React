import React from "react";
import "./checkoutProduct.css";
import {useDispatch} from "react-redux";
import StarIcon from '@material-ui/icons/Star';
import {removeFromBasket} from "../redux/actions.js";
const CheckoutProduct=({title,image,rating,price,id})=>{
	let dispatch = useDispatch();
	const removeItemFromBasket = ()=>{
		dispatch(removeFromBasket(id));
	}
	return(
		<div className="checkout-product">
				<div className="selectedCheckoutImageArea">
					<img src={image} className="chekoutProductSelected"/>	
				</div>			
			<div className="checkoutProductDetails">
				<p className="checkoutTitle">{title}</p>
				<p className="product-price">
					<span>$</span>
					<strong className="checkoutPrice">{price}</strong>
				</p>
				<p className="checkoutItemStars">{Array(rating)
					.fill()
					.map((_,i)=>(
					<StarIcon/>
				))
				}</p>
				<button className="checkoutRemoveItem" onClick={removeItemFromBasket}>Remove item from cart</button>
			</div>
		</div>
	)
}
export default CheckoutProduct;