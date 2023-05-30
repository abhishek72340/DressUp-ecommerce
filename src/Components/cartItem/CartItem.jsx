import React from 'react'
import './CartItem.css';
import { useCart } from '../../context/cart-context';
import { ProductCounter } from './productCounter/ProductCounter';
import { AiFillDelete } from 'react-icons/ai';
import { CheckOut } from '../checkout/CheckOut';
export const CartItem = () => {
  const { cartItems,removeCartItem } = useCart();
 
  return (
    <div >
      <span id='cart-heading'>CART</span>
      <div id='underline-parent'>
        <div id='cart-heading-underline'></div></div>

      <div id='cartitem-checkout'>
        {cartItems.map((item) => {
          return (
          <div key={item._id}>
            <div id='cart-item'>
              <span style={{ width: '110px' }} ><img src={item.imgOne} alt='jacket' />
              </span>
              <span id='cart-product-name'>{item.title}</span>
              <div id='cart-data'>
                <span id='delete-cart-item' onClick={()=>removeCartItem(item._id)}><AiFillDelete /></span>
                <span><ProductCounter qty={item.qty} id={item._id} /></span>
                <span>${item.price*item.qty}</span>
              </div>
            </div>
            </div>
          )
        })}
      </div>
      <span id='checkout-component'> <CheckOut /></span>
    </div>
  )
}
