import './App.css';
import React,{useEffect}from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/header.js";
import SubHeader from "./components/subHeader.js";
import Home from "./pages/home/home.js";
import BackToTop from "./components/backToTop.js";
import Login from "./pages/login/login.js";
import Register from "./pages/register/register.js";
import {useDispatch,useSelector} from "react-redux";
import {setUser} from "./redux/actions.js";
import {auth} from "./redux/actions.js";
import Chectout from "./pages/checkout/checkout.js";
function App() {
	let dispatch = useDispatch();
	
	const {user} = useSelector((state)=>state.data);
	
	useEffect(()=>{
		auth.onAuthStateChanged((user)=>{
			if(user){
				dispatch(setUser(user));
			}else{
				dispatch(setUser(null));
			}
		})
	},[dispatch]);
  return (
  <BrowserRouter>
    <div className="App">
			<Routes>
				<Route path="/" element={
						<React.Fragment>
							<Header/>
							<SubHeader/>
							<Home/>
							<BackToTop/>
						</React.Fragment>
					}/>
					
					<Route path="/login" element={
						<React.Fragment>
							<Login/>
						</React.Fragment>						
					} />
					
					<Route path="/register" element={
						<React.Fragment>
							<Register/>
						</React.Fragment>						
					} />
					
					<Route path="/checkout" element={
						<React.Fragment>
							<Header/>
							<Chectout/>
						</React.Fragment>
					}/>
					
					
			</Routes>
    </div>
	</BrowserRouter>
  );
}

export default App;
