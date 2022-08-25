import React, {useState} from 'react';
import {IGods} from '../../../types/gods-types';
import styles from './CatalogItem.module.scss'
import {useDispatch} from 'react-redux';
import {addToCart} from '../../../features/cartSlice';

const CatalogItem = ({id, image, price, title, description}: IGods) => {
  const dispatch = useDispatch()
  const [isMore, setMore] = useState(false)
  const handleChange = () => setMore(!isMore)
  const handleAddToCart = () => dispatch(addToCart(id, title, image, price))

  return (
    <div className={styles.wrapper}>
      <img width={80} height={100} src={image} alt={title}/>
      <div className={styles.itemInfo}>
        <h2>{title.slice(0, 21)}</h2>
        <span>{price}$</span>
        <p>{isMore ? description : ''}</p>
      </div>
      <div className={styles.actions}>
        <button
          className={styles.button}
          onClick={handleChange}
        >{isMore ? 'Less more' : 'See more'}
        </button>
        <button
          onClick={handleAddToCart}
          className={styles.button}
        >Add to cart
        </button>
      </div>
    </div>
  );
}

export default CatalogItem;
