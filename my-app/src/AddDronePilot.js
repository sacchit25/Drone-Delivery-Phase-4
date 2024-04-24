import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const AddDronePilot = () => {
  const [uname, setuname] = useState('');
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [address, setaddress] = useState('');
  const [birthdate, setbirthdate] = useState('');
  const [taxID, settaxID] = useState('');
  const [service, setservice] = useState(0);
  const [salary, setsalary] = useState(0);
  const [licenseID, setlicenseID] = useState(0);
  const [experience, setexperience] = useState(0);
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
  const handletaxIDChange = (event) => {
    settaxID(event.target.value);
  };
  const handleserviceChange = (event) => {
    setservice(event.target.value);
  };
  const handlesalaryChange = (event) => {
    setsalary(event.target.value);
  };
  const handlelicenseIDChange = (event) => {
    setlicenseID(event.target.value);
  };
  const handleexperienceChange = (event) => {
    setexperience(event.target.value);
  };
  const handleCancel = () => {
    // Implement cancel logic here
    navigate('/');
  };

  const handleAddDronePilot = () => {
    // Implement delivery logic here
    axios.put(`/AddDronePilot/${uname}/${first_name}/${last_name}/${address}/${birthdate}/${taxID}/${service}/${salary}/${licenseID}/${experience}`)
    .then(response => {
      console.log('Added Drone Pilot successfully');
    })
    .catch(error => {
      console.error('Error Adding Drone Pilot: ', error);
    });
  };

  return (
    <div>
      <h2>Add Drone Pilot</h2>
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
        <label htmlFor="taxID">Tax ID:</label>
        <input
          type="text"
          id="taxID"
          value={taxID}
          onChange={handletaxIDChange}
        />
        <label htmlFor="service">Service:</label>
        <input
          type="text"
          id="service"
          value={service}
          onChange={handleserviceChange}
        />
        <label htmlFor="salary">Salary:</label>
        <input
          type="text"
          id="salary"
          value={salary}
          onChange={handlesalaryChange}
        />
        <label htmlFor="licenseID">License ID:</label>
        <input
          type="text"
          id="licenseID"
          value={licenseID}
          onChange={handlelicenseIDChange}
        />
        <label htmlFor="experience">Experience:</label>
        <input
          type="text"
          id="experience"
          value={experience}
          onChange={handleexperienceChange}
        />
      </div>
      <div>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleAddDronePilot}>Add Drone Pilot</button>
      </div>
    </div>
  );
};

export default AddDronePilot;
