import React from "react";
import "./subHeader.css";
import MenuIcon from '@material-ui/icons/Menu';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
const SubHeader=()=>{
	return(
	<div>
		<div className="sub-header">
			<ul className="sub-header-link">
				<li><MenuIcon className="sub-header-menu"/></li>
				<li>All</li>
				<li className="big-screen-only">Best Sellers</li>
				<li>Mobiles</li>
				<li className="big-screen-only">Customer Service</li>
				<li>Books</li>
				<li className="big-screen-only">Today's Deals</li>
				<li className="big-screen-only">Electronics</li>
				<li>Fashion</li>
				<li>Prime</li>
			</ul>
			<img src={require(".././images/subHeaderImage.jpg")} className="big-screen-only img" />	
			
			<div className="mobile-search-location">
				<input type="text" className="mobileSearch" placeholder="Search for products"/>
				<SearchOutlinedIcon className="mobileSearchIcon"/>
			</div>
		</div>	
	</div>	
	)
}
export default SubHeader;