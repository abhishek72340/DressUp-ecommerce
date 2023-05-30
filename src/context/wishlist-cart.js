import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';
import { useProduct } from "./product-context";
const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const [wishlistItem, setWishlistItem] = useState([]);

    const addToWishlist = async (product) => {
        const token = localStorage.getItem("token");
        try {
            const { data } = await axios.post('/api/user/wishlist',
                { product }, { headers: { authorization: token } }
            )
            setWishlistItem(data.wishlist)
        }
        catch (error) {
            alert(error)
        }       
    };

    const removeJacketWishlist = async (id) => {
        const token = localStorage.getItem("token");
        try {
            const { data } = await axios.delete(`/api/user/wishlist/${id}`,
                { headers: { authorization: token } }
            )
            setWishlistItem(data.wishlist)
        }
        catch (error) {
            alert(error)
        }
         };
    return (
        <wishlistContext.Provider value={{ wishlistItem, addToWishlist, removeJacketWishlist, setWishlistItem }} >
            {children}
        </wishlistContext.Provider>
    )
};
const useWishlist = () => useContext(wishlistContext);
export { useWishlist, WishlistProvider };