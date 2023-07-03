import Navbar from "../components/navbar";
import Profile from "../components/profile";
import Footer from "../components/footer";
import ImgCarousel from "../components/carousel";
import ProfileNav from "../components/profile-nav";
import "./welcomepage.css";

function WelcomePage() {
  return (
    <>
      <Navbar buttonLink="/" buttonLabel="Logout" />
      <div className="wrapper-for-bg">
      <ProfileNav />
      <ImgCarousel />
      <Profile />
      </div>
      <Footer />
    </>
  );
}
export default WelcomePage;
