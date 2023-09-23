import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="cart">
        <div className="left">
          <h1>Hello SociaSavy.</h1>
          <p>
            Ride the Wave of Connection. Dive into a world of social interaction
            and networking. Join now and let your influence create ripples
            across the digital realm. Connect, share, and shape the
            conversation.
          </p>
          <span>Don't you have a account?</span>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
