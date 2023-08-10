import firebase from "firebase/compat/app";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcUrhzb1JE46eorGfSQxDaw664kniNyD8",
  authDomain: "clone-f122f.firebaseapp.com",
  projectId: "clone-f122f",
  storageBucket: "clone-f122f.appspot.com",
  messagingSenderId: "623756496047",
  appId: "1:623756496047:web:988cce1d311138b4bb185a",
  measurementId: "G-B4RX97LCP7"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth();

