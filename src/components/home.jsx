import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className="App">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/product-temp">Product Component</Link>
                </li>
                <li>
                  <Link to="/product-list">Product List</Link>
                </li>
                <li>
                  <Link to="/protected">Protected</Link>
                </li>
                <li>
                  <Link to="/admin-protected">Admin Protected</Link>
                </li>
                <li>
                  <Link to="/not">Not</Link>
                </li>
              </ul>
            </div>
        );
    }
}
 
export default Home;