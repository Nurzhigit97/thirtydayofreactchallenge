import "./Footer.scss";
const CopyRight = (props) => {
  return (
    <div className="text-center">
        <u>Copyright {props.date.getFullYear()}</u>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="footer">
      <h2 className="text-center">30 Days Of React © 2020</h2>
      <div className="socialMedia">
        <div className="git">
          <a href="https://github.com/Asabeneh">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="twitter">
          <a href="https://twitter.com/">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
        <div className="Linkedin">
          <a href="https://www.linkedin.com/feed/">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <CopyRight date={new Date()} />
    </div>
  );
};

export default Footer;
