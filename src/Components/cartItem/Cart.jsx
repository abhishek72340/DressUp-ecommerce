import React from 'react'
import './CartItem.css';
import { useNavigate } from 'react-router-dom';
import { CartItem } from './CartItem'
import { useCart } from '../../context/cart-context';
import { Module } from '../../../src/module/Module';
import emptycart from '../../images/emptycart.gif';
export const Cart = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  return (
    <div>
      {cartItems.length > 0 ?
        <div ><CartItem /><Module /><Module/></div> :
        <div id='empty-cart-gif'><img src={emptycart} alt="cart-gif" width='25%' /><button id='empty-cart-button' onClick={() => navigate('/shop')}>Go To Shop</button><Module /></div>}
    </div>
  )
}
