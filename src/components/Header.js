import React from "react";
import logo from '../assets/logo.svg'
import {Link} from "react-router-dom";

export default function Header() {
  return <header className="header">
    <img src={logo} alt="logo" className="logo"/>
    <nav>
      <ul>
        <div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </div>
        <div>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/login">Cart</Link>
          </li>
        </div>
      </ul>
    </nav>
  </header>;
}
