import './WishlistItem.css';
import { useWishlist } from '../../context/wishlist-cart';
import { Module } from '../../module/Module';
import WishlistCard from '../../Components/card/WishlistCard';
export const WishlistItem = () => {
  const { wishlistItem } = useWishlist();
   return (
    <div>
      <span id='wishlist-heading'>WISHLIST</span>
      <div id='underline'><span id='wishlist-heading-underline'></span></div>
      <div id='wishlist-line-parent'><div id='wishlist-line'></div></div>
      {
        wishlistItem.map((item) => {
          return (
           <WishlistCard item={item}/>
          )
        })
      }
      <Module />
    </div>
  )
}
