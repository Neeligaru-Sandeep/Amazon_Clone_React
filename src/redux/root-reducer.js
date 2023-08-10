import {combineReducers} from "redux";
import basketReducer from "./reducer.js";

const rootReducer = combineReducers({
	data:basketReducer,
});

export default rootReducer;