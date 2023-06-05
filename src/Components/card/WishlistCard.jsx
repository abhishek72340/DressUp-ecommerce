import {useState} from 'react';
import {useCart} from '../../context/cart-context'
import { useWishlist } from '../../context/wishlist-cart';
import { AiFillDelete } from 'react-icons/ai';
import {
  Button,
  Stack
} from '@chakra-ui/react';
export default function WishlistCard({item}) {
    const [disable, setDisable] = useState(false);
    const {addToCart} =useCart();
    const {removeJacketWishlist } = useWishlist();
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
       <Button isDisabled={disable} colorScheme='teal' variant='outline' onClick={()=>{
        addToCart(item)
        setDisable(true)
       }}>Add To Cart</Button></Stack>
    </div>
  </div>
  )
}
