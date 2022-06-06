import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active">
              Front-end Tehnologies
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">
              Generate Number
            </Link>
          </li>
          <li>
            <Link to="/dummy" activeClassName="active">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/dummy" activeClassName="active">
              Hexdecimal Color
            </Link>
          </li>
          <li>
            <Link to="/dummy" activeClassName="active">
              Population Api
            </Link>
          </li>
          <li>
            <Link to="/dummy" activeClassName="active">
              Next Country
            </Link>
          </li>
          <li>
            <Link to="/dummy" activeClassName="active">
              Event Handle
            </Link>
          </li>
          <li>
            <Link to="/dummy" activeClassName="active">
              World countries
            </Link>
          </li>
          <li>
            <Link to="/dummy" activeClassName="active">
              Generate Hexdecimal color
            </Link>
          </li>
          <li>
            <Link to="/dummy" activeClassName="active">
              Twitter clone
            </Link>
          </li>
          <li>
            <Link to="/dummy" activeClassName="active">
              Login with db
            </Link>
          </li>
          <li>
            <Link to="/dummy" activeClassName="active">
              Test quiz
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
