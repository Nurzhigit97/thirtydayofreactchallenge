import { Link } from "react-router-dom";
import "./login.scss";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signUpLogin">
        <Link to="/signUp" className="signLoginLink">
          Sign Up
        </Link>
        <Link to="/login" className="signUpLoginLink">
          Login
        </Link>
      </div>
      <form className="auth">
        <div className="form-group row">
          <div className="col">
            <label htmlFor="exampleInputFirstName1">First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="col">
            <label htmlFor="exampleInputLastName1">Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
        </div>
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
        <div className="form-group">
          <label htmlFor="exampleInputPassword2">Confirm password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Confirm password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">Example file input</label>
          <input
            type="file"
            className="form-control-file"
            id="exampleFormControlFile1"
          />
        </div>
        <button type="submit" className="text-center btnSignUp">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
