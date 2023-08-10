import React,{useEffect}from "react";
import "./backToTop.css";
const BackToTop=()=>{
	const scrollToTop=()=>{
		window.scrollTo({
		top:0,
		left:0,
		behavior:"smooth",
	});
	};
	
	useEffect(()=>{
		window.scrollTo({
		top:0,
		left:0,
		behavior:"smooth",
	});
	},[window]);
	return(
	
		<div className="backToTop" onClick={scrollToTop}>
			<p>Back To Top</p>
		</div>
	)
}
export default BackToTop;
