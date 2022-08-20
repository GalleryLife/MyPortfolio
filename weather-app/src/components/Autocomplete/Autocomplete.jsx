import React from 'react';
import styles from './Autocomplete.module.scss';

const Autocomplete = ({country, region, name, handlerAutocomplete}) => {
 const autocomplete = () => handlerAutocomplete(name)
 return (
  <div
   className={styles.autocompleteItem}
   onClick={autocomplete}
  >
   <li>{country}</li>
   <li>{region}</li>
   <li>{name}</li>
  </div>
 )
}

export default Autocomplete;
