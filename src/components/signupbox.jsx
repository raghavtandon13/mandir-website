import React from "react";
import { Link } from "react-router-dom";
import "./signupbox.css";
import CountryStateSelector from "./Selector";

function SignUpBox() {
  return (
    <div className="signup-page">
      <div className="signup-box">
        <div className="signup-heading">
          <h1>Create an account</h1>
        </div>
        <div className="signup-input">
          <input type="text" name="name" id="name" placeholder="Full Name" />
          <div className="gender-selector">
            <div className="gender-div">
              <h3>Male</h3>
              <input type="radio" id="gender" name="gender" value="male" />
            </div>
            <div className="gender-div">
              <h3>Female</h3>
              <input type="radio" id="gender" name="gender" value="female" />
            </div>
          </div>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Mobile Number"
          />
          <input type="email" name="email" id="email" placeholder="E-mail" />
          <input type="text" name="address" id="email" placeholder="Address" />
          <CountryStateSelector />
          <input type="number" name="pin" id="pin" placeholder="Pincode" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Re-enter Password"
          />
        </div>
        <div className="signup-button">
          <button>Submit</button>
          <button>Reset</button>
          <Link to={"/login"}>
            <p>Already have an account?</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SignUpBox;
