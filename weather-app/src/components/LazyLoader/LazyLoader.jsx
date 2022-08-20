import React from "react";
import styles from './LazyLoader.module.scss';

const LazyLoader = () => (
 <>
  <div className={styles.loader}>
   <span></span>
   <span></span>
   <span></span>
  </div>
  <h1>Loading..</h1>
 </>
)

export default LazyLoader
