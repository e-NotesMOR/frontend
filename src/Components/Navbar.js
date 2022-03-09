import React from 'react';
import { Link } from 'react-router-dom';
import './../Css/Navbar.css';

function Navbar() {

  return (
    <div>
      <nav className="main-nav">
            <Link to="/" className="logo">enotes</Link>

            <ul className="navlinks">
              <li className="list"><Link to="/Login" className="link" >Login</Link></li>
              <li className="list"><Link to="/Signup" className="contact" >signup</Link></li>
            </ul>

          </nav>
    </div>

  );
}

export default Navbar;
