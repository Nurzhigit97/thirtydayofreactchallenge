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
          <button className="btnTwitter">Add Post</button>
        </div>
      </div>
      <hr />
      <div className="msgUsers">
        <div className="msgUsersHeader">
          <i class="fas fa-user"></i>
          <h3>Nurzhigit Shaidiev</h3>
          <p>@Nurzhigit</p>
        </div>
        <div className="msgUsersMain">
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            quis quibusdam culpa, quae ut quasi et est perspiciatis in expedita
            optio esse officia porro soluta! Consectetur quis adipisci quasi
            quas?
          </p>
        </div>
        <div className="msgUsersFooter">
          <div className="left">
            <i class="fas fa-edit"></i>
            <i class="fa-solid fa-trash-can"></i>
          </div>
          <div className="center">
            <i class="fa-solid fa-comment"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-arrows-retweet"></i>
          </div>
          <div className="right">
            <p>{Date()}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="msgUsers">
        <div className="msgUsersHeader">
          <i class="fas fa-user"></i>
          <h3>Nurzhigit Shaidiev</h3>
          <p>@Nurzhigit</p>
        </div>
        <div className="msgUsersMain">
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            quis quibusdam culpa, quae ut quasi et est perspiciatis in expedita
            optio esse officia porro soluta! Consectetur quis adipisci quasi
            quas?
          </p>
        </div>
        <div className="msgUsersFooter">
          <div className="left">
            <i class="fas fa-edit"></i>
            <i class="fa-solid fa-trash-can"></i>
          </div>
          <div className="center">
            <i class="fa-solid fa-comment"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-arrows-retweet"></i>
          </div>
          <div className="right">
            <p>{Date()}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="msgUsers">
        <div className="msgUsersHeader">
          <i class="fas fa-user"></i>
          <h3>Nurzhigit Shaidiev</h3>
          <p>@Nurzhigit</p>
        </div>
        <div className="msgUsersMain">
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            quis quibusdam culpa, quae ut quasi et est perspiciatis in expedita
            optio esse officia porro soluta! Consectetur quis adipisci quasi
            quas?
          </p>
        </div>
        <div className="msgUsersFooter">
          <div className="left">
            <i class="fas fa-edit"></i>
            <i class="fa-solid fa-trash-can"></i>
          </div>
          <div className="center">
            <i class="fa-solid fa-comment"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-arrows-retweet"></i>
          </div>
          <div className="right">
            <p>{Date()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterClone;
