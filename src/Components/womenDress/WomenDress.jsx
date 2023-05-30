import React from 'react';
import './WomenDress.css';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../../context/product-context';
import { useCart } from '../../context/cart-context';
import { useWishlist } from '../../context/wishlist-cart';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import {
  Box,
  Center,
  Image,
  Button,
  Stack
} from '@chakra-ui/react';
export const WomenDress = () => {
  const { state } = useProduct();
  const { products } = state;
  const { addToCart, cartItems, goToCartHandler } = useCart();
  const { addToWishlist, wishlistItem } = useWishlist();
  const navigate = useNavigate();
  return (
    <div>
      <span id='women-dress-heading'>Get The Women's Dresses</span>
      <span id='women-dressup-choice'>DRESSUP SHOP CHOICE</span>
      <div id='women-dress-heading-underline-parent'><div id='women-dress-heading-underline'></div></div>
      <img src="/images/wallpaper2.webp" alt="women-dress" id='women-dress-wallpaper' />

      <div id='women-dress-product'>
        {
          products.slice(1, 5).map((womendress) => {
            return (
              <div key={womendress._id}>
                <Center py={20}>
                  <Box>
                    <Box >
                      <Image
                        height={400}
                        width={270}
                        objectFit={'cover'}
                        src={womendress.imgOne}
                        id='women-dress-image'
                        onClick={() => {
                          navigate(`/singleproduct/${womendress._id}`)
                          window.scrollTo({ top: 0, scroll: 'instant' })
                        }}
                      />
                    </Box>
                    <p>{womendress.stock ? null : <p id='women-dress-out-stock-button'>Out Of Stock</p>}</p>
                    <span id='women-dress-type'>{womendress.type}</span>
                    <p id='women-dress-title'>{womendress.title}</p>

                    {
                      cartItems.find(item => item._id === womendress._id) ?
                        <div>
                          {
                            womendress.stock ? <div id='price-add-button'>
                              <p id='womendress-price'>${womendress.price}.00</p>
                              <Stack direction='row' spacing={4} align='center' >
                                <Button colorScheme='teal' variant='outline' onClick={goToCartHandler}>Go To Cart</Button>
                              </Stack>
                            </div> : null
                          }
                          {
                            womendress.stock ? null : <p id='women-dress-out-stock'>Out Of Stock</p>
                          }
                        </div>
                        :
                        <div>
                          {
                            womendress.stock ? <div id='price-add-button'>
                              <p id='womendress-price'>${womendress.price}.00</p>
                              <Stack direction='row' spacing={4} align='center' >
                                <Button colorScheme='teal' variant='outline' onClick={() => addToCart(womendress)}>Add To Cart</Button>
                              </Stack>
                            </div> : null
                          }
                          {
                            womendress.stock ? null : <p id='women-dress-out-stock'>Out Of Stock</p>
                          }
                        </div>
                    }

                    {
                      wishlistItem.find(item => item._id === womendress._id) ? <AiFillHeart className='women-dress-wishlist' onClick={() => navigate('/wishlist')} />
                        :
                        <span onClick={() => addToWishlist(womendress)}>{womendress.stock ? <AiOutlineHeart className='women-dress-wishlist' /> : null}</span>
                    }
                  </Box>
                </Center>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
