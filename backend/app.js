const express = require('express');
const mysql = require('mysql2');
const app = express();
const connection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '1234',
    database: 'drone_dispatch'
});

connection.connect((err => {
    if (err) throw err;
    console.log('MySQL Connected');
}));

app.delete('/RemoveCustomer', (req, res) => {
    // Extract parameter from request query
    const ip_uname = req.query.ip_uname;
    console.log("hi")
  
    // Call stored procedure with parameter
    connection.query('CALL remove_customer(?)', [ip_uname], (error, results) => {
      if (error) {
        console.error('Error calling stored procedure: ', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });
  });

  app.put('/DeliverOrder/:orderId', (req, res) => {
    const ip_orderID = req.params.orderId;
    console.log("hi")

    connection.query('CALL deliver_order(?)', [ip_orderID], (error, results) => {
      if (error) {
        console.error('Error calling stored procedure: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log("successly removed", ip_orderID)
      }
    });
  });

  app.put('/DeliverOrder/:orderId', (req, res) => {
    const ip_orderID = req.params.orderId;
    console.log("hi")

    connection.query('CALL deliver_order(?)', [ip_orderID], (error, results) => {
      if (error) {
        console.error('Error calling stored procedure: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log("successly removed", ip_orderID)
      }
    });
  });

  app.put('/CancelOrder/:orderId', (req, res) => {
    const ip_orderID = req.params.orderId;
    console.log("hi")

    connection.query('CALL cancel_order(?)', [ip_orderID], (error, results) => {
      if (error) {
        console.error('Error calling stored procedure: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log("successly cancelled", ip_orderID)
      }
    });
  });

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
});