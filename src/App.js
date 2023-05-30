import React from 'react';
import { Navbar } from './Components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Main } from './Components/main/Main';
import { Shop } from './Components/shop/Shop';
import { CustomerHelp } from './Components/customerHelp/CustomerHelp';
import { Footer } from './Components/footer/Footer';
import { ContactUs } from './Components/contactUs/ContactUs';
import Mockman from 'mockman-js'
import { CartItem } from './Components/cartItem/CartItem';
import { Wishlist } from './Components/wishlist/Wishlist';
import { Login } from './Components/signup/Login';
import { Signup } from './Components/signup/Signup';
import { ForgotPassword } from './Components/signup/ForgotPassword';
import {Cart} from './Components/cartItem/Cart';
import { SingleProduct } from './Components/singleProduct/SingleProduct';
import { ErrorPage } from './Components/errorPage/ErrorPage';

// import { SearchBar } from './Components/searchBar/SearchBar';


export const App = () => {
  return (
    <div>
      <Navbar />


      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/customerhelp' element={<CustomerHelp />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/mockman' element={<Mockman />} />
        <Route path='/cartitem' element={<CartItem />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/singleproduct/:Id' element={<SingleProduct/>} />
        <Route path='*' element={<ErrorPage/>} />

      </Routes>
      <Footer />

    </div>
  )
}
