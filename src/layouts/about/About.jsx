import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="instruction">
        <h4 className="title">Instruction</h4>
        <p>
          30 Days Of React challenge is a step by step guide to learn React.
          Students will have a chance to learn how React works, work on
          exercises and build different applications. In addition, this
          challenge induce students to write a clean JavaScript code. By the end
          of the challenge, students can claim for certificate. Students will
          develop different complicated applications which can prepare them for
          a Junior Software developer role.In 30 Days of React challenge,
          students will learn:s
        </p>
        <ul className="reactIcon">
          <li>What is React?</li>
          <li>JSX Elements</li>
          <li>Rendering JSX Elements</li>
          <li>Injecting data to JSX elements</li>
          <li>Style and className</li>
          <li>Components</li>
          <li>Props</li>
          <li>Functional Components</li>
          <li>Form</li>
          <li>Component Life Cycle</li>
          <li>React Router</li>
          <li>React Hooks</li>
        </ul>
      </div>
      <div className="react">
        <h4 className="title">React</h4>
        <p>
          React is a JavaScript library for building a reusable user
          interface(UI).
        </p>
      </div>
      <div className="installation">
        <h4 className="title">NECESSARY PACKAGES TO BUILD THIS APPLICATION:</h4>
        <ul className="iconDollar">
          <li>npm install sass</li>
          <li>npm install react-router-dom</li>
          <li>npm i axios</li>
        </ul>
      </div>
      <div className="official website">
        <h4 className="title">
          CHECK OUT THE OFFICIAL WEBSITE TO LEARN MORE ABOUT REACT:
        </h4>
        <p>
          React official website <a href="https://ru.reactjs.org/">React</a>
        </p>
      </div>
      <div className="telegramGroup">
        <h4 className="title">TELEGRAM GROUP</h4>
        <p>
          The telegram group is very active and a very good learning
          environment. Join the telegram group to get help or help others.
          <a href="https://t.me/thirtydaysofreact">Telegram group</a>
        </p>
      </div>
      <div className="installation">
        <h4 className="title">
          THE 30 DAYS OF REACT CHALLENGE REPOSITORY CAN BE FOUND HERE.
        </h4>
        <p>
          Check the repository on
          <a href="https://github.com/Asabeneh/30-Days-Of-React">github</a>
        </p>
      </div>
    </div>
  );
};

export default About;
