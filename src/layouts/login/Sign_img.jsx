import React from "react";
import signImg from "../../assets/sign.svg";

const Sign_img = () => {
  return (
    <div className="signImg right_data mt-5" style={{ width: "100%" }}>
      <div className="sign_img mt-5">
        <img src={signImg} style={{ maxWidth: 480 }} alt="" />
      </div>
    </div>
  );
};

export default Sign_img;
