import React from 'react'
import './WishlistItem.css';
import { useWishlist } from '../../context/wishlist-cart';
import { Module } from '../../module/Module';
import { AiFillDelete } from 'react-icons/ai';

export const WishlistItem = () => {
  const { wishlistItem, removeJacketWishlist } = useWishlist();
  return (
    <div>
      <span id='wishlist-heading'>WISHLIST</span>
      <div id='underline'><span id='wishlist-heading-underline'></span></div>

      <div id='product-price-heading'><span>PRODUCT</span><span>REMOVE</span><span>PRICE</span></div>
      <div id='wishlist-line-parent'><div id='wishlist-line'></div></div>

      {
        wishlistItem.map((item) => {
          return (
            <div key={item._id}>
              <div id='product-price' >
                <span id='product'>
                  <img src={item.imgOne} alt="wishlist" width='100px' />
                  <span id='wishlist-name'>{item.title}</span>
                  <span id='delete-wishlist' onClick={() => removeJacketWishlist(item._id)}> <AiFillDelete /></span>
                </span>
                <span id='wishlist-amount'>${item.price}.00</span>

              </div>
            </div>

          )
        })
      }
      <Module />
    </div>
  )
}
