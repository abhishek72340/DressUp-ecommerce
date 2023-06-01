import './WishlistItem.css';
import { useWishlist } from '../../context/wishlist-cart';
import {useCart} from '../../context/cart-context'
import { Module } from '../../module/Module';
import { AiFillDelete } from 'react-icons/ai';
import {
  Button,
  Stack
} from '@chakra-ui/react';
export const WishlistItem = () => {
  const { wishlistItem, removeJacketWishlist } = useWishlist();
  const {addToCart} =useCart();
  return (
    <div>
      <span id='wishlist-heading'>WISHLIST</span>
      <div id='underline'><span id='wishlist-heading-underline'></span></div>
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

               <Stack direction='row' spacing={4} align='center' id='wishlist-addcart-button'>
                 <Button  colorScheme='teal' variant='outline' onClick={()=>{addToCart(item)}}>Add To Cart</Button></Stack>
        
              </div>
            </div>
          )
        })
      }
      <Module />
    </div>
  )
}
