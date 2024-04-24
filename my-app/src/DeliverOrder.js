import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const DeliverOrder = () => {
  const [orderId, setOrderId] = useState('');
  const navigate = useNavigate();

  const handleOrderIdChange = (event) => {
    setOrderId(event.target.value);
  };

  const handleCancel = () => {
    // Implement cancel logic here
    navigate('/');
  };

  const handleDeliver = () => {
    // Implement delivery logic here
    axios.put(`/DeliverOrder/${orderId}`)
    .then(response => {
      console.log('Order Delivered successfully');
      // Handle success, if needed
    })
    .catch(error => {
      console.error('Error Delivering order: ', error);
      // Handle error, if needed
    });
  };

  return (
    <div>
      <h2>Deliver Order</h2>
      <div>
        <label htmlFor="orderId">Order ID:</label>
        <input
          type="text"
          id="orderId"
          value={orderId}
          onChange={handleOrderIdChange}
        />
      </div>
      <div>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleDeliver}>Deliver</button>
      </div>
    </div>
  );
};

export default DeliverOrder;
