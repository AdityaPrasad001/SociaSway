import React from "react";
import "./rightbar.scss";
import { user } from "../../assets/helper";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        {/* First item starts */}
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img src={user.imgUrl} alt="user image" />
              <span>{user.name}</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>

          {/* second user */}
          <div className="user">
            <div className="userInfo">
              <img src={user.imgUrl} alt="user image" />
              <span>{user.name}</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        {/* first item ends */}

        {/* second item  starts */}
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={user.imgUrl} alt="user image" />
              <p>
                <span>{user.name}</span> changed his cover picture.
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={user.imgUrl} alt="user image" />
              <p>
                <span>{user.name}</span> changed his cover picture.
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={user.imgUrl} alt="user image" />
              <p>
                <span>{user.name}</span> changed his cover picture.
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={user.imgUrl} alt="user image" />
              <p>
                <span>{user.name}</span> changed his cover picture.
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        {/* second item ends */}

        {/* ONLINE FRIENDS */}
        {/* third item starts */}
        <div className="item">
          <span>Online Friends</span>

          {/* user 1 starts */}
          <div className="user">
            <div className="userInfo">
              <img src={user.imgUrl} alt="user image" />
              <div className="online" />
              <span>{user.name}</span>
            </div>
          </div>
          {/* user 1 ends */}

          {/* user 2 starts */}
          <div className="user">
            <div className="userInfo">
              <img src={user.imgUrl} alt="user image" />
              <div className="online" />
              <span>{user.name}</span>
            </div>
          </div>
          {/* user 2 ends */}

          {/* user 3 starts */}
          <div className="user">
            <div className="userInfo">
              <img src={user.imgUrl} alt="user image" />
              <div className="online" />
              <span>{user.name}</span>
            </div>
          </div>
          {/* user 3 ends */}

          {/* user 4 starts */}
          <div className="user">
            <div className="userInfo">
              <img src={user.imgUrl} alt="user image" />
              <div className="online" />
              <span>{user.name}</span>
            </div>
          </div>
          {/* user 4 ends */}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
