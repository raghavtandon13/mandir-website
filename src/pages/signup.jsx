import React from "react";
import Navbar from "../components/navbar";
import SignUpBox from "../components/signupbox";

function SignUp() {
  return (
    <>
      <Navbar buttonLink="/" buttonLabel="Home" />
      <SignUpBox />
    </>
  );
}
export default SignUp;
