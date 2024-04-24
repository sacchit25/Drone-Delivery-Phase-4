import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const BeginOrder = () => {
  const [orderID, setorderID] = useState('');
  const [sold_on, setsold_on] = useState('');
  const [purchased_by, setpurchased_by] = useState('');
  const [carrier_store, setcarrier_store] = useState('');
  const [carrier_tag, setcarrier_tag] = useState('');
  const [barcode, setbarcode] = useState('');
  const [price, setprice] = useState('');
  const [quantity, setquantity] = useState('');
  const navigate = useNavigate();

  const handleorderIDChange = (event) => {
    setorderID(event.target.value);
  };
  const handlesold_onChange = (event) => {
    setsold_on(event.target.value);
  };
  const handlepurchased_byChange = (event) => {
    setpurchased_by(event.target.value);
  };
  const handlecarrier_storeChange = (event) => {
    setcarrier_store(event.target.value);
  };
  const handlecarrier_tagChange = (event) => {
    setcarrier_tag(event.target.value);
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

  const handleBeginOrder = () => {
    // Implement delivery logic here
    axios.put(`/BeginOrder/${orderID}/${sold_on}/${purchased_by}/${carrier_store}/${carrier_tag}/${barcode}/${price}/${quantity}`)
    .then(response => {
      console.log('Started Order successfully');
    })
    .catch(error => {
      console.error('Error Beginning Order: ', error);
    });
  };

  return (
    <div>
      <h2>Begin Order</h2>
      <div>
        <label htmlFor="orderID">OrderID:</label>
        <input
          type="text"
          id="orderID"
          value={orderID}
          onChange={handleorderIDChange}
        />
         <label htmlFor="sold_on">Sold On:</label>
        <input
          type="text"
          id="sold_on"
          value={sold_on}
          onChange={handlesold_onChange}
        />
         <label htmlFor="purchased_by">Purchased By:</label>
        <input
          type="text"
          id="purchased_by"
          value={purchased_by}
          onChange={handlepurchased_byChange}
        />
         <label htmlFor="carrier_store">Carrier Store:</label>
        <input
          type="text"
          id="carrier_store"
          value={carrier_store}
          onChange={handlecarrier_storeChange}
        />
         <label htmlFor="carrier_tag">Carrier Tag:</label>
        <input
          type="text"
          id="carrier_tag"
          value={carrier_tag}
          onChange={handlecarrier_tagChange}
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
        <button onClick={handleBeginOrder}>Begin Order</button>
      </div>
    </div>
  );
};

export default BeginOrder;
