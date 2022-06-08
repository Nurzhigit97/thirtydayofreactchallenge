import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/" >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/dummy">
              Dummy Data
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
