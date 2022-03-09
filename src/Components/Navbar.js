import React from 'react';
import { Link } from 'react-router-dom';
import './../Css/Navbar.css';

function Navbar() {

  return (
    <div>
      <nav class="main-nav">
            <Link to="/" class="logo">enotes</Link>

            <ul class="navlinks">
              <li class="list"><Link to="/Login" class="link" >Login</Link></li>
              <li class="list"><Link to="/Signup" class="contact" >signup</Link></li>
            </ul>

          </nav>
    </div>

  );
}

export default Navbar;
