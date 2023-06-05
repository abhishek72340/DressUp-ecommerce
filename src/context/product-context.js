import { createContext, useContext, useReducer, useEffect } from 'react';
import { productReducer } from '../reducer/productReducer';
import axios from 'axios';

const productContext = createContext();
const ProductProvider = ({ children }) => {

    const initialState = {
        products: [],
        isLoading: true,
        sortBy: '',

    }
    const [state, dispatch] = useReducer(productReducer, initialState)
    const getProducts = async () => {
        try {
            const response = await axios.get('/api/products')
            dispatch({ type: 'FETCH_DATA', payload: response.data.products });
            dispatch({ type: 'IS_LOADING' })
        }
        catch (error) {
            alert(error)
        }
    };
    useEffect(() => {
        getProducts()
    }, [])

    const { products, sortBy } = state;
    return (
        <productContext.Provider value={{ dispatch, state, products, sortBy }}>
            {children}
        </productContext.Provider>
    )
};

const useProduct = () => useContext(productContext);
export { useProduct, ProductProvider }