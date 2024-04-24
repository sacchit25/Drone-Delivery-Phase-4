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
      </div>
    </div>
  );
};

export default LandingPage;