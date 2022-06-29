import "./TwitterClone.scss";

const TwitterClone = () => {
  return (
    <div className="twitterClone">
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
        </div>
        <button className="btnTwitter">Add Post</button>
      </div>
    </div>
  );
};

export default TwitterClone;
