import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to the Landing Page!</h1>
      <div>
        <Link to="/DeliverOrder"><button>DeliverOrder</button></Link>
        <Link to="/RemoveCustomer"><button>RemoveCustomer</button></Link>
        <Link to="/CancelOrder"><button>CancelOrder</button></Link>
      </div>
    </div>
  );
};

export default LandingPage;