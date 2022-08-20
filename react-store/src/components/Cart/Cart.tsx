import React from 'react';
import {useTypedSelector} from '../../hooks/useTypedSelector';

const Cart: React.FC = () => {
  const {cart} = useTypedSelector((state) => state.cart)

  return (
    <div className=''>
      {cart && cart.map(({title, id}) => (
        <div key={id}>
          <h3>{title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Cart;
