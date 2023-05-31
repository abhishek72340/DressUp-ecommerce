import React, { useEffect, useState } from 'react'
import './SingleProduct.css'
import { useParams, useNavigate } from 'react-router-dom';
import { useProduct } from '../../context/product-context';
import { useWishlist } from '../../context/wishlist-cart';
import { useCart } from '../../context/cart-context';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { Module } from '../../module/Module';
import axios from 'axios';
import {
  Button,
  Stack
} from '@chakra-ui/react';
export const SingleProduct = () => {
  const { state, dispatch } = useProduct();
  // const { products } = state;
  const { Id } = useParams();
  const [imgShow, setImgShow] = useState('')
  const [productData, setProductData] = useState([]);
  const { wishlistItem, addToWishlist } = useWishlist();
  const { addToJacket, cartItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/products/${Id}`)
      .then(response => setProductData(response.data.product))
      .catch((e) => alert('Error Occured Retry'))
  }, [Id])

  return (
    <div>
      {
      !productData ? <div id='single-product-error'>
        <img src="https://c.tenor.com/51cJwccNPl4AAAAi/capoo-bugcat.gif" alt="load" />
        <span>Sorry we got some Error. Please go back</span>
        <Module />
       </div> :
        <div>
          <div id='single-product-copy'>
            <div id='single-image-settle-container'>
              <div className='single-image-settle' >
                <img
                  src={productData.imgOne}
                  onClick={() => setImgShow(productData.imgOne)}
                  alt="item"

                />
              </div>

              <div className='single-image-settle'>
                <img
                  src={productData.imgTwo}
                  onClick={() => setImgShow(productData.imgTwo)}
                  alt="item"
                />
              </div>
              <div className='single-image-settle'>
                <img
                  src={productData.imgThree}
                  onClick={() => setImgShow(productData.imgThree)}
                  alt="item"
                />
              </div>
              <div className='single-image-settle'>
                <img
                  src={productData.imgFour}
                  onClick={() => setImgShow(productData.imgFour)}
                  alt="item"
                />
              </div>
            </div>
            <div id='single-image-highlight'>
              <img src={imgShow.length < 1 ? productData.imgOne : imgShow} alt="main" id='img-product' />
            </div>
            <div id='single-product-data'>
              <span id='single-product-title'>{productData.title}</span>
              <div id='single-product-price-offer'><span id='cut-price'>$100</span><span id='single-product-price'>${productData.price}.00</span></div>
              <span id='single-product-description'>{productData.description}</span>

              {
                cartItems.find(item => item._id === productData._id) ?
                  <div>
                    {
                      productData.stock ? <Stack direction='row' spacing={4} align='center'>
                        <Button colorScheme='teal' variant='outline' onClick={() => navigate('/cart')}>Go To Cart</Button>
                      </Stack> : <span id='single-product-out-stock'>Out Of Stock</span>
                    }
                  </div> :
                  <div>
                    {
                      productData.stock ? <Stack direction='row' spacing={4} align='center'>
                        <Button colorScheme='teal' variant='outline' onClick={() => addToJacket(productData._id)}>Add To Cart</Button>
                      </Stack> : <span id='single-product-out-stock'>Out Of Stock</span>
                    }
                  </div>
              }

              {
                wishlistItem.find(item => item._id === productData._id) ?
                  <span id='add-single-product-wishlist' onClick={() => navigate('/wishlist')}><AiFillHeart /> Go To Wishlist</span> :
                  <span id='single-product-wishlisht' onClick={() => addToWishlist(productData._id)} ><AiOutlineHeart />Add To Wishlist</span>
              }

            </div>
          </div>

          <div id='single-product-category-tag-container'>
            <div id='single-product-category-tag'>
              <span className='single-catego'> Category: </span> <span className='single-catego-value'>{productData.categoryName}</span>
              <span className='single-catego'>Tags: </span>  <span className='single-catego-value'>{productData.tags}</span>
            </div>
          </div>

          <span id='single-product-additional-information'>ADDITIONAL INFORMATION</span>
          <div id='additional-info-data'>
            <div><span className='additional-info'>Colors:</span> <span className='additional-info-value'>Greens, Red</span></div>
            <hr />
            <div><span className='additional-info'>Size:</span> <span className='additional-info-value'>{productData.size}</span></div>
          </div>
        </div>
      }


      <Module />
    </div>
  )
}
