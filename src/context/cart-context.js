import { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToast } from "./toast-context";
const cartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

const {notifySuccess,notifyError} =useToast();

    const token = localStorage.getItem("token");
    const addToCart = async (product) => {
        try {
            const { data } = await axios.post('/api/user/cart',
                { product }, { headers: { authorization: token } }
            )
            setCartItems(data.cart);
           notifySuccess("Added Item Successfully");

        }
        catch (error) {
            navigate('/login')
            window.scrollTo({ top: 0, scroll: 'instant' });
            notifyError('please login')
        }
    }

    const removeCartItem = async (id) => {
        try {
            const { data } = await axios.delete(`/api/user/cart/${id}`,
                { headers: { authorization: token } }
            )
            setCartItems(data.cart)
            notifyError('Item Deleted') 
        }
        catch (error) {
            alert(error)
        }

    };
    const updateQuantity = async (actionType, id) => {
        try {
            const { data } = await axios.post(`/api/user/cart/${id}`,
                {
                    action: {
                        type: actionType
                    }
                },
                { headers: { authorization: token } }
            );
            setCartItems(data.cart);
        } catch (err) {
            alert(err);
        }
    };

    const goToCartHandler = () => {
        navigate('/cart');
        window.scrollTo({ top: 0, scroll: 'instant' })
    }
    return (
        <cartContext.Provider value={{ updateQuantity, removeCartItem, cartItems, addToCart, goToCartHandler, setCartItems }} >
            {children}
        </cartContext.Provider>
    )
};
const useCart = () => useContext(cartContext);
export { useCart, CartProvider };