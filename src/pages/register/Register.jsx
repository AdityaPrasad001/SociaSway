import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="cart">
        <div className="left">
          <h1>SociaSway</h1>
          <p>
            Claim Your Spot in the Wave. Sign up to unlock a vibrant social
            community where your voice matters. Register now and set sail on a
            journey of meaningful connections. Ride the wave of engagement and
            make a splash in the world of SociaSway.
          </p>
          <span>Do you have a account?</span>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="UserName" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
