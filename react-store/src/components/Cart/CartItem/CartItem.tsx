import React from 'react';
import styles from './CartItem.module.scss';
import {useAppDispatch} from '../../../hooks/useTypedSelector';
import {CloseOutlined, ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';
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
  const handleDecrement = (): void => {
    dispatch(decrementCount(id, count))
    if(count < 1) dispatch(removeFromCart(id))
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.wrapper__icon}>
            <CloseOutlined
              onClick={handleRemoveItem}
              className={styles.icon}/>
          </div>
          <img width={80} src={img} alt={title}/>
        </div>
        <h3>{title}</h3>
        <span>{price * count}&#8372;</span>
        <div className={styles.wrapper__count}>
          <span>{count}</span>
          <div className={styles.count__actions}>
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
