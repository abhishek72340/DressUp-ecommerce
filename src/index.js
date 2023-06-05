import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { makeServer } from "./server";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from "./context/product-context";
import { CartProvider } from './context/cart-context';
import { WishlistProvider } from "./context/wishlist-cart";
import { ToastProvider } from './context/toast-context';
import { AddressProvider } from './context/address-context';
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <ToastProvider>
        <ProductProvider>
          <CartProvider>
            <AddressProvider>
              <WishlistProvider>
                <ChakraProvider>
                  <App />
                </ChakraProvider>
              </WishlistProvider>
            </AddressProvider>
          </CartProvider>
        </ProductProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
