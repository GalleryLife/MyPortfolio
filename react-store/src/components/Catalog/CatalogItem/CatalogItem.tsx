import React from 'react';
import {Button} from 'antd';
import {useDispatch} from 'react-redux';
import styles from './CatalogItem.module.scss'
import {PlusOutlined} from '@ant-design/icons';
import {addToCart} from '../../../features/cartSlice';

const CatalogItem = ({id, img, price, title}: any) => {
  const dispatch = useDispatch()
  const handleAddToCart = () => dispatch(addToCart(id, title, img, price))

  return (
    <div className={styles.wrapper}>
      <img src={img} alt={title}/>
      <div className={styles.wrapper__info}>
        <h2>{title.slice(0, 21)}</h2>
        <span>{price}&#8372;</span>
      </div>
      <div>
        <Button
          onClick={handleAddToCart}
          icon={<PlusOutlined />}
        >Add to cart
        </Button>
      </div>
    </div>
  );
}

export default CatalogItem;
