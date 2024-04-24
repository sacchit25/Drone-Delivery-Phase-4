import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to the Landing Page!</h1>
      <div>
        <Link to="/DeliverOrder"><button>Deliver Order</button></Link>
        <Link to="/RemoveCustomer"><button>Remove Customer</button></Link>
        <Link to="/CancelOrder"><button>Cancel Order</button></Link>
        <Link to="/AddDrone"><button>Add Drone</button></Link>
        <Link to="/AddCustomer"><button>Add Customer</button></Link>
        <Link to="/BeginOrder"><button>Begin Order</button></Link>
        <Link to="/AddOrderLine"><button>Add Order Line</button></Link>
        <Link to="/AddDronePilot"><button>Add Drone Pilot</button></Link>
        <Link to="/AddProduct"><button>Add Product</button></Link>
        <Link to="/RemoveDronePilot"><button>Remove Drone Pilot</button></Link>
        <Link to="/RemoveProduct"><button>Remove Product</button></Link>
        <Link to="/RemoveDrone"><button>Remove Drone</button></Link>
      </div>
    </div>
  );
};

export default LandingPage;