import NurImage from "../../../assets/frontendTehnologies/react_logo.a6cd748e.png";
import { Component } from "react";
// Fuction to show month date year

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} />
    <h2>{`${firstName} ${lastName}`}</h2>
  </div>
);

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   // the code inside the constructor run before any other code
  // }
  render() {
    console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <div className="header-wrapper bg-white text-black">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{date}</small>
      </div>
    );
  }
}

// TechList Component
// class base component
class TechList extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { techs } = this.props;
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

// Main Component
// Class Component
class Main extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
          <UserCard user={this.props.user} />
          <Button
            text="Greet People"
            onClick={this.props.greetPeople}
            style={buttonStyles}
          />
          <Button
            text="Show Time"
            onClick={this.props.handleTime}
            style={buttonStyles}
          />
        </div>
      </main>
    );
  }
}

class Portfolio extends Component {
  showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return ` ${month} ${date}, ${year}`;
  };
  handleTime = () => {
    alert(this.showDate(new Date()));
  };
  greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };
  render() {
    const data = {
      welcome: "Welcome to 30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Nurzhigit",
        lastName: "Shaidiev",
      },
      date: "June 25, 2022",
    };
    const techs = ["HTML", "CSS", "JavaScript"];

    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: NurImage };

    return (
      <div className="app">
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
        />
      </div>
    );
  }
}

export default Portfolio;
