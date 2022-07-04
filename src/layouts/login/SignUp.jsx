import "../login/login.scss";
import { Form, Button } from "react-bootstrap";
import Sign_img from "./Sign_img";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Для автоматического перехода через history на ссылку
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const [inputVal, setinputVal] = useState({
    name: "",
    email: "",
    password: "",
    file: "",
    date: "",
  });
  const history = useNavigate();

  let [data, setData] = useState([]);

  const getData = (e) => {
    const { value, name } = e.target;
    console.log(inputVal);
    setinputVal(() => {
      return {
        ...inputVal,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    const { name, email, password, file, date } = inputVal;
    if (name == "") {
      alert("name failed is required");
    } else if (email == "") {
      alert("email failed is required");
    } else if (!email.includes("@")) {
      alert("email failed isn't have @ required");
    } else if (password == "") {
      alert("password failed is required");
    } else if (password.length < 5) {
      alert("password length greater five");
    } else {
      toast.success("data added successfully", {
        position: "top-center",
      });
    }
    console.log(inputVal);
    localStorage.setItem("form", JSON.stringify([...data, inputVal]));
  };
  return (
    <div className="signup">
      <div className="container mt-3">
        <section className="signupSection">
          <div className="left_data mt-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                <Form.Control
                  onChange={getData}
                  type="text"
                  name="name"
                  placeholder="Enter name"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  onChange={getData}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  onChange={getData}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicFile">
                <Form.Control name="file" onChange={getData} type="file" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicDate">
                <Form.Control name="date" onChange={getData} type="date" />
              </Form.Group>

              <Button
                onClick={addData}
                className="col-lg-6 bg-success"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have an Accaunt{" "}
              <span>
                <Link to="/login">Sign In</Link>
              </span>
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
