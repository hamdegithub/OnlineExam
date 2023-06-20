import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NotFoundPage = () => {
  return (
    <div className="text-center">
      <h1>404</h1>
      <h3>Oops! Page not found.</h3>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">
        <Button variant="primary">Go to Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
