
import "./location.css";

function Location() {
  function openMap() {
    window.location.href = "https://goo.gl/maps/fZXmNWDNGVykBNh77";
  }
  return (
    <div className="map-background">
      <div onClick={openMap} className="location">
        <h1>Jhandewalan Mandir</h1>
        <h2>
          Jhandewalan Extension, Paharganj,
          <br /> New Delhi, 110055
        </h2>
      </div>
    </div>
  );
}
export default Location;
