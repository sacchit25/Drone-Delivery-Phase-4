import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const OrdersInProgress = () => {
  const [roleData, setRoleData] = useState([]);
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate('/');
  };

  useEffect(() => {
    // Fetch role distribution data from backend API
    axios.get('/OrdersInProgress')
      .then(response => {
        setRoleData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching OrdersInProgress data: ', error);
      });
  }, []); // Run once on component mount

  return (
    <div>
      <h2>OrdersInProgress</h2>
      <table>
        <thead>
          <tr>
            <th>orderID</th>
            <th>cost</th>
            <th>num_products</th>
            <th>payload</th>
            <th>contents </th>
          </tr>
        </thead>
        <tbody>
          {roleData.map((row, index) => (
            <tr key={index}>
              <td>{row.orderID}</td>
              <td>{row.cost}</td>
              <td>{row.num_products}</td>
              <td>{row.payload}</td>
              <td>{row.contents}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default OrdersInProgress;
