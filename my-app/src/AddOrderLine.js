import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const AddOrderLine = () => {
  const [orderID, setorderID] = useState('');
  const [barcode, setbarcode] = useState('');
  const [price, setprice] = useState('');
  const [quantity, setquantity] = useState('');
  const navigate = useNavigate();

  const handleorderIDChange = (event) => {
    setorderID(event.target.value);
  };
  const handlebarcodeChange = (event) => {
    setbarcode(event.target.value);
  };
  const handlepriceChange = (event) => {
    setprice(event.target.value);
  };
  const handlequantityChange = (event) => {
    setquantity(event.target.value);
  };
  const handleCancel = () => {
    // Implement cancel logic here
    navigate('/');
  };

  const handleAddOrderLine = () => {
    // Implement delivery logic here
    axios.put(`/AddOrderLine/${orderID}/${barcode}/${price}/${quantity}`)
    .then(response => {
      console.log('Added Order Line successfully');
    })
    .catch(error => {
      console.error('Error Adding Order Line: ', error);
    });
  };

  return (
    <div>
      <h2>Add Order Line</h2>
      <div>
        <label htmlFor="orderID">OrderID:</label>
        <input
          type="text"
          id="orderID"
          value={orderID}
          onChange={handleorderIDChange}
        />
         <label htmlFor="barcode">Barcode:</label>
        <input
          type="text"
          id="barcode"
          value={barcode}
          onChange={handlebarcodeChange}
        />
         <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={handlepriceChange}
        />
         <label htmlFor="quantity">Quantity:</label>
        <input
          type="text"
          id="quantity"
          value={quantity}
          onChange={handlequantityChange}
        />
      </div>
      <div>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleAddOrderLine}>Add Order Line</button>
      </div>
    </div>
  );
};

export default AddOrderLine;
