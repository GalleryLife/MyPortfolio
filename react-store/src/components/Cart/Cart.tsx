import {Button, Result} from 'antd';
import React, {useEffect} from 'react';
import NavMenu from '../NavMenu/NavMenu';
import CartItem from './CartItem/CartItem';
import {SmileOutlined} from '@ant-design/icons';
import {purchase} from '../../features/cartSlice';
import {toggleModal} from '../../features/modalSlice';
import {useAppDispatch, useTypedSelector} from '../../hooks/useTypedSelector';

const Cart: React.FC = () => {
  const {cart, isPurchase} = useTypedSelector((state) => state.cart.cartSLice)
  const dispatch = useAppDispatch()
  const openModal = () => dispatch(toggleModal())

  useEffect(() => {
    setTimeout(() => {
      dispatch(purchase(false))
    }, 5000)
  }, [])

  return (
    <section>{
      isPurchase ?
        <Result
          status='success'
          title='Successfully Purchased'
          subTitle='Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.'
          extra={[
            <nav key='console'>
              <ul>
                <NavMenu rout='/' text='Buy Again'/>
              </ul>
            </nav>
          ]}
        />
        :
        <div>
          {cart.length ?
            cart.map((items) => <CartItem key={items.id} {...items}/>)
            :
            <Result
              icon={<SmileOutlined />}
              title='Great, we have done all the operations!'
            />}
          {cart.length ?
            <Button
              type='primary'
              onClick={openModal}
            >Confirm order</Button> :
            <Button disabled>Confirm order</Button>
          }
        </div>}
    </section>
  );
}

export default Cart;
