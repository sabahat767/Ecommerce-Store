
//***********this is a simple navabar router********/
import React from 'react';
import Register from './Register';
import Login from './Login';
import Card from './Card';
import Product from './Product';
import Home from './Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Navbar() {
    return (
      
            <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Product">Product</Link>
            </li>
            <li>
              <Link to="/Card">Card</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Register">
        <Register/>
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Card">
            <Card />
          </Route>
          <Route path="/Product">
            <Product />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
       
    )
}

export default Navbar
