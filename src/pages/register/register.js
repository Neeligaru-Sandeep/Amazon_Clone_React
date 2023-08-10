import React,{useState,useEffect}from "react";
import "./register.css";
import {Link,useNavigate} from "react-router-dom";
import AmazonLogo from "../.././images/login-log.svg";
import {registerInitiate} from "../.././redux/actions.js";
import {useDispatch,useSelector} from "react-redux";

const Register=()=>{

	const {user} = useSelector((state)=>state.data);
	let navigate = useNavigate();
	
	useEffect(()=>{
		if(user){
			navigate("/")
		}
	},[user,navigate]);
	
	let dispatch = useDispatch();
	
	const [data,setData] = useState({
		email:"",
		password:""
	});
	
	const submitHandler=(e)=>{
		e.preventDefault();
		console.log(data);	
		dispatch(registerInitiate(email,password));
	}
	
	const changeHandler=(e)=>{
		setData({...data,[e.target.name]:e.target.value});
	}
	
	const {email,password} = data;
	
  return(
	<div className="register-page">
		<Link to ="/">
			<img src={AmazonLogo} className="register-logo"/>
		</Link>
		
		<div className="register-container">
			<p className="register-title">Create Account</p>
				<form onSubmit={submitHandler}>	

					<div className="login-field">
						<label className="login-label">E-mail</label>
						<input type="email" required className="login-input" value={email} name="email"
						onChange={changeHandler}
						/>
					</div>
					
					<div className="login-field">
						<label className="login-label">Password</label>
						<input type="password" required className="login-input" value={password} name="password"
						onChange={changeHandler}/>
					</div>
					
					<div className="login-field ">
						<input type="submit" className="login-input submit" value="Create Your Account"/>
					</div>
					<hr className="register-underline"/>
					
					<div className="login-field">
						<p className="reg-login">Already have an account? 
							<Link to="/login">
								 Sign In
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	)
}
export default Register;