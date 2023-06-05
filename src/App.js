import React from 'react';
import { Navbar } from './Components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/main/Main';
import { Shop } from './pages/shop/Shop';
import { CustomerHelp } from './pages/customerHelp/CustomerHelp';
import { Footer } from './Components/footer/Footer';
import { ContactUs } from './pages/contactUs/ContactUs';
import Mockman from 'mockman-js'
import { CartItem } from './Components/cartItem/CartItem';
import { Wishlist } from './pages/wishlist/Wishlist';
import { Login } from './pages/signup/Login';
import { Signup } from './pages/signup/Signup';
import { ForgotPassword } from './pages/signup/ForgotPassword';
import { Cart } from './Components/cartItem/Cart';
import { SingleProduct } from './pages/singleProduct/SingleProduct';
import { ErrorPage } from './pages/errorPage/ErrorPage';
import { ToastContainer } from 'react-toastify';
import { Address } from './pages/address/Address';
import {AddressModal} from './pages/addressModal/AddressModal';
import { SuccessPayment } from './pages/successPayment/SuccessPayment';
import { Order } from './pages/order/Order';
import { Profile } from './pages/profile/Profile';

export const App = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer />
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
        <Route path='/singleproduct/:Id' element={<SingleProduct />} />
        <Route path='/address' element={<Address/>} />
        <Route path='/addressmodal' element={<AddressModal/>} />
        <Route path='/successpayment' element={<SuccessPayment/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
