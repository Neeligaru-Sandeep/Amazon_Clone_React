import React,{useState,useEffect}from "react";
import "./login.css";
import {Link,useNavigate} from "react-router-dom";
import AmazonLogo from "../.././images/login-log.svg";
import {loginInitiate} from "../.././redux/actions.js";
import {useDispatch,useSelector} from "react-redux";
const Login=()=>{
	
	const {user} = useSelector((state)=>state.data);
	let navigate = useNavigate();
	
	useEffect(()=>{
		if(user){
			navigate("/");
		}
	},[user,navigate]);
	
	let dispatch = useDispatch();
	
	const [data,setData] = useState({
		email:"",
		password:""
		
	});
	
	const {email,password} = data;
	
	const submitHandler=(e)=>{
		e.preventDefault();
		console.log(data);
		dispatch(loginInitiate(email,password));
	}
	
	const changeHandler=(e)=>{
		setData({...data,[e.target.name]:e.target.value});
	}
	return(
		<div className="login-page" >
			<Link to="/">
				<img src={AmazonLogo} className="login-logo"/>
			</Link>
				
			<div className="login-form-container">
				<form onSubmit={submitHandler}>
					<p className="login-title">Sign-in</p>
					
					<div className="login-field">
						<label className="login-label">E-mail</label>
						<input type="email" required className="login-input"
						name="email" value={email} onChange={changeHandler}
						/>
					</div>
					
					<div className="login-field">
						<label className="login-label">Password</label>
						<input type="password" required className="login-input"
						name="password" value={password} onChange={changeHandler}
						/>
					</div>
					
					<div className="login-field">
						<input type="submit" className="login-input submit" value="Sign In"/>
					</div>
					
					<div className="login-field">
						<p className="login-conditions">By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.</p>
					</div>
					
					<div className="login-field">
						<p className="newToAmazon">New To Amazon</p>
					</div>
					
					<Link to="/register">
						<div className="login-field">
							<button className="login-input">Create Your Amazon Account</button>
						</div>
					</Link>
				</form>
			</div>
		</div>
	)
}
export default Login;