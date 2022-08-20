import React, {useLayoutEffect} from "react";
import './reset.scss';
import styles from './App.module.scss';
import {setWeather, getWeather, searchMode} from "./redux/actions/actionCreators";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Suspense} from "react";
import LazyLoader from "./components/LazyLoader/LazyLoader";
import Autocomplete from "./components/Autocomplete/Autocomplete";
const Weather = React.lazy(() => import("./components/Weather/Weather"))

const App = () => {
 const [value, setInput] = useState('');
 const [isOpen, setOpen] = useState(true);
 
 const {places, data} = useSelector(({weather}) => weather);
 const dispatch = useDispatch();
 
 const changeValue = (event) => {
  setInput(event.target.value)
  setOpen(true)
 }
 
 const handlerAutocomplete = (text) => {
  changeValue(text)
  setOpen(false)
 }
 
 const handlerSearch = (text) => {
  if (text.length >= 3) dispatch(searchMode(text))
 }
 
 const handlerSearchInput = (event) => {
  changeValue(event)
  handlerSearch(event.target.value)
 }
 
 const handlerGetWeather = () => {
  dispatch(getWeather(value))
  setOpen(false)
 }
 
 useLayoutEffect(() => {
  document.addEventListener('click', () => setOpen(false))
 }, [isOpen])
 useEffect(() => {
  if (!value) dispatch(setWeather())
 }, [dispatch, value])
 
 const onSubmitForm = (event) => event.preventDefault()
 
 const classNameBtn = value ? `${styles.action}` : `${styles.disable}`;
 
 const autocomplitePlaces = value && isOpen ? <ul className={styles.autocomplete}> {
  places.map(info => (<Autocomplete
   changeValue={changeValue}
   handlerAutocomplete={handlerAutocomplete}
   key={info.id} {...info}/>))} </ul> : null
 
 return (
  <section className={styles.wrapper}>
   <form className={styles.searchForm} onSubmit={onSubmitForm}>
    <input
     className={styles.searchInput}
     type="text"
     placeholder="Enter your city"
     value={value}
     onChange={handlerSearchInput}
    />
    {autocomplitePlaces}
   </form>
   <button
    className={classNameBtn}
    onClick={handlerGetWeather}
   >Search weather
   </button>
   <Suspense fallback={<LazyLoader/>}>
    <Weather weather={data}/>
   </Suspense>
  </section>);
}

export default App;
