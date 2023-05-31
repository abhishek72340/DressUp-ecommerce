import { useState } from 'react';
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
export const FilterCard = ({ allproduct }) => {
    const [disable, setDisable] = useState(false);
    const { addToCart, cartItems, goToCartHandler } = useCart();
    const { addToWishlist, wishlistItem } = useWishlist();
    const navigate = useNavigate();

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

                    {
                        cartItems.find(item => item._id === allproduct._id) ?

                            <div>
                                {
                                    allproduct.stock ? <div id='bestselling-price-add-button'>
                                        <span id='bestselling-price'>${allproduct.price}.00</span>
                                        <Stack direction='row' spacing={4} align='center' >
                                            <Button colorScheme='teal' variant='outline' onClick={goToCartHandler}>Go To Cart</Button>
                                        </Stack>
                                    </div> : null
                                }
                                {allproduct.stock ? null : <p id='bestselling-out-stock'>Out Of Stock</p>}
                            </div> :
                            <div>
                                {
                                    allproduct.stock ? <div id='bestselling-price-add-button'>
                                        <span id='bestselling-price'>${allproduct.price}.00</span>

                                        <Stack direction='row' spacing={4} align='center' >
                                            <Button isDisabled={disable} colorScheme='teal' variant='outline' onClick={() => {
                                                addToCart(allproduct)
                                                setDisable(true)
                                            }} >Add To Cart</Button></Stack>

                                    </div> : null
                                }
                                {allproduct.stock ? null : <p id='bestselling-out-stock'>Out Of Stock</p>}
                            </div>
                    }

                    {
                        wishlistItem.find(item => item._id === allproduct._id) ? <AiFillHeart className='bestselling-dress-wishlist' onClick={() => navigate('/wishlist')} /> :
                            <span onClick={() => addToWishlist(allproduct)}>{allproduct.stock ? <AiOutlineHeart className='bestselling-dress-wishlist' /> : null}</span>
                    }
                </Box>
            </Center>

        </div>
    )
}
