import "./FrontEndTehnologies.scss";
import css from "../../../assets/frontendTehnologies/css_logo.2f227862.png";
import html from "../../../assets/frontendTehnologies/html_logo.454a400c.png";
import js from "../../../assets/frontendTehnologies/js_logo.1f0f3724.png";
import react from "../../../assets/frontendTehnologies/react_logo.a6cd748e.png";

const FrontEndTehnologies = () => {
  return (
    <div className="frontEndTehnologies">
      <h1>Front-End Tehnologies</h1>
      <div className="frontEndTehnologies__list">
        <div className="frontEndTehnologies__item">
          <img src={html} alt="" />
        </div>
        <div className="frontEndTehnologies__item">
          <img src={css} alt="" />
        </div>
        <div className="frontEndTehnologies__item">
          <img src={js} alt="" />
        </div>
        <div className="frontEndTehnologies__item">
          <img src={react} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FrontEndTehnologies;
