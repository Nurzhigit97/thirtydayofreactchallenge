import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [loginData, setloginData] = useState([]);
  const [show, setShow] = useState(false);

  console.log(loginData);
  const history = useNavigate();

  var todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");

    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      //   console.log(user);
      setloginData(user);

      const userbirth = loginData.map((el, k) => {
        return el.date === todayDate;
      });

      if (userbirth) {
        setTimeout(() => {
          console.log("ok");
          handleShow();
        }, 2000);
      }
    }
  };
  const userLogOut = () => {
    localStorage.removeItem("user_login");
    history("/signUp");
  };
  useEffect(() => {
    Birthday();
  }, []);

  return (
    <>
      {loginData.length === 0 ? (
        "error"
      ) : (
        <>
          <h1>Details user</h1>
          <h1>{loginData[0].name}</h1>
          <h1>{loginData[0].date}</h1>

          <Button onClick={userLogOut}>Log out</Button>

          {loginData[0].date === todayDate ? (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <h1>{loginData[0].name}</h1>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>Wish you many happy returns of the day</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default Details;
