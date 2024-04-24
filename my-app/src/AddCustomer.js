import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const AddCustomer = () => {
  const [uname, setuname] = useState('');
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [address, setaddress] = useState('');
  const [birthdate, setbirthdate] = useState('');
  const [rating, setrating] = useState(0);
  const [credit, setcredit] = useState(0);
  const navigate = useNavigate();

  const handleunameChange = (event) => {
    setuname(event.target.value);
  };
  const handlefirst_nameChange = (event) => {
    setfirst_name(event.target.value);
  };
  const handlelast_nameChange = (event) => {
    setlast_name(event.target.value);
  };
  const handleaddressChange = (event) => {
    setaddress(event.target.value);
  };
  const handlebirthdateChange = (event) => {
    setbirthdate(event.target.value);
  };
  const handleratingChange = (event) => {
    setrating(event.target.value);
  };
  const handlecreditChange = (event) => {
    setcredit(event.target.value);
  };
  const handleCancel = () => {
    // Implement cancel logic here
    navigate('/');
  };

  const handleAddCustomer = () => {
    // Implement delivery logic here
    axios.put(`/AddCustomer/${uname}/${first_name}/${last_name}/${address}/${birthdate}/${rating}/${credit}`)
    .then(response => {
      console.log('Added Customer successfully');
    })
    .catch(error => {
      console.error('Error Adding Customer: ', error);
    });
  };

  return (
    <div>
      <h2>Add Customer</h2>
      <div>
        <label htmlFor="uname">Username:</label>
        <input
          type="text"
          id="uname"
          value={uname}
          onChange={handleunameChange}
        />
         <label htmlFor="first_name">First Name:</label>
        <input
          type="text"
          id="first_name"
          value={first_name}
          onChange={handlefirst_nameChange}
        />
         <label htmlFor="last_name">Last Name:</label>
        <input
          type="text"
          id="last_name"
          value={last_name}
          onChange={handlelast_nameChange}
        />
         <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={handleaddressChange}
        />
         <label htmlFor="birthdate">Birthdate:</label>
        <input
          type="text"
          id="birthdate"
          value={birthdate}
          onChange={handlebirthdateChange}
        />
        <label htmlFor="rating">Rating:</label>
        <input
          type="text"
          id="rating"
          value={rating}
          onChange={handleratingChange}
        />
        <label htmlFor="credit">Credit:</label>
        <input
          type="text"
          id="credit"
          value={credit}
          onChange={handlecreditChange}
        />
      </div>
      <div>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleAddCustomer}>Add Customer</button>
      </div>
    </div>
  );
};

export default AddCustomer;
