import React from "react";
import "./checkout.css";
import CheckoutProduct from "../.././components/checkoutProduct.js";
import {useSelector} from "react-redux";
import chekoutImage from "../.././images/checkoutImg.jpg";
const Checkout =()=>{
	const {user,basket} = useSelector((state)=>state.data);
	return(
		<div className="check_out">
			<div className="check_out_left">
			
				<img src={chekoutImage}/>
				<h4>Hello,{user?.email}</h4>
				<h2 className="checkout_title">
				{basket.length===0 ? "Your Shopping Basket Is Empty" : "Your Shopping Basket"}
				</h2>
				
				{basket && basket.map((item)=>(
				<CheckoutProduct 
					key={item.id}
					id={item.id}
					title={item.title} 
					rating={item.rating} 
					image={item.image}
					price={item.price}
					
					/>
			))}
				
				
			</div>
			
			
		</div>
	)
}
export default Checkout;