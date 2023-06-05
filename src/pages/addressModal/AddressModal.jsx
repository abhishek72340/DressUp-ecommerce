import './AddressModal.css';
import { useAddress } from '../../context/address-context';
import { Module } from '../../module/Module';
export const AddressModal = () => {
    const { addresses,
        formData,
        editIndex,
        editAddress,
        deleteAddress,
        saveAddress,
        addAddress,
        handleInputChange } = useAddress();

    return (
        <div className='address-container' >
            <div >
                <form onSubmit={editIndex === -1 ? addAddress : saveAddress} className="addressmodal-form">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        required
                        className='addressmodal-input-field'
                    />
                    <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="Mobile Number"
                        required
                        className='addressmodal-input-field'
                    />
                    <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange}
                        placeholder="Street No."
                        required
                        className='addressmodal-input-field'
                    />
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        required
                        className='addressmodal-input-field'
                    />
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="State"
                        required
                        className='addressmodal-input-field'
                    />
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="Country"
                        required
                        className='addressmodal-input-field'
                    />
                    <input
                        type="number"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleInputChange}
                        placeholder="Pin Code"
                        required
                        className='addressmodal-input-field'
                    />
                    <button type="submit" id='addressmodal-button'>
                        {editIndex === -1 ? 'Add Address' : 'Save Address'}
                    </button>
                </form>
            </div>

            <div>
                {
                    addresses.map((address, index) => (
                        <div key={index}>
                            <div className='addres-modal-data'>
                                <p>Name : {address.name}</p>
                                <p>Mobile : {address.mobile}</p>
                                <p>Pin Code : {address.pinCode}</p>
                                <p>City : {address.city}</p>
                                <p>Address : {address.address}</p>
                            </div>
                            <div id='address-modal-button'>
                                <button className='address-modal-edit-button' onClick={() => editAddress(index)}>Edit</button>
                                <button className='address-modal-delete-button' style={{ backgroundColor: 'red' }} onClick={() => deleteAddress(index)}>delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Module />
        </div>
    )
}
