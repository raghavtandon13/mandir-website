import React from "react";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Services from "../components/services";
import Video from "../components/video";
import ContactForm from "../components/conatctform";
import Footer from "../components/footer";
import Location from "../components/location";
function Home() {
  return (
    <>
      <Navbar buttonLink="/login" buttonLabel="Login"/>
      <Banner />
      <Services />
      <Video />
      <ContactForm />
      <Location />
      <Footer />
    </>
  );
}
export default Home;
