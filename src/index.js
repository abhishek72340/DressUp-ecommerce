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
// import { AccountProvider } from "./context/account-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <ProductProvider>
        <CartProvider>
          <WishlistProvider>
            {/* <AccountProvider> */}
              <ChakraProvider>
                <App />
              </ChakraProvider>
            {/* </AccountProvider> */}
          </WishlistProvider>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
