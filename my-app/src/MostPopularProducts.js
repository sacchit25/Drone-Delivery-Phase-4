import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const MostPopularProducts = () => {
  const [roleData, setRoleData] = useState([]);
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate('/');
  };

  useEffect(() => {
    // Fetch role distribution data from backend API
    axios.get('/MostPopularProducts')
      .then(response => {
        setRoleData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching MostPopularProducts data: ', error);
      });
  }, []); // Run once on component mount

  return (
    <div>
      <h2>Most Popular Products</h2>
      <table>
        <thead>
          <tr>
            <th>barcode</th>
            <th>product_name</th>
            <th>weight</th>
            <th>lowest_price</th>
            <th>highest_price </th>
            <th>lowest_quantity </th>
            <th>highest_quantity </th>
            <th>total_quantity </th>
          </tr>
        </thead>
        <tbody>
          {roleData.map((row, index) => (
            <tr key={index}>
              <td>{row.barcode}</td>
              <td>{row.product_name}</td>
              <td>{row.weight}</td>
              <td>{row.lowest_price}</td>
              <td>{row.highest_price}</td>
              <td>{row.lowest_quantity}</td>
              <td>{row.highest_quantity}</td>
              <td>{row.total_quantity}</td>
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

export default MostPopularProducts;
