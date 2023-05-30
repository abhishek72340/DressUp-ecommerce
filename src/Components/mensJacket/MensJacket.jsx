import React from 'react'
import './MensJacket.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cart-context';
import { useWishlist } from '../../context/wishlist-cart';
import { useProduct } from '../../context/product-context';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import {
  Box,
  Center,
  Image,
  Button,
  Stack
} from '@chakra-ui/react';
export const MensJacket = () => {
  const { state } = useProduct();
  const { products } = state;
  const { addToCart, cartItems, goToCartHandler, disable } = useCart();
  const { addToWishlist, wishlistItem } = useWishlist();
  const navigate = useNavigate();

  return (
    <div>
      <div id='mens-jacket-product'>
        <img src="/images/men-jacket.webp" alt="jacket" id='jacket-wallpaper' />

        <span id='mens-jacket-heading'>MEN'S JACKET
          <p id='dressup-shop-heading'>DRESSUP SHOP CHOICE</p>
        </span>
        <div id='mens-jacket-product-iterate'>
          {
            products.slice(6, 9).map((jacket) => {
              return (
                <div key={jacket.id}>
                  <Center py={20}>
                    <Box>
                      <Box>
                        <Image
                          height={400}
                          width={237}
                          objectFit={'cover'}
                          src={jacket.imgOne}
                          onClick={() => {
                            navigate(`/singleproduct/${jacket._id}`)
                            window.scrollTo({ top: 0, scroll: 'instant' })
                          }}
                        />
                        {jacket.stock ? true : <p id='out-of-stock-button'>out of stock</p>}
                      </Box>
                      <p id='jacket-type'> {jacket.type}</p>
                      <p id='jacket-title'>{jacket.title}</p>

                      {
                        cartItems.find(cartItem => cartItem._id === jacket._id) ?
                          <div>
                            {
                              jacket.stock ? <Stack direction='row' spacing={4} align='center' id='jacket-addcart-button'>
                                {jacket.stock ? <p id='jacket-price'>${jacket.price}.00</p> : null}
                                <Button colorScheme='teal' variant='outline' onClick={goToCartHandler}>
                                  Go To Cart</Button>
                              </Stack> : <p id='jacket-out-stock'>Out Of Stock</p>
                            }
                          </div>
                          :
                          <div>
                            {
                              jacket.stock ? <Stack direction='row' spacing={4} align='center' id='jacket-addcart-button'>
                                {jacket.stock ? <p id='jacket-price'>${jacket.price}.00</p> : null}
                                <Button disabled={disable} colorScheme='teal' variant='outline' onClick={() => addToCart(jacket)}  >
                                  Add To Cart</Button>
                              </Stack> : <p id='jacket-out-stock'>Out Of Stock</p>
                            }
                          </div>
                      }

                      {
                        wishlistItem.find(item => item._id === jacket._id) ? <AiFillHeart className='jacket-wishlist' onClick={() => navigate('/wishlist')} /> :
                          <span> {jacket.stock ? <span onClick={() => addToWishlist(jacket)}><AiOutlineHeart className='jacket-wishlist' /></span> : null}</span>
                      }
                    </Box>
                  </Center>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
