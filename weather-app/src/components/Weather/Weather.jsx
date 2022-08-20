import React from "react";
import styles from './Weather.module.scss';

const Weather = ({weather}) => (
 <section className={styles.weatherWrapper}>
  {weather.map(({location, current}) => (
   <div key={Date.now()} className={styles.wrapper}>
    <div className={styles.infoWeather}>
     <h1 className={styles.city}>{location.name}</h1>
     <h2 className={styles.country}>{location.country}</h2>
     <div>
      <span className={styles.temp}>{current.temp_c}°</span>
     </div>
    </div>
    <div>
     <img src={current.condition.icon} alt=""/>
    </div>
   </div>
  ))}
 </section>
)

export default Weather;
