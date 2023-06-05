import './Address.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cart-context';
import { useAddress } from '../../context/address-context';
import { useToast } from '../../context/toast-context';
import { Module } from '../../module/Module';
export const Address = () => {
  const { cartItems, setCartItems } = useCart();
  const { addresses, deleteAddress, selectAddress, setMyOrders } = useAddress();
  const { notifyWarn, notifyError } = useToast();
  const selectedAddress = addresses.find((address) => address.isAddressSelected)
  const navigate = useNavigate();

  //RAZOR-PAY//
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Handle Payment Succes//
  const handlePaymentSuccess = (payment) => {
    cartItems.map((product) => setMyOrders((prev) => [...prev, { id: product._id, title: product.title, quantity: product.qty, price: product.price * product.qty, address: selectedAddress, txNum: payment.razorpay_payment_id, dateOfPurchase: new Date().toDateString() }]))
    navigate('/successpayment');
    window.scrollTo({ top: 0, scroll: 'instant' })
    setCartItems([])
  };

  const handlePaymentError = (error) => {
    notifyError("Payment Error:", error);
  };


  // Click On PlaceOrder for paymment//
  const makePayment = async () => {
    if (!selectedAddress) {
      notifyWarn('please select address')
      return;
    };

    //Razor-Pay Integrate//
    const options = {
      key: "rzp_test_mEbB9zKrMuDuwC",
      amount: totalAmount * 82 * 100 + 410,
      currency: "INR",
      name: "DressUp",
      description: "Thank you for your test purchase",
      image: '',
      handler: handlePaymentSuccess,
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      notes: {
        address: ''
      },
      theme: {
        color: "#0e5db3"
      }
    };

    //Razor-Pay Failed Payment Handled//
    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.on('payment.failed', handlePaymentError);
    razorpayInstance.open();
  };


  //Total Amounnt Calculate//
  const totalAmount = cartItems.length > 0 ? cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0) : null;

  return (
    <div id='address-page'>
      <span id='address-heading'>ADDRESS</span>
      <span id='add-new-address-button'>  <button onClick={() => navigate('/addressmodal')}>Add  Address</button></span>
      <div id='checkout-address-container'>

        {/* Address Map */}
        <div>
          {
            addresses.map((address, index) =>
              <div className='address-data' key={index} onClick={() => selectAddress(index)} style={{ backgroundColor: address.isAddressSelected ? 'whitesmoke' : 'none' }} >
                <div style={{ display: address.isAddressSelected ? 'block' : 'none' }} >
                  <input type="radio" name="" id="" checked='true' />
                </div>
                <div id='address-input-data'>
                  <p>Name : {address?.name}</p>
                  <p>Mobile : {address?.mobile}</p>
                  <p>Pin Code : {address?.pinCode}</p>
                  <p>City : {address?.city}</p>
                  <p>Address : {address?.address}</p>
                </div>
                <div className="updated-address-button">
                  <span> <button className='edit-address-button' onClick={() => { navigate('/addressmodal') }} >Edit</button></span>
                  <span><button className='delete-address-button' onClick={() => deleteAddress(index)}>delete</button></span>
                </div>
              </div>)
          }
        </div>

        {/* Checkout-Box */}
        <div id='address-checkout-box'>
          <div id='check-out-box' >
            <div id='check-out-address'>
              <div id='price-detail-text'>Price Details</div>
              <div id='checkout-data'>
                <div id='cart-subtotal'>
                  <span>SUBTOTAL</span><span id='subtotal-ammount'>${totalAmount}</span>
                </div>
                <div id='cart-subtotal'>
                  <span>DISCOUNT</span><span id='subtotal-ammount'>$0</span>
                </div>
                <div >
                  <div id='shipping-cart-product'>
                    <span id='shpping'>SHIPPING CHARGE</span>
                    <span id='input-address'>$5</span>
                  </div>
                </div>
                <div id='checkout-product-details'>Product Details</div>

                {/* Ordered Product */}
                {
                cartItems.map((item) => {
                    return (
                      <div id='cart-subtotal' key={item._id}>
                        <span id='checkout-title'>{item.title}</span><span id='subtotal-ammount'>{item.qty} item</span>
                      </div>
                    )
                  })
                }
              </div>
              <div id='line'><div id='horizontal-line'></div></div>
              <div id='total'><span >TOTAL</span><span id='total-ammount'>${totalAmount + 5}</span></div>
              <div id='check-btn'><div id='place-order-button' onClick={makePayment} >PLACE ORDER</div></div>
            </div>
          </div>
        </div>
      </div>
      <Module />
    </div>
  )
}
