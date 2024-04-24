import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const RemoveProduct = () => {
  const [barcode, setbarcode] = useState('');
  const navigate = useNavigate();

  const handlebarcodeChange = (event) => {
    setbarcode(event.target.value);
  };

  const handleCancel = () => {
    // Implement cancel logic here
    navigate('/');

  };

  const handleRemove = () => {
    // Make API request to remove the customer
    axios.delete('/RemoveBarcode', {
      params: {
        ip_barcode: barcode
      }
    })
    .then(response => {
      console.log('Product removed successfully');
      // Handle success, if needed
    })
    .catch(error => {
      console.error('Error removing Product: ', error);
      // Handle error, if needed
    });
  };

  return (
    <div>
      <h2>Remove Product</h2>
      <div>
        <label htmlFor="barcode">Barcode:</label>
        <input
          type="text"
          id="barcode"
          value={barcode}
          onChange={handlebarcodeChange}
        />
      </div>
      <div>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleRemove}>Remove Product</button>
      </div>
    </div>
  );
};

export default RemoveProduct;
