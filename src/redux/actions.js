import * as types from "./actionTypes.js";
import firebase from "firebase/compat/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcUrhzb1JE46eorGfSQxDaw664kniNyD8",
  authDomain: "clone-f122f.firebaseapp.com",
  projectId: "clone-f122f",
  storageBucket: "clone-f122f.appspot.com",
  messagingSenderId: "623756496047",
  appId: "1:623756496047:web:988cce1d311138b4bb185a",
  measurementId: "G-B4RX97LCP7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = getAuth();

export const addToBasket = ({item})=>({
	type:types.ADD_TO_BASKET,
	payload:item,
});

export const removeFromBasket =(id)=>({
	type:types.REMOVE_FROM_BASKET,
	payload:id,
});


export const setUser=(user)=>({
	type:types.SET_USER,
	payload:user,
});

const registerStart=()=>({
	type: types.REGISTER_START,
});

const registerSuccess=({user})=>({
	type: types.REGISTER_SUCCESS,
	payload:user,
});

const registerFail=(error)=>({
	type: types.REGISTER_FAIL,
	payload:error,
});


const loginStart=()=>({
	type:types.LOGIN_START,
})

const loginSuccess=({user})=>({
	type:types.LOGIN_SUCCESS,
	payload:user,
})

const loginFail=(error)=>({
	type:types.LOGIN_FAIL,
	payload:error,
})

const logoutStart=()=>({
	type:types.LOGOUT_START,
});

const logoutSuccess=()=>({
	type:types.LOGOUT_SUCCESS,
	
})

const logoutFail=(error)=>({
	type:types.LOGOUT_FAIL,
	payload:error,
});



export const registerInitiate=(email,password)=>{
	return function(dispatch){
		dispatch(registerStart());
		
		createUserWithEmailAndPassword(auth,email,password).then((user)=>{
			dispatch(registerSuccess(user))
		}).catch((error)=>{
			dispatch(registerFail(error))
		})
	}
}


export const loginInitiate=(email,password)=>{
	return function(dispatch){
		dispatch(loginStart());
		
		signInWithEmailAndPassword(auth,email,password)
		.then((user)=>{dispatch(loginSuccess(user))})
		.catch((error)=>{dispatch(loginFail(error))})
	}
}

export const logoutInitiate=()=>{
	return function(dispatch){
		dispatch(logoutStart())
		auth.signOut().then((resp)=>dispatch(logoutSuccess()))
		.catch((error)=>dispatch(logoutFail(error.message)))
	}
}




