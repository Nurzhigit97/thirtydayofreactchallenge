import { useState } from "react";
import "./TwitterClone.scss";
import imgPostedUsers from "../../../assets/postUsers/IMG_20200906_105547.jpg";

const getDateUser = () => {
  let date = new Date();

  let month = [
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

  let monthStr = month[date.getMonth()];
  let day = date.getDay();
  let fullYear = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  return `${monthStr.slice(0, 3)} ${day < 10 ? `0${day}` : day}, ${fullYear} ${
    hour < 10 ? `0${hour}` : hour
  }:${minutes < 10 ? `0${minutes}` : minutes} ${
    hour > 6 && hour < 18 ? "pm" : "am"
  }`;
};
//For Post Msg
const SliceMsg = ({ msg }) => {
  return msg.replace(/\s/g, "").length > 250
    ? `${msg.slice(0, 250)}.....`
    : msg;
};

const ShowMgs = (msg) => {
  let [showMsg, setShowMsg] = useState(false);

  const handleClick = () => {
    setShowMsg((current) => !current);
  };

  return (
    <div>
      {showMsg ? <SliceMsg msg={msg} /> : msg}
      <button onClick={handleClick} className="btn btn-success">
        {!showMsg ? "Hide Msg" : "Show full Msg"}
      </button>
    </div>
  );
};
//For Post Msg
const TwitterClone = () => {
  let lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
  quis quibusdam culpa, quae ut quasi et est perspiciatis in
  expedita optio esse officia porro soluta! Consectetur quis
  adipisci quasi quas?Lorem ipsum, dolor sit amet consectetur
  adipisicing elit. Recusandae voluptatem incidunt doloremque.
  Consectetur, numquam modi vitae nulla rem beatae ullam qui nostrum
  quo? Odio dolore autem minus dolorem porro sit!`;

  return (
    <div className="twitterClone">
      <div className="twiiterClonePadding">
        <div className="twitterCloneBlock">
          <div className="writePost">
            <textarea
              className="text"
              name=""
              id=""
              cols="70"
              rows="5"
              placeholder="Tweet about 30 Day of React..."
            ></textarea>
            <p className="sizePost">250</p>
            <button className="btnTwitter">Add Post</button>
          </div>
        </div>
        <hr />
        <div className="msgUsers">
          <div className="msgUsersHeader">
            <img src={imgPostedUsers} alt="" />
            <h3 className="userName">Nurzhigit Shaidiev</h3>
            <p>@shaidievN</p>
          </div>
          <div className="msgUsersMain">
            <p className="mainMsg p-3">{ShowMgs(lorem)}</p>
          </div>
          <div className="msgUsersFooter">
            <div className="left">
              <i className="fas fa-edit"></i>
              <i className="fa-solid fa-trash-can"></i>
            </div>
            <div className="center">
              <i className="fa-solid fa-comment"></i>
              <i className="fa-solid fa-heart"></i>
              <i className="fa-solid fa-arrows-retweet"></i>
            </div>
            <div className="right">
              <p className="text-dark">{getDateUser()}</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="msgUsers">
          <div className="msgUsersHeader">
            <img src={imgPostedUsers} alt="" />
            <h3 className="userName">Nurzhigit Shaidiev</h3>
            <p>@shaidievN</p>
          </div>
          <div className="msgUsersMain">
            <p className="mainMsg p-3">{ShowMgs(lorem)}</p>
          </div>
          <div className="msgUsersFooter">
            <div className="left">
              <i className="fas fa-edit"></i>
              <i className="fa-solid fa-trash-can"></i>
            </div>
            <div className="center">
              <i className="fa-solid fa-comment"></i>
              <i className="fa-solid fa-heart"></i>
              <i className="fa-solid fa-arrows-retweet"></i>
            </div>
            <div className="right">
              <p className="text-dark">{getDateUser()}</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="msgUsers">
          <div className="msgUsersHeader">
            <img src={imgPostedUsers} alt="" />
            <h3 className="userName">Nurzhigit Shaidiev</h3>
            <p>@shaidievN</p>
          </div>
          <div className="msgUsersMain">
            <p className="mainMsg p-3">{ShowMgs(lorem)}</p>
          </div>
          <div className="msgUsersFooter">
            <div className="left">
              <i className="fas fa-edit"></i>
              <i className="fa-solid fa-trash-can"></i>
            </div>
            <div className="center">
              <i className="fa-solid fa-comment"></i>
              <i className="fa-solid fa-heart"></i>
              <i className="fa-solid fa-arrows-retweet"></i>
            </div>
            <div className="right">
              <p className="text-dark">{getDateUser()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterClone;
