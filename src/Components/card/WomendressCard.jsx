import React, { useState } from 'react';
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
export const WomendressCard = ({ womendress }) => {
  const [toggle, setToggle] = useState(true)
  const [disable, setDisable] = useState(false);
  const { addToCart, cartItems, goToCartHandler } = useCart();
  const { addToWishlist, wishlistItem } = useWishlist();
  const navigate = useNavigate();

  const womenMouseOver = () => {
    setToggle(false)

  };
  const womenMouseOut = () => {
    setToggle(true)
  }
  return (
    <div key={womendress._id}>
      <Center py={20}>
        <Box>
          <Box >
            {
              toggle ?
                <Image
                  height={400}
                  width={270}
                  objectFit={'cover'}
                  onMouseOver={womenMouseOver}
                  src={womendress.imgOne}
                  id='women-dress-image'
                  onClick={() => {
                    navigate(`/singleproduct/${womendress._id}`)
                    window.scrollTo({ top: 0, scroll: 'instant' })
                  }}
                /> :
                <Image
                  height={400}
                  width={270}
                  objectFit={'cover'}
                  onMouseOut={womenMouseOut}
                  src={womendress.imgTwo}
                  id='women-dress-image'
                  onClick={() => {
                    navigate(`/singleproduct/${womendress._id}`)
                    window.scrollTo({ top: 0, scroll: 'instant' })
                  }}
                />
            }

          </Box>
          <p>{womendress.stock ? null : <p id='women-dress-out-stock-button'>Out Of Stock</p>}</p>

          <div id='womendress-type-wishlist'>
            <span id='women-dress-type'>{womendress.type}</span>
            {
              wishlistItem.find(item => item._id === womendress._id) ? <AiFillHeart className='women-dress-wishlist' onClick={() => navigate('/wishlist')} />
                :
                <span onClick={() => addToWishlist(womendress)}>{womendress.stock ? <AiOutlineHeart className='women-dress-wishlist' /> : null}</span>
            }
          </div>

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
                      <Button isDisabled={disable} colorScheme='teal' variant='outline' onClick={() => {
                        addToCart(womendress)
                        setDisable(true)
                      }} >Add To Cart</Button>
                    </Stack>
                  </div> : null
                }
                {
                  womendress.stock ? null : <p id='women-dress-out-stock'>Out Of Stock</p>
                }
              </div>
          }


        </Box>
      </Center>
    </div>
  )
}
