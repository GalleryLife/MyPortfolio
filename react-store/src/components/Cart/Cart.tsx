import React from 'react';
import {useAppDispatch, useTypedSelector} from '../../hooks/useTypedSelector';
import {Button} from 'antd';
import CartItem from './CartItem/CartItem';
import {toggleModal} from "../../features/purchaseSlice";

const Cart: React.FC = () => {
  const {cart} = useTypedSelector((state) => state.cart.cartSLice)
  const dispatch = useAppDispatch()
  const openModal = () => dispatch(toggleModal())

  return (
    <div className=''>
      {cart.map((items) => <CartItem key={items.id} {...items}/>)}
      {cart.length ?
        <Button
          type='primary'
          onClick={openModal}
        >Confirm order</Button> :
        <Button disabled>Confirm order</Button>
      }
    </div>
  );
}

export default Cart;
