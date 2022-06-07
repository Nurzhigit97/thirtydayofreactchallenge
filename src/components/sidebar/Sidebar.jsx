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
              Portfolio(Class)
            </Link>
          </li>
          <li>
            <Link to="/dummy" activeClassName="active">
              Next Country
            </Link>
          </li>
          <li>
            <Link to="/dummy" activeClassName="active">
              Event Handle(Change position on Mouse)
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
              Twitter clone(Fucn,Hooks,Redux)
            </Link>
          </li>
          <li>
            <Link to="/dummy" activeClassName="active">
              Test quiz(Class)
            </Link>
          </li>
          <li>
            <Link to="/dummy" activeClassName="active">
              Login with db(Fucn,Hooks,Redux)
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
