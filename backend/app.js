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

  // app.put('/DeliverOrder/:orderID', (req, res) => {
  //   const ip_orderID = req.params.orderID;
  //   console.log("hi")

  //   connection.query('CALL deliver_order(?)', [ip_orderID], (error, results) => {
  //     if (error) {
  //       console.error('Error calling stored procedure: ', error);
  //       res.status(500).json({ error: 'Internal server error' });
  //     } else {
  //       console.log("successly removed", ip_orderID)
  //     }
  //   });
  // });

  app.put('/DeliverOrder/:orderID', (req, res) => {
    const ip_orderID = req.params.orderID;
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

  app.put('/CancelOrder/:orderID', (req, res) => {
    const ip_orderID = req.params.orderID;
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

  app.put('/AddDrone/:storeID/:droneTag/:capacity/:remaining_trips/:pilot', (req, res) => {
    console.log(req.params.storeID)
    const ip_storeID = req.params.storeID;
    const ip_droneTag = req.params.droneTag;
    const ip_capacity = req.params.capacity;
    const ip_remaining_trips = req.params.remaining_trips;
    const ip_pilot = req.params.pilot;
    console.log("hi")
  
    // Call stored procedure with parameter
    connection.query('CALL add_drone(?,?,?,?,?)', [ip_storeID,ip_droneTag,ip_capacity,ip_remaining_trips,ip_pilot], (error, results) => {
      if (error) {
        console.error('Error calling stored procedure: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log("successfully added",ip_droneTag)
      }
    });
  });

  app.put('/AddCustomer/:uname/:first_name/:last_name/:address/:birthdate/:rating/:credit', (req, res) => {
    const ip_uname = req.params.uname;
    const ip_first_name = req.params.first_name;
    const ip_last_name = req.params.last_name;
    const ip_address = req.params.address;
    const ip_birthdate = req.params.birthdate;
    const ip_rating = req.params.rating;
    const ip_credit = req.params.credit;
    console.log("hi")
  
    // Call stored procedure with parameter
    connection.query('CALL add_customer(?,?,?,?,?,?,?)', [ip_uname,ip_first_name,ip_last_name,ip_address,ip_birthdate,ip_rating,ip_credit], (error, results) => {
      if (error) {
        console.error('Error calling stored procedure: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else 
      console.log ("successfully added",ip_uname)
    });
  });

  app.put('/BeginOrder/:orderID/:sold_on/:purchased_by/:carrier_store/:carrier_tag/:barcode/:price/:quantity', (req, res) => {
    const ip_orderID = req.params.orderID;
    const ip_sold_on = req.params.sold_on;
    const ip_purchased_by = req.params.purchased_by;
    const ip_carrier_store = req.params.carrier_store;
    const ip_carrier_tag = req.params.carrier_tag;
    const ip_barcode = req.params.barcode;
    const ip_price = req.params.price;
    const ip_quantity = req.params.quantity;
    console.log("hi")
  
    // Call stored procedure with parameter
    connection.query('CALL begin_order(?,?,?,?,?,?,?,?)', [ip_orderID,ip_sold_on,ip_purchased_by,ip_carrier_store,ip_carrier_tag,ip_barcode,ip_price,ip_quantity], (error, results) => {
      if (error) {
        console.error('Error calling stored procedure: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log("started order", ip_orderID);
      }
    });
  });

  app.put('/AddOrderLine/:orderID/:barcode/:price/:quantity', (req, res) => {
    const ip_orderID = req.params.orderID;
    const ip_barcode = req.params.barcode;
    const ip_price = req.params.price;
    const ip_quantity = req.params.quantity;
    console.log("hi")
  
    // Call stored procedure with parameter
    connection.query('CALL add_order_line(?,?,?,?)', [ip_orderID,ip_barcode,ip_price,ip_quantity], (error, results) => {
      if (error) {
        console.error('Error calling stored procedure: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } 
    });
  });

  app.put('/AddDronePilot/:uname/:first_name/:last_name/:address/:birthdate/:taxID/:service/:salary/:licenseID/:experience', (req, res) => {
    const ip_uname = req.params.uname;
    const ip_first_name = req.params.first_name;
    const ip_last_name = req.params.last_name;
    const ip_address = req.params.address;
    const ip_birthdate = req.params.birthdate;
    const ip_taxID = req.params.taxID;
    const ip_service = req.params.service;
    const ip_salary = req.params.salary;
    const ip_licenseID = req.params.licenseID;
    const ip_experience = req.params.experience;
    console.log("hi")
  
    // Call stored procedure with parameter
    connection.query('CALL add_drone_pilot(?,?,?,?,?,?,?,?,?,?)', [ip_uname,ip_first_name,ip_last_name,ip_address,ip_birthdate,ip_taxID,ip_service,ip_salary,ip_licenseID,ip_experience], (error, results) => {
      if (error) {
        console.error('Error calling stored procedure: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
      console.log("successfully added",ip_uname)
    }
    });
  });

  app.put('/AddProduct/:barcode/:pname/:weight', (req, res) => {
    const ip_barcode = req.params.barcode;
    const ip_pname = req.params.pname;
    const ip_weight = req.params.weight;
    console.log("hi")
  
    // Call stored procedure with parameter
    connection.query('CALL add_product(?,?,?)', [ip_barcode,ip_pname,ip_weight], (error, results) => {
      if (error) {
        console.error('Error calling stored procedure: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } 
    });
  });

  app.delete('/RemoveDronePilot', (req, res) => {
    // Extract parameter from request query
    const ip_uname = req.query.ip_uname;
    console.log("hi")
  
    // Call stored procedure with parameter
    connection.query('CALL remove_drone_pilot(?)', [ip_uname], (error, results) => {
      if (error) {
        console.error('Error calling stored procedure: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log("successfully removed", ip_uname);
      }
    });
  });

  app.delete('/RemoveBarcode', (req, res) => {
    // Extract parameter from request query
    const ip_barcode = req.query.ip_barcode;
    console.log("hi")
  
    // Call stored procedure with parameter
    connection.query('CALL remove_product(?)', [ip_barcode], (error, results) => {
      if (error) {
        console.error('Error calling stored procedure: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log("successfully removed", ip_barcode)
      }
    });
  });

  app.delete('/RemoveDrone', (req, res) => {
    // Extract parameter from request query
    const ip_storeID = req.query.ip_storeID;
    const ip_droneTag = req.query.ip_droneTag;
    console.log("hi")
  
    // Call stored procedure with parameter
    connection.query('CALL remove_drone(?,?)', [ip_storeID,ip_droneTag], (error, results) => {
      if (error) {
        console.error('Error calling stored procedure: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log("removed", ip_droneTag)
      }
    });
  });

  app.put('/IncreaseCustomerCredit/:username/:money', (req, res) => {
    const ip_uname = req.params.username;
    const ip_money = req.params.money
    console.log("hi")

    connection.query('CALL increase_customer_credits(?,?)', [ip_uname,ip_money], (error, results) => {
      if (error) {
        console.error('Error calling stored procedure: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log("successly increased credit", ip_uname)
      }
    });
  });

  app.put('/RepairRefuelDrone/:droneStore/:droneTag/:refueledTrips', (req, res) => {
    const ip_drone_store = req.params.droneStore;
    const ip_drone_tag = req.params.droneTag
    const ip_refueled_trips = req.params.refueledTrips
    console.log("hi")

    connection.query('CALL repair_refuel_drone(?,?,?)', [ip_drone_store,ip_drone_tag,ip_refueled_trips], (error, results) => {
      if (error) {
        console.error('Error calling stored procedure: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log("successly refueled drone", ip_drone_tag)
      }
    });
  });

  app.put('/SwapDroneControl/:incomingPilot/:outgoingPilot', (req, res) => {
    const ip_incoming_pilot = req.params.incomingPilot;
    const ip_outgoing_pilot = req.params.outgoingPilot
    console.log("hi")

    connection.query('CALL swap_drone_control(?,?)', [ip_incoming_pilot,ip_outgoing_pilot], (error, results) => {
      if (error) {
        console.error('Error calling stored procedure: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log("successly swapped drone", ip_incoming_pilot, " and ", ip_outgoing_pilot)
      }
    });
  });

  app.get('/RoleDistributionTable', (req, res) => {
    connection.query('SELECT * FROM role_distribution', (error, results) => {
      if (error) {
        console.error('Error calling view: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log("Successfully fetched role_distribution data");
        console.log(results);
        // Send role distribution data back in the response
        res.json(results);
      }
    });
  });

  app.get('/CustomerCreditCheck', (req, res) => {
    connection.query('SELECT * FROM customer_credit_check', (error, results) => {
      if (error) {
        console.error('Error calling view: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log("Successfully fetched customer_credit_check data");
        console.log(results);
        // Send role distribution data back in the response
        res.json(results);
      }
    });
  });
  
  app.get('/DroneTrafficControl', (req, res) => {
    connection.query('SELECT * FROM drone_traffic_control', (error, results) => {
      if (error) {
        console.error('Error calling view: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log("Successfully fetched drone_traffic_control data");
        console.log(results);
        // Send role distribution data back in the response
        res.json(results);
      }
    });
  });

  app.get('/MostPopularProducts', (req, res) => {
    connection.query('SELECT * FROM most_popular_products', (error, results) => {
      if (error) {
        console.error('Error calling view: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log("Successfully fetched most_popular_products data");
        console.log(results);
        // Send role distribution data back in the response
        res.json(results);
      }
    });
  });

  app.get('/DronePilotRoster', (req, res) => {
    connection.query('SELECT * FROM drone_pilot_roster', (error, results) => {
      if (error) {
        console.error('Error calling view: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log("Successfully fetched drone_pilot_roster data");
        console.log(results);
        // Send role distribution data back in the response
        res.json(results);
      }
    });
  });

  app.get('/StoreSalesOverview', (req, res) => {
    connection.query('SELECT * FROM store_sales_overview', (error, results) => {
      if (error) {
        console.error('Error calling view: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log("Successfully fetched store_sales_overview data");
        console.log(results);
        // Send role distribution data back in the response
        res.json(results);
      }
    });
  });

  app.get('/OrdersInProgress', (req, res) => {
    connection.query('SELECT * FROM orders_in_progress', (error, results) => {
      if (error) {
        console.error('Error calling view: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log("Successfully fetched orders_in_progress data");
        console.log(results);
        // Send role distribution data back in the response
        res.json(results);
      }
    });
  });


  app.listen(3000, () => {
    console.log('Server is running on port 3000');
});