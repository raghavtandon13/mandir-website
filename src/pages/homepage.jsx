
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Services from "../components/services";
import Video from "../components/video";
import ContactForm from "../components/conatctform";
import Footer from "../components/footer";
import Location from "../components/location";
import Ticker from "../components/ticker";
function Home() {
  return (
    <>
      <Navbar buttonLink="/login" buttonLabel="Login" />
      <Banner />
      <Ticker />
      <Services />
      <Video />
      <ContactForm />
      <Location />
      <Footer />
    </>
  );
}
export default Home;