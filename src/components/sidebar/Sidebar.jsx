import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/frontendTehnologies" activeClassName="active">
              Front-end Tehnologies
            </Link>
          </li>
          <li>
            <Link to="/GenerateNumber" activeClassName="active">
              Generate Number
            </Link>
          </li>
          <li>
            <Link to="/portfolio" activeClassName="active">
              Portfolio(Class)
            </Link>
          </li>
          <li>
            <Link to="/countriesApi" activeClassName="active">
              Countries Api
            </Link>
          </li>
          <li>
            <Link to="/quiz" activeClassName="active">
              Test quiz(Class)
            </Link>
          </li>
          <li>
            <Link to="/eventHandle" activeClassName="active">
              Event Handle(Change position on Mouse)
            </Link>
          </li>
          <li>
            <Link to="/frontendTehnologies" activeClassName="active">
              Generate Hexdecimal color
            </Link>
          </li>
          <li>
            <Link to="/frontendTehnologies" activeClassName="active">
              Twitter clone(Fucn,Hooks,Redux)
            </Link>
          </li>
          <li>
            <Link to="/frontendTehnologies" activeClassName="active">
              Login with db(Fucn,Hooks,Redux)
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
