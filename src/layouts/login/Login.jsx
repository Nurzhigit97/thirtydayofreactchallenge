import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="signLogin">
        <Link to="/signup" className="signLoginLink">
          Sign Up
        </Link>
        <Link to="/login" className="signLoginLink">
          Login
        </Link>
      </div>
      <form className="auth">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btnSignUp">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
