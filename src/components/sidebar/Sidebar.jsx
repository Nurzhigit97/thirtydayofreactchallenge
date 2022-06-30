import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/frontendTehnologies">
              Front-end Tehnologies
            </Link>
          </li>
          <li>
            <Link to="/GenerateNumber">
              Generate Number
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              Portfolio(Class)
            </Link>
          </li>
          <li>
            <Link to="/countriesApi">
              Countries Api
            </Link>
          </li>
          <li>
            <Link to="/quiz">
              Test quiz(Class)
            </Link>
          </li>
          <li>
            <Link to="/eventHandle">
              Event Handle(Change position on Mouse)
            </Link>
          </li>
          <li>
            <Link to="/generateHexDecimalColor">
              Generate Hexdecimal color
            </Link>
          </li>
          <li>
            <Link to="/customForm">
              Login with db(Fucn,Hooks,Redux)
            </Link>
          </li>
          <li>
            <Link to="/twitterClone">
              Twitter clone(Fucn,Hooks,Redux)
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
