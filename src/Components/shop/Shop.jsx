import './Shop.css';
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
import { getSortedProducts } from '../../utils/FilterUtils';
export const Shop = () => {
  const { products, sortBy, dispatch } = useProduct();
  const { addToCart, cartItems, goToCartHandler } = useCart();
  const { addToWishlist, wishlistItem } = useWishlist();
  const navigate = useNavigate();

  const sortedProducts = getSortedProducts(products, sortBy);
  const sizes = ['L', 'M', 'S', 'US10', 'US6', 'US7'];
  const rating = [1, 2, 3, 4, 5];

  return (
    <div >
      <span id='shop-banner'>
        <img src="/images/shop.jpg" alt="shop" />
      </span>
      <nav id='shop-link'>
        <span id='link'>
          <p onClick={() => { dispatch({ type: 'SORT', payload: 'ALL' }) }}>ALL</p>
          <p style={{ color: 'lightseagreen' }}>/</p>
          <p onClick={() => { dispatch({ type: 'SORT', payload: 'SHOES' }) }}>SHOES</p>
          <p style={{ color: 'lightseagreen' }}>/</p>
          <p onClick={() => { dispatch({ type: 'SORT', payload: 'CLOTHING' }) }}>CLOTHING</p>
        </span>
        <div id='shop-link-underline'></div>
      </nav>

      {/* FIlter By Category */}
      <div id='shop-section-product'>
        <div id='filters-container'>
          <div id='category-filter'>
            <span >Category</span>
            <ul id='category-type'>
              <li><p id='men-category' onClick={() => { dispatch({ type: 'SORT', payload: 'MEN' }) }} >Men's Shirts</p></li>
              <li><p id='women-category' onClick={() => { dispatch({ type: 'SORT', payload: 'WOMEN' }) }} >Women's Dresses</p></li>
              <li><p id='shoe-category' onClick={() => dispatch({ type: 'SORT', payload: 'SHOE' })}>Shoes</p></li>
            </ul>

            {/* Filter By Size */}
            <div id='size-filter'>
              <span id='filter-by-size'>Filter By Size</span>
              <div id='size'>
                {sizes.map((size, idx) => {
                  return (
                    <div key={idx}>
                      <div className='size-type' onClick={() => { dispatch({ type: 'SORT', payload: size }) }}>{size}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Filter By Rating */}
          <span id='ratig-filter-heading'>Filter By Rating</span>
          <div id='rating'>
            {rating.map((rate, indx) => {
              return (
                <div key={indx}>
                  <div className='rating-type' onClick={() => { dispatch({ type: 'SORT', payload: rate }) }}>{rate}</div>
                </div>
              )
            })}
          </div>
          {/* Filter By Price  */}
          <span id='price-filter-heading'>Filter By Price</span>
          <span id='price'>
            <p className='price-type' onClick={() => { dispatch({ type: 'SORT', payload: 'LOW_TO_HIGH' }) }}>Low To High</p>
            <p className='price-type' onClick={() => { dispatch({ type: 'SORT', payload: 'HIGH_TO_LOW' }) }}>High To Low</p>
          </span>

        </div>
        <div id='all-product'>
          {sortedProducts ?
            sortedProducts?.map((allproduct) => {
              return (
                <div key={allproduct._id}>
                  <Center py={20}>
                    <Box>
                      <Box>
                        <Image
                          height={400}
                          width={250}
                          objectFit={'cover'}
                          src={allproduct.imgOne}
                          id='shop-image'
                          onClick={() => {
                            navigate(`/singleproduct/${allproduct._id}`)
                            window.scrollTo({ top: 0, scroll: 'instant' })
                          }}
                        />
                      </Box>
                      {allproduct.stock ? null : <p id='bestselling-out-stock-button'>Out Of Stock</p>}
                      <span id='bestselling-type'>{allproduct.type}</span>
                      <p id='besselling-title'>{allproduct.title}</p>

                      {cartItems.find(item => item._id === allproduct._id) ?

                        <div>{allproduct.stock ? <div id='bestselling-price-add-button'>
                          <span id='bestselling-price'>${allproduct.price}.00</span>
                          <Stack direction='row' spacing={4} align='center' >
                            <Button colorScheme='teal' variant='outline' onClick={goToCartHandler}>Go To Cart</Button>
                          </Stack>
                        </div> : null}
                          {allproduct.stock ? null : <p id='bestselling-out-stock'>Out Of Stock</p>}</div>
                        : <div>{allproduct.stock ? <div id='bestselling-price-add-button'>
                          <span id='bestselling-price'>${allproduct.price}.00</span>
                          <Stack direction='row' spacing={4} align='center' >
                            <Button colorScheme='teal' variant='outline' onClick={() => addToCart(allproduct._id)}>Add To Cart</Button>
                          </Stack>
                        </div> : null}
                          {allproduct.stock ? null : <p id='bestselling-out-stock'>Out Of Stock</p>}</div>}


                      {wishlistItem.find(item => item._id === allproduct._id) ? <AiFillHeart className='bestselling-dress-wishlist' onClick={() => navigate('/wishlist')} /> : <span onClick={() => addToWishlist(allproduct._id)}>{allproduct.stock ? <AiOutlineHeart className='bestselling-dress-wishlist' /> : null}</span>}
                    </Box>
                  </Center>

                </div>
              )
            })
            //////
            : products?.map((allproduct) => {
              return (
                <div key={allproduct._id}>
                  <Center py={20}>
                    <Box>
                      <Box  >
                        <Image
                          height={400}
                          width={250}
                          objectFit={'cover'}
                          src={allproduct.imgOne}
                          id='shop-image'
                          onClick={() => {
                            navigate(`/singleproduct/${allproduct._id}`)
                            window.scrollTo({ top: 0, scroll: 'instant' })
                          }}
                        />
                      </Box>
                      {allproduct.stock ? null : <p id='bestselling-out-stock-button'>Out Of Stock</p>}
                      <span id='bestselling-type'>{allproduct.type}</span>
                      <p id='besselling-title'>{allproduct.title}</p>


                      {cartItems.find(item => item._id === allproduct._id) ?

                        <div>{allproduct.stock ? <div id='bestselling-price-add-button'>
                          <span id='bestselling-price'>${allproduct.price}.00</span>
                          <Stack direction='row' spacing={4} align='center' >
                            <Button colorScheme='teal' variant='outline' onClick={goToCartHandler}>Go To Cart</Button>
                          </Stack>
                        </div> : null}
                          {allproduct.stock ? null : <p id='bestselling-out-stock'>Out Of Stock</p>}</div>
                        : <div>{allproduct.stock ? <div id='bestselling-price-add-button'>
                          <span id='bestselling-price'>${allproduct.price}.00</span>
                          <Stack direction='row' spacing={4} align='center' >
                            <Button colorScheme='teal' variant='outline' onClick={() => addToCart(allproduct)}>Add To Cart</Button>
                          </Stack>
                        </div> : null}
                          {allproduct.stock ? null : <p id='bestselling-out-stock'>Out Of Stock</p>}</div>}


                      {wishlistItem.find(item => item._id === allproduct._id) ? <AiFillHeart className='bestselling-dress-wishlist' onClick={() => navigate('/wishlist')} /> : <span onClick={() => addToWishlist(allproduct)}>{allproduct.stock ? <AiOutlineHeart className='bestselling-dress-wishlist' /> : null}</span>}
                    </Box>
                  </Center>

                </div>
              )
            })

            //
          }
        </div>
      </div>
    </div>
  )
}
