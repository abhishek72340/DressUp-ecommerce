import './Order.css';
import { useNavigate } from 'react-router-dom';
import { useAddress } from '../../context/address-context'
import { Module } from '../../module/Module';
export const Order = () => {
  const { myOrders } = useAddress();
  const navigate = useNavigate();
  return (
    <div>

      {
        myOrders.length ?
          (myOrders.map((data) => {
            return (

              <div key={data._id} id='order-history-data'>
                <div id='order-data'>
                  <span id='order-heading'>Order</span>
                  <span className='order-value'> <span className='order-key'>Transaction Id:</span> {data.txNum}</span>
                  <span className='order-value'> <span className='order-key'>Date:</span> {data.dateOfPurchase}</span>
                  <span className='order-value'><span className='order-key'>Name:</span> {data.title}</span>
                  <span className='order-value'><span className='order-key'>Mobile:</span> {data.mobile}</span>
                  <span className='order-value'><span className='order-key'>Address:</span> {data.address}</span>
                  <span className='order-value'><span className='order-key'>Quantity:</span> {data.quantity}</span>
                  <span className='order-value'><span className='order-key'>price:</span> {data.price}</span>
                </div>
              </div>

            )
          })) :
          <div id='empty-order-history'><span id='order-history-statement'>NOTHING IN ORDER HISTORY</span>
            <button onClick={() => navigate('/shop')}>Order Now</button></div>
      }
      <Module />
    </div>
  )
}
