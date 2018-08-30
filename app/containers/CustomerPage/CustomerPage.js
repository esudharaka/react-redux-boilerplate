/*
 * CustomerPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
// import './style.scss';

export default class CustomerPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="description"
            content="Customer page"
          />
        </Helmet>
        <div className="container">
          <h2>Customer</h2>
          <p>The form below contains  input elements to create a customer:</p>
          <form>
            <div className="form-group">
              <label htmlFor="usr">Name:</label>
              <input type="text" className="form-control" id="usr"/>
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Last Name:</label>
              <input type="password" className="form-control" id="pwd"/>
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Email:</label>
              <input type="password" className="form-control" id="pwd"/>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    );
  }
}
