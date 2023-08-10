import React from "react";
import "./header.css";
import {Link} from "react-router-dom";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {useSelector,useDispatch} from "react-redux";
import {logoutInitiate} from ".././redux/actions.js";

const Header=()=>{
	const {user,basket} = useSelector((state)=>state.data);
	let dispatch = useDispatch();
	const handleAuth=()=>{
		if(user){
			dispatch(logoutInitiate());
		}
	}
	return(
	
		<div className="header">
			<Link to="/">
				<img src={require(".././images/amazon-logo.png")} className="amazon_logo"/>
			</Link>	
			<div className="header-location">
				<span className="locationOptionLineOne">Hello</span>
				<p className="locationOptionLineTwo">
				<LocationOnOutlinedIcon className="locationIcon"/>
				Select Your Address</p>
			</div>
			
			<div className="search-location">
				<select className="header-select">
					<option>All</option>
				</select>
				<input type="text" className="headerSearchInput"/>
				<i><SearchOutlinedIcon className="headerSearchIcon"/></i>
			</div>
			
			<div className="header-country-location">
				<span className="header-amazon-language">English</span>
				<span className="header-country-expand">
					<img src={require(".././images/India.png")} className="header-india-image"/>
					<ArrowDropDownIcon className="expand"/>
				</span>
			</div>
			
			<div className="nav">
			
				<Link to={`${user ? "/" : "/login"}`} className="header-link">
					<div className="nav-option" onClick={handleAuth}>
						<span className="optionLineOne respHide">Hello, {user ? user.email : "Guest"}</span>
						<span className="optionLineTwo respSign">{user ? "Sign out":"Sign in"}</span>
					</div>
				</Link>
				
				<div className="nav-option returns">
					<span className="optionLineOne">Returns</span>
					<span className="optionLineTwo">&Orders</span>
				</div>
				
				<Link to="/checkout" className="header-link">
					<div className="shopping-basket">
						<ShoppingCartOutlinedIcon className="header-basket-icon"/>
						<span className="basketCount">{basket.length}</span>
					</div>
				</Link>
			</div>
			
		</div>
			

	)
}
export default Header;