import React from 'react';
import { Link } from 'react-router-dom';
// import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <h1>Shopping App</h1>
        <div className="nav-bar">
          <Link className="router-link" to="/order">
            Add Order
          </Link>
          <Link className="router-link" to="/customer">
            Add Customer
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
