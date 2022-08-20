import {SET_ISLOADING, SET_BASE_WEATHER, GET_WEATHER, SEARCH_PLACE} from "../actions/actions";

const initialState = {
 data: [],
 places: [],
 isLoading: false
}

const weatherReducer = (state = initialState, {type, payload}) => {
 switch (type) {
 case SET_BASE_WEATHER: {
  return {...state, data: [payload]}
 }
 case GET_WEATHER: {
  return {...state, data: [payload]}
 }
 case SEARCH_PLACE: {
  return {...state, places: payload}
 }
 case SET_ISLOADING: {
  return {...state, isLoading: payload}
 }
 default: {
  return state
 }
 }
}

export default weatherReducer;
