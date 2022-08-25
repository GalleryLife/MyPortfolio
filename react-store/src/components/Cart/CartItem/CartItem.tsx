import React from 'react';
import styles from '../Cart.module.scss';
import {CloseOutlined, ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';
import {useAppDispatch} from '../../../hooks/useTypedSelector';
import {removeFromCart, incrementCount, decrementCount} from '../../../features/cartSlice';

interface IProps {
  id: number
  title: string
  img: string
  price: number
  count: number
}

const CartItem = ({id, title, img, price, count}: IProps) => {
  const dispatch = useAppDispatch()
  const handleRemoveItem = () => dispatch(removeFromCart(id))
  const handleIncrement = () => dispatch(incrementCount(id, count))
  const handleDecrement = () => {
    dispatch(decrementCount(id, count))
    if(count < 1) dispatch(removeFromCart(id))
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <div className={styles.iconWrapper}>
            <CloseOutlined
              onClick={handleRemoveItem}
              className={styles.closeIcon}/>
          </div>
          <img width={80} src={img} alt={title}/>
        </div>
        <h3>{title}</h3>
        <span>{price * count}$</span>
        <div className={styles.countWrapper}>
          <span>{count}</span>
          <div className={styles.actionsWrapper}>
            <button
              onClick={handleIncrement}
            ><ArrowUpOutlined/></button>
            <button
              onClick={handleDecrement}
            ><ArrowDownOutlined/></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem;
