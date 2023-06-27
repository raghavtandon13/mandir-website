import React from "react";
import Navbar from "../components/navbar";
import LoginBox from "../components/loginbox";
import Footer from "../components/footer";
function Login() {
  return (
    <>
      <Navbar buttonLink="/" buttonLabel="Home" />
      <LoginBox />
      {/* <Footer/> */}
    </>
  );
}
export default Login;
