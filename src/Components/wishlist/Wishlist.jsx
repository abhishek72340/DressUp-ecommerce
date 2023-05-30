import React from 'react'
import './WishlistItem.css';
import { useNavigate } from 'react-router-dom';
import { WishlistItem } from './WishlistItem'
import { useWishlist } from '../../context/wishlist-cart'
import { Module } from '../../module/Module';
export const Wishlist = () => {
  const { wishlistItem } = useWishlist();
  const navigate = useNavigate();
  return (
    <div>
      {wishlistItem.length > 0 ? <WishlistItem /> : <div id='wishlist-container'>
        <span id='empty-wishlist'>Wishlist is Empty!</span><button id='wishlist-button' onClick={() => navigate('/shop')}>Go To Shop</button><Module /></div>}
    </div>
  )
}
