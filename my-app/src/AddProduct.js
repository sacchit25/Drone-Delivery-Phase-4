import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const [barcode, setbarcode] = useState('');
  const [pname, setpname] = useState('');
  const [weight, setweight] = useState('');
  const navigate = useNavigate();

  const handlebarcodeChange = (event) => {
    setbarcode(event.target.value);
  };
  const handlepnameChange = (event) => {
    setpname(event.target.value);
  };
  const handleweightChange = (event) => {
    setweight(event.target.value);
  };
  const handleCancel = () => {
    // Implement cancel logic here
    navigate('/');
  };

  const handleAddProduct = () => {
    // Implement delivery logic here
    axios.put(`/AddProduct/${barcode}/${pname}/${weight}`)
    .then(response => {
      console.log('Added Product successfully');
    })
    .catch(error => {
      console.error('Error Adding Product: ', error);
    });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <div>
        <label htmlFor="barcode">Barcode:</label>
        <input
          type="text"
          id="barcode"
          value={barcode}
          onChange={handlebarcodeChange}
        />
         <label htmlFor="pname">Pname:</label>
        <input
          type="text"
          id="pname"
          value={pname}
          onChange={handlepnameChange}
        />
         <label htmlFor="weight">Weight:</label>
        <input
          type="text"
          id="weight"
          value={weight}
          onChange={handleweightChange}
        />
      </div>
      <div>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default AddProduct;
