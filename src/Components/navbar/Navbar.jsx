import React from 'react'
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cart-context';
import { useWishlist } from '../../context/wishlist-cart';
import {Account} from '../../Components/signup/Account'
import {NavLink} from 'react-router-dom';
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {AiOutlineHeart} from 'react-icons/ai';
import { SearchBar } from '../searchBar/SearchBar';
import {SideBar} from '../sideBar/SideBar';


  const Navbar = () => {
    const{cartItems}=useCart();
    const {wishlistItem}=useWishlist();
    // const navigate=useNavigate();

    const getActiveStyle=({isActive})=>({
      color:isActive?'lightseagreen':''
    });
  return (
    <header>    
    <nav className='navbar'>
<span><SideBar/><SearchBar/></span>
    <div id='logo-link'>
    <NavLink to='/'><img src="/images/logo.webp" alt="logo" id='logo'/></NavLink>
    <div id='navbar-link'>
<NavLink  to='/' >Home</NavLink>
<NavLink to='/shop' style={getActiveStyle}>Shop</NavLink>
<NavLink to='customerhelp' style={getActiveStyle}>Customer</NavLink>
<NavLink to='/contactus' style={getActiveStyle}>Contact</NavLink>
</div>
    </div>
    <div className='navbar-icon'>
    <Account/>
    <span>
    <NavLink to='/wishlist'><AiOutlineHeart/></NavLink>
    <span className='wishlist-badge'>{wishlistItem.length}</span>
    </span>
    <span>
   <NavLink to='/cart'> <HiOutlineShoppingBag /></NavLink>
    <span className='cart-badge'>{cartItems.length}</span>
    </span>
    </div>
     </nav>     
 </header>
  )
}
export {Navbar};
