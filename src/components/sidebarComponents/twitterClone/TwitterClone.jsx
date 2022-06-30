import "./TwitterClone.scss";
import imgPostedUsers from "../../../assets/postUsers/IMG_20200906_105547.jpg";
const TwitterClone = () => {
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
            <p className="mainMsg p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quis quibusdam culpa, quae ut quasi et est perspiciatis in
              expedita optio esse officia porro soluta! Consectetur quis
              adipisci quasi quas?Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Recusandae voluptatem incidunt doloremque.
              Consectetur, numquam modi vitae nulla rem beatae ullam qui nostrum
              quo? Odio dolore autem minus dolorem porro sit!
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
            <img src={imgPostedUsers} alt="" />
            <h3 className="userName">Nurzhigit Shaidiev</h3>
            <p>@shaidievN</p>
          </div>
          <div className="msgUsersMain">
            <p className="mainMsg p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quis quibusdam culpa, quae ut quasi et est perspiciatis in
              expedita optio esse officia porro soluta! Consectetur quis
              adipisci quasi quas?Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Recusandae voluptatem incidunt doloremque.
              Consectetur, numquam modi vitae nulla rem beatae ullam qui nostrum
              quo? Odio dolore autem minus dolorem porro sit!
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
            <img src={imgPostedUsers} alt="" />
            <h3 className="userName">Nurzhigit Shaidiev</h3>
            <p>@shaidievN</p>
          </div>
          <div className="msgUsersMain">
            <p className="mainMsg p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quis quibusdam culpa, quae ut quasi et est perspiciatis in
              expedita optio esse officia porro soluta! Consectetur quis
              adipisci quasi quas?Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Recusandae voluptatem incidunt doloremque.
              Consectetur, numquam modi vitae nulla rem beatae ullam qui nostrum
              quo? Odio dolore autem minus dolorem porro sit!
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
    </div>
  );
};

export default TwitterClone;
