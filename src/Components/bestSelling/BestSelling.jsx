import {useState} from 'react';
import './BestSelling.css';
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
export const BestSelling = () => {
  const [disable,setDisable]=useState(false);
  const { state } = useProduct();
  const { products } = state;
  const { addToCart, cartItems, goToCartHandler } = useCart();
  const { addToWishlist, wishlistItem } = useWishlist();
  const navigate = useNavigate();
 
  return (
    <div>
      <span id='best-selling-product-heading'>Best Selling Products</span>
      <span id='best-selling-product-underline-parent'><p id='best-selling-product-underline'></p></span>

      <div id='bestselling-product'>
        {
          products.slice(4, 8).map((bestselling) => {
            return (
              <div key={bestselling._id}>
                <Center py={20}>
                  <Box>
                    <Box >
                      <Image
                        height={400}
                        width={270}
                        objectFit={'cover'}
                        src={bestselling.imgOne}
                        onClick={() => {
                          navigate(`/singleproduct/${bestselling._id}`)
                          window.scrollTo({ top: 0, scroll: 'instant' })
                        }}
                      />
                    </Box>
                    {bestselling.stock ? null : <p id='bestselling-out-stock-button'>Out Of Stock</p>}
                    <span id='bestselling-type'>{bestselling.type}</span>
                    <p id='besselling-title'>{bestselling.title}</p>
                    {
                      cartItems.find(item => item._id === bestselling._id) ?
                        <div>
                          {
                            bestselling.stock ? <div id='bestselling-price-add-button'>
                              <span id='bestselling-price'>${bestselling.price}.00</span>
                              <Stack direction='row' spacing={4} align='center' >
                                <Button colorScheme='teal' variant='outline' onClick={goToCartHandler}>Go To Cart</Button>
                              </Stack>
                            </div> : null
                          }
                          {bestselling.stock ? null : <p id='bestselling-out-stock'>Out Of Stock</p>}
                        </div>

                        : <div>
                          {
                            bestselling.stock ? <div id='bestselling-price-add-button'>
                              <span id='bestselling-price'>${bestselling.price}.00</span>
                              <Stack direction='row' spacing={4} align='center' >
                                <Button isDisabled={disable} colorScheme='teal' variant='outline' onClick={() => {
                                  addToCart(bestselling)
                                  setDisable(true)
                                 }} >Add To Cart</Button>
                              </Stack>
                            </div> : null
                          }
                          {bestselling.stock ? null : <p id='bestselling-out-stock'>Out Of Stock</p>}
                        </div>
                    }

                    {
                      wishlistItem.find(item => item._id === bestselling._id) ? <AiFillHeart className='bestselling-dress-wishlist' onClick={() => navigate('/wishlist')} /> : <span onClick={() => addToWishlist(bestselling)}>{bestselling.stock ? <AiOutlineHeart className='bestselling-dress-wishlist' /> : null}</span>
                    }
                  </Box>
                </Center>
              </div>
            )
          })
        }
      </div>
      <p id='about-stylish-clothing'>Stylish Clothing Can Encompass A Wide Range Of Items, Including Clothing, Accessories, Footwear, And More!!</p>
      <div id='about-style'><p id='styling'> Fashion trends constantly evolve and change over time. Keeping up with the latest trends can help you stay stylish and up-to-date. However, it's important to remember that personal style is more than just following trends, and it's perfectly fine to create your own unique fashion statement. Personal style is all about expressing your individuality and wearing clothes that make you feel confident and comfortable. Experiment with different colors, patterns, and silhouettes to discover what works best for you. Your personal style can be influenced by various factors, such as your lifestyle, cultural background, and personal preferences.</p></div>
      <div id='shipping'>
        <img src="/images/shipping1.webp" alt="shipping" />
        <img src="/images/shipping.webp" alt="shippinng" />
        <img src="/images/shipping3.webp" alt="shipping" />
      </div>
    </div>
  )
}
