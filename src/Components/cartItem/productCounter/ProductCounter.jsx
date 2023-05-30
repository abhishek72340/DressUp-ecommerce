import React from 'react'
import './ProductCounter.css';
import { useCart } from '../../../context/cart-context';
export const ProductCounter = ({ qty, id }) => {
  const { updateQuantity, removeCartItem } = useCart();

  return (
    <div>
      {
        <div id='product-counter'>
          <span onClick={() => qty <= 1 ? removeCartItem(id) : updateQuantity('decrement', id)}>-</span>
          <span>{qty}</span>
          <span onClick={() => updateQuantity('increment', id)}>+</span>
        </div>
      }

    </div>
  )
}
