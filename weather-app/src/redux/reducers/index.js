import {combineReducers} from "redux";
import weatherReducer from "./weatherReducer";

export const reducer = combineReducers({
 weather: weatherReducer
})
