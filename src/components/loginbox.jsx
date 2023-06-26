import React from "react";
import { Link } from "react-router-dom";
import "./loginbox.css";

function LoginBox() {
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-heading">
          <h1>Sign In</h1>
        </div>
        <div className="login-input">
          <input type="email" name="email" id="email" placeholder="E-mail" />
          <input type="password" name="password" id="password" placeholder="Password"/>
        </div>
        <div className="login-button">
            <button>Submit</button>
            <Link to={"/signup"}>
            <p>Create new accout</p>
            </Link>
        </div>
      </div>
    </div>
  );
}
export default LoginBox;
