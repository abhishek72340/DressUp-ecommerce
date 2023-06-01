import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
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
export const MensJacketCard = ({ jacket }) => {
  const [disable, setDisable] = useState(false);
  const { addToCart, cartItems, goToCartHandler } = useCart();
  const { addToWishlist, wishlistItem } = useWishlist();
  const navigate = useNavigate();

  return (
    <div key={jacket._id}>
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

          <div id='jacket-type-wishlist'>
          <p id='jacket-type'> {jacket.type}</p>          
          {
            wishlistItem.find(item => item._id === jacket._id) ? <AiFillHeart className='jacket-wishlist' onClick={() => navigate('/wishlist')} /> :
              <span>
                {
                  jacket.stock ? <span onClick={() => { addToWishlist(jacket) }} ><AiOutlineHeart className='jacket-wishlist' /></span> : null
                }
              </span>
          }
          </div>

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
                    {
                      jacket.stock ? <p id='jacket-price'>${jacket.price}.00</p> : null
                    }
                    <Button isDisabled={disable} colorScheme='teal' variant='outline' onClick={() => {
                      addToCart(jacket)
                      setDisable(true)
                    }}>Add To Cart</Button>
                  </Stack> : <p id='jacket-out-stock'>Out Of Stock</p>
                }
              </div>
          }       
        </Box>
      </Center>
    </div>
  )
}
