import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const CancelOrder = () => {
  const [orderId, setOrderId] = useState('');
  const navigate = useNavigate();

  const handleOrderIdChange = (event) => {
    setOrderId(event.target.value);
  };

  const handleCancel = () => {
    // Implement cancel logic here
    navigate('/');
  };

  const handleRemoveOrder = () => {
    // Implement delivery logic here
    axios.put(`/CancelOrder/${orderId}`)
    .then(response => {
      console.log('Order Cancelled successfully');
    })
    .catch(error => {
      console.error('Error Cancelling order: ', error);
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
        <button onClick={handleRemoveOrder}>Remove Order</button>
      </div>
    </div>
  );
};

export default CancelOrder;
