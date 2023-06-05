import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useCart } from './cart-context'
const addressContext = createContext();
const AddressProvider = ({ children }) => {
    const [add, setAdd] = useState(false)
    const [addresses, setAddresses] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const [myOrders, setMyOrders] = useState([{ id: 'sbhdbshsia', title: 'clothsokdoeodkeodde', quantity: '3', price: '4532', address: 'mankapur,gonda,niwdindw', txNum: 'razorpay', dateOfPurchase: new Date().toDateString() }])
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        pinCode: '',
        city: '',
        address: '',
        isAddressSelected: false
    });
    const navigate = useNavigate();
    const editAddress = (index) => {

        setEditIndex(index);
        const addressToEdit = addresses[index];
        setFormData({
            name: addressToEdit.name,
            mobile: addressToEdit.mobile,
            pinCode: addressToEdit.pinCode,
            city: addressToEdit.city,
            address: addressToEdit.address,
        });
    };
    const addAddress = (e) => {
        e.preventDefault();
        setAddresses([...addresses, formData]);
        setFormData({
            name: '',
            mobile: '',
            pinCode: '',
            city: '',
            address: '',
            isAddressSelected: false
        });
        navigate('/address');
    };
    const deleteAddress = (index) => {
        const updatedAddresses = [...addresses];
        updatedAddresses.splice(index, 1);
        setAddresses(updatedAddresses);
    };
    const saveAddress = (e) => {
        e.preventDefault();
        const updatedAddresses = [...addresses];
        updatedAddresses[editIndex] = formData;
        setAddresses(updatedAddresses);
        setFormData({
            name: '',
            mobile: '',
            pinCode: '',
            city: '',
            address: '',
            isAddressSelected: false
        });
        setEditIndex(-1);
        navigate('/address')

    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const selectAddress = (ind) => {
        setAddresses((Adresses) =>
            Adresses.map((address, index) =>
                index === ind
                    ? { ...address, isAddressSelected: true }
                    : { ...address, isAddressSelected: false }
            )
        );
    };
    return (
        <addressContext.Provider
            value={{
                addresses,
                formData,
                editIndex,
                add,
                setAdd,
                setAddresses,
                editAddress,
                deleteAddress,
                saveAddress,
                addAddress,
                setEditIndex,
                setFormData,
                handleInputChange,
                selectAddress,
                setMyOrders,
                myOrders,

            }}
        >
            {children}
        </addressContext.Provider>
    );
};
const useAddress = () => useContext(addressContext);
export { AddressProvider, useAddress };