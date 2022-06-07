import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="text-center">30 Days Of React © 2020</h2>
      <div className="socialMedia">
        <div className="git">
          <a href="https://github.com/Asabeneh">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="twitter">
          <a href="https://twitter.com/">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
        <div className="Linkedin">
          <a href="https://www.linkedin.com/feed/">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
