import React from 'react'
import './CheckOut.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cart-context';
export const CheckOut = () => {
  const { cartItems } = useCart();
const navigate=useNavigate();
   const totalAmount = cartItems.length > 0 ? cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0) : null;
     return (
    <div>
      <div id='check-out-box' >
        <div id='check-out'>
          <div id='checkout-data'>
            <div id='cart-subtotal'>
              <span>SUBTOTAL</span><span id='subtotal-ammount'>${totalAmount}</span>
            </div>
            <div >
              <div id='shipping-cart-product'>
                <span id='shpping'>SHIPPING CHARGE</span>
                <span id='input-address'>$5</span>
              </div>
            </div>
          </div>
          <div id='line'><div id='horizontal-line'></div></div>
          <div id='total'><span >TOTAL</span><span id='total-ammount'>${totalAmount+5}</span></div>
          <div id='check-btn'><div id='checkout-button' onClick={()=>navigate('/address')}>PROCEDD TO CHECKOUT</div></div>
        </div>
      </div>
    </div>
  )
}
