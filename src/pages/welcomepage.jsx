import Navbar from "../components/navbar";
import Profile from "../components/profile";
import Footer from "../components/footer";

function WelcomePage() {
  return (
    <>
      <Navbar buttonLink="/" buttonLabel="Logout" />
      <Profile />
      <Footer />
    </>
  );
}
export default WelcomePage;
