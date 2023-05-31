import React from 'react'
import './CheckOut.css';
import { useState } from 'react';
import { useProduct } from '../../context/product-context';
import { useCart } from '../../context/cart-context';
export const CheckOut = () => {

  const { state } = useProduct();
  const { cartItems } = useCart();

  const [isAddress, setIsAddress] = useState(false)
  const [address, setAddress] = useState()
  const [finalAddress, setFinalAddress] = useState('India')

  const changeAddress = (e) => {
    setAddress(e.target.value);
  };

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
                <span id='shpping'>SHIPPING</span>
                <span id='shipping-to'>shipping to:</span>
                <span id='input-address'>{finalAddress}</span>
              </div>
            </div>

            {isAddress ?
              <div>
                <input
                  type="text"
                  id='change-address-input'
                  placeholder="Enter Address"
                  onChange={changeAddress}
                />
                <button
                  onClick={() =>
                    setIsAddress(false) || address.length < 1
                      ? setAddress("INDIA")
                      : setFinalAddress(address)
                  }
                >
                  SUBMIT
                </button>
              </div>
              :
              (<span id='change-address' onClick={() => setIsAddress(true)}>CHANGE ADDRESS</span>)}

          </div>


          <div id='line'><div id='horizontal-line'></div></div>

          <div id='total'><span >TOTAL</span><span id='total-ammount'>${totalAmount}</span></div>

          <div id='check-btn'><div id='checkout-button'>PROCEDD TO CHECKOUT</div></div>
        </div>

      </div>
    </div>
  )
}
